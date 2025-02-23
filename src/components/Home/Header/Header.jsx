import ImageSection from "./ImageSection";

const Header = ({ heading, para, buttonTitle, showImageSection = true, showStatsCard = true }) => {
  return (
    <div
      className="w-full mx-auto lg:h-[694px]"
      style={{
        background:
          "radial-gradient(55.97% 157.65% at 50.89% 48.56%, #004D3F 0%, #004D3F 53.5%, #26714B 100%)",
      }}
    >
      <div className="grid lg:grid-cols-3 pt-36 w-[50%] mx-auto">
        <h1 className="text-white font-semibold text-5xl/17">{heading}</h1>
        <div></div>
        <div>
          <p className="text-white text-lg">{para}</p>
          <button className="bg-light-green px-12 py-4 font-bold text-primary-button-text mt-7 rounded-md">
            {buttonTitle}
          </button>
        </div>
      </div>

      {/* Conditionally render ImageSection and pass showStatsCard */}
      {showImageSection && <ImageSection showStatsCard={showStatsCard} />}
    </div>
  );
};

export default Header;
