import img1 from "../../../assets/header/client/1.jpg";
import img2 from "../../../assets/header/client/2.jpg";
import img3 from "../../../assets/header/client/3.jpg";

const StatsCard = ({ globalClients, teamMembers, businessExperience }) => {
  return (
    <div className="max-w-md mx-auto p-3 bg-green-800 text-white rounded-lg shadow-lg flex items-center">
      {/* Left side with image and text (rotated) */}
      <div className="flex flex-col items-center mr-3 -rotate-90 bg-white text-black rounded-md p-6">
        <div className="overflow-hidden mb-4 flex">
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
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">200+</h2>
          <h3 className="">Satisfied Customers</h3>
        </div>
      </div>

      {/* Right side with statistics */}
      <div className="py-4">
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
