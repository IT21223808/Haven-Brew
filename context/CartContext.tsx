"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type CartProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: CartProduct) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
};


const CART_STORAGE_KEY = "haven-brew-cart";
const CartContext = createContext<CartContextType | null>(null);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const restoreCartItem = (value: unknown): CartItem | null => {
  if (!isRecord(value)) return null;

  const { id, name, description, price, image } = value;
  const quantity = value.quantity === undefined ? 1 : value.quantity;

  if (
    typeof id !== "number" ||
    !Number.isSafeInteger(id) ||
    typeof name !== "string" ||
    typeof description !== "string" ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0 ||
    typeof image !== "string" ||
    typeof quantity !== "number" ||
    !Number.isSafeInteger(quantity) ||
    quantity < 1
  ) {
    return null;
  }

  return { id, name, description, price, image, quantity };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        const parsed: unknown = JSON.parse(storedCart);

        if (Array.isArray(parsed)) {
          const restoredCart = parsed
            .map(restoreCartItem)
            .filter((item): item is CartItem => item !== null);

          if (restoredCart.length !== parsed.length) {
            console.warn("Some invalid Haven Brew cart items were discarded.");
          }

          setCart(restoredCart);
        } else {
          console.warn("Invalid Haven Brew cart data was discarded.");
          window.localStorage.removeItem(CART_STORAGE_KEY);
          setCart([]);
        }
      }
    } catch (error) {
      console.warn(
        "Unable to restore the Haven Brew cart from local storage.",
        error,
      );
      setCart([]);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn(
        "Unable to save the Haven Brew cart to local storage.",
        error,
      );
    }
  }, [cart, isHydrated]);

  const addToCart = (product: CartProduct) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id: number) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id: number) => cart.some((item) => item.id === id);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};