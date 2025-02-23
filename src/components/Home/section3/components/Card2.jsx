import React from "react";
import "@fontsource/raleway";
import "@fontsource/karla"; // Import Karla font globally
import { GoArrowRight } from "react-icons/go";

function Card2({ bgColor, content, title, logo, buttonText, isCentered }) {
  return (
    <div
      className={`w-[420px] h-[364px] flex justify-center items-center rounded-3xl ${bgColor}`}
    >
      <div className=" w-[321px] h-[281.15px] flex flex-col justify-between gap-2 p-2">
        {/* Logo */}
        <div className={`pb-4 flex ${isCentered ? "justify-center" : " "}  `}>
          {logo ? (
            <img src={logo} alt="Logo" className="w-[70px] h-[67.97px]" />
          ) : (
            <p className="text-gray-400">No Logo</p>
          )}
        </div>

        {/* Content */}
        <div>
          <p
            className={`text-[24px] ${
              isCentered ? "text-center" : " "
            } text-[#0C121D] font-semibold`}
          >
            {title}
          </p>
          <p
            className={` ${
              isCentered ? "text-center" : "text-left"
            }  text-[16px] font-karla text-[#0C121D] leading-[28px]  max-w-[450px] break-words `}
          >
            {content}
          </p>
        </div>

        {/* Button (Fix: Ensure it stays at the bottom) */}
        <div
          className={`flex flex-row ${
            isCentered ? "justify-center" : ""
          } py-4 text-left font-raleway text-[15.44px] font-semibold items-center`}
        >
          {buttonText === "View Full Catalog" ? (
            // Render the large green button
            <button className="bg-[#A7EB94] w-[194px] h-[52px] -mt-2">
              {buttonText}
            </button>
          ) : (
            <>
              {/* Render the small button */}
              <button className="w-[90px] h-[23.15px] text-left">
                {buttonText}
              </button>

              {/* Conditionally render the arrow if buttonText is NOT "Get In Touch" or "View Full Catalog" */}
              {buttonText !== "Get In Touch" &&
                buttonText !== "View Full Catalog" && <GoArrowRight />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card2;
