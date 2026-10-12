"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Navbar from "@/Components/Navbar";
export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const formatPrice = (price: number) =>
    `Rs. ${price.toLocaleString("en-LK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (cart.length === 0) {
      setError("Your cart is empty. Please add products before checkout.");
      return;
    }

    const order = {
      customer: formData,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
      orderDate: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("haven-brew-current-order", JSON.stringify(order));
      router.push("/order-confirmation");
    } catch {
      setError("Unable to place your demo order. Please try again.");
    }
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] px-5 py-20 text-[#35251F]">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-semibold">Your cart is empty</h1>
          <p className="mt-3 text-[#77665D]">
            Add some coffee favourites before proceeding to checkout.
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
  <>
    <Navbar />
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-12 text-[#35251F] sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link
            href="/cart"
            className="text-sm font-medium text-[#806454] transition hover:text-[#35251F]"
          >
            ← Back to Cart
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A765F]">
            Haven Brew
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-[#77665D]">
            Almost there. Enter your details to place your demo order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-2xl border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Delivery Details</h2>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-[#DDD0C4] bg-[#FFFEFC] px-4 py-3 outline-none transition focus:border-[#8B6048] focus:ring-2 focus:ring-[#8B6048]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  className="w-full rounded-xl border border-[#DDD0C4] bg-[#FFFEFC] px-4 py-3 outline-none transition focus:border-[#8B6048] focus:ring-2 focus:ring-[#8B6048]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  maxLength={20}
                  className="w-full rounded-xl border border-[#DDD0C4] bg-[#FFFEFC] px-4 py-3 outline-none transition focus:border-[#8B6048] focus:ring-2 focus:ring-[#8B6048]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium"
                >
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete delivery address"
                  required
                  minLength={5}
                  maxLength={500}
                  rows={4}
                  className="w-full resize-y rounded-xl border border-[#DDD0C4] bg-[#FFFEFC] px-4 py-3 outline-none transition focus:border-[#8B6048] focus:ring-2 focus:ring-[#8B6048]/15"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[#5C3828] px-6 py-4 font-semibold text-white transition hover:bg-[#42271D] focus:outline-none focus:ring-2 focus:ring-[#8B6048] focus:ring-offset-2"
              >
                Place Demo Order · {formatPrice(subtotal)}
              </button>

              <p className="text-center text-xs text-[#8B7A70]">
                Demo checkout only. No payment will be collected.
              </p>
            </form>
          </section>

          <aside className="h-fit rounded-2xl border border-[#E9DED3] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-[#F0E7DF] pb-5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F5EEE7]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-[#806F65]">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-2 font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between gap-4 text-[#77665D]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between gap-4 text-[#77665D]">
                <span>Delivery</span>
                <span>Not calculated</span>
              </div>

              <div className="flex justify-between gap-4 border-t border-[#E9DED3] pt-4 text-lg font-semibold">
                <span>Order Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
    </>
  );
}
