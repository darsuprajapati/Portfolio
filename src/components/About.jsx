import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-lg leading-relaxed text-center"
      >
        <p className="mb-6">
          Hello! I am passionate about web development and always eager to learn new technologies. My journey started with a strong foundation in academics and has been enriched by hands-on, skill-based learning.
        </p>
        <p>
          I believe in continuous learning and strive to deliver high-quality solutions in every project I undertake.
        </p>
      </motion.div>
    </div>
  )
}

export default About 