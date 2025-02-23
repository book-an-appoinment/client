import React from 'react'
import PricingCard from './PricingCard'

function SectionPricing() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-row justify-center gap-6">
        {/* First Card */}
        <PricingCard bgColor="bg-[#EFEFEFB2]" />

        {/* Middle Card */}
        <PricingCard bgColor="bg-[#A7EB94]" />

        {/* Last Card */}
        <PricingCard bgColor="bg-[#EFEFEFB2]" />
      </div>
    </section>
  )
}

export default SectionPricing