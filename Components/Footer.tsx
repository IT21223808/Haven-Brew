import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/products" },
  { label: "Our Story", href: "/#story" },
  { label: "Visit", href: "/#visit" },
  { label: "FAQ", href: "/#faq" },
];

const menuCategories = [
  "Coffee",
  "Signature Drinks",
  "Tea & Other",
  "Bakery & Bites",
];

function Footer() {
  return (
    <footer className="bg-[#3A2419] text-cream">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 sm:px-6 sm:py-16 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr] lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label="HAVEN BREW home"
            className="group inline-flex flex-col items-start rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            <span className="font-display text-3xl font-semibold tracking-[0.08em] text-[#FFFDF9] sm:text-4xl">
              HAVEN BREW
            </span>
            <span className="mt-3 h-px w-12 bg-caramel transition-[width] duration-300 group-hover:w-16 motion-reduce:transition-none" />
          </Link>
          <p className="mt-5 font-display text-xl text-[#FFFDF9]">
            Savor the warmth of every brew.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-cream/70">
            Thoughtfully crafted coffee, warm moments, and a place to slow down.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
            Explore
          </h2>
          <ul className="flex flex-col items-start gap-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-10 items-center rounded text-sm text-cream/75 transition-colors duration-200 motion-reduce:transition-none hover:text-caramel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Menu categories">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
            Our Menu
          </h2>
          <ul className="flex flex-col items-start gap-1">
            {menuCategories.map((category) => (
              <li key={category}>
                <Link
                  href="/products"
                  className="inline-flex min-h-10 items-center rounded text-sm text-cream/75 transition-colors duration-200 motion-reduce:transition-none hover:text-caramel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:col-span-2 lg:col-span-1 lg:p-7">
          <span
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-caramel/15"
          />
          <span
            aria-hidden="true"
            className="absolute -right-2 -top-4 h-20 w-20 rounded-full border border-caramel/10"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
            A moment for you
          </p>
          <h2 className="relative mt-5 font-display text-2xl leading-snug text-[#FFFDF9]">
            A good cup.
            <br />
            A quiet moment.
          </h2>
          <Link
            href="/products"
            className="group relative mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-espresso transition-colors duration-200 motion-reduce:transition-none hover:bg-[#FFFDF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Explore our menu
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.12]">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 HAVEN BREW. All rights reserved.</p>
          <p>Made for coffee lovers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
