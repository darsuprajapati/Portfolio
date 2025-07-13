import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'

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
        className="max-w-5xl mx-auto text-lg leading-relaxed text-center"
      >
        {ABOUT_TEXT}
      </motion.div>
    </div>
  )
}

export default About 