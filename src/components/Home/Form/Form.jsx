import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[898px] h-[575px] bg-[#A7EB94] rounded-[30px] p-10 relative">
      <form className="grid grid-cols-2 gap-x-8 gap-y-16">
        {/* Name Field */}
        <div className="w-[396px] h-[50px]">
          <label
            htmlFor="name"
            className="block text-[20px] text-[#045141] font-semibold leading-[29.52px] font-raleway mb-4"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John"
            className="w-full h-full border border-[#04514130] rounded-[6.15px] px-[16.83px] py-[11px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Email Field */}
        <div className="w-[396px] h-[50px]">
          <label
            htmlFor="email"
            className="block text-[20px] text-[#045141] font-semibold leading-[29.52px] font-raleway mb-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="info@strategyflow.com"
            className="w-full h-full border border-[#04514130] rounded-[6.15px] px-[16.83px] py-[11px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Office Field */}
        <div className="w-[396px] h-[50px]">
          <label
            htmlFor="office"
            className="block text-[20px] text-[#045141] font-semibold leading-[29.52px] font-raleway mb-4"
          >
            Office
          </label>
          <input
            type="text"
            id="office"
            placeholder="South Australia"
            className="w-full h-full border border-[#04514130] rounded-[6.15px] px-[16.83px] py-[11px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Phone Field */}
        <div className="w-[396px] h-[50px]">
          <label
            htmlFor="phone"
            className="block text-[20px] text-[#045141] font-semibold leading-[29.52px] font-raleway mb-4"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+756 235 9043"
            className="w-full h-full border border-[#04514130] rounded-[6.15px] px-[16.83px] py-[11px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message Field */}
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block text-[20px] font-semibold leading-[29.52px] font-raleway text-[#045141] mb-4"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message..."
            className="w-[826px] h-[123px] border border-[#04514130] rounded-[6.15px] px-[16.83px] py-[11px] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Floating Submit Button */}
        <div className="col-span-2 flex justify-start -mt-8">
          <button
            type="submit"
            className="w-[196px] h-[62px] bg-[#045141] text-[#A7EB94] rounded-[8px] shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
