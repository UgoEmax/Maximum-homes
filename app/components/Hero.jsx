"use client";
import Link from "next/link";
import { IoArrowRedoSharp } from "react-icons/io5";
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    viewport={{ once: true, amount: 0.2 }}
     className='relative h-[100vh] w-full bg-cover flex flex-col md:px-15 md:flex-row md:gap-20 md:justify-between mb-10' style={{ backgroundImage: "url('/images/hero.jpg')" }}> 

      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <h1 className="md:max-w-170 max-w-100 font-extrabold text-6xl md:text-[7rem] md:pt-20 pl-5 pt-10 text-white z-1 transform-[10%] mt-30 md:leading-25 md:translate-y-6">Your Home. Your Future.</h1>

      <div className="md:flex md:flex-col md:translate-y-90 md:w-[30%] float-right">
      <p className="px-5 text-1 font-small md:font-medium z-1 text-white py-5 tracking-wide relative">Find your dream property with expert real-estate guidance. Personalized property search, trusted agents, and full support — wherever you are.</p>

      <Link href="/" className="bg-white text-black px-4 py-5 md:p-3 rounded-3xl font-bold md:font-medium text-2xl z-1 mt-5 mx-2 cursor-pointer hover:text-blue-800 flex justify-between transition-all duration-500 ease-in-out relative">Find Your Dream Home<IoArrowRedoSharp /></Link>
      </div>
    </motion.div>
  )
}

export default Hero
