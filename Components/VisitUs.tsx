import Image from "next/image";
import Link from "next/link";

const VisitUs = () => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="relative overflow-hidden bg-espresso text-cream"
    >
      <div className="absolute inset-0 opacity-80">
        <Image
          src="/coffee2.png"
          alt="Warm coffee served in a cozy café atmosphere"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,22,18,0.82),rgba(34,22,18,0.55))]" />

      <div className="relative mx-auto grid max-w-content items-center gap-8 px-4 py-section sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-caramel sm:text-sm">
            VISIT HAVEN BREW
          </p>
          <h2
            id="visit-heading"
            className="hb-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            Come Find Your Moment.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/90 sm:text-lg">
            Whether you&apos;re starting the morning with a coffee or taking a quiet break in the afternoon, Haven Brew is here for your next favourite moment.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/75">
            Details such as address, contact information, and opening hours should be verified before visiting.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="hb-button border border-cream/50 bg-cream text-espresso transition-colors motion-reduce:transition-none hover:bg-[#f4efe9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              View Menu
            </Link>
            <Link
              href="/#visit"
              className="hb-button border border-cream/40 bg-transparent text-cream transition-colors motion-reduce:transition-none hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Get Directions
            </Link>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-sm uppercase tracking-[0.18em] text-caramel">Today</span>
            <span className="text-sm text-cream/80">Your next pause</span>
          </div>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cream/60">Atmosphere</p>
              <p className="mt-2 text-lg text-cream">Warm, calm and welcoming</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cream/60">Experience</p>
              <p className="mt-2 text-lg text-cream">Coffee, conversation and quiet moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
