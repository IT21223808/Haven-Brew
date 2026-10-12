"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { formatMenuPrice, menuCategories } from "@/lib/menu";

const categoryFilters = [
  { id: "all", label: "All" },
  ...menuCategories.map(({ id, title }) => ({ id, label: title })),
];

const menuItems = menuCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.title })),
);

const totalMenuItems = menuItems.length;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart, removeFromCart, isInCart, cartCount } = useCart();
  const visibleCategories =
    activeCategory === "all"
      ? menuCategories
      : menuCategories.filter((category) => category.id === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <header className="bg-cream">
          <div className="mx-auto grid max-w-content items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.2fr_0.8fr] md:py-20 lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-espresso sm:text-sm">
                HAVEN BREW
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] text-heading sm:text-6xl">
                Our Menu
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Explore carefully crafted coffees, refreshing drinks, and
                comforting bites made for every kind of coffee moment.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#menu"
                  className="hb-button hb-button-primary rounded-full px-6 transition-colors motion-reduce:transition-none hover:bg-[#3A2419] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  Explore the menu
                </a>
                <Link
                  href="/cart"
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-espresso transition-colors motion-reduce:transition-none hover:text-[#7A4B31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  View cart{cartCount > 0 ? ` (${cartCount})` : ""}
                </Link>
              </div>
            </div>

            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-espresso/10 bg-[#E9DED2] shadow-subtle md:block">
              <Image
                src="/coffee2.png"
                alt="A freshly prepared coffee with delicate latte art"
                fill
                priority
                sizes="(max-width: 1023px) 40vw, 34vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-[#3A2419]/80 px-4 py-2 text-xs font-medium tracking-wide text-cream backdrop-blur-sm">
                A little something for every moment
              </div>
            </div>
          </div>
        </header>

        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="scroll-mt-20 bg-[#FFFDF9] py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-espresso">
                  SOMETHING FOR EVERY MOMENT
                </p>
                <h2
                  id="menu-heading"
                  className="font-display text-3xl font-semibold text-heading sm:text-4xl"
                >
                  The full menu
                </h2>
              </div>
              <p className="text-sm text-muted">
                {totalMenuItems} drinks and bites
              </p>
            </div>

            <nav
              aria-label="Filter menu by category"
              className="-mx-4 mb-10 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:mx-0 sm:mb-12 sm:px-0"
            >
              <div className="flex w-max min-w-full gap-2 sm:justify-center">
                {categoryFilters.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveCategory(category.id)}
                      className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border px-5 text-sm font-medium transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                        isActive
                          ? "border-espresso bg-espresso text-cream"
                          : "border-espresso/15 bg-cream text-espresso hover:border-caramel hover:bg-[#F4EEE8]"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </nav>

            {visibleCategories.length === 0 ? (
              <p className="rounded-xl border border-espresso/10 bg-cream px-6 py-10 text-center text-muted">
                No menu items match this category.
              </p>
            ) : (
              <div className="space-y-14 sm:space-y-16">
                {visibleCategories.map((category) => (
                  <section
                    id={category.id}
                    key={category.id}
                    aria-labelledby={`${category.id}-heading`}
                    className="scroll-mt-28"
                  >
                    <div className="mb-5 flex items-end justify-between gap-4 border-b border-espresso/15 pb-4 sm:mb-6">
                      <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                          HAVEN BREW MENU
                        </p>
                        <h3
                          id={`${category.id}-heading`}
                          className="font-display text-2xl font-semibold text-heading sm:text-3xl"
                        >
                          {category.title}
                        </h3>
                      </div>
                      <span className="shrink-0 rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-muted">
                        {category.items.length} items
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                      {category.items.map((item) => {
                        const inCart = isInCart(item.id);
                        const menuItem = {
                          ...item,
                          category: category.title,
                        };

                        return (
                          <li key={item.id}>
                            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-espresso/10 bg-cream shadow-[0_4px_16px_rgba(58,36,25,0.04)] transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-caramel/60 hover:shadow-[0_10px_26px_rgba(58,36,25,0.10)]">
                              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9DED2]">
                                <Image
                                  src={item.image}
                                  alt={item.imageAlt}
                                  fill
                                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                                  className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.04]"
                                />
                                <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-[#FFFDF9]/90 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-espresso backdrop-blur-sm">
                                  {category.title}
                                </span>
                              </div>

                              <div className="flex flex-1 flex-col p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-3">
                                  <h4 className="font-display text-lg font-semibold leading-snug text-heading">
                                    {item.name}
                                  </h4>
                                  <span className="shrink-0 pt-0.5 text-sm font-semibold text-espresso">
                                    {formatMenuPrice(item.price)}
                                  </span>
                                </div>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                                  {item.description}
                                </p>
                                <button
                                  type="button"
                                  aria-label={
                                    inCart
                                      ? `Remove ${item.name} from cart`
                                      : `Add ${item.name} to cart`
                                  }
                                  onClick={() =>
                                    inCart
                                      ? removeFromCart(item.id)
                                      : addToCart(menuItem)
                                  }
                                  className={`mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                                    inCart
                                      ? "border-espresso bg-espresso text-cream hover:bg-[#3A2419]"
                                      : "border-espresso bg-espresso text-cream hover:border-[#3A2419] hover:bg-[#3A2419]"
                                  }`}
                                >
                                  {inCart ? "In cart · Remove" : "Add to cart"}
                                </button>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            )}

            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted sm:mt-12 sm:text-sm">
              Menu selections and prices shown are sample menu pricing and may
              vary.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
