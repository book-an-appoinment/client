import React from 'react';
import { BsFileBarGraph } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuSquareUser } from 'react-icons/lu';
import { SlBadge } from 'react-icons/sl';

const GuidingValues = () => {
    return (
        <div>
            <div className="mt-20 mb-20 max-w-[1480px] mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Guiding Values Define Our Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <FaWpforms className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Adaptability
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Fostering teamwork, listening to <br /> clients, <br /> achieving successes.
                            </p>
                        </div>
                    </div>

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <HiMiniUserGroup className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Collaboration
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Fostering teamwork, listening to <br /> clients, <br /> achieving successes.
                            </p>
                        </div>
                    </div>

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <IoSettingsOutline className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Innovation
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Innovative solutions crafted <br /> through creativity  for client<br /> success.
                            </p>
                        </div>
                    </div>

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <BsFileBarGraph className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Empowerment
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Empowering clients with tools for <br /> informed decisions, sustainable <br /> growth.
                            </p>
                        </div>
                    </div>

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <SlBadge className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Excellence
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Committed to exceeding e<br />xpectations with top-tier solutions <br /> and services.
                            </p>
                        </div>
                    </div>

                    <div className="group w-[460px] h-[344px] bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200 transition-all hover:bg-[#A7EB94]">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="mt-3 ml-6 relative w-[100px] h-[100px] bg-[#A7EB94] rounded-full group-hover:bg-white transition-all">
                                <div className="absolute top-[31px] left-[31px] w-[38px] h-[38px]">
                                    <LuSquareUser className="text-black text-3xl h-[38px] w-[38px]" />
                                </div>
                            </div>
                            <h3 className="mt-4 ml-6 text-4xl font-semibold mb-2 leading-[42px] tracking-[0%] font-raleway">
                                Integrity
                            </h3>
                            <p className="mt-2 ml-6 text-gray-600 text-left font-karla font-normal text-[22px] leading-[30px] tracking-[0%]">
                                Ethical, transparent, and <br /> accountable interactions at the <br /> highest standard.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GuidingValues;
