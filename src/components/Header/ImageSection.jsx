import StatsCard from "./StatsCard";
import bannerImage from "../../assets/header/1.jpg";

const ImageSection = () => {
  return (
    <div className="relative mt-24 mb-32 mx-auto lg:w-[1320px]  px-4">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={bannerImage}
          alt="Team collaboration"
          width={1920}
          height={694}
          className="w-full h-auto object-cover"
        />
        <StatsCard
          globalClients="100+"
          teamMembers="150+"
          businessExperience="15+"
        />
      </div>
    </div>
  );
};

export default ImageSection;
