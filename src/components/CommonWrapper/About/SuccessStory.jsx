import React, { useState } from "react";

const SuccessStory = () => {
    const [activeTab, setActiveTab] = useState("History");

    return (
        <div className="w-[1480px] h-[650px] flex flex-col md:flex-row bg-gray-100 p-6 rounded-xl shadow-lg mx-auto mt-10">
            <div className="">
                <img
                    src="https://sahbfinance.com.sa/wp-content/uploads/2023/10/service-04.jpg"
                    alt="Business Meeting"
                    className="rounded-xl w-[655px] h-[555px] object-cover"
                />
            </div>
            <div className="h-[650px] md:w-1/2 p-4 ml-4">
                <div className="flex space-x-2 mb-4">
                    {['History', 'Mission', 'Vision'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 w-[148px] h-[51px] text-black rounded-lg border ${activeTab === tab ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="w-[667px] h-[370px]">
                    <h2 className="font-[Raleway] font-[600] text-[40px] leading-[48px] tracking-[0%] mb-3 text-black">
                        Successfully Navigating Business {activeTab}
                    </h2>

                    <p className="font-[Karla] font-[400] text-[20px] leading-[37px] tracking-[0%] text-justify text-gray-600 mb-4 w-[667px]">

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, repellendus dicta? Debitis, ipsam ipsum magnam ea deserunt nulla voluptatibus quasi, iusto eaque maxime assumenda corporis itaque nesciunt sed, praesentium quibusdam?
                        Lorem ipsum dolor sit amet consectetur. Dolor iaculis tristique velit hendrerit sagittis ultrices eros.
                        Eleifend lectus vitae amet enim nulla quis nunc placerat tempus.
                    </p>

                </div>
                <button className="bg-green-500 text-white px-6 py-3 rounded-[5px] font-semibold hover:bg-green-600 transition w-[667px] h-[68px] absolute left-[950px] mt-8">
                    Book an Appointment
                </button>

            </div>
        </div>
    );
};

export default SuccessStory;
