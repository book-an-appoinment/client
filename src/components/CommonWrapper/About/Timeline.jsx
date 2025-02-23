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
        <div className="min-h-screen bg-gradient-to-br from-[#004D3F] to-green-700 flex items-center justify-center px-4 sm:px-6 lg:px-16 py-12">
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side - Heading and Button */}
                <div className="text-white text-center lg:text-left">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                        Our Story
                    </button>
                    <h1 className="font-raleway font-semibold text-2xl sm:text-4xl leading-[1.2] mt-4">
                        Share Your Journey <br className="hidden sm:block" /> From The Beginning To Now
                    </h1>
                </div>

                {/* Timeline Section */}
                <div className="w-full max-w-[700px] bg-[#004D3F] bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg relative">
                    {events.map((event, index) => (
                        <div key={index} className="relative pl-6 sm:pl-10 pb-6 border-l border-green-700 last:pb-0">
                            {/* Timeline Dot with Gradient */}
                            <div className={`absolute left-[-10px] sm:left-[-12px] top-2 w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rotate-45 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-gradient-to-r from-[#C2FA6B] to-[#A7EB94]' : 'bg-gradient-to-r from-[#C2FA6B] to-[#A7EB94]'}`}>
                                <span className="w-5 sm:w-8 h-5 sm:h-8 bg-white rounded flex items-center justify-center">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-900 rounded-full"></div>
                                </span>
                            </div>

                            <div className="ml-10 sm:ml-12">
                                <p className="text-white text-sm sm:text-base font-bold">
                                    {event.date}
                                </p>
                                <h2 className="text-white text-lg sm:text-2xl font-semibold">
                                    {event.title}
                                </h2>
                                <p className="text-white text-sm sm:text-base">
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
