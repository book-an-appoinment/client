import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaTools } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
            {/* First Box */}
            <div className="col-span-1 bg-[#004D3F0D] p-4 rounded-xl md:pl-5 hover:cursor-pointer hover:bg-[#A7EB94]">
                <h1 className="text-right text-4xl md:text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">01</h1>
                <div className="inline-block bg-[#A7EB94] rounded-full p-3 hover:bg-white">
                    <IoBagHandle className="text-3xl md:text-5xl" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold my-3">Corporate Programs</h2>
                <p className="text-sm md:text-md text-[#56595C]">
                    With ZaiHR, hiring becomes effortless. Embrace the future of recruitment today.
                </p>
            </div>

            {/* Center Content */}
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
                <p className="inline border-1 border-gray-200 px-4 py-2 text-lg md:text-xl font-medium text-[#0C121D]">About Us</p>
                <h2 className="text-3xl md:text-[52px] font-semibold my-4 text-[#0C121D]">
                    Globally Recruitment and Consultation Solutions
                </h2>
                <p className="text-sm md:text-[18px] text-[#56595C]">
                    At the intersection of cutting-edge technology and deep industry knowledge, we revolutionize the way companies and candidates connect.
                </p>
                <div className="flex gap-4 justify-center md:justify-start mt-7">
                    <button className="bg-[#A7EB94] hover:bg-[#014E3F] hover:text-white px-8 py-3 md:px-12 md:py-4 font-bold text-primary-button-text rounded-md">
                        Book An Appointment
                    </button>
                    <button className="border-2 border-[#A7EB94] hover:bg-light-green px-8 py-3 md:px-12 md:py-4 font-bold text-primary-button-text rounded-md">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Second Box */}
            <div className="col-span-1 bg-[#004D3F0D] p-4 rounded-xl md:pl-5 hover:cursor-pointer hover:bg-[#A7EB94]">
                <h1 className="text-right text-4xl md:text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">03</h1>
                <div className="inline-block bg-[#A7EB94] rounded-full p-3 hover:bg-white">
                    <IoIosPeople className="text-3xl md:text-5xl" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold my-3">Recruitment Solutions</h2>
                <p className="text-sm md:text-md text-[#56595C]">
                    Finding the perfect fit for every role. With ZaiHR, experience recruitment solutions.
                </p>
            </div>

            {/* Third Box */}
            <div className="col-span-1 bg-[#A7EB94] p-4 rounded-xl md:pl-5 hover:cursor-pointer hover:bg-[#A7EB94]">
                <h1 className="text-right text-4xl md:text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">02</h1>
                <div className="inline-block bg-white rounded-full p-3 hover:bg-white">
                    <TbTargetArrow className="text-3xl md:text-5xl" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold my-3">Leadership Training</h2>
                <p className="text-sm md:text-md text-[#56595C]">
                    Empowering Tomorrow&apos;s Leaders Today. With ZaiHR, delve into training modules.
                </p>
            </div>

            {/* Image */}
            <div className="col-span-1 md:col-span-2">
                <img
                    src="https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public/e3/31/e331c8bf-23c3-4284-8c85-0ec68bcfa667/meeting_kosten.jpg"
                    alt="Meeting"
                    className="rounded-3xl w-full h-[240px] md:h-[340px] object-cover"
                />
            </div>

            {/* Fourth Box */}
            <div className="col-span-1 bg-[#004D3F0D] p-4 rounded-xl md:pl-5 hover:cursor-pointer hover:bg-[#A7EB94]">
                <h1 className="text-right text-4xl md:text-9xl font-bold bg-gradient-to-t from-[#fafafac2] to-[#004D3FC2] bg-clip-text text-transparent">04</h1>
                <div className="inline-block bg-[#A7EB94] rounded-full p-3 hover:bg-white">
                    <FaTools className="text-3xl md:text-5xl" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold my-3">Improving Resource</h2>
                <p className="text-sm md:text-md text-[#56595C]">
                    Optimizing Assets for Peak Productivity. ZaiHR transforms resources, enhancing efficiency.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
