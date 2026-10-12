import { useCart, type CartProduct } from "@/context/CartContext";

const ProductCard = ({ product }: { product: CartProduct }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;