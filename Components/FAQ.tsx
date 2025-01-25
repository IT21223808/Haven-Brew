import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <div className="min-h-screen  bg-[#f8f4f0] text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center bg-cover bg-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[#4e2e1f] px-6 pt-9"
        >
          <h1 className="text-4xl md:text-6xl font-bold">FAQ</h1>
        </motion.div>
      </section>

      <section className="px-6 md:px-20 flex flex-col md:flex-row gap-10 font-semibold">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-4xl mx-20"
        >
          <Accordion type="single" collapsible className="text-left pt-10 text-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Where do you source your coffee beans?</AccordionTrigger>
              <AccordionContent>
              We source our coffee beans from ethical, sustainable farms around the world, including regions in Ethiopia, Colombia, and Guatemala.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you have a loyalty program?</AccordionTrigger>
              <AccordionContent>
              Yes, we have a rewards program. Sign up with us to earn points on every purchase and enjoy discounts or free items!              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are pets allowed in the café?</AccordionTrigger>
              <AccordionContent>
              Pets are welcome in our outdoor seating area. Please ensure they are leashed and well-behaved.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you accommodate large groups?</AccordionTrigger>
              <AccordionContent>
              We welcome groups, but if you’re visiting with more than six people, we recommend calling ahead to reserve seating.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I work or study in your café?</AccordionTrigger>
              <AccordionContent>
              Of course! Our café has a quiet, welcoming atmosphere with plenty of outlets to charge your devices. Perfect for working, studying, or relaxing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I customize my drink?</AccordionTrigger>
              <AccordionContent>
              Yes, all our drinks are fully customizable. You can choose the type of milk, sweetness level, and add flavors or toppings as you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>


        {/* Image Section */}
        <motion.div
          className="flex-1 flex pb-5 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/coffee2.png"
            alt="Coffee"
            height={450}
            width={450}
            whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
          />
        </motion.div>
      </section>
    </div>
  );
}
