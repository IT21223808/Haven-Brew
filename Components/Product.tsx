import Image from "next/image";
import Link from "next/link";
import {
  featuredDrinkNames,
  formatMenuPrice,
  menuCategories,
} from "@/lib/menu";

const signatureDrinks = menuCategories
  .flatMap((category) => category.items)
  .filter((item) =>
    featuredDrinkNames.some((featuredName) => featuredName === item.name),
  );

const ProductsPage = () => {
  return (
    <div className="bg-[#f7f1ec]">
      <section
        aria-labelledby="signature-drinks-heading"
        className="mx-auto max-w-content px-4 py-section sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-espresso sm:text-sm">
            SIGNATURE BREWS
          </p>
          <h2
            id="signature-drinks-heading"
            className="hb-display text-3xl font-semibold leading-tight text-heading sm:text-4xl lg:text-5xl"
          >
            Made for slow mornings and long conversations.
          </h2>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {signatureDrinks.map((drink) => (
            <article
              key={drink.name}
              className="group overflow-hidden rounded-[24px] border border-border bg-cream shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={drink.image}
                  alt={drink.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="hb-display text-2xl font-semibold text-heading">
                    {drink.name}
                  </h3>
                  <span className="shrink-0 text-sm font-semibold text-espresso">
                    {formatMenuPrice(drink.price)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {drink.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-espresso sm:text-sm">
            OUR MENU
          </p>
          <h3 className="hb-display text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            Our Menu
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From carefully brewed classics to comforting favourites, there is
            something for every coffee moment.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Menu selections and prices shown are illustrative and may vary.
          </p>
        </div>

        <div className="space-y-12">
          {menuCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-2">
                <h4 className="text-2xl font-semibold text-heading">
                  {category.title}
                </h4>
                <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {category.items.length} items
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {category.items.map((item) => (
                  <article
                    key={`${category.id}-${item.id}`}
                    className="group overflow-hidden rounded-[20px] border border-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-caramel hover:shadow-subtle"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="text-lg font-semibold text-heading">
                            {item.name}
                          </h5>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-espresso">
                          {formatMenuPrice(item.price)}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="hb-button hb-button-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
