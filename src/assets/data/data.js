export const menulists = [
  {
    id: 1,
    path: "/",
    link: "Home",
  },
  {
    id: 2,
    path: "/shop",
    link: "Shop",
  },
  {
    id: 3,
    path: "/about",
    link: "About",
  },
  {
    id: 4,
    path: "/contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    name: "Furniture",
    slug: "furniture",
    subcategories: ["Chairs", "Tables", "Cabinets", "Beds", "Sofas"],
  },
  {
    id: 2,
    name: "Decor",
    slug: "decor",
    subcategories: ["Vases", "Wall Art", "Mirrors", "Lighting", "Rugs"],
  },
  {
    id: 3,
    name: "Kitchen",
    slug: "kitchen",
    subcategories: ["Cutlery", "Plates", "Glasses", "Cookware", "Utensils"],
  },
  {
    id: 4,
    name: "Bathroom",
    slug: "bathroom",
    subcategories: ["Towel Racks", "Toothbrush Holders", "Soap Dishes", "Baskets"],
  },
];

export const herolist = [
  {
    id: 1,
    title: "Natural Wooden Furniture",
    description:
      "Discover our exclusive collection of solid wood furniture, where artisanal tradition meets contemporary design.",
    image: "../images/hero/h1.png",
    price: [
      {
        color: "Oak",
        value: 1359.90,
      },
      {
        color: "Pine",
        value: 1185.90,
      },
      {
        color: "Cedar",
        value: 1559.90,
      },
    ],
    color: [
      { value: "Oak", hex: "#8B4513" },
      { value: "Pine", hex: "#DEB887" },
      { value: "Cedar", hex: "#A0522D" },
    ],
  },
  {
    id: 2,
    title: "Sustainable Decor",
    description:
      "Unique pieces made with certified wood and eco-friendly materials, bringing beauty and environmental consciousness to your home.",
    image: "../images/hero/h2.png",
    price: [
      {
        color: "Natural",
        value: 899.90,
      },
      {
        color: "Aged",
        value: 959.90,
      },
      {
        color: "Rustic",
        value: 929.90,
      },
    ],
    color: [
      { value: "Natural", hex: "#D2B48C" },
      { value: "Aged", hex: "#8B7355" },
      { value: "Rustic", hex: "#6B4423" },
    ],
  },
];

