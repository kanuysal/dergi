<?php
// PHP Sürümünü Gizle ve Hataları JSON Bozmaması İçin Kapat
error_reporting(0);
ini_set('display_errors', 0);

// CORS Ayarları (Geniş İzin)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Eğer OPTIONS isteği ise (Preflight) durdur
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// --- AYARLAR ---
// --- SECURE CONFIGURATION ---
// 1. Credentials (Protected by .htaccess)
require_once '_secret/keys.php'; 

// 2. Security: Referer/Origin Check (Optional but Recommended)
// Sadece kendi domainimizden gelen isteklere cevap ver.
if (isset($_SERVER['HTTP_REFERER'])) {
    $referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);
    // Allowed domains: .com, .shop, .me, localhost
    if ($referer && $referer !== 'minalidya.com' && $referer !== 'minalidya.shop' && $referer !== 'minalidya.me' && $referer !== 'localhost' && $referer !== '127.0.0.1') {
         // Istege bagli: echo json_encode(["error" => "Unauthorized Origin"]); exit;
    }
}

// Parametre Kontrolü
if (!isset($_GET['type'])) {
    echo json_encode(["error" => "Eksik parametre: type"]);
    exit;
}

$type = $_GET['type'];
$request_url = "";

if ($type == 'categories') {
    $request_url = $site_url . "/wp-json/wc/v3/products/categories?per_page=50&hide_empty=true&parent=0";
} elseif ($type == 'products') {
    $request_url = $site_url . "/wp-json/wc/v3/products?per_page=100&status=publish";
} else {
    echo json_encode(["error" => "Gecersiz istek tipi: " . htmlspecialchars($type)]);
    exit;
}

// Pagination Loop for "products"
if ($type == 'products') {
    $all_products = [];
    $page = 1;
    
    do {
        // Build URL with page param
        $paged_url = $request_url . "&page=" . $page;
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $paged_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_USERPWD, $ck . ":" . $cs);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Increased timeout
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
        
        $result = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($http_code >= 400) break; // Error stop

        $data = json_decode($result, true);
        if (!is_array($data) || empty($data)) break; // Empty stop

        // Check for error object inside JSON
        if (isset($data['code']) && isset($data['message'])) break;

        $all_products = array_merge($all_products, $data);
        $page++;
        
        // Safety Break (Max 500 products / 5 pages to command timeout)
        if ($page > 5) break; 

    } while (count($data) >= 100); // WC default limit is usually 100, if full, there might be more

    echo json_encode($all_products);

} else {
    // Single call for categories or others
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $request_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERPWD, $ck . ":" . $cs);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
    
    $result = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code >= 400) {
        echo json_encode(["error" => "API Hatasi", "code" => $http_code]);
    } else {
        echo $result;
    }
}
?>
