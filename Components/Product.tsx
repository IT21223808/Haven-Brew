import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Espresso",
    description: "A strong coffee brewed by forcing steam through ground coffee beans.",
    price: "$3.50",
    image: "/espresso.png",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "A classic coffee drink topped with steamed milk foam.",
    price: "$7.50",
    image: "/cappuccino.png",
  },
  {
    id: 3,
    name: "Latte",
    description: "A creamy coffee drink with steamed milk and a light layer of foam.",
    price: "$4.00",
    image: "/latte.png",
  },
  {
    id: 4,
    name: "Americano",
    description: "A creamy coffee drink with steamed milk and a light layer of foam.",
    price: "$6.00",
    image: "/Americano.png",
  },
  {
    id: 5,
    name: "Flat White",
    description: "A creamy coffee drink with steamed milk and a light layer of foam.",
    price: "$5.00",
    image: "/flatwhite.png",
  },
];


const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-800 to-yellow-500 text-white  py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-[cursive]">Our Products</h1>
          <p className="mt-4 text-lg">Discover the perfect coffee for every moment.</p>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-amber-950">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-yellow-500">
                    {product.price}
                  </span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
