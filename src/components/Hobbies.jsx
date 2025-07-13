import React from 'react'
import { FaMusic, FaBicycle, FaBook, FaCamera } from 'react-icons/fa'
import { motion } from 'framer-motion'

const hobbies = [
  { icon: <FaMusic className="text-4xl text-blue-400" />, name: 'Music', description: 'Listening to and exploring various genres of music.' },
  { icon: <FaBicycle className="text-4xl text-green-400" />, name: 'Cycling', description: 'Enjoying long rides and exploring new places on my bicycle.' },
  { icon: <FaBook className="text-4xl text-yellow-400" />, name: 'Reading', description: 'Reading books on technology, self-improvement, and fiction.' },
  { icon: <FaCamera className="text-4xl text-pink-400" />, name: 'Photography', description: 'Capturing moments and experimenting with creative photography.' },
]

const Hobbies = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Hobbies & Interests
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
        {hobbies.map((hobby, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="flex flex-col items-center bg-stone-900 rounded-xl p-6 w-64 shadow-lg"
          >
            {hobby.icon}
            <h3 className="mt-4 text-xl font-semibold">{hobby.name}</h3>
            <p className="mt-2 text-stone-400 text-center">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Hobbies 