# Haven Brew ☕

A modern, responsive coffee shop website built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**. Haven Brew showcases signature coffee drinks, a categorized menu, and a smooth demo shopping experience.

## ✨ Features

- **Homepage** – Hero section, signature drinks, about section, visit information, FAQ, and menu call-to-action.
- **Product Menu** – Browse coffee, signature drinks, tea, and bakery items with descriptions, images, and prices.
- **Responsive Design** – Optimized layouts for desktop, tablet, and mobile devices.
- **Shopping Cart** – Add products, update quantities, remove items, and view the order subtotal.
- **Demo Checkout** – Enter customer and delivery details and submit a demo order without online payment.
- **Order Confirmation** – View customer details, ordered products, quantities, and the order total.
- **Reusable Components** – Shared components for navigation, footer, product sections, and other homepage sections.
- **Scroll Animations** – AOS animations for a smoother browsing experience.
- **TypeScript** – Type-safe code for better maintainability.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion and AOS
- **Icons:** Lucide React (where used)
- **Image Optimization:** Next.js Image component
- **Deployment:** Vercel

## 📁 Project Structure

```text
havenbrew/
├── app/
│   ├── cart/
│   ├── checkout/
│   ├── order-confirmation/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── Components/
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Product.tsx
│   └── VisitUs.tsx
├── context/
│   └── CartContext.tsx
├── lib/
│   └── menu.ts
├── public/
├── package.json
└── README.md
```

*Note: The structure above highlights the main project files. Your local project may contain additional files and folders.*

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IT21223808/Haven-Brew.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Haven-Brew/havenbrew
   ```

   If your cloned repository already contains the Next.js application at its root, use `cd Haven-Brew` instead.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛒 Demo Checkout

Haven Brew includes a demonstration checkout flow.

1. Browse the menu and add products to your cart.
2. Review the cart and proceed to checkout.
3. Enter your customer and delivery details.
4. Place a demo order to view the order confirmation.
5. Select **Continue Shopping** to return to the products page.

**Important:** The checkout is for demonstration purposes only. It does not process online payments or create a real order with a backend service. The current order details are stored in the browser session.

## 🎨 Customization

- Update product names, descriptions, prices, and image paths in `lib/menu.ts`.
- Modify the homepage sections in the `Components/` directory.
- Update shared styles and responsive layouts using Tailwind CSS.
- Add or replace product images in the `public/` directory, ensuring that the paths match the filenames.

## 🌐 Deployment

The project can be deployed on [Vercel](https://vercel.com/).

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the correct Next.js application root directory if required.
4. Deploy the application.
5. Verify the homepage, products, cart, checkout, and order confirmation on the deployed website.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://motion.dev/)

## 👩‍💻 Author

**Jathursika Linganathan**

GitHub: [IT21223808](https://github.com/IT21223808)

---

*Haven Brew — Your next favourite cup is waiting.*