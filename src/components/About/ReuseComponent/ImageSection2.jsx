import bannerImage1 from "../../../assets/about1.png";

const ImageSection2 = () => {
    return (
        <div className="relative mt-24 mb-32 flex justify-center mx-auto lg:w-[1594px] h-[721px] px-4">
            <div className="relative rounded-3xl overflow-hidden object-cover lg:w-[1320px] lg:h-[664px]">
                <img
                    src={bannerImage1}
                    alt="Team collaboration"
                    className="lg:w-[1320px] lg:h-[664px] object-cover"
                />

                {/* Absolute positioning for StatsCard */}
                {/* <div className="absolute -bottom-25 -right-30 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    <StatsCard
                        globalClients="100+"
                        teamMembers="150+"
                        businessExperience="15+"
                    />
                </div> */}
            </div>
        </div>
    );
};



export default ImageSection2;