import React from "react";
import PricingCard from "./PricingCard"; // Import your PricingCard component
import ToggleButton from "./ToogleButton";

const PricingSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      
      {/* Toggle Button Centered at the Top */}
      <ToggleButton />

      {/* Pricing Cards (Centered Below the Toggle) */}
      <div className="flex flex-row justify-center gap-6 mt-10">
        {/* First Card */}
        <PricingCard bgColor="bg-[#EFEFEFB2]" />

        {/* Middle Card */}
        <PricingCard bgColor="bg-[#A7EB94]" />

        {/* Last Card */}
        <PricingCard bgColor="bg-[#EFEFEFB2]" />
      </div>

    </section>
  );
};

export default PricingSection;
