'use client';
import { motion } from 'motion/react';

const Stats = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col text-center gap-5 md:px-20" id="stats">
      <div className="md:flex md:justify-between">
        <div className="mb-15 md:mb-0">
      <h2 className="font-extrabold text-7xl mt-5 text-blue-400 md:not-odd:mb-5">430+</h2>
      <p className="font-bold text-gray-400">ACTIVE LISTINGS</p>
      </div>

      <div className="mb-15 md:mb-0">
      <h2 className="font-extrabold text-7xl mt-5 text-teal-400 md:mb-5">3.2K+</h2>
      <p className="font-bold text-gray-400">HOMES SOLD</p>
      </div>

      <div className="mb-15 md:mb-0">
      <h2 className="font-extrabold text-7xl mt-5 text-amber-300 md:mb-5">3k+</h2>
      <p className="font-bold text-gray-400 mb-20">SATISFIED CLIENTS</p>
      </div>
      </div>

    </motion.div>
  )
}

export default Stats
