import React, { useState } from "react";
import "@fontsource/raleway";

const ToggleButton = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
    onToggle(!isMonthly);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Toggle Button Container */}
      <div
        className="w-[260px] h-[75px] bg-[#004D3F] flex items-center p-3 rounded-full cursor-pointer relative shadow-lg"
        onClick={handleToggle}
      >
        {/* Toggle Indicator */}
        <div
          className={`w-[115px] h-[55px] flex items-center justify-center rounded-full text-[#004D3F] font-raleway text-[20px] leading-[19.11px] transition-all duration-300 ${
            isMonthly ? "bg-white ml-1" : "ml-[135px] bg-white"
          }`}
        >
          {isMonthly ? "Month" : "Year"}
        </div>

        {/* Static Text */}
        <div className="absolute w-[240px] h-[60px] flex justify-between items-center px-6 text-[#FFFFFF] font-raleway text-[20px] leading-[19.11px] pointer-events-none">
          <span>Month</span>
          <span>Year</span>
        </div>
      </div>

      {/* Speech Tail (White Triangle) */}
      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white relative top-[-5px]"></div>
     
    </div>
  );
};

export default ToggleButton;
