import React, { useState } from "react";
import "@fontsource/raleway";

const ToggleButton = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div
      className="w-[229px] h-[60px] bg-[#004D3F] flex items-center p-2 rounded-full cursor-pointer "
      onClick={() => setIsMonthly(!isMonthly)}
    >
      {/* Toggle Indicator */}
      <div
        className={`w-[98px] h-[48px] flex items-center justify-center rounded-full text-[#004D3F] font-raleway text-[18px] leading-[19.11px] transition-all duration-300 ${
          isMonthly ? "bg-white ml-1" : "ml-[125px] bg-white"
        }`}
      >
        {isMonthly ? "Month" : "Year"}
      </div>

      {/* Static Text (Opposite of Selected) */}
      <div
        className="absolute w-[229px] h-[60px] flex justify-between items-center px-6 text-[#FFFFFF] font-raleway text-[18px] leading-[19.11px] pointer-events-none"
      >
        <span  >Month</span>
        <span  >Year</span>
      </div>
    </div>
  );
};

export default ToggleButton;
