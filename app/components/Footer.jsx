'use client';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { motion } from 'motion/react';
import Link from 'next/link';



const Footer = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
    viewport={{ once: true, amount: 0.2 }}
     className='mx-5 md:px-15'>
      <p className='mb-10 text-center'>Contact us: <span className='text-blue-500'>hello@maximumhomes.com</span></p>

      <div className='flex justify-center gap-5 text-3xl text-blue-500 mb-10'> 
        <Link href=""> <FaFacebook /> </Link> 
        <Link href=""> <FaLinkedin /> </Link>
        <Link href=""> <FaSquareXTwitter /> </Link> 
        <Link href=""> <GrInstagram /> </Link> 
        <Link href=""> <IoLogoWhatsapp /> </Link> 
        </div>

      <footer className='text-center text-gray-500 mb-10'>&copy; {new Date().getFullYear()} Maximum Homes. All rights reserved.</footer> 

    </motion.div>
  )
}

export default Footer
