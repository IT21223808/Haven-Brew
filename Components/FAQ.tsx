import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <div className="min-h-screen bg-[#f8f4f0] text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center bg-cover bg-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-[#4e2e1f] px-6 pt-9"
        >
          <h1 className="text-4xl md:text-6xl font-bold">FAQ</h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 flex flex-col md:flex-row gap-10 font-semibold items-center">
        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex-1 w-full max-w-4xl mx-auto pt-10"
        >
          <Accordion type="single" collapsible className="text-left text-lg md:text-3xl">
            {[
              {
                question: "Where do you source your coffee beans?",
                answer:
                  "We source our coffee beans from ethical, sustainable farms around the world, including regions in Ethiopia, Colombia, and Guatemala.",
              },
              {
                question: "Do you have a loyalty program?",
                answer:
                  "Yes, we have a rewards program. Sign up with us to earn points on every purchase and enjoy discounts or free items!",
              },
              {
                question: "Are pets allowed in the café?",
                answer:
                  "Pets are welcome in our outdoor seating area. Please ensure they are leashed and well-behaved.",
              },
              {
                question: "Do you accommodate large groups?",
                answer:
                  "We welcome groups, but if you’re visiting with more than six people, we recommend calling ahead to reserve seating.",
              },
              {
                question: "Can I work or study in your café?",
                answer:
                  "Of course! Our café has a quiet, welcoming atmosphere with plenty of outlets to charge your devices. Perfect for working, studying, or relaxing.",
              },
              {
                question: "Can I customize my drink?",
                answer:
                  "Yes, all our drinks are fully customizable. You can choose the type of milk, sweetness level, and add flavors or toppings as you prefer.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex pb-5 justify-center items-center w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.img
            src="/coffee2.png"
            alt="Coffee"
            className="max-w-[90%] md:max-w-[450px]"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      </section>
    </div>
  );
}
