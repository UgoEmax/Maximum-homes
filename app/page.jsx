import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'

const page = () => {
  return (
    <div className="box-border bg-white text-black">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Pricing />
      <HowItWorks
      Title=" "
      Body=" "
      />
    </div>
  )
}

export default page
