import GetInTeachCard from "./GetInTeachCard";
import Header2 from "./ReuseComponent/Header2";

const ReliableConsultant = () => {
    return (
        <div>
            <Header2
                heading={"Reliable Consultants, Measurable Results"}
                para={
                    "Expert consulting drives corporate growth with creative strategy and solutions."
                }
            />
            <GetInTeachCard />
        </div>
    );
};

export default ReliableConsultant;