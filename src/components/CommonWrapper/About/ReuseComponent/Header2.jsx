import ImageSection2 from "./ImageSection2";

const Header2 = ({ heading, para }) => {
    return (
        <div
            className="w-full lg:h-[694px]"
            style={{
                background:
                    "radial-gradient(55.97% 157.65% at 50.89% 48.56%, #004D3F 0%, #004D3F 53.5%, #26714B 100%)",
            }}
        >
            <div className="grid lg:grid-cols-3 lg:mx-[359px] pt-36">
                <h1 className="text-white font-semibold text-5xl/17">{heading}</h1>
                <div></div>
                <div>
                    <p className="text-white text-lg">{para}</p>
                </div>
            </div>
            <div>
                <ImageSection2 />
            </div>
        </div>
    );
};


export default Header2;