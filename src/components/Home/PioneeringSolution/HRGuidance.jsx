import { Building2Icon, MessageCircleIcon } from "lucide-react";
import { FaRegCircle } from "react-icons/fa"; // Importing icons

const HRGuidanceSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center bg-[#FFFFFF2B] p-6 lg:p-10 rounded-xl w-full mx-auto gap-10 mt-8">
      {/* Left Content */}
      <div className="flex-1 text-white">
        <div className="flex flex-col 2xl:flex-row w-full">
          {/* Left Section */}

          <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[40px] font-semibold mb-3 text-white">
            Tailored HR Guidance To Navigate Your Challenges
          </h2>
          <p className="text-[#D6D6D6] text-sm sm:text-base md:text-lg 2xl:text-[18px] font-medium mb-6">
            Crafting solutions that resonate with your specific HR needs. Our
            expertise guides you, turning challenges into opportunities.
          </p>
        </div>

        <div className="w-full bg-gray-400 h-full border-t-[1px] my-5"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-3">
            <MessageCircleIcon className="text-white text-4xl mt-1" size={40} />
            <div>
              <h4 className="text-white text-[20px] font-semibold">
                Feedback Loop
              </h4>
              <p className="text-gray-400 text-sm">
                Embracing a dynamic approach to continuous improvement.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Building2Icon className="text-white text-4xl mt-1" size={40} />
            <div>
              <h4 className="text-white text-[20px] font-semibold">
                Bespoke Analysis
              </h4>
              <p className="text-gray-400 text-sm">
                Customized insights tailored to your unique challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 w-full border-[#87CEFF33] border-[38px] rounded-[20px]">
        <img
          src="../../../../src/assets/person.png"
          alt="HR Consultation"
          className="w-full object-cover rounded-lg h-[400px] border-12 border-white"
        />
        {/* Layered Effect */}
        <div className="absolute top-3 left-3 w-full h-full rounded-2xl border-2 border-green-400 opacity-50 -z-10"></div>
      </div>
    </div>
  );
};

export default HRGuidanceSection;
