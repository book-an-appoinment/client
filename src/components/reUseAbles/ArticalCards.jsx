import React from "react";
import Button from "./Buttons";

const ArticleCards = ({
  layout = "vertical",
  date,
  title,
  description,
  image,
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`bg-white rounded-3xl flex ${
        isHorizontal
          ? "w-full h-[325px] p-[24px] flex-row items-center"
          : "w-full h-[687px] pt-[34px] flex-col items-center"
      }`}
    >
      <img
        className={`rounded-[21px] bg-gray-600 object-cover ${
          isHorizontal
            ? "w-[279px] h-[274px] mr-[20px]"
            : "w-[515px] h-[351px] mb-[20px]"
        }`}
        src={image}
        alt="article"
      />

      <div
        className={`flex flex-col justify-between text-left ${
          isHorizontal ? "w-[300px]" : "w-[515px]"
        }`}
      >
        <div className="flex justify-between items-center w-full mb-[10px]">
          <h6 className="text-gray-600 font-medium">{date}</h6>
          <Button
            border={false}
            w="w-[131px]"
            h="h-[49px]"
            c="bg-[#004D3F26]"
          />
        </div>

        <h4 className="font-raleway font-semibold text-[22px] leading-[36px] tracking-[0%] mb-[10px]">
          {title}
        </h4>

        <p className="font-karla font-normal text-[16px] leading-[29.63px] tracking-[0%] text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCards;
