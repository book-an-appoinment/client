import React from "react";
import Card2 from "./components/Card2";

function Section3() {
  return (
    <div className="border-2 border-blue-600 flex flex-wrap justify-center gap-6 p-6 py-48">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card2
          title={"Broad Range ofServices Available."}
          content={
            "An extensive assortment of availableservices tailored to meet your diverse needs and preferences"
          }
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"View More"}
        />
        <Card2
          bgColor="bg-[#EDF3F2]"
          content={
            " Innovation initiatives, our advisory solutions are tailored toaddress the unique contours of your business landscape"
          }
          title={"Financial Services"}
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"View More"}
        />
        <Card2
          bgColor="bg-[#EDF3F2]"
          title={"Task Control"}
          content={
            "Sustainable growth, our service commitm- ent is guide the terrain of financial expectations with clarity and precision."
          }
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"View More"}
        />
        <Card2
          bgColor="bg-[#EDF3F2]"
          title={"Financial Growth"}
          content={
            "Intricacies of capital deployment and investment growth to empower business with informed decision-making."
          }
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"View More"}
        />
        <Card2
          bgColor="bg-[#EDF3F2]"
          title={"Capital Investments"}
          content={
            "Guiding businesses through the complexities of the financial management, risk mitigation, and strategic growth."
          }
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"View More"}
        />
        <Card2
          bgColor="bg-[#A7EB94]"
          title={"Reach for us"}
          content={
            "Guiding businesses through the complexities of the financial management, risk mitigation, and strategic growth."
          }
          logo={"./film-tape-svgrepo-com.svg"}
          buttonText={"Get In Touch"}
        />
      </div>
    </div>
  );
}

export default Section3;
