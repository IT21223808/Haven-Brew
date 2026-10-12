import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream py-12 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(205,166,126,0.18),_transparent_38%)]" />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-espresso sm:text-sm">
            HAVEN BREW
          </p>
          <h1
            id="hero-heading"
            className="hb-display text-[2.2rem] font-semibold leading-[1.08] sm:text-4xl md:text-[2.9rem] lg:text-[4rem]"
          >
            Warm hands. Expertly brewed.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
            Specialty coffee and a quiet place to linger. Small-batch approach,
            crafted drinks, and a friendly welcome — Haven Brew is a thoughtful
            pause in your day.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="hb-button hb-button-primary transition-colors motion-reduce:transition-none hover:bg-espresso/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/#visit"
              className="hb-button hb-button-secondary transition-colors motion-reduce:transition-none hover:bg-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Visit Haven Brew
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <span className="rounded-full border border-border bg-white/70 px-3 py-1.5">
              Small-batch beans
            </span>
            <span className="rounded-full border border-border bg-white/70 px-3 py-1.5">
              Thoughtful pours
            </span>
            <span className="rounded-full border border-border bg-white/70 px-3 py-1.5">
              Daily comfort
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-surface-alt shadow-subtle md:aspect-[5/4]">
            <Image
              src="/coffee1.png"
              alt="Freshly brewed coffee served in a warm café setting"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 576px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 left-4 max-w-[220px] rounded-2xl border border-border bg-white/85 p-3 shadow-subtle backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Signature pour
            </p>
            <p className="mt-2 font-display text-lg text-heading">
              Roasted for slow mornings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
