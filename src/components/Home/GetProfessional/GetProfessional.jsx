import React from "react";

const GetProfessional = () => {
    const events = [
        { title: "Identyfy Requirements " },
        { title: "Discuss Information" },
        { title: "Receive Application" },

    ];

    return (
        <div className="mt-20 min-h-screen bg-gradient-to-br from-[#004D3F] to-green-700 px-4 sm:px-6 lg:px-16 py-12">
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side - Heading and Button */}
                <div className="flex flex-col items-start text-white">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                        Process
                    </button>
                    <h1 className="font-raleway font-semibold text-2xl sm:text-4xl leading-[1.2] mt-4">
                        Get Professional Industry <br className="hidden sm:block" /> In Just A Few Step
                    </h1>
                </div>

                {/* Right Side - Timeline Section */}
                <div className="flex flex-col items-start text-white ml-72">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus similique eum dolorum aspernatur at molestiae, architecto eius laborum, delectus, rem quae molestias veniam error alias corporis culpa a. Excepturi!</p>
                    <div className="mt-6">
                        <button className="w-[170px] h-[60px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg">
                            Get Quotes
                        </button>
                        <button className=" ml-4 w-[252px] h-[60px] text-white font-semibold px-4 py-2 rounded-[5px] border-[1px] border-solid border-green-400 absolute ">
                            Book An Appointment
                        </button>
                    </div>


                </div>
            </div>

            {/* Image and Timeline Section */}
            <div className="flex justify-between items-center mt-12 gap-8">
                <div className="flex-1">
                    <img
                        className="w-full h-[552px] rounded-[25px] object-cover"
                        src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/career_advice/interview_questions/cibc_financial_services_representative.webp"
                        alt="Industry Process"
                    />
                </div>
                <div className="flex-1">
                    <div className="w-full max-w-[700px] bg-[#004D3F] bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg relative">
                        {events.map((event, index) => (
                            <div key={index} className="relative pl-6 sm:pl-10 pb-6 border-l border-green-500 last:pb-0">
                                {/* Timeline Number */}
                                <div className="absolute left-[-10px] sm:left-[-12px] top-2 w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rotate-45 rounded-full bg-white">
                                    <span className="w-5 sm:w-8 h-5 sm:h-8 flex items-center justify-center rounded-full bg-white">
                                        <div
                                            className={`w-3 sm:w-4 h-3 sm:h-4 flex items-center justify-center text-center 
            ${index === 2 ? 'bg-green-900 text-white' : 'bg-green text-green-900'} 
            rounded-full font-semibold`}
                                        >
                                            {index + 1}
                                        </div>
                                    </span>
                                </div>


                                <div className="ml-10 sm:ml-12">
                                    <h2 className="text-white text-lg sm:text-2xl font-semibold">
                                        {event.title}
                                    </h2>
                                    <p className="text-white text-sm sm:text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default GetProfessional;
