import React from "react";
import { motion } from "framer-motion";

// Define Product Type
interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, description, price, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-amber-950">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-yellow-500">{price}</span>
          <motion.button
            className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
