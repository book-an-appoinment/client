import BookAppointment from "../components/CommonWrapper/About/BookAppointment";
import CompanyValues from "../components/CommonWrapper/About/CompanyValues";
import Timeline from "../components/CommonWrapper/About/Timeline";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";

const About = () => {
  return (
    <div>
      <CommonWrapper>
        <div className="w-full h-[500px] bg-light-green">About page</div>
        <BookAppointment />
        <Timeline />
        <CompanyValues />
      </CommonWrapper>
    </div>
  );
};

export default About;
