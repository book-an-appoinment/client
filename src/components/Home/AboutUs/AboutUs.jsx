import React from "react";
import { IoBagHandle } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-1 bg-[#004D3F0D] p-2 rounded-xl">
        <h1 className="text-right text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">01</h1>
        <div className="inline-block bg-[#A7EB94] rounded-full p-3">
          <IoBagHandle className="text-4xl" />
        </div>
        <h2 className="text-2xl font-semibold my-3">Corporate Programs</h2>
        <p className="text-md text-[#56595C]">
          With ZaiHR, hiring becomes effortless. Embrace the future of
          recruitment today.
        </p>
      </div>
      <div className="col-span-2 text-center">
        <p className="inline border-1 border-gray-200 px-4 py-2 text-xl font-medium text-[#0C121D]">About Us</p>
        <h2 className="text-[#0C121D] text-[52px] font-semibold my-4">Globally Recruitment and Consultation Solutions</h2>
        <p className="text-[#56595C] text-[18px] ">
          At the intersection of cutting-edge technology and deep industry
          knowledge, we revolutionize the way companies and candidates connect.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#A7EB94] hover:bg-[#014E3F] hover:text-white px-12 py-4 font-bold text-primary-button-text mt-7 rounded-md">
            Book An Appointment
          </button>
          <button className="border-2 border-[#A7EB94] hover:bg-light-green px-12 py-4 font-bold text-primary-button-text mt-7 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="col-span-1 bg-[#004D3F0D] p-2 rounded-xl">
        <h1 className="text-right text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">03</h1>
        <div className="inline-block bg-[#A7EB94] rounded-full p-3">
          <IoBagHandle className="text-4xl" />
        </div>
        <h2 className="text-2xl font-semibold my-3">Recruitment Solutions</h2>
        <p className="text-md text-[#56595C]">
        Finding the perfect fit for every role. With ZaiHR, experience recruitment solutions.
        </p>
      </div>
      <div className="col-span-1 bg-[#A7EB94] p-2 rounded-xl">
        <h1 className="text-right text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">02</h1>
        <div className="inline-block bg-[#A7EB94] rounded-full p-3">
          <IoBagHandle className="text-4xl" />
        </div>
        <h2 className="text-2xl font-semibold my-3">Leadership Training</h2>
        <p className="text-md text-[#56595C]">
        Empowering Tomorrow's Leaders Today. With ZaiHR, delve into training modules.
        </p>
      </div>
      <div className="col-span-2">
        <img
          src="https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/e3/31/e331c8bf-23c3-4284-8c85-0ec68bcfa667/meeting_kosten.jpg"
          alt=""
          className="rounded-3xl w-full h-[340px] object-cover"
        />
      </div>
      <div className="col-span-1 bg-[#004D3F0D] p-2 rounded-xl">
        <h1 className="text-right text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">04</h1>
        <div className="inline-block bg-[#A7EB94] rounded-full p-3">
          <IoBagHandle className="text-4xl" />
        </div>
        <h2 className="text-2xl font-semibold my-3">Improving Resource</h2>
        <p className="text-md text-[#56595C]">
        Optimizing Assets for Peak Productivity. ZaiHR transforms resources, enhancing efficiency.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
