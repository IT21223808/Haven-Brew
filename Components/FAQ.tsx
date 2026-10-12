import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const questions = [
  {
    question: "What coffee do you serve?",
    answer:
      "Haven Brew features a range of familiar coffee favourites, from espresso and cappuccino to iced and signature drinks.",
  },
  {
    question: "Do you offer iced drinks?",
    answer:
      "Yes, iced coffee and tea selections are available, with offerings depending on the season and the day.",
  },
  {
    question: "Do you have non-coffee drinks?",
    answer:
      "Yes, tea, matcha, hot chocolate, and other non-coffee options are available.",
  },
  {
    question: "Do you offer bakery items?",
    answer:
      "Yes, bakery and light bites are part of the café experience and may vary by day.",
  },
  {
    question: "Can I view the full menu online?",
    answer:
      "Yes, the full menu is available on the Haven Brew menu page for a quick browse before your visit.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-cream"
    >
      <div className="mx-auto max-w-3xl px-4 py-section sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-espresso sm:text-sm">
            HAVEN BREW
          </p>
          <h2
            id="faq-heading"
            className="hb-display text-3xl font-semibold leading-tight text-heading sm:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="border-t border-border">
          {questions.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index + 1}`}
              className="border-border"
            >
              <AccordionTrigger className="min-h-14 py-4 text-left text-base font-medium text-heading hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
