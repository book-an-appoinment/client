import React from 'react'
import Button from './Buttons'

const ArticalCards = ({ layout = 'vertical', date, title, description, imgage }) => {
    const isHorizontal = layout === 'horizontal';

    return (
        <div
            className={`${isHorizontal ? 'w-full h-[325px] p-[24px]' : 'w-full h-[687px] pt-[34px] '} ${isHorizontal ? 'flex-row' : 'flex-col'} bg-[#EDF3F2]  rounded-3xl flex`}
        >
            <img
                className={`${isHorizontal ? 'w-[279px] h-[274px]' : 'w-[515px] h-[351px]'} rounded-[21px] bg-gray-600 mx-auto object-cover`}
                src={imgage}    
                alt="add img"
            />

            <div className={`${isHorizontal ? 'flex flex-col justify-between ml-[12px] w-full' : 'flex flex-col justify-between mt-[44px] w-[90%]'} mx-auto`}>


                <div className={` flex justify-between items-center ${isHorizontal ? '  mt-[22px]' : ''}`}>
                    <h6>{date}</h6>
                    <Button border={false} w='w-[131px]' h='h-[49px]' c='bg-[#004D3F26]' />
                </div>

                <h4 className={`${isHorizontal ? ' ' : ''} font-raleway font-semibold text-[22px] leading-[36px] tracking-[0%] mt-[21px] `}>
                    {title}
                </h4>

                <p className={`${isHorizontal ? '' : 'font-karla font-normal text-[16px] leading-[29.63px] tracking-[0%]  '} mt-[21px]`}>
                   {description}
                </p>


            </div>
        </div>
    )
}

export default ArticalCards
