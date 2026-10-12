"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: OrderItem[];
  subtotal: number;
  orderDate: string;
};

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    try {
      const storedOrder = sessionStorage.getItem("haven-brew-current-order");

      if (storedOrder) {
        const parsed: unknown = JSON.parse(storedOrder);

        if (
          typeof parsed === "object" &&
          parsed !== null &&
          "customer" in parsed &&
          "items" in parsed &&
          "subtotal" in parsed &&
          "orderDate" in parsed
        ) {
          const candidate = parsed as Order;

          if (
            candidate.customer &&
            typeof candidate.customer.name === "string" &&
            typeof candidate.customer.email === "string" &&
            typeof candidate.customer.phone === "string" &&
            typeof candidate.customer.address === "string" &&
            Array.isArray(candidate.items) &&
            candidate.items.length > 0 &&
            candidate.items.every(
              (item) =>
                typeof item.id === "number" &&
                typeof item.name === "string" &&
                typeof item.price === "number" &&
                typeof item.quantity === "number" &&
                item.quantity >= 1,
            ) &&
            typeof candidate.subtotal === "number" &&
            Number.isFinite(candidate.subtotal) &&
            typeof candidate.orderDate === "string"
          ) {
            setOrder(candidate);
          }
        }
      }
    } catch (error) {
      console.error("Unable to load order details.", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString("en-LK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleContinueShopping = () => {
    clearCart();
    router.push("/products");
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-5 text-[#35251F]">
        <p>Loading your order...</p>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-5 py-16 text-[#35251F]">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold">No order found</h1>
          <p className="mt-3 text-[#77665D]">
            Please complete checkout before viewing your order confirmation.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex rounded-full bg-[#5C3828] px-7 py-3 font-medium text-white transition hover:bg-[#42271D]"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-14 text-[#35251F] sm:py-20">
      <div className="mx-auto max-w-2xl">
        <section className="rounded-2xl border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F2E8] text-3xl text-[#34734A]">
            ✓
          </div>

          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#9A765F]">
            Haven Brew
          </p>

          <h1 className="mt-3 text-center text-3xl font-semibold sm:text-4xl">
            Thank You, {order.customer.name}!
          </h1>

          <p className="mt-4 text-center leading-7 text-[#77665D]">
            Your demo order has been prepared successfully in this browser
            session. No payment has been collected.
          </p>

          <div className="mt-8 rounded-xl bg-[#FAF7F2] p-5">
            <h2 className="text-lg font-semibold">Delivery Details</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#77665D]">
              <p>{order.customer.email}</p>
              <p>{order.customer.phone}</p>
              <p>{order.customer.address}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-4 divide-y divide-[#F0E7DF]">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-[#806F65]">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#E9DED3] pt-5 text-lg font-semibold">
              <span>Order Total</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[#8B7A70]">
            Demo order only — this is not a real purchase confirmation.
          </p>

          <button
            type="button"
            onClick={handleContinueShopping}
            className="mt-7 flex w-full items-center justify-center rounded-full bg-[#5C3828] px-6 py-4 font-semibold text-white transition hover:bg-[#42271D] focus:outline-none focus:ring-2 focus:ring-[#8B6048] focus:ring-offset-2"
          >
            Continue Shopping
          </button>
        </section>
      </div>
    </main>
  );
}