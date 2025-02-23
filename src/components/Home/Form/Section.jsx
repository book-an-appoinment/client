import React from 'react'
import ContactForm from './Form'
import Card from './component/Card'

function Section() {
  return (
    <div className="border-2 flex flex-col md:flex-row p-12 md:p-40  gap-2 md:gap-10 ">
    {/* Left Section */}
    <div className="  w-full lg:w-[350px] grow flex flex-col p-6 items-center md:items-end">
      {/* "Get in touch" and Cards Container */}
      <div className="flex flex-col gap-4 w-full md:w-[338px] ">
        {/* "Get in touch" Text */}
        <p className="text-[#0C121D] text-4xl font-bold mb-2">Get in touch</p>
        {/* Cards */}
        <div className="flex flex-col gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  
    {/* Right Section (Contact Form) */}
    <div className=" min-w-[600px] grow p-6">
      <ContactForm />
    </div>
  </div>
  )
}

export default Section