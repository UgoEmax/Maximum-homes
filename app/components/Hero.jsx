"use client";
import Link from "next/link";
import { IoArrowRedoSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='relative h-[100vh] w-full bg-cover flex flex-col' style={{ backgroundImage: "url('/images/hero.jpg')" }}>

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <h1 className="max-w-100 font-extrabold text-7xl pt-20 pl-5 text-white z-1 transform-[10%]">Your Home. Your Future.</h1>

      <p className="px-5 text-1 font-small z-1 text-white py-5 tracking-wide">Find your dream property with expert real-estate guidance. Personalized property search, trusted agents, and full support — wherever you are.</p>

      <Link href="/" className="bg-white text-black px-4 py-5 rounded-3xl font-bold text-2xl z-1 mt-5 mx-2 cursor-pointer hover:text-blue-800 flex justify-between transition-all duration-500 ease-in-out">Find Your Dream Home<IoArrowRedoSharp /></Link>
    </div>
  )
}

export default Hero
