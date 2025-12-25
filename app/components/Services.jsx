import Image from 'next/image';
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const Services = () => {
  return (
    <div id='services'>
        <div className='bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full h-[2px]' />
      <h4 className="font-bold text-gray-400 text-center mt-20 mb-10">OUR SERVICES</h4>
      <h2 className='text-center font-bold text-5xl text-black'>Your Goals.</h2>
      <h2 className='text-center font-bold text-4xl text-blue-600 mb-3'>Our Expertise.</h2>
      <p className='text-center m-2 p-2 mb-6 text-black mb-15'>Whether you're entering the market or expanding your portfolio, our services are designed to help you achieve your real-estate goals.</p>

    <div className='rounded-2xl bg-gray-200 m-4 p-5'>
      <h2 className='text-3xl font-semibold mb-10'>Buying a Home</h2>
      <p className='text-gray-700 mb-7'>Find the perfect property with expert guidance tailored to your taste, budget, and lifestyle.</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Personalized property search</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Neighborhood and market insights</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Viewing scheduling & negotiation support</p>
      <Image src="/images/hand-shk-st.jpg" alt="Property Search" width={400} height={250} className='rounded-full' />
    </div>

    <div className='rounded-2xl bg-gray-200 m-4 p-5'>
      <h2 className='text-3xl font-semibold mb-10'>Selling Your Home</h2>
      <p className='text-gray-700 mb-7'>Sell at the best price with strategic marketing and expert valuation.</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Professional pricing & appraisal</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Photography & listing management</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Buyer negotiation & closing support</p>
      <Image src="/images/mansion.jpg" alt="Home Selling" width={400} height={250} className='rounded-full h-100' />
    </div>

    <div className='rounded-2xl bg-gray-200 m-4 p-5'>
      <h2 className='text-3xl font-semibold mb-10'>Real Estate Investment</h2>
      <p className='text-gray-700 mb-7'>Maximize your returns with data-driven property investment guidance.</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> ROI analysis</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Rental property sourcing</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Market trend insights</p>
      <Image src="/images/hand-shk-3p.jpg" alt='Investment' width={400} height={250} className='rounded-full' />
    </div>

    <div className='rounded-2xl bg-gray-200 m-4 p-5'>
      <h2 className='text-3xl font-semibold mb-10'>Rentals & Leasing</h2>
      <p className='text-gray-700 mb-7'>Find reliable tenants or secure the ideal rental home.</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Tenant screening</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Rental agreements</p>
      <p className='text-gray-700 mb-5 flex gap-2'><IoCheckmarkCircleOutline className='text-[1.3rem] translate-y-0.5 text-blue-600'/> Property management support</p>
      <Image src="/images/hand-shk-key.jpg" alt="Rentals & Leasing" width={400} height={250} className='rounded-full' />
    </div>

      <h3 className='text-center text-[1.3rem] font-bold mb-4 mt-15 mx-5'>No matter the market, we have a solution</h3>
      <h2 className='text-center font-bold text-4xl text-blue-600 mb-10'>Designed for you.</h2>
      <p className='text-gray-700 mb-10 mx-15'>Choose the service that fits your goal — we'll guide you every step of the way.</p>
    </div>
  )
}

export default Services
