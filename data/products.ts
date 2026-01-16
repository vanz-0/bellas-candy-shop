export interface Product {
    id: string;
    name: string;
    subName: string;
    priceKES: string;
    priceRange?: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    category: string;
    brands: string[];
    features: string[];
    stats: { label: string; val: string }[];

    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };

    detailsSection: {
        title: string;
        description: string;
        imageAlt: string;
    };

    freshnessSection: {
        title: string;
        description: string;
    };

    buyNowSection: {
        price: string;
        unit: string;
        packSizes: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };

    pairingIdeas: string[];
    occasions: string[];
}

export const products: Product[] = [
    {
        id: "wafers",
        name: "Premium Wafers",
        subName: "Crispy, creamy perfection.",
        priceKES: "KES 80",
        priceRange: "KES 60 - 120",
        description: "Elite Max, Tourist, Deluso - Crispy layers with smooth cream",
        folderPath: "/images/wafers",
        themeColor: "#FFB74D",
        gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
        category: "Lunch Bars, roll cakes and Wafers",
        brands: ["Elite Max", "Tourist Bubble Wafer", "Deluso", "Deluxo", "Taw Taw Finger"],
        features: ["Crispy wafer layers", "Smooth cream filling", "Perfect with tea or coffee"],
        stats: [
            { label: "Varieties", val: "5+" },
            { label: "Layers", val: "Multi" },
            { label: "Freshness", val: "100%" }
        ],

        section1: {
            title: "Premium Wafers.",
            subtitle: "Crispy meets creamy in every bite."
        },
        section2: {
            title: "Layers of delight.",
            subtitle: "Elite Max chocolate wafers with velvety cream filling that melts in your mouth."
        },
        section3: {
            title: "Perfect companion.",
            subtitle: "The ideal snack with your afternoon tea, morning coffee, or study session."
        },
        section4: {
            title: "Variety for everyone.",
            subtitle: "From chocolate to vanilla, Tourist to Taw Taw - find your favorite crunch."
        },

        detailsSection: {
            title: "The Art of the Wafer",
            description: "Our premium wafer selection brings together the finest brands known for their perfect crisp-to-cream ratio. Elite Max chocolate wafers offer rich cocoa layers, while Tourist Bubble Wafer provides that satisfying honeycomb crunch. Deluso wafers come in beautifully packaged assortments perfect for sharing. Each wafer is crafted with precision to deliver consistent quality and that signature snap when you bite in. Whether you prefer the finger-style Taw Taw or the classic stacked layers, every piece promises a moment of pure indulgence.",
            imageAlt: "Premium Wafers Collection"
        },

        freshnessSection: {
            title: "Imported & Stored with Care",
            description: "We source our wafers from trusted international suppliers and store them in climate-controlled conditions to maintain their signature crispness. Each batch is carefully inspected upon arrival to ensure the wafers haven't been compromised during transit. Our warehouse maintains optimal humidity levels to prevent moisture absorption, guaranteeing that crispy snap from first bite to last. Stock rotates quickly, so you always get products well within their freshness window."
        },

        buyNowSection: {
            price: "KES 60 - 120",
            unit: "per pack (varies by brand)",
            packSizes: ["Single wafers", "Multi-pack boxes", "Family assortment"],
            deliveryPromise: "Next-day delivery in Nairobi. Careful packaging ensures wafers arrive intact and crispy.",
            returnPolicy: "Not satisfied with freshness? We'll replace it immediately, no questions asked."
        },

        pairingIdeas: [
            "Perfect with hot tea or coffee",
            "Great lunch box addition for kids",
            "Ideal office desk snack",
            "Share with friends during movie time"
        ],

        occasions: [
            "Tea time treats",
            "Office snacks",
            "Lunch box fillers",
            "Study session fuel",
            "Movie night munchies"
        ]
    },

    {
        id: "chocolate",
        name: "Chocolate Collection",
        subName: "Rich, smooth indulgence.",
        priceKES: "KES 100",
        priceRange: "KES 80 - 150",
        description: "Toren, Twins, Cocoacoz - Premium chocolate bars and treats",
        folderPath: "/images/chocolate",
        themeColor: "#8D6E63",
        gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",
        category: "Chocolates",
        brands: ["Toren Classic", "Twins Crispy Sandwich", "Cocoacoz Crunchy", "Segal"],
        features: ["Premium cocoa", "Smooth texture", "Multiple varieties"],
        stats: [
            { label: "Cocoa", val: "Rich" },
            { label: "Varieties", val: "6+" },
            { label: "Quality", val: "Premium" }
        ],

        section1: {
            title: "Chocolate Collection.",
            subtitle: "Smooth indulgence in every square."
        },
        section2: {
            title: "Premium cocoa richness.",
            subtitle: "Toren Classic bars deliver deep chocolate flavor with silky-smooth texture."
        },
        section3: {
            title: "Crunchy surprises.",
            subtitle: "Twins crispy sandwich rolls and Cocoacoz balls add delightful texture to rich chocolate."
        },
        section4: {
            title: "Chocolate for every mood.",
            subtitle: "From smooth milk chocolate to crunchy coconut-filled treats."
        },

        detailsSection: {
            title: "The Chocolate Experience",
            description: "Our chocolate collection features carefully selected international brands that balance quality with affordability. Toren Classic compound chocolate bars offer consistent smoothness perfect for both eating and baking. Twins crispy sandwich rolls wrap chocolate around crunchy wafer for textural contrast. Cocoacoz Crunchy balls combine coconut and cocoa in bite-sized spheres that pack flavor in every piece. Segal milk chocolate sticks provide portion-controlled indulgence. Each variety is chosen for its unique contribution to your chocolate cravings, whether you want smooth and melt-in-mouth or crunchy and satisfying.",
            imageAlt: "Chocolate Collection Display"
        },

        freshnessSection: {
            title: "Temperature-Controlled Excellence",
            description: "Chocolate is sensitive to temperature and humidity, which is why we maintain strict storage protocols. Our warehouse stays cool year-round to prevent bloom and melting. Shipments arrive in insulated packaging, and we never stock chocolate during extreme heat spikes unless we can guarantee cold-chain integrity. This means your chocolate arrives with that perfect snap and glossy finish, ready to deliver maximum flavor. We also rotate stock aggressively to ensure you receive products at peak quality, never close to expiration."
        },

        buyNowSection: {
            price: "KES 80 - 150",
            unit: "per pack/bar (varies by product)",
            packSizes: ["Individual bars", "Multi-pack boxes", "Variety assortments"],
            deliveryPromise: "Delivered in insulated packaging within 24 hours across Nairobi. Chocolate stays perfectly tempered.",
            returnPolicy: "Melted or damaged in transit? Instant replacement or full refund."
        },

        pairingIdeas: [
            "Perfect with coffee or hot chocolate",
            "Ideal baking ingredient for cookies and cakes",
            "Great gift for chocolate lovers",
            "Satisfy sweet cravings anytime"
        ],

        occasions: [
            "Afternoon pick-me-up",
            "Romantic gifts",
            "Reward treats for kids",
            "Self-care moments",
            "Party favors and goodie bags"
        ]
    },

    {
        id: "artisan",
        name: "Bella's Artisan",
        subName: "Homemade with love.",
        priceKES: "KES 150",
        priceRange: "KES 100 - 250",
        description: "Roasted cashews, cookies, raspberry treats - Made fresh locally",
        folderPath: "/images/artisan",
        themeColor: "#FFB6C1",
        gradient: "linear-gradient(135deg, #FFB6C1 0%, #FFA500 100%)",
        category: "Biscuits and Cookies",
        brands: ["Bella's Candy Shop Original"],
        features: ["Locally made", "Fresh ingredients", "Custom packaging"],
        stats: [
            { label: "Fresh", val: "Daily" },
            { label: "Local", val: "100%" },
            { label: "Love", val: "∞" }
        ],

        section1: {
            title: "Bella's Artisan.",
            subtitle: "Made with love, locally."
        },
        section2: {
            title: "Roasted perfection.",
            subtitle: "Premium cashews roasted to golden perfection with just the right amount of crunch."
        },
        section3: {
            title: "Homemade cookies.",
            subtitle: "Freshly baked cookies that bring the warmth of grandma's kitchen to every bite."
        },
        section4: {
            title: "Berry delicious.",
            subtitle: "Raspberry-filled treats bursting with real fruit flavor and artisan quality."
        },

        detailsSection: {
            title: "The Artisan Difference",
            description: "Bella's Artisan line represents everything we stand for: local craftsmanship, quality ingredients, and treats made with genuine care. Our roasted cashews are sourced from Kenyan farmers, seasoned with our signature blend, and roasted in small batches to ensure even toasting and maximum flavor. The cookies are baked fresh using real butter, quality flour, and natural flavorings - no shortcuts, no compromises. Our raspberry treats feature real fruit preserves encased in buttery pastry. Each product carries our custom Bella's label featuring our contact (0717835323) and tagline 'Crunch Full of Munch,' symbolizing our commitment to local, traceable, artisan quality.",
            imageAlt: "Bella's Artisan Products"
        },

        freshnessSection: {
            title: "Small Batch, Maximum Fresh",
            description: "Unlike mass-produced snacks, our artisan products are made in small batches throughout the week. This means your cookies might have been baked yesterday, not months ago. We package immediately after cooling to lock in freshness, using clear containers so you can see exactly what you're getting. Our cashews are roasted weekly and packaged in airtight containers to maintain that just-roasted crunch. Raspberry treats are prepared every few days to ensure the pastry stays flaky and the filling stays vibrant. This small-batch approach costs more and requires more labor, but it delivers incomparable freshness and flavor that simply cannot be matched by factory snacks."
        },

        buyNowSection: {
            price: "KES 100 - 250",
            unit: "per container/pack",
            packSizes: ["Small cups", "Medium containers", "Large family packs"],
            deliveryPromise: "Freshly packaged and delivered within 24 hours. Taste the difference of local artisan quality.",
            returnPolicy: "Homemade quality guaranteed. Any issue with freshness gets immediate replacement."
        },

        pairingIdeas: [
            "Cashews perfect for hosting guests",
            "Cookies ideal with milk or tea",
            "Raspberry treats for special occasions",
            "Great gifts for friends and family"
        ],

        occasions: [
            "Afternoon tea parties",
            "Thank you gifts",
            "Holiday gatherings",
            "Self-care treats",
            "Kids' rewards and celebrations"
        ]
    }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
    return products.find(p => p.id === id);
};

// Helper function to get all product IDs
export const getAllProductIds = (): string[] => {
    return products.map(p => p.id);
};
