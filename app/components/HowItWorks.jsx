'use client';
import { motion } from 'motion/react';

const HowItWorks = ({ Title, Body }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='text-white mx-5 md:mx-2 p-5 bg-blue-500 rounded-2xl border-3 border-blue-400 mb-2'>
      <h3 className='text-[1.5rem] font-bold'>{Title}</h3>
      <p>{Body}</p>
      </div>
    </motion.div>
  )
}

export default HowItWorks;
