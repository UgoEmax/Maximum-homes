import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FaqLogic from './components/FaqLogic'

const page = () => {
  return (
    <div className="box-border bg-white text-black">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Pricing />

      <h4 className='text-[1rem] font-bold text-gray-500 text-center mb-10' id='how-it-works'>HOW IT WORKS </h4>
      <h2 className='text-[2.2rem] font-bold text-center mb-10'>Your Property Journey</h2>

      <HowItWorks
      Title="Choose Your Service"
      Body="Select your plan — buying, selling, or investing."
      />
      <HowItWorks 
      Title="Receive a Personalized Strategy"
      Body="Your agent builds a custom plan tailored to your goals."
      />
      <HowItWorks 
      Title="View & Select Properties"
      Body="Tour homes in person or virtually — anytime, anywhere."
      />
      <HowItWorks 
      Title="Buy, Sell, or Close the Deal"
      Body="Negotiate confidently and finalize with expert support."
      />

      <FaqLogic />
      
    </div>
  )
}

export default page
