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

{
    id: "wafers",
        name: "Premium Wafers",
            subName: "Crispy, creamy, tamu sana!",
                priceKES: "KES 80",
                    priceRange: "KES 60 - 120",
                        description: "Elite Max, Tourist, Deluso - The crunch you love.",
                            folderPath: "/images/wafers",
                                themeColor: "#FFB74D",
                                    gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
                                        category: "Wafers & Biscuits",
                                            brands: ["Elite Max", "Tourist Bubble", "Deluso", "Taw Taw"],
                                                features: ["Crispy layers", "Smooth cream", "Perfect for chai"],
                                                    stats: [
                                                        { label: "Types", val: "5+" },
                                                        { label: "Crunch", val: "100%" },
                                                        { label: "Tamu", val: "Sana" }
                                                    ],

                                                        section1: {
        title: "Premium Wafers.",
            subtitle: "Crispy layers, tamu feeling."
    },
    section2: {
        title: "Layers of joy.",
            subtitle: "Elite Max and Tourist wafers - perfect crunch every time."
    },
    section3: {
        title: "Tea time bestie.",
            subtitle: "The best companion for your chai or coffee breaks."
    },
    section4: {
        title: "Something for everyone.",
            subtitle: "Chocolate, vanilla, strawberry - chagua yako!"
    },

    detailsSection: {
        title: "The Wafer Experience",
            description: "We bring you the crispest, most flavor-packed wafers in Nairobi. Whether it's the honeycomb crunch of Tourist Bubble or the rich layers of Elite Max, these are snacks that hit the spot. Perfect for sharing with the squad or enjoying with your evening tea. Karibu ujionee utamu!",
                imageAlt: "Premium Wafers Collection"
    },

    freshnessSection: {
        title: "Crispy & Fresh",
            description: "No stale biscuits here! We keep our stock moving so you always get that satisfying 'snap'. Stored cool and dry to maintain maximum crunchiness. Kula kwa raha!"
    },

    buyNowSection: {
        price: "KES 60 - 120",
            unit: "per pack",
                packSizes: ["Single pack", "Family pack", "Box"],
                    deliveryPromise: "Chap chap delivery within Nairobi. Freshness guaranteed.",
                        returnPolicy: "Not crispy? Tutarudishia pesa or replace it."
    },

    pairingIdeas: [
        "Best with hot chai",
        "Lunch box favorite",
        "Office desk snack",
        "Share with mabeste"
    ],

        occasions: [
            "Tea time",
            "Saa ya movie",
            "Kids' snacks",
            "Office cravings",
            "Road trip bites"
        ]
},

{
    id: "chocolate",
        name: "Chocolate Collection",
            subName: "Smooth, rich, and poa.",
                priceKES: "KES 100",
                    priceRange: "KES 80 - 150",
                        description: "Toren, Twins, Cocoacoz - Real chocolate vibes.",
                            folderPath: "/images/chocolate",
                                themeColor: "#8D6E63",
                                    gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",
                                        category: "Chocolates",
                                            brands: ["Toren Classic", "Twins", "Cocoacoz", "Segal"],
                                                features: ["Rich cocoa", "Smooth taste", "Variety"],
                                                    stats: [
                                                        { label: "Cocoa", val: "Rich" },
                                                        { label: "Types", val: "6+" },
                                                        { label: "Vibe", val: "Poa" }
                                                    ],

                                                        section1: {
        title: "Chocolate Collection.",
            subtitle: "Indulge in the sweetness."
    },
    section2: {
        title: "Pure chocolate love.",
            subtitle: "Toren Classic bars melt in your mouth smoothly."
    },
    section3: {
        title: "Crunch & Munch.",
            subtitle: "Cocoacoz and Twins for that extra texture."
    },
    section4: {
        title: "For every mood.",
            subtitle: "Dark, milk, or coconut infused - we got you."
    },

    detailsSection: {
        title: "Chocolate Heaven",
            description: "Get your fix of quality chocolates without breaking the bank. From the smooth melt of Toren Classic to the crunchy delight of Cocoacoz, we have the sweet treats you crave. Perfect for gifts or just kujibamba. Quality chocolate, affordable price.",
                imageAlt: "Chocolate Collection Display"
    },

    freshnessSection: {
        title: "Kept Cool & Sweet",
            description: "Chocolate hates heat, so we keep ours cool. No melted mess here, just perfect bars ready to snap. We handle with care so it reaches you in 10/10 condition."
    },

    buyNowSection: {
        price: "KES 80 - 150",
            unit: "per bar/pack",
                packSizes: ["Single bar", "Box of 12", "Assorted"],
                    deliveryPromise: "Delivered cool and intact. No melting drama.",
                        returnPolicy: "Melted? We replace it instantly. No stress."
    },

    pairingIdeas: [
        "Coffee partner",
        "Baking magic",
        "Gift for her/him",
        "Stress reliever"
    ],

        occasions: [
            "Date night gift",
            "Kids' treat",
            "Self-care Sunday",
            "Birthday favors",
            "Just because"
        ]
},

{
    id: "artisan",
        name: "Bella's Artisan",
            subName: "Homemade with love.",
                priceKES: "KES 150",
                    priceRange: "KES 100 - 250",
                        description: "Cashews, cookies, treats - Made local, tastes global.",
                            folderPath: "/images/artisan",
                                themeColor: "#FFB6C1",
                                    gradient: "linear-gradient(135deg, #FFB6C1 0%, #FFA500 100%)",
                                        category: "Homemade Treats",
                                            brands: ["Bella's Original"],
                                                features: ["Kenyan made", "Fresh daily", "Custom packs"],
                                                    stats: [
                                                        { label: "Fresh", val: "Daily" },
                                                        { label: "Local", val: "100%" },
                                                        { label: "Mapenzi", val: "Tele" }
                                                    ],

                                                        section1: {
        title: "Bella's Artisan.",
            subtitle: "Made right here, with heart."
    },
    section2: {
        title: "Roasted goodness.",
            subtitle: "Cashews roasted fresh - crunchy, salty, perfect."
    },
    section3: {
        title: "Cookies like home.",
            subtitle: "Baked fresh just like mum used to make."
    },
    section4: {
        title: "Sweet berries.",
            subtitle: "Raspberry treats bursting with flavor."
    },

    detailsSection: {
        title: "The Artisan Touch",
            description: "Support local with Bella's Artisan line. We roast our cashews right here in Nairobi, bake cookies with real butter, and craft treats with genuine care. 'Crunch Full of Munch' is our promise. Call us on 0717835323 for custom orders. Fresh, delicious, and proudly Kenyan.",
                imageAlt: "Bella's Artisan Products"
    },

    freshnessSection: {
        title: "Small Batch Freshness",
            description: "We don't do mass production. We make small batches weekly so everything is super fresh. Cashews roasted this week, cookies baked yesterday. You can taste the difference immediately. Hii ni legit!"
    },

    buyNowSection: {
        price: "KES 100 - 250",
            unit: "per pack",
                packSizes: ["Small cup", "Medium tub", "Large jar"],
                    deliveryPromise: "Delivered fresh. You'll smell the bakery!",
                        returnPolicy: "Not fresh? We fix it. Customer happiness is key."
    },

    pairingIdeas: [
        "Wine & Cashews",
        "Milk & Cookies",
        "Party platter",
        "Gift hamper"
    ],

        occasions: [
            "Visitors at home",
            "Office snack stash",
            "Weekend plot",
            "Thank you gift",
            "Chama meetings"
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
