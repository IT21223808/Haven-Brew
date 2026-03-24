import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

type Props = {}

const About = (props: Props) => {
  const scrollref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 50, 0, 0])

  return (
    <div className="min-h-screen bg-[#f8f4f0] text-gray-800">

      {/* 🔹 Hero Section */}
      <section className="w-full h-[30vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[#4e2e1f] px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Crafting moments, one cup at a time.
          </p>
        </motion.div>
      </section>

      {/* 🔹 About Content */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-6xl font-bold mb-6">Who We Are</h2>

          <p className="text-3xl leading-relaxed">
            At Corretto, we believe coffee is more than just a drink—it’s an experience.
            Since opening our doors, we've been dedicated to sourcing the finest beans,
            brewing perfection, and creating a space where everyone feels at home.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Image + Vision */}
      <section className="py-16 bg-white bg-[url('/bg1.png')]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="rounded-full"
            >
              <img
                src="/coffee1.png"
                alt="Coffee"
                className="rounded-full shadow-md w-48 sm:w-64 md:w-72"
              />
            </motion.div>
          </motion.div>

          {/* ✅ Vision (FIXED) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center px-4"
          >
            <h2 className="text-6xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To build a community around the art of coffee. From sourcing
              sustainable beans to cultivating relationships with our patrons,
              we strive to make every visit memorable.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 🔹 Team Section */}
      <section className="py-16 px-6 md:px-10 bg-[#cda67e]">

        {/* Heading */}
        <motion.div
          ref={scrollref}
          style={{ opacity, y: translateY }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg">
            Behind every great cup of coffee is a passionate team.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {[
            { name: "Sarah Johnson", role: "Head Barista", img: "/person1.png" },
            { name: "Michael Lee", role: "Pastry Chef", img: "/person2.png" },
            { name: "Emma Brown", role: "Manager", img: "/person3.png" },
          ].map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-4"
            >
              <motion.img
                src={member.img}
                alt={member.name}
                className="rounded-full 
                w-36 h-36 
                sm:w-40 sm:h-40 
                lg:w-32 lg:h-32 
                mx-auto object-cover shadow-lg"
              />

              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </motion.div>

          ))}

        </div>
      </section>

    </div>
  )
}

export default About