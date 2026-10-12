export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    items: [
      { id: 1, name: "Espresso", description: "A rich, concentrated shot.", price: 450, image: "/espresso.png", imageAlt: "A freshly pulled espresso" },
      { id: 2, name: "Double Espresso", description: "A fuller, deeper espresso double shot.", price: 550, image: "/espresso.png", imageAlt: "A freshly pulled espresso" },
      { id: 3, name: "Americano", description: "Espresso softened with hot water.", price: 550, image: "/Americano.png", imageAlt: "A cup of black coffee" },
      { id: 4, name: "Cappuccino", description: "Velvety foam and mellow espresso.", price: 650, image: "/cappuccino.png", imageAlt: "A cappuccino finished with latte art" },
      { id: 5, name: "Café Latte", description: "A creamy classic made to linger.", price: 700, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 6, name: "Flat White", description: "Silky texture with a smooth espresso finish.", price: 700, image: "/flatwhite.png", imageAlt: "A flat white with delicate latte art" },
      { id: 7, name: "Mocha", description: "Chocolate, espresso, and comforting warmth.", price: 750, image: "/coffee2.png", imageAlt: "Coffee with latte art" },
      { id: 8, name: "Macchiato", description: "A bold espresso with a touch of foam.", price: 500, image: "/espresso.png", imageAlt: "A freshly pulled espresso" },
      { id: 9, name: "Cortado", description: "A short, balanced espresso drink.", price: 600, image: "/coffee2.png", imageAlt: "Coffee served in a ceramic cup" },
      { id: 10, name: "Cold Brew", description: "Slow-steeped and gently sweet.", price: 680, image: "/coffee3.png", imageAlt: "Coffee splash with roasted coffee beans" },
      { id: 11, name: "Iced Americano", description: "Crisp and refreshing with ice.", price: 600, image: "/Americano.png", imageAlt: "A cup of black coffee" },
      { id: 12, name: "Iced Latte", description: "Cool, creamy, and balanced.", price: 720, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 13, name: "Iced Mocha", description: "Coffee, cocoa, and a chill finish.", price: 770, image: "/coffee2.png", imageAlt: "Coffee with latte art" },
      { id: 14, name: "Affogato", description: "Espresso poured over vanilla ice cream.", price: 780, image: "/espresso.png", imageAlt: "A freshly pulled espresso" },
    ],
  },
  {
    id: "signature-drinks",
    title: "Signature Drinks",
    items: [
      { id: 15, name: "Caramel Latte", description: "Buttery caramel folded into a smooth latte.", price: 780, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 16, name: "Vanilla Latte", description: "Soft vanilla warmth with a mellow finish.", price: 780, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 17, name: "Hazelnut Latte", description: "Nutty sweetness with a silky body.", price: 790, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 18, name: "Brown Sugar Latte", description: "Deep, caramel notes with a gentle sweetness.", price: 790, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 19, name: "Honey Cinnamon Latte", description: "Comforting warmth and a fragrant finish.", price: 800, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 20, name: "Spanish Latte", description: "A sweet, creamy café classic.", price: 790, image: "/latte.png", imageAlt: "A latte served in a ceramic cup" },
      { id: 21, name: "Chocolate Mocha", description: "Rich cocoa and espresso in every sip.", price: 820, image: "/coffee2.png", imageAlt: "Coffee with latte art" },
      { id: 22, name: "Caramel Mocha", description: "A decadent blend of chocolate and caramel.", price: 830, image: "/coffee2.png", imageAlt: "Coffee with latte art" },
    ],
  },
  {
    id: "tea-other",
    title: "Tea & Other",
    items: [
      { id: 23, name: "English Breakfast Tea", description: "Warm, bold, and comforting.", price: 420, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
      { id: 24, name: "Green Tea", description: "Light and refreshing with a clean finish.", price: 420, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
      { id: 25, name: "Chai Latte", description: "Spiced and fragrant with a smooth finish.", price: 660, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
      { id: 26, name: "Matcha Latte", description: "Earthy, creamy, and naturally vibrant.", price: 700, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
      { id: 27, name: "Hot Chocolate", description: "Rich, comforting, and mellow.", price: 620, image: "/coffee2.png", imageAlt: "Coffee with latte art" },
      { id: 28, name: "Iced Tea", description: "Fresh and bright over ice.", price: 480, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
      { id: 29, name: "Lemon Tea", description: "Light citrus notes for a fresh moment.", price: 460, image: "/coffee1.png", imageAlt: "Coffee beans and spices arranged beside a cup" },
    ],
  },
  {
    id: "bakery-bites",
    title: "Bakery & Bites",
    items: [
      { id: 30, name: "Butter Croissant", description: "Flaky layers with a golden finish.", price: 420, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 31, name: "Chocolate Croissant", description: "Buttery pastry with a soft chocolate centre.", price: 470, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 32, name: "Cinnamon Roll", description: "Warm, sweet, and softly spiced.", price: 480, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 33, name: "Blueberry Muffin", description: "Tender crumb with a bright berry finish.", price: 430, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 34, name: "Chocolate Muffin", description: "Deep cocoa flavour in a fluffy bite.", price: 440, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 35, name: "Banana Bread", description: "Comforting and naturally sweet.", price: 430, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 36, name: "Brownie", description: "A rich, chocolatey treat.", price: 450, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 37, name: "Cheesecake", description: "Smooth and indulgent.", price: 500, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 38, name: "Cookies", description: "Crisp, buttery, and delightfully simple.", price: 390, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
      { id: 39, name: "Toast", description: "Simple and satisfying alongside a coffee.", price: 350, image: "/bg1.png", imageAlt: "Coffee splash and coffee beans" },
    ],
  },
];

export const featuredDrinkNames = [
  "Cappuccino",
  "Café Latte",
  "Flat White",
  "Americano",
] as const;

export const formatMenuPrice = (price: number) =>
  `Rs. ${new Intl.NumberFormat("en-LK", {
    maximumFractionDigits: 0,
  }).format(price)}`;
