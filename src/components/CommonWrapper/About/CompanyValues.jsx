import { Button } from "@heroui/button";

const values = [
    {
        title: "Highlight Value One",
        image: "https://educational.tools/wp-content/uploads/2024/07/2149136892.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        title: "Highlight Value Two",
        image: "https://percipioworkforcesolutions.com/wp-content/uploads/2022/10/percipio-workforce-solutions-about-us.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
        title: "Highlight Value Three",
        image: "https://assets.telegraphindia.com/telegraph/2023/Nov/1699430188_4.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
];

const CompanyValues = () => {
    return (
        <section className=" w-[1480px] h-[1,150px] py-16 px-6 md:px-20 bg-white">
            <div className="max-w-5xl mx-auto  flex justify- items-stretch">
                <div className="w-[768px] h-[180px] ">
                    <button className="w-[140px] h-[50px] bg-[#A7EB94] text-green-900 font-semibold px-4 py-2 rounded-lg mb-6">
                        Our Values
                    </button>


                    <h2 className=" text-black text-3xl md:text-4xl font-bold mt-4">
                        Emphasize What's Important To Your Company
                    </h2>
                </div>
                <div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                    </p>
                </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {values.map((value, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img src={value.image} alt={value.title} className="rounded-md w-full h-48 object-cover" />
                        <h3 className="text-xl text-black font-semibold mt-4">{value.title}</h3>
                        <p className="text-gray-600 mt-2">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyValues;
