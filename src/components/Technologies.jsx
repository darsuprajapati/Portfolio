import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaShopify } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { motion } from 'framer-motion'

// Icon animation variant
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

// Icons to display
const techIcons = [
  { icon: <FaHtml5 className='text-7xl text-orange-400' />, duration: 2 },
  { icon: <FaCss3Alt className='text-7xl text-blue-400' />, duration: 2 },
  { icon: <FaJs className='text-7xl text-yellow-300' />, duration: 4 },
  { icon: <FaShopify className='text-7xl text-green-400' />, duration: 6 },
  { icon: <SiMongodb className='text-7xl text-green-500' />, duration: 2.5 },
  { icon: <SiExpress className='text-7xl' />, duration: 3 },
  { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, duration: 5 },
  { icon: <FaNodeJs className='text-7xl text-green-500' />, duration: 2 },
]

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-6'
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(tech.duration)}
            className='p-4'
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies
