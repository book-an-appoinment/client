import Section from "../components/Home/Form/Section";
import Header from "../components/Home/Header/Header";
import Recruitment from "../components/Home/Recruitment/Recruitment";
import Section3 from "../components/Home/section3/Section3";

const Home = () => {
  return (
    <div>
      <Header
        heading={"Driving Growth for Your Business"}
        para={
          "Expert consulting drives corporate growth with creative strategy and solutions."
        }
      />
      <Recruitment />

      
      <Section3/>
      <Section/>

      
    </div>
  );
};

export default Home;
