import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBagHandle } from "react-icons/io5";
import { RiGroupFill } from "react-icons/ri";
import { TiStarburst } from "react-icons/ti";

const StatsCards = () => {
    return (
        <div className=" w-full max-w-[1480px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:-mt-0 -mt-150">
            <div className="w-full h-[287px] flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 rounded-full bg-light-green flex items-center justify-center relative">
                    <HiMiniUserGroup className="w-9 h-9 absolute top-[22px] left-[22px]" />
                </div>
                <h3 className="text-[48px] font-raleway font-semibold leading-[56px] tracking-normal">70k+</h3>
                <p className="text-gray-600">Our Global Clients</p>
            </div>
            <div className="w-full h-[287px] flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 rounded-full bg-light-green flex items-center justify-center relative">
                    <RiGroupFill className="w-9 h-9 absolute top-[22px] left-[22px]" />
                </div>
                <h3 className="text-[48px] font-raleway font-semibold leading-[56px] tracking-normal">150+</h3>
                <p className="text-gray-600">Team Members</p>
            </div>
            <div className="w-full h-[287px] flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 rounded-full bg-light-green flex items-center justify-center relative">
                    <IoBagHandle className="w-9 h-9 absolute top-[22px] left-[22px]" />
                </div>
                <h3 className="text-[48px] font-raleway font-semibold leading-[56px] tracking-normal">15+</h3>
                <p className="text-gray-600">Business Experience</p>
            </div>
            <div className="w-full h-[287px] flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 rounded-full bg-light-green flex items-center justify-center relative">
                    <TiStarburst className="w-9 h-9 absolute top-[22px] left-[22px]" />
                </div>
                <h3 className="text-[48px] font-raleway font-semibold leading-[56px] tracking-normal">25%</h3>
                <p className="text-gray-600">Profit Increase</p>
            </div>
        </div>

    );
};

export default StatsCards;
