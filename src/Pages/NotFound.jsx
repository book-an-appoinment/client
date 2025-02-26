import { useNavigate } from "react-router-dom";
import notFound from "../assets/not-found/notFound.png";

const NotFound = () => {
  const navigate = useNavigate();
  const handleHome = () =>{
      navigate('/');
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#004D3F]">
      <div className="w-[852px] h-[787px] flex flex-col items-center justify-center text-center border-4 border-black shadow-lg bg-[#097964] p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-white">Sorry, Page Not Found!</h1>
        <p className="mt-4 text-lg text-gray-200">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>
        <div className="mt-6">
          <img src={notFound} alt="Not Found" className="max-w-full mx-auto" />
        </div>
        <div className="mt-6">
          <button className="bg-[#A7EB94] text-[#004D3F] px-6 py-3 rounded-md shadow-md hover:bg-[#70a562] transition mt-10 cursor-pointer" onClick={handleHome}>
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
