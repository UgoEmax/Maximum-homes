import React from 'react'

const HowItWorks = ({ Title, Body }) => {
  return (
    <div>
      <div className='text-white mx-5 p-5 bg-blue-500 rounded-2xl border-3 border-blue-400 mb-2'>
      <h3 className='text-[1.5rem] font-bold'>{Title}</h3>
      <p>{Body}</p>
      </div>
    </div>
  )
}

export default HowItWorks;
