import React, { useEffect, useState } from 'react';
import CommonWrapper from '../../CommonWrapper/CommonWrapper';
import ArticalCards from '../../reUseAbles/ArticalCards';
import Button from '../../reUseAbles/Buttons';

const UpdatedArticles = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);


    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <CommonWrapper>
            <div className='mt-20 flex justify-between items-center'>
                <div className="">
                    <div className=''>
                        <Button h="h-[40px]" w="w-[116px]" c='bg-transparent' border={true} />
                    </div>

                    <h2 className="text-3xl font-raleway font-semibold leading-[56px] tracking-normal mt-4">
                        Check Out Our Updated Articles & Resources
                    </h2>
                </div>
                <div>
                    <Button
                        h="h-[52px]"
                        w="w-[174px]"
                        c='bg-[#A7EB94]'
                        text="More News"
                        border={true}
                    />
                </div>
            </div>


            <div className='flex flex-col lg:flex-row gap-[44px] justify-center'>

                <div className='w-full lg:w-[50%]'>
                    <ArticalCards
                        layout={isLargeScreen ? "vertical" : "horizontal"}  // Dynamic layout based on screen size
                        date="June 4, 2024"
                        title="The Consulting Playbook: Tactics for Success"
                        description="Bring to the tables win-win survival strategies to ensure proactive domination."
                        imgage="https://img.freepik.com/premium-photo/reading-documents-portfolio-business-people-meeting-planning-financial-strategy-revenue-sales-growth-vision-teamwork-senior-company-employees-working-finance-report-paperwork_590464-169190.jpg?w=360"
                    />
                </div>

                <div className='flex flex-col gap-[32px] w-full lg:w-[50%]'>
                    <ArticalCards
                        layout="horizontal"
                        date="June 4, 2024"
                        title="Bring to the tables win-win survival strategies to ensure proactive domination."
                        description="Bring to the tables win-win survival strategies to ensure proactive domination."
                        imgage="https://vmfservice.com/wp-content/uploads/2024/03/VMF-Service-01-1024x856.webp"
                    />
                    <ArticalCards
                        layout="horizontal"
                        date="June 4, 2024"
                        title="Expert Perspectives: Consulting With Growth"
                        description="Offering a compass for those seeking to navigate their own ventures with skill and acumen."
                        imgage="https://img.freepik.com/free-photo/boss-talking-about-company-financial-perspectives_1163-5350.jpg"
                    />
                </div>
            </div>
        </CommonWrapper>
    );
};

export default UpdatedArticles;
