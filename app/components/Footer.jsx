'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(false);

    const validateForm = (e) => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is Required";
        } else if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = "Enter a Valid Email";
        }

        setError(newErrors);
        return object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccess("");

        if (validateForm()) {
            setSuccess("Form Submitted Successfully");
            setEmail("");
            setMessage("");
            setError({});
        }
    }

  return (
    <div className='mx-5'>
        <div className='flex justify-center align-middle'>
        <Image src="/images/logo.png" alt="Logo" width=   {100} height={100} className='align-center     justify-center p-3 brightness-0 mb-10 mt-30' />
        </div>

      <h2 className='text-4xl font-bold mb-10'>More Than Properties — <span className='text-blue-500'> A Better Future. </span></h2>
      <p className='text-gray-500 font-medium mb-30 pb-10'>Real estate isn't just about buying and selling — it's about creating a life you love.</p>

      <h2 className='text-4xl font-bold mb-15'>Join Our <span className='text-blue-500'>Newsletter</span></h2>

      
      <form className='flex flex-col' onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your email" className='border border-gray-300 p-3 rounded-4xl my-1 outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />

            {error.email && (<p>{error.email}</p>)}

        <textarea placeholder='Describe your dream home' className='border border-gray-300 p-4 rounded-4xl my-2 hover outline-none' rows={10} value={message} onChange={(e) => setMessage(e.target.value)} />
       
        <button type='submit' className='cursor-pointer bg-blue-500 rounded-3xl text-left text-white font-medium p-3 mb-10'>Subscribe</button>

        {success && (<p>{success}</p>)}
      </form>

      <p className='mb-10 text-center'>Contact us: hello@maximumhomes.com</p>

      <div className='flex justify-center gap-5 text-3xl text-blue-500 mb-10'> 
        <Link href=""> <FaFacebook /> </Link> 
        <Link href=""> <FaLinkedin /> </Link>
        <Link href=""> <FaSquareXTwitter /> </Link> 
        <Link href=""> <GrInstagram /> </Link> 
        <Link href=""> <IoLogoWhatsapp /> </Link> 
        </div>

      <footer className='text-center text-gray-500 mb-10'>&copy; {new Date().getFullYear()} Maximum Homes. All rights reserved.</footer> 

    </div>
  )
}

export default Footer
