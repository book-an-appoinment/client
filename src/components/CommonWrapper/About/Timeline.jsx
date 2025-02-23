import React from "react";

const Timeline = () => {
    const events = [
        { date: "2019 - March", title: "Foundation" },
        { date: "2020 - June", title: "Expansion" },
        { date: "2021 - September", title: "Innovation" },
        { date: "2022 - December", title: "Globalization" },
        { date: "2023 - May", title: "Leadership" },
    ];

    return (
        <div className="w-[1,920px] h-[1,150px] min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-start justify-center px-6 lg:px-16">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Heading and Button */}
                <div className=" text-white mt-16 ml-40 flex flex-col items-start">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                        Our Story
                    </button>
                    <h1 className="font-raleway font-semibold text-[48px] leading-[70.56px] tracking-[0%] mb-6">
                        Share Your Journey <br /> From The Beginning To Now
                    </h1>

                </div>
                <div className="w-[700px] h-[926px] mb-5 mt-5 ml-4 bg-green-800 bg-opacity-50 p-8 rounded shadow-lg relative">
                    {events.map((event, index) => (
                        <div key={index} className="w-[636px] h-[164px] relative pl-10 pb-6 border-l border-green-700 last:pb-0">
                            {/* Timeline Dot with Gradient */}
                            <div className={`absolute left-[-12px] top-2 w-12 h-12 flex items-center justify-center rotate-45 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-gradient-to-r from-[#C2FA6B] to-[#A7EB94]' : 'bg-gradient-to-r from-[#C2FA6B] to-[#A7EB94]'}`}>
                                <span className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <div className="w-3 h-3 bg-green-900 rounded-full"></div>
                                </span>
                            </div>

                            <div className="w-[548px] h-[134px] ml-12">
                                <p className="text-white text-base font-bold leading-[24px] tracking-[0%] font-raleway">
                                    {event.date}
                                </p>

                                <h2 className="text-white text-4xl font-semibold leading-[41.6px] tracking-[0%] font-raleway">
                                    {event.title}
                                </h2>
                                <p className="text-white text-base leading-[24px] tracking-[0%] font-roboto">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                </p>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </div>
    );
};

export default Timeline;
