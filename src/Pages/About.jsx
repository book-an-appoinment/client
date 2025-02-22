import BookAppointment from "../components/CommonWrapper/About/BookAppointment";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";

const About = () => {
  return (
    <div>
      <CommonWrapper>
        <div className="w-full h-[500px] bg-light-green">About page</div>
        <BookAppointment />
      </CommonWrapper>
    </div>
  );
};

export default About;