export const productlists = [
  {
    id: 1,
    title: "Classic Wooden Armchair",
    description:
      "An elegant and comfortable armchair, crafted from solid wood with premium finishing and high-quality fabric upholstery.",
    longDescription: `
      Enjoy the comfort and elegance of this handcrafted armchair, where every detail has been carefully considered.
      The solid wood structure ensures exceptional durability, while the ergonomic upholstery
      provides maximum comfort. Perfect for living rooms, offices, or bedrooms.
    `,
    images: [
      { image: "../images/product/product1.png" },
      { image: "../images/product/product1.3.png" },
      { image: "../images/product/product1.2.png" },
    ],
    category: "Furniture",
    subcategory: "Chairs",
    discount: 10,
    rating: 4.5,
    reviews: 128,
    featured: true,
    inStock: true,
    specifications: {
      dimensions: {
        height: "85cm",
        width: "75cm",
        depth: "80cm",
      },
      weight: "15kg",
      material: "Solid oak wood",
      finish: "Natural matte varnish",
      upholstery: "100% cotton fabric",
      warranty: "5 years",
    },
    price: [
      { color: "Oak", value: 2499.90, hex: "#8B4513" },
      { color: "Mahogany", value: 2699.90, hex: "#800000" },
      { color: "Walnut", value: 2599.90, hex: "#8B7355" },
    ],
    color: [
      { value: "Oak", hex: "#8B4513" },
      { value: "Mahogany", hex: "#800000" },
      { value: "Walnut", hex: "#8B7355" },
    ],
    tags: ["armchair", "solid wood", "furniture", "living room", "decor"],
  },
  {
    id: 2,
    title: "Artisanal Wooden Bowl",
    description:
      "Hand-carved artisanal bowl made from premium wood, perfect for serving salads or as a decorative piece.",
    longDescription: `
      This artisanal bowl is a true work of art, hand-carved by master craftsmen.
      Each piece is unique, with natural wood patterns that make it special.
      Ideal for serving salads, fruits, or as a decorative centerpiece.
    `,
    images: [
      { image: "../images/product/product2.png" },
      { image: "../images/product/product1.3.png" },
      { image: "../images/product/product1.2.png" },
    ],
    category: "Kitchen",
    subcategory: "Utensils",
    discount: 15,
    rating: 4.8,
    reviews: 89,
    featured: true,
    inStock: true,
    specifications: {
      dimensions: {
        diameter: "25cm",
        height: "12cm",
      },
      weight: "0.8kg",
      material: "Solid teak",
      finish: "Natural mineral oil",
      capacity: "2 liters",
      warranty: "2 years",
    },
    price: [
      { color: "Natural Teak", value: 299.90, hex: "#D2691E" },
      { color: "Dark Teak", value: 319.90, hex: "#8B4513" },
      { color: "Bamboo", value: 279.90, hex: "#DEB887" },
    ],
    color: [
      { value: "Natural Teak", hex: "#D2691E" },
      { value: "Dark Teak", hex: "#8B4513" },
      { value: "Bamboo", hex: "#DEB887" },
    ],
    tags: ["bowl", "wood", "kitchen", "decor", "artisanal"],
  },
  {
    id: 3,
    title: "Wooden Glass",
    description:
      "A handcrafted and sophisticated wooden glass, ideal for drinks with a unique rustic touch.",
    images: [
      { image: "../images/product/product3.png" },
      { image: "../images/product/product1.2.png" },
      { image: "../images/product/product1.1.png" },
    ],
    discount: 12,
    rating: 4.5,
    featured: true,
    price: [
      { color: "clear", value: 29.99 },
      { color: "brown", value: 35.5 },
      { color: "green", value: 27.75 },
    ],
    color: [{ value: "clear" }, { value: "brown" }, { value: "green" }],
  },
  {
    id: 4,
    title: "Wooden Cup",
    description:
      "A compact and versatile wooden cup for hot or cold beverages with timeless charm.",
    images: [
      { image: "../images/product/product4.png" },
      { image: "../images/product/product1.1.png" },
      { image: "../images/product/product1.2.png" },
    ], discount: 18,
    rating: 4.8,
    featured: false,
    price: [
      { color: "natural", value: 19.99 },
      { color: "dark brown", value: 22.5 },
      { color: "light brown", value: 17.75 },
    ],
    color: [
      { value: "natural" },
      { value: "dark brown" },
      { value: "light brown" },
    ],
  },
  {
    id: 5,
    title: "Wooden Coffee Mug",
    description:
      "The perfect wooden mug for coffee, tea, or chocolate with an elegant rustic design.",
    images: [
      { image: "../images/product/product5.png" },
      { image: "../images/product/product1.3.png" },
      { image: "../images/product/product1.2.png" },
    ], discount: 15,
    rating: 4.0,
    featured: false,
    price: [
      { color: "dark", value: 14.99 },
      { color: "light", value: 18.5 },
      { color: "white", value: 12.75 },
    ],
    color: [{ value: "dark" }, { value: "light" }, { value: "white" }],
  },
  {
    id: 6,
    title: "Wooden Brush",
    description:
      "A practical, durable, and sustainable wooden brush for everyday use with comfort.",
    images: [
      { image: "../images/product/product6.png" },
      { image: "../images/product/product1.2.png" },
      { image: "../images/product/product1.1.png" },
    ], discount: 20,
    rating: 4.2,
    featured: true,
    price: [
      { color: "natural", value: 9.99 },
      { color: "brown", value: 12.5 },
      { color: "black", value: 8.75 },
    ],
    color: [{ value: "natural" }, { value: "brown" }, { value: "black" }],
  },
  {
    id: 7,
    title: "Wooden Bottles",
    description:
      "An eco-friendly and reusable wooden bottle, ideal for storing beverages with style.",
    images: [
      { image: "../images/product/product7.png" },
      { image: "../images/product/product1.3.png" },
      { image: "../images/product/product1.1.png" },
    ], discount: 15,
    rating: 3.5,
    featured: false,
    price: [
      { color: "blue", value: 24.99 },
      { color: "green", value: 29.5 },
      { color: "brown", value: 22.75 },
    ],
    color: [{ value: "blue" }, { value: "green" }, { value: "brown" }],
  },
  {
    id: 8,
    title: "Luxury Armchair",
    description:
      "A sophisticated, ergonomic, and modern luxury armchair, perfect for a touch of elegance.",
    images: [{ image: "../images/product/product8.png" },
    { image: "../images/product/product1.2.png" },
    { image: "../images/product/product1.3.png" },
    ],
    discount: 25,
    rating: 4.8,
    featured: true,
    price: [
      { color: "black", value: 799.99 },
      { color: "gray", value: 849.5 },
      { color: "beige", value: 780.75 },
    ],
    color: [{ value: "black" }, { value: "gray" }, { value: "beige" }],
  },
];

export const promotionalInfo = [
  {
    id: 1,
    title: "Free Shipping on Orders Over $59",
    description: "We deliver nationwide. Buy now and receive your unique wooden piece with all the care it deserves.",
    image: "../images/promotional/prom1.png",
  },
  {
    id: 2,
    title: "5-Year Warranty",
    description: "All our products come with a warranty against manufacturing defects. Your satisfaction is our priority.",
    image: "../images/promotional/prom2.png",
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "Pay securely using credit card, debit card, or PayPal. Your purchase is protected.",
    image: "../images/promotional/prom3.png",
  },
  {
    id: 4,
    title: "Premium Support",
    description: "Expert support to help you choose the perfect product for your home.",
    image: "../images/promotional/prom4.png",
  },
];

export const filters = {
  priceRanges: [
    { id: 1, label: "Up to $100", min: 0, max: 100 },
    { id: 2, label: "$100 - $500", min: 100, max: 500 },
    { id: 3, label: "$500 - $1000", min: 500, max: 1000 },
    { id: 4, label: "$1000 - $2000", min: 1000, max: 2000 },
    { id: 5, label: "Over $2000", min: 2000, max: null },
  ],
  ratings: [
    { value: 5, label: "5 stars" },
    { value: 4, label: "4 stars & up" },
    { value: 3, label: "3 stars & up" },
    { value: 2, label: "2 stars & up" },
    { value: 1, label: "1 star & up" },
  ],
  sortOptions: [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "rating", label: "Best Rated" },
  ],
};