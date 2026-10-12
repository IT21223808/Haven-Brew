"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatMenuPrice } from "@/lib/menu";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const CartPage = () => {
  const {
    cart,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-cream px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-content">
          <div className="mb-8 sm:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-espresso">
              HAVEN BREW
            </p>
            <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
              Your Cart
            </h1>
            {cartCount > 0 && (
              <p className="mt-3 text-sm text-muted">
                {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
              </p>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="rounded-2xl border border-espresso/10 bg-[#FFFDF9] px-6 py-12 text-center shadow-subtle sm:py-16">
              <p className="font-display text-2xl font-semibold text-heading">
                Your cart is waiting for something lovely.
              </p>
              <p className="mt-3 text-sm text-muted">
                Explore the menu and find your next favourite.
              </p>
              <Link
                href="/products"
                className="hb-button hb-button-primary mt-6 rounded-full px-6 transition-colors motion-reduce:transition-none hover:bg-[#3A2419] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                Explore the menu
              </Link>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
              <ul className="space-y-4">
                {cart.map((item) => {
                  const lineTotal = item.price * item.quantity;

                  return (
                    <li
                      key={item.id}
                      className="grid gap-4 rounded-2xl border border-espresso/10 bg-[#FFFDF9] p-4 shadow-[0_4px_16px_rgba(58,36,25,0.04)] sm:grid-cols-[112px_1fr] sm:gap-5 sm:p-5"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E9DED2] sm:aspect-square">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 639px) 100vw, 112px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="min-w-0">
                          <h2 className="font-display text-xl font-semibold text-heading">
                            {item.name}
                          </h2>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                          <p className="mt-2 text-sm text-muted">
                            Unit price: {formatMenuPrice(item.price)}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 sm:justify-end">
                          <div
                            className="inline-flex min-h-10 items-center rounded-full border border-espresso/15 bg-cream"
                            aria-label={`Quantity for ${item.name}`}
                          >
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.name}`}
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-l-full text-lg font-medium text-espresso transition-colors motion-reduce:transition-none hover:bg-espresso/5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                            >
                              <span aria-hidden="true">−</span>
                            </button>
                            <span
                              className="min-w-8 text-center text-sm font-semibold text-heading"
                              aria-live="polite"
                            >
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase quantity of ${item.name}`}
                              onClick={() => increaseQuantity(item.id)}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-r-full text-lg font-medium text-espresso transition-colors motion-reduce:transition-none hover:bg-espresso/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                            >
                              <span aria-hidden="true">+</span>
                            </button>
                          </div>

                          <div className="min-w-24 text-right">
                            <p className="text-xs text-muted">Line total</p>
                            <p className="mt-1 font-semibold text-espresso">
                              {formatMenuPrice(lineTotal)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="min-h-10 rounded-full px-3 text-sm font-medium text-muted underline decoration-espresso/25 underline-offset-4 transition-colors motion-reduce:transition-none hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <aside className="rounded-2xl border border-espresso/10 bg-[#FFFDF9] p-5 shadow-subtle sm:p-6">
                <h2 className="font-display text-2xl font-semibold text-heading">
                  Order summary
                </h2>
                <div className="mt-5 flex items-center justify-between gap-4 border-b border-espresso/10 pb-4 text-sm text-muted">
                  <span>Items ({cartCount})</span>
                  <span>{formatMenuPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4">
                  <span className="font-semibold text-heading">Subtotal</span>
                  <span className="text-lg font-semibold text-espresso">
                    {formatMenuPrice(subtotal)}
                  </span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Taxes, delivery, and payment fees are not included.
                </p>
                
<Link
  href="/checkout"
  className="hb-button hb-button-primary mt-5 w-full rounded-full transition-colors motion-reduce:transition-none hover:bg-[#3A2419] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
>
  Proceed to Checkout
</Link>
                <Link
                  href="/products"
                  className="hb-button hb-button-secondary mt-6 w-full rounded-full transition-colors motion-reduce:transition-none hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  Continue browsing
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
