import { Button } from "@heroui/button";

const values = [
    {
        title: "Highlight Value One",
        image: "https://educational.tools/wp-content/uploads/2024/07/2149136892.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    },
    {
        title: "Highlight Value Two",
        image: "https://percipioworkforcesolutions.com/wp-content/uploads/2022/10/percipio-workforce-solutions-about-us.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    },
    {
        title: "Highlight Value Three",
        image: "https://assets.telegraphindia.com/telegraph/2023/Nov/1699430188_4.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    },
];

const CompanyValues = () => {
    return (
        <section className="mt-20 w-full px-4 md:px-10 lg:px-20 bg-white">
            {/* Header Section */}
            <div className="max-w-[1480px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Left Side Content */}
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <button className="w-[140px] h-[50px] bg-light-green text-green-900 font-semibold px-4 py-2 rounded-lg mb-4">
                        Our Values
                    </button>
                    <h2 className="text-black text-3xl md:text-4xl font-bold">
                        Emphasize What's Important To Your Company
                    </h2>
                </div>

                {/* Right Side Content */}
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                    </p>
                </div>
            </div>

            {/* Values Cards Section */}
            <div className="mt-10 max-w-[1480px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md h-[510px]">
                        <img
                            src={value.image}
                            alt={value.title}
                            className="rounded-md w-full h-[280px] object-cover"
                        />
                        <h3 className="text-xl text-black font-semibold mt-4">{value.title}</h3>
                        <p className="text-gray-600 mt-2">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyValues;
