"use client"; 
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react";
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

  return (
    <div className='justify-between absolute z-10 p-1.5 w-full'>
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} className='align-left p-3 invert brightness-0 cursor-pointer' />


      {/* MENU TOGGLE BUTTON */}
      <button className="text-4xl font-semibold float-right top-0 cursor-pointer -translate-y-12" onClick={() => setOpen(!open)}>
        {open ? <IoClose className="text-white" /> : <IoMenu className="text-white" />}
      </button>

      <div className={`grid float-right gap-1 font-semibold bg-gray-900 text-amber-100 rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-7 pointer-events-none'}`}>
      <Link href="/" className='hover:underline transition-all duration-300 ease-in-out'>About Us</Link>
      <Link href="/" className='hover:underline transition-all duration-300 ease-in-out'>Stats</Link>
      <Link href="/" className='hover:underline transition-all duration-300 ease-in-out'>Properties</Link>
      <Link href="/" className='hover:underline transition-all duration-300 ease-in-out'>Packages</Link>
      <Link href="/" className='hover:underline transition-all duration-300 ease-in-out'>How it Works</Link>
      <Link href="/" className='mt-5 bg-gray-50 text-gray-950 p-1 rounded-2xl hover:underline transition-all duration-300 ease-in-out'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
