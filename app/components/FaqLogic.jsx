"use client";
import { useState } from "react";
import Faq from "./Faq";

const FaqLogic = () => {
    const [ openIndex, setOpenIndex ] = useState(null);
    
    const toggleFaq = (index) => {
       setOpenIndex(openIndex === index ? null : index);
        };

  return (
    <div className="m-5">
      <h2 className="mt-20 text-5xl font-medium">Questions?</h2>
      <h3 className="text-5xl font-medium text-blue-500 mb-10">We've Got Answers.</h3> 

      <Faq 
      Question="What is Maximum Homes?"
      Answer="A modern real-estate agency offering personalized buying, selling, and investment services."
      open={openIndex === 0}
      onToggle={() => toggleFaq(0)}
      />

      <Faq
      Question="Who are the agents?"
      Answer="Certified professionals specializing in buying, selling, property management, and investment strategy."
      open={openIndex === 1}
      onToggle={() => toggleFaq(1)}
      />

      <Faq
      Question="How does the process work?"
      Answer="Choose a service → Receive a custom plan → Start viewing homes → Close with expert support."
      open={openIndex === 2}
      onToggle={() => toggleFaq(2)}
      />

      <Faq
      Question="Do I need to pay upfront?" 
      Answer="It depends on your selected plan — some services include monthly subscriptions, others are commission-based."
      open={openIndex === 3}
      onToggle={() => toggleFaq(3)}
      />

      <Faq
      Question="Can beginners enter the property market?"
      Answer="Absolutely! We help first-time buyers with education, strategy, and transparent guidance."
      open={openIndex === 4}
      onToggle={() => toggleFaq(4)}
      />

      <Faq
      Question="Can I switch plans later?"
      Answer="Yes — upgrade or switch anytime."
      open={openIndex === 5}
      onToggle={() => toggleFaq(5)}
      />

    </div>
  )
}

export default FaqLogic
