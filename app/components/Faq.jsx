"use client";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Faq = ({ Question, Answer, onToggle, open }) => {
  return (
    <div className={`px-5 transition-all duration-300 ease-in ${open ? 'bg-gray-200 rounded-2xl mb-5' : 'null'}`} id="faqs">
      <button className="flex font-medium text-left justify-between w-full p-5" onClick={onToggle}>{Question}
        <span className="float-right text-2xl">{open ? <IoChevronUp /> : <IoChevronDown />}</span>
      </button>

     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
        <p className="text-gray-500 text-left p-5"> {Answer}</p>
      </div>
      
    </div>
  )
}

export default Faq
