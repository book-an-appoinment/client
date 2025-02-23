import Header from "../components/Home/Header/Header";
import Recruitment from "../components/Home/Recruitment/Recruitment";
import UpdatedArticels from "../components/Home/updatedAreticals/UpdatedArticels";

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
      <UpdatedArticels/>
    </div>
  );
};

export default Home;
