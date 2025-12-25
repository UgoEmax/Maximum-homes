"use client";
import { useState } from 'react';
import { IoEllipseSharp } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";
import Link from 'next/link';

const Pricing = () => {
    const [yearly, setYearly] = useState(false);
    
  return (
    <div id='pricing'>
      <h2 className='text-center font-bold text-[3rem] mt-20 px-15 mb-10 leading-12'>Choose the Plan That <span className='text-blue-600'>Moves You Forward</span></h2>
      <div className='flex gap-5 justify-center mb-5 w-[300px] p-2 mx-auto'>
        <button className='flex gap-2 justify-between text-gray-500 w-7xl cursor-pointer' onClick={() => setYearly(!yearly)}>Monthly Billing {yearly ? <IoEllipseSharp className='text-[2rem] translate-x-5 text-blue-600 transition-all duration-500 ease-in-out' /> : <IoEllipseSharp className='text-[2rem] -translate-x-5 transition-all duration-300 ease-in-out' /> } <span className='text-blue-600'>Yearly Billing</span></button> 
        </div>
      <p className='text-center text-gray-500 mb-12'>Switch to Yearly to <span className='text-black'>Save 20%!</span></p> 

      {!yearly && (
        <div className='p-5 m-5'>
            <div className='p-5 hover:border-2 rounded-2xl border-gray-400 transition-all duration-300 ease-in-out mb-10'>
                <h5 className='font-bold text-gray-400 mb-5'>Basic</h5>
                <h2 className='font-bold text-[4rem] text-gray-400'>$29 <span className='font-light text-[1rem] text-gray-700'>/month</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Perfect for those needing foundational market guidance.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Property alerts</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Monthly market updates</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Access to group Q&A</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Community support</p>
                </div>
                <Link href="/" className='font-bold p-3 text-white bg-gray-500 border-gray-400 border-3 rounded-[20px] flex justify-between'>Get Started <IoArrowRedoSharp /></Link>
            </div>

            <div className='p-5 hover:border-2 rounded-2xl border-blue-500 transition-all duration-300 ease-in-out mb-10'>
                <h5 className='font-bold text-blue-500 mb-5'>Pro</h5>
                <h2 className='font-bold text-[4rem] text-blue-500'>$49 <span className='font-light text-[1rem] text-gray-700'>/month</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Step up with personalized real-estate assistance.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Everything in Basic</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>1-on-1 agent check-ins</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Property valuation reviews</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Investment consultations</p>
                <Link href="/" className='font-bold p-3 mt-5 text-white bg-blue-500 border-blue-400 border-3 rounded-[20px] flex justify-between'>Get Started <IoArrowRedoSharp /></Link>
            </div>
            </div>

            <div className='p-5 hover:border-2 rounded-2xl border-gray-400 transition-all duration-300 ease-in-out mb-10'>
                <h5 className='font-bold text-gray-400 mb-5'>Elite</h5>
                <h2 className='font-bold text-[4rem] text-gray-400'>$69 <span className='font-light text-[1rem] text-gray-700'>/month</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Full-service support for serious buyers, sellers, or investors.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Everything in Pro</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Custom property scouting</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Private strategy calls</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Priority agent access</p>
                <Link href="/" className='font-bold p-3 text-white bg-gray-500 border-gray-400 border-3 rounded-[20px] flex justify-between mt-5'>Get Started <IoArrowRedoSharp /></Link>
            </div>
            </div>
        </div>

      )}

      {yearly && (
        <div className='p-5 m-5'>
            <div className='p-5 hover:border-2 rounded-2xl border-gray-400 mb-10'>
                <h5 className='font-bold text-gray-400 mb-5'>Basic</h5>
                <h2 className='font-bold text-[4rem] text-gray-400'>$23 <span className='font-light text-[1rem] text-gray-700'>/year</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Perfect for those needing foundational market guidance.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Property alerts</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Monthly market updates</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Access to group Q&A</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Community support</p>
                <Link href="/" className='font-bold p-3 text-white bg-gray-500 border-gray-400 border-3 rounded-[20px] flex justify-between mt-5'>Get Started <IoArrowRedoSharp /></Link>
            </div>
            </div>
  
            <div className='p-5 hover:border-2 rounded-2xl border-blue-500 transition-all duration-300 ease-in-out mb-10'>
                <h5 className='font-bold text-blue-500 mb-5'>Pro</h5>
                <h2 className='font-bold text-[4rem] text-blue-500'>$39 <span className='font-light text-[1rem] text-gray-700'>/year</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Step up with personalized real-estate assistance.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Everything in Basic</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>1-on-1 agent check-ins</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Property valuation reviews</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-blue-500'/>Investment consultations</p>
                <Link href="/" className='font-bold p-3 text-white bg-blue-500 border-blue-400 border-3 rounded-[20px] flex justify-between mt-5'>Get Started <IoArrowRedoSharp /></Link>
            </div>
            </div>
                        
            <div className='p-5 hover:border-2 rounded-2xl border-gray-400 transition-all duration-300 ease-in-out mb-10'>
                <h5 className='font-bold text-gray-400 mb-5'>Elite</h5>
                <h2 className='font-bold text-[4rem] text-gray-400'>$55 <span className='font-light text-[1rem] text-gray-700'>/year</span></h2>
                <p className='max-w-[300px] my-5 font-medium text-gray-500'>Full-service support for serious buyers, sellers, or investors.</p>
                <div className='flex flex-col gap-3 text-[14px] mb-7'>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Everything in Pro</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Custom property scouting</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Private strategy calls</p>
                <p className='flex gap-2'><IoCheckmarkCircleOutline className='text-[1.2rem] translate-y-0.5 text-gray-500'/>Priority agent access</p>
                <Link href="/" className='font-bold p-3 text-white bg-gray-500 border-gray-400 border-3 rounded-[20px] flex justify-between mt-5'>Get Started <IoArrowRedoSharp /></Link>
            </div>
            </div>
        </div>

      )}

    </div>
  )
}

export default Pricing
