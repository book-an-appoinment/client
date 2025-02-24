import  { useState } from "react";
import ToggleButton from "./ToogleButton";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex justify-center items-center mb-10">
      {/* Pricing Cards Container */}
      <div className="flex gap-6 relative">
        {/* Left Pricing Card (Gray) */}
        <PricingCard bgColor="bg-gray-200" price={100} planType="Per month" />

        {/* Middle Pricing Card with Toggle Button */}
        <div className="relative">
          {/* Toggle Button Positioned Above the Middle Card */}
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-10">
            <ToggleButton onToggle={setIsMonthly} />
          </div>
          {/* Middle Card (Green: #A7EB94) */}
          <PricingCard
            bgColor="bg-[#A7EB94]"
            price={isMonthly ? 150 : 1350}
            planType={isMonthly ? "Per month" : "Per year"}
          />
        </div>

        {/* Right Pricing Card (Gray) */}
        <PricingCard bgColor="bg-gray-200" price={200} planType="Per month" />
      </div>
    </div>
  );
};

export default PricingSection;
