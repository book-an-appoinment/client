import { Link } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import { footerNavData } from "../data/footerData";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
        {/* ===footer top=== */}
        <div className="flex">
          <div className="w-1/2 flex flex-col gap-10">
            <h3 className="text-white text-[32px] font-railway font-bold">
              Financy
            </h3>
            <p className="w-[430px] text-[18px] text-white opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              distinctio quibusdam, reprehenderit
            </p>
          </div>
          <div className="w-1/2 flex justify-between">
            {footerNavData.map((item) => {
              return (
                <div>
                  <p className="text-xl font-semibold text-white font-railway mb-3.5">
                    {item.header}
                  </p>
                  <div>
                    {item.links.map((navItem) => {
                      return (
                        <Link
                          to={navItem.url}
                          className="text-white opacity-50 text-[18px] block font-normal"
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
        <div className="border-t border-white border-[1.5px] my-4"></div>

        {/* ===icon=== */}
        <div className="flex justify-between">
          <p className="text-[16px] text-white">
            Copyright 2024 <span className="font-bold">Financy</span> reserved
          </p>
          <div className="flex gap-4 py-5">
            {icons.map((item) => {
              const SelectedIcon = item.icon;
              return (
                <p className="border-[1.5px] border-white rounded-full flex items-center justify-center p-2">
                  <SelectedIcon className="text-white" />
                </p>
              );
            })}
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
