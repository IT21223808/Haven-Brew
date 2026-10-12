"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { IoCart } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { useCart } from "@/context/CartContext";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/products" },
  { label: "Our Story", href: "/#story" },
  { label: "Visit", href: "/#visit" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateActiveLink = () => {
      const hash = window.location.hash;
      const nextPath = pathname ?? "/";
      setActiveHref(hash ? `/${hash}` : nextPath === "/" ? "/" : nextPath);
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);

    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, [pathname]);

  const linkClass = (href: string) =>
    `rounded px-2 py-2 text-sm font-medium transition-colors motion-reduce:transition-none hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber ${
      activeHref === href
        ? "text-espresso underline decoration-caramel decoration-2 underline-offset-8"
        : "text-muted"
    }`;

  const closeMenuOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-cream shadow-subtle"
      onKeyDown={closeMenuOnEscape}
    >
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="HAVEN BREW home"
          className="flex shrink-0 items-center gap-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        >
          <Image
            src="/logo2.png"
            alt="HAVEN BREW"
            width={48}
            height={54}
            priority
            className="h-12 w-11 object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-wide text-heading sm:text-xl">
            HAVEN BREW
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex lg:gap-3"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/cart"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            className="relative rounded p-2 text-muted transition-colors motion-reduce:transition-none hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            <IoCart aria-hidden="true" className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex min-h-4 min-w-4 items-center justify-center rounded-full bg-espresso px-1 text-[10px] font-semibold leading-none text-cream">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/products"
            className="hb-button hb-button-primary text-sm transition-colors motion-reduce:transition-none hover:bg-espresso/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            View Menu
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control text-espresso transition-colors motion-reduce:transition-none hover:bg-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <AiOutlineClose aria-hidden="true" className="h-6 w-6" />
          ) : (
            <TfiMenu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-border bg-cream px-4 pb-5 pt-3 shadow-subtle md:hidden`}
      >
        <div className="mx-auto flex max-w-content flex-col">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`${linkClass(item.href)} min-h-12 px-3 py-3 text-base`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/products"
            className="hb-button hb-button-primary mt-3 w-full motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            onClick={closeMenu}
          >
            View Menu
          </Link>

          <Link
            href="/cart"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-3 py-3 text-sm font-medium text-muted transition-colors motion-reduce:transition-none hover:bg-surface-alt hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            onClick={closeMenu}
          >
            <IoCart aria-hidden="true" className="h-5 w-5" />
            Cart{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
