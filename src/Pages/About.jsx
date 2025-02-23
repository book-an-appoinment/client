import CompanyValues from "../components/CommonWrapper/About/CompanyValues";
import GuidingValues from "../components/CommonWrapper/About/GuidingValues";
import MeetOutTeam from "../components/CommonWrapper/About/MeetOutTeam";
import ReliableConsultant from "../components/CommonWrapper/About/ReliableConsultant";
import StatsCards from "../components/CommonWrapper/About/StatsCards";
import SuccessStory from "../components/CommonWrapper/About/SuccessStory";
import Timeline from "../components/CommonWrapper/About/Timeline";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";

const About = () => {
  return (
    <div>
      <ReliableConsultant />
      <CommonWrapper>
        <StatsCards />
      </CommonWrapper>
      <CommonWrapper>
        <SuccessStory />
      </CommonWrapper>
      <Timeline />
      <CommonWrapper>
        <CompanyValues />
      </CommonWrapper>
      <CommonWrapper>
        <MeetOutTeam />
      </CommonWrapper>
      <CommonWrapper>
        <GuidingValues />
      </CommonWrapper>


    </div>
  );
};

export default About;

{/* <div className="w-full h-[500px] bg-light-green">About page</div> */ }
