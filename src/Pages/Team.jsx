import Card from "../components/Team/Card";
import woman1 from "../assets/team/woman1.png";
import woman2 from "../assets/team/woman2.png";
import woman3 from "../assets/team/woman3.png";
import StatsCards from "../components/About/StatsCards";

const Team = () => {
  return (
    <div>
      <div className="bg-[#004D3F] w-full flex flex-col items-center justify-center py-10 text-center">
        {/* Team Member Section */}
        <div className="bg-[#A7EB94] text-[#004D3F] text-lg font-bold px-3 py-2 rounded-full">
          Team Member
        </div>

        {/* Title: Stars of our Intelligence Team */}
        <div className="mt-6 text-white text-6xl font-semibold">
          Stars of our Intelligence Team
        </div>

        {/* Description Paragraph */}
        <p className="mt-4 text-white max-w-[800px] text-lg px-6">
          Their contributions and exceptional skills illuminate the path to
          success, guiding our efforts toward innovation and proficiency within
          our intelligence operations.
        </p>
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="bg-white flex flex-wrap justify-center gap-8 md:gap-16 p-6">
        <Card
          image={woman2}
          designation={"Business Strategist"}
          name={"Emily Thompson"}
        />
        <Card
          image={woman3}
          designation={"Marketing Specialist"}
          name={"Sarah Rodriguez"}
        />
        <Card
          image={woman1}
          designation={"HR Advisor"}
          name={"Jessica Patel"}
        />
      </div>
      <div className="flex  justify-center p-6 mb-16 mt-5">
        <StatsCards/>
      </div>
    </div>
  );
};

export default Team;
