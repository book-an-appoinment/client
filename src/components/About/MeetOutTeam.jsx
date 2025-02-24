import { Button } from "@heroui/button";

const values = [
    {
        title: "Emily Thompson",
        image: "https://cqas.ie/wp-content/uploads/2024/01/Hero-2-Business-Consultant.webp",
        description:
            "Business Strategist",
    },
    {
        title: "Hsarah Rodriguez",
        image: "https://dfjx2uxqg3cgi.cloudfront.net/img/photo/271393/271393_tt.jpg?20230327092741",
        description:
            "Marketing Specialist",
    },
    {
        title: "Jessica Patel",
        image: "https://us-ab.org/wp-content/uploads/2021/05/team-2.jpg",
        description:
            "HR Advice",
    },
];

const MeetOurTeam = () => {
    return (
        <section className="mt-20  bg-white">
            <div className="mx-auto">
                <div className="w-full flex justify-between items-center gap-6">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-black text-3xl md:text-4xl font-bold">
                            Meet Our Team Member
                        </h2>
                    </div>

                    {/* Right Side Content */}
                    <div className="">
                        <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg mb-4">
                            View More
                        </button>
                    </div>
                </div>

                {/* Values Cards Section */}
                <div className="mt-10 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="p-6">
                            <img
                                src={value.image}
                                alt={value.title}
                                className="rounded-md w-full h-[497px] object-cover"
                            />
                            <h3 className="text-black font-[Raleway] font-semibold text-[35px] leading-[42px] tracking-[0%] mt-4">{value.title}</h3>

                            <p className="text-gray-600 mt-2">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
