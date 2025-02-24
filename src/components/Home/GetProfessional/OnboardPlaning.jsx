import { div } from "framer-motion/client";
import React from "react";
import Header from "../Header/Header";

const OnboardPlaning = () => {
    return (
        <div className=" mb-40">
            <div className="ml-20 mt-[400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
                <div className="w-full h-[320px] flex flex-col items-center justify-center bg-white  p-6 text-center transition-transform transform hover:scale-105">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative" >
                        1
                    </div>

                    <h3 className="text-2xl font-medium text-gray-800 mt-6">Onboarding</h3>
                    <p className="text-gray-600 mt-3">Analyze data to identify growth areas and provide actionable solutions.</p>
                </div>

                <div className=" ml-22 w-full h-[320px] flex flex-col items-center justify-center bg-white  p-6 text-center transition-transform transform hover:scale-105">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative" >
                        2
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800 mt-6">Planning</h3>
                    <p className="text-gray-600 mt-3">Develop a comprehensive strategy based on insights and findings from onboarding.</p>
                </div>

                <div className="ml-44 w-full h-[320px] flex flex-col items-center justify-center bg-white  p-6 text-center transition-transform transform hover:scale-105">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#004D3F] flex items-center justify-center text-white text-3xl font-semibold relative" >
                        3
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800 mt-6">Implementation</h3>
                    <p className="text-gray-600 mt-3">Execute the plan, monitor results, and optimize for sustained success.</p>
                </div>

            </div>
            <button
                className=" w-[234px] h-[60px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-[5px] absolute left-[843px]"
            >
                Get In Teach
            </button>








        </div>

    );
};

export default OnboardPlaning;
