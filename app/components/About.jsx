'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const About = () => {
  const slides = ['slide1', 'slide2', 'slide3'];
  const [ current, setCurrent ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = document.getElementById(slides[current]);
    if (el) el.scrollIntoView({ behaviour: "smooth" });
  }, [current])


  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.5 }}
        id='about' className='md:px-15 pt-10 mb-10'>
      <h3 className='text-center text-gray-600 font-bold m-5 p-3 text-1xl'>ABOUT US</h3>
      <div className='md:flex md:justify-center'>
      <h2 className='text-center font-bold text-5xl text-black'>Your Life,</h2> 
      <h2 className='text-center font-bold text-5xl text-blue-600 mb-3'>Your Location.</h2>
      </div>

      <p className='text-center m-2 p-2 md:px-50 mb-6 text-black'>At Maximum Homes, we believe finding a home is more than just a transaction — it's a major life step, a fresh start, and a journey that deserves personalized attention.
      Whether you're looking to buy, sell, invest, or rent, our experienced agents guide you with care, clarity, and confidence.</p>

      <div className="carousel w-[90%] md:w-[50%] mx-auto mb-10 rounded-2xl flex justify-items-center">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="/images/family-home.jpg"
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle  cursor-pointer">❮</a>
      <a href="#slide2" className="btn btn-circle  cursor-pointer">❯</a>
      <p className='absolute bottom-5 translate-y-40 left-5 text-2xl font-medium text-white'>The perfect home for your family</p>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="/images/door-key.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle cursor-pointer">❮</a>
      <a href="#slide3" className="btn btn-circle cursor-pointer">❯</a>
      <p className='absolute bottom-5 translate-y-40 text-2xl font-medium bg-lime-400 p-2 rounded-2xl text-black'>We hand you the key to your comfort</p>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="/images/hand-sprd.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle  cursor-pointer">❮</a>
      <a href="#slide1" className="btn btn-circle  cursor-pointer">❯</a>
      <p className='absolute bottom-5 translate-y-40 left-5 text-2xl font-medium bg-neutral-400 p-2 rounded-2xl text-white'>Exciting view to behold</p>
    </div>
  </div>
</div>
    </motion.div>
  )
}

export default About
