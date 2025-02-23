import { Link } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import { footerNavData } from "../data/footerData";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const icons = [
  {
    icon: FaFacebook,
  },
  {
    icon: FaInstagramSquare,
  },
  {
    icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <div className="bg-footer-background">
      <CommonWrapper>
        <div className="py-[100px]">
          {/* ===footer top=== */}
          <div className="flex">
            <div className="w-1/2 flex flex-col gap-5">
              <h3 className="text-white text-[32px] font-railway font-bold">
                Financy
              </h3>
              <p className="w-[430px] text-[18px] text-white opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                distinctio quibusdam, reprehenderit
              </p>
            </div>
            <div className="w-1/2 flex justify-between">
              {footerNavData.map((item, i) => {
                return (
                  <div key={i}>
                    <p className="text-xl font-semibold text-white font-railway mb-3.5">
                      {item.header}
                    </p>
                    <div>
                      {item.links.map((navItem, i) => {
                        return (
                          <Link
                            to={navItem.url}
                            className="text-white opacity-50 text-[18px] block font-normal"
                            key={i}
                          >
                            {navItem.Label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ===divider=== */}
          <div className="border-t border-white border-[1.5px] my-11"></div>

          {/* ===icon=== */}
          <div className="flex justify-between items-center">
            <p className="text-[16px] text-white">
              Copyright 2024 <span className="font-bold">Financy</span> reserved
            </p>
            <div className="flex gap-4 py-5">
              {icons.map((item, i) => {
                const SelectedIcon = item.icon;
                return (
                  <p
                    key={i}
                    className="border-[1.5px] border-white rounded-full flex items-center justify-center p-2"
                  >
                    <SelectedIcon className="text-white" />
                  </p>
                );
              })}
            </div>
          </div>

          {/* ===newsLetter=== */}
          <div className="w-2/8 lg:w-full bg-light-green p-[60px] rounded-[20px] lg:flex justify-between items-center">
            <div className="flex gap-2">
              <p className="bg-black rounded-full flex items-center justify-center lg:p-6 px-3">
                <FaMessage className="text-white text-xl" />
              </p>
              <div>
                <h5 className="text-[28px] font-semibold text-[#004D3F]">
                  Join our newsletter now
                </h5>
                <p className="text-[18px] text-[#004D3FCC] opacity-80">
                  Be part of 500k community thriving with ZaiHR
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 pr-16 bg-white rounded-full focus:outline-none"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#004D3F] text-white px-4 py-2 rounded-full text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};
export default Footer;

const footerTextWithOpdacity = ({ text }) => {
  return <p className="text-[18px] text-white opacity-50">{text}</p>;
};
