'use client';
import Image from 'next/image';
import { useState } from "react";
import { motion } from 'motion/react';

const CallToAction = () => {
 const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState({});

    const validateForm = (e) => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is Required";
        } else if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = "Enter a Valid Email";
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        e.target.submit();

        setSuccess("");

        if (validateForm()) {
            setSuccess("Form Submitted Successfully");
            setEmail("");
            setMessage("");
            setError({});
        }
    }

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className='mx-5 md:px-15'>
        <div className='flex justify-center align-middle'>
        <Image src="/images/logo.png" alt="Logo" width=   {100} height={100} className='align-center     justify-center p-3 brightness-0 mb-10 mt-30' />
        </div>

        <div className='md:text-center md:justify-center'>
      <h2 className='text-4xl font-bold mb-10'>More Than Properties — <span className='text-blue-500'> A Better Future. </span></h2>
      <p className='text-gray-500 font-medium mb-30 pb-10'>Real estate isn't just about buying and selling — it's about creating a life you love.</p>
      </div>

      <div id='contact-us' className='md:bg-gray-200 rounded-4xl pt-10'>
      <div className='md:text-center md:justify-center'> 
      <h2 className='text-4xl font-bold mb-15'>Join Our <span className='text-blue-500'>Newsletter</span></h2>
      </div>

      <form action="https://formsubmit.co/28481391347b8dfe4421014691f1a276" method="POST" className='flex flex-col md:px-20 md:m-20 md:justify-center' onSubmit={handleSubmit}>
            <input name='email' type="text" placeholder="Enter your email" className='border border-gray-400 p-3 rounded-4xl my-1 outline-none' value={email} onChange={(e) => setEmail(e.target.value)} />

            {error.email && (<p className='text-red-500 text-center'>{error.email}</p>)}

        <textarea name='message' placeholder='Describe your dream home' className='border border-gray-400 p-4 rounded-4xl my-2 hover outline-none' rows={10} value={message} onChange={(e) => setMessage(e.target.value)} />
       
        <button type='submit' className='cursor-pointer bg-blue-500 rounded-3xl text-left text-white font-medium p-3 mb-10 md:w-[15%] md:text-center hover:bg-gray-500 transition-all duration-300 ease-in-out'>Subscribe</button>

        {success && (<p className='text-green-500 text-center'>{success}</p>)}
      </form>
      </div>
    </motion.div>
  )
}

export default CallToAction
