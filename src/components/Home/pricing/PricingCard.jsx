import React from "react";
import "@fontsource/raleway";
import "@fontsource/urbanist";

const PricingCard = ({ bgColor }) => {
  return (
    <div className={`w-[420px] h-[557px] ${bgColor} rounded-3xl flex flex-col p-6 shadow-lg`}>
      
      {/* Per Month Section */}
      <p className="text-lg text-[#004D3F] font-urbanist">Per month</p>

      {/* Price Section */}
      <div className="flex items-center gap-2">
        <p className="font-raleway text-[47.39px] font-bold text-[#004D3F]">$150</p>
        <span className="bg-[#004D3F] text-[#A7EB94] text-xs font-urbanist px-2 py-1 rounded-md">
          Save 20%
        </span>
      </div>

      {/* Plan Title */}
      <p className="text-[14.58px] font-urbanist text-[#004D3F]">For Pro Business - Medium</p>

      {/* Divider */}
      <hr className="border-t border-[#004D3F] my-2" />

      {/* Features List (Vertically Centered) */}
      <ul className="text-[14.58px] font-urbanist text-[#004D3F] leading-[23.7px] flex-grow flex flex-col justify-center space-y-2">
        <li>✅ Initial consultation plan.</li>
        <li>✅ Customized action plan.</li>
        <li>✅ Email support for 30 days.</li>
        <li>✅ Phone and email support.</li>
        <li>✅ Comprehensive business analysis.</li>
        <li>✅ Implementation support.</li>
      </ul>

      {/* Call to Action Button */}
      <button className="w-[356px] h-[59px] bg-[#004D3F] text-[#A7EB94] font-urbanist text-lg rounded-full mt-6">
        Try Free 30 Days
      </button>
      
    </div>
  );
};

export default PricingCard;
