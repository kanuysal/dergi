window.STATIC_DATA = {
    categories: [
        { id: 1, name: { en: "BRIDAL COLLECTION", tr: "GELİNLİK KOLEKSİYONU" }, count: 5 },
        { id: 2, name: { en: "HENNA NIGHT", tr: "KINA GECESİ" }, count: 3 },
        { id: 3, name: { en: "EVENING WEAR", tr: "ABİYE & GECE" }, count: 4 },
        { id: 4, name: { en: "ACCESSORIES", tr: "AKSESUARLAR" }, count: 2 }
    ],
    products: [
        {
            id: 101,
            title: { en: "Ethereal White", tr: "Büyülü Beyaz", es: "Blanco Etéreo", fr: "Blanc Éthéré", de: "Ätherisches Weiß", nl: "Etherisch Wit" },
            gallery: ["images/category-bridal.webp", "images/main-hero-1-1.webp"],
            desc: {
                en: "A stunning piece from our latest bridal collection, featuring hand-stitched lace and distinct elegance.",
                tr: "En yeni gelinlik koleksiyonumuzdan, el işi dantel ve belirgin zarafet içeren çarpıcı bir parça."
            },
            attributes: {
                "Material": { en: "Silk", tr: "İpek" },
                "Size": { en: "36-42", tr: "36-42" },
                "Collection": { en: "Spring 2024", tr: "İlkbahar 2024" }
            },
            category_ids: [1],
            is_tesettur: false,
            permalink: "#"
        },
        {
            id: 102,
            title: { en: "Midnight Dream", tr: "Gece Rüyası", es: "Sueño de Medianoche" },
            gallery: ["images/category-after.webp", "images/main-hero-2-1.webp"],
            desc: {
                en: "Perfect for the after-party, this dress combines comfort with high fashion chic.",
                tr: "After-party için mükemmel olan bu elbise, konforu yüksek moda şıklığıyla birleştiriyor."
            },
            attributes: {
                "Material": { en: "Satin", tr: "Saten" },
                "Color": { en: "Midnight Blue", tr: "Gece Mavisi" }
            },
            category_ids: [3],
            is_tesettur: false,
            permalink: "#"
        },
        {
            id: 103,
            title: { en: "Scarlet Engagement", tr: "Kızıl Nişan" },
            gallery: ["images/category-engagement.webp", "images/main-hero-3-1.webp"],
            desc: {
                en: "Bold red tones for a traditional yet modern engagement ceremony.",
                tr: "Geleneksel ama modern bir nişan töreni için cesur kırmızı tonları."
            },
            attributes: {
                "Style": { en: "Engagement", tr: "Nişan" },
                "Decor": { en: "Beaded", tr: "Boncuklu" }
            },
            category_ids: [2],
            is_tesettur: true,
            permalink: "#"
        },
        {
            id: 104,
            title: { en: "Modest Grace", tr: "Zarif Tesettür" },
            gallery: ["images/category-modest.webp", "images/main-hero-4-1.webp"],
            desc: {
                en: "Elegant and modest, designed for sophisticated coverage without compromising style.",
                tr: "Şıklıktan ödün vermeden sofistike bir örtünme için tasarlanmış zarif ve ölçülü."
            },
            attributes: {
                "Type": { en: "Modest", tr: "Tesettür" },
                "Veil": { en: "Included", tr: "Dahil" }
            },
            category_ids: [1],
            is_tesettur: true,
            permalink: "#"
        },
        {
            id: 105,
            title: { en: "Vogue Bride", tr: "Vogue Gelin" },
            gallery: ["images/main-hero-bg1.webp", "images/main-hero-1-2.webp"],
            desc: {
                en: "Cinematic bridal wear for the modern woman.",
                tr: "Modern kadın için sinematik gelinlikler."
            },
            attributes: { "Inspiration": { en: "Vogue", tr: "Vogue" } },
            category_ids: [1],
            is_tesettur: false,
            permalink: "#"
        },
        {
            id: 106,
            title: { en: "Royal Henna", tr: "Kraliyet Kınası" },
            gallery: ["images/main-hero-bg2.webp", "images/craft.webp"],
            desc: {
                en: "Traditional craftsmanship meets royal aesthetics.",
                tr: "Geleneksel işçilik kraliyet estetiğiyle buluşuyor."
            },
            attributes: { "Event": { en: "Henna", tr: "Kına" } },
            category_ids: [2],
            is_tesettur: true,
            permalink: "#"
        },
        {
            id: 107,
            title: { en: "Golden Hour", tr: "Altın Saat" },
            gallery: ["images/main-hero-bg3.webp", "images/category-bridal.webp"],
            desc: {
                en: "Shine bright like the sunset.",
                tr: "Gün batımı gibi parlayın."
            },
            attributes: { "Color": { en: "Gold", tr: "Altın" } },
            category_ids: [3],
            is_tesettur: false,
            permalink: "#"
        },
        {
            id: 108,
            title: { en: "Silver Lining", tr: "Gümüş Çizgi" },
            gallery: ["images/main-hero-bg4.webp", "images/category-after.webp"],
            desc: {
                en: "Silver accents for a futuristic look.",
                tr: "Fütüristik bir görünüm için gümüş detaylar."
            },
            attributes: { "Color": { en: "Silver", tr: "Gümüş" } },
            category_ids: [3],
            is_tesettur: false,
            permalink: "#"
        }
    ]
};
