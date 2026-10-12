import Image from "next/image";

const values = [
  {
    title: "Crafted With Care",
    text: "Thoughtful preparation in every cup.",
  },
  {
    title: "Quality First",
    text: "Simple ingredients and carefully crafted drinks.",
  },
  {
    title: "A Place To Pause",
    text: "A warm space for coffee, conversation and quiet moments.",
  },
  {
    title: "Made To Enjoy",
    text: "Coffee should be something you look forward to.",
  },
];

const About = () => {
  return (
    <section
      id="story"
      aria-labelledby="our-story-heading"
      className="bg-cream"
    >
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-section sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:gap-12 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-border bg-surface-alt shadow-subtle">
          <div className="relative aspect-[4/3]">
            <Image
              src="/image1.png"
              alt="A thoughtfully prepared cup of coffee beside a laptop on a timber table"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 576px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-espresso sm:text-sm">
            THE HAVEN BREW EXPERIENCE
          </p>
          <h2
            id="our-story-heading"
            className="hb-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            Good coffee deserves a good place to slow down.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
            A coffee shop is more than a quick stop. It is the pause between the
            rush, the place where a gentle conversation unfolds, and where a well-made cup feels like a small luxury.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Haven Brew began as a small neighbourhood idea: make excellent coffee for people who appreciate the little things. We focus on craft, hospitality, and calm — it&apos;s a place to slow down.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-4 pb-section sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[22px] border border-border bg-surface-alt p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-lg text-espresso border border-border">
                ☕
              </div>
              <h3 className="text-xl font-semibold text-heading">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
