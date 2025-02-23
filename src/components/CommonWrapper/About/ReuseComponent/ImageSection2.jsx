/* import bannerImage2 from "../../../assets/header/1.jpg"; */

const ImageSection2 = () => {
    return (
        <div className="relative mt-24 mb-32 flex justify-center mx-auto lg:w-[1594px] h-[721px] px-4">
            <div className="relative rounded-3xl overflow-hidden object-cover lg:w-[1320px] lg:h-[664px]">
                <img
                    src='https://media.licdn.com/dms/image/D4D12AQEgPk_bC53zNw/article-cover_image-shrink_720_1280/0/1715154746049?e=2147483647&v=beta&t=oeSljRC79PJsxVRzq0VYZRGV-gsM-FpBEn3LZbe_-LU'
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