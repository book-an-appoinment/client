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
        <div className=" w-full h-[1,150px] min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center px-6 lg:px-16">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Heading and Button */}
                <div className="text-white">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg mb-6">
                        Our Story
                    </button>
                    <h1 className="font-raleway font-semibold text-[48px] leading-[70.56px] tracking-[0%]">
                        Share Your Journey <br /> From The Beginning To Now
                    </h1>

                </div>
                <div className="bg-green-800 bg-opacity-50 p-8 rounded-2xl shadow-lg">
                    {events.map((event, index) => (
                        <div key={index} className="relative pl-10 pb-6 border-l border-green-400 last:pb-0">
                            {/* Timeline Dot */}
                            <div className="absolute left-[-12px] top-2 w-6 h-6 bg-green-400 flex items-center justify-center rounded-full">
                                <span className="w-3 h-3 bg-green-900 rounded-full"></span>
                            </div>
                            <p className="text-green-300 text-sm font-semibold">{event.date}</p>
                            <h2 className="text-white text-lg font-bold">{event.title}</h2>
                            <p className="text-green-200 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
