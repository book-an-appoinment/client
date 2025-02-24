import Header2 from "./ReuseComponent/Header2";

const ReliableConsultant = () => {
    return (
        <div className="mb-[50px] md:mb-[80px] lg:mb-[490px] xl:mb-[450px]">
            <Header2
                heading={
                    <>
                        Reliable Consultants <br /> Measurable Results
                    </>
                }
                para={
                    "Expert consulting drives corporate growth with creative strategy and solutions."
                }
            />
        </div>
    );
};

export default ReliableConsultant;
