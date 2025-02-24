import img1 from "../../../assets/header/client/1.jpg";
import img2 from "../../../assets/header/client/2.jpg";
import img3 from "../../../assets/header/client/3.jpg";

const StatsCard = ({ globalClients, teamMembers, businessExperience }) => {
  return (
    <div className="  bg-[#014e3f] text-white rounded-4xl shadow-lg flex items-center p-2">
      {/* Left side with image and text (rotated) */}
      <div className="w-1/2 flex justify-center items-center gap-3 p-2 mr-3 -rotate-90 bg-white text-black rounded-3xl">
        <div className="flex">
          <img
            src={img1} // Replace with actual image source
            alt="Profile"
            className="object-cover w-14 h-14 rounded-[50%] -mr-3 border-4 border-white" // Negative margin to overlap
          />
          <img
            src={img2} // Replace with actual image source
            alt="Profile"
            className="object-cover w-14 h-14 rounded-[50%] -mr-3 border-4 border-white" // Negative margin to overlap
          />
          <img
            src={img3} // Replace with actual image source
            alt="Profile"
            className="object-cover w-14 h-14 rounded-[50%] border-4 border-white" // No margin on the last image
          />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold">200+</h2>
          <h3 className="text-sm font-semibold">Satisfied Customers</h3>
        </div>
      </div>

      {/* Right side with statistics */}
      <div className="py-4 grow">
        <div className="mb-5">
          <h2 className="text-light-green text-3xl">{globalClients} </h2>
          <h3 className="text-xl font-bold">Global Clients</h3>
        </div>
        <div className="mb-5">
          <h2 className="text-light-green text-3xl">{teamMembers} </h2>
          <h3 className="text-xl font-bold">Team Members</h3>
        </div>
        <div>
          <h2 className="text-light-green text-3xl">{businessExperience}</h2>
          <h3 className="text-xl font-bold">Business Experience</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
