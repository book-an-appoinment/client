import Header from "../components/Home/Header/Header";
import Recruitment from "../components/Home/Recruitment/Recruitment";

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
    </div>
  );
};

export default Home;
