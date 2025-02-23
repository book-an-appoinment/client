import React from "react";

const Card = () => {
  return (
    
       
<div className="flex items-center bg-[#0000000F] w-full md:w-[338px]    h-[99px] p-4 rounded-lg shadow">
  <div className="bg-green-800 p-3 rounded-full flex items-center justify-center">
    {/* New SVG with white fill to match the background */}
    <svg
      viewBox="0 -9.31 56.223 56.223"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6" // Ensure the SVG fits within the circle
      fill="white" // Set fill to white to match the background
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="email_unread"
          data-name="email unread"
          d="M798.377,169.859h.012a2.16,2.16,0,0,0,1.181-.346l.092-.059.063-.039,1.071-.887,25.563-21.094a.3.3,0,0,0-.239-.123H770.492a.291.291,0,0,0-.183.066l26.745,22.045A2.1,2.1,0,0,0,798.377,169.859ZM770.2,150.3v31.268l19.159-15.476Zm37.084,15.9,19.139,15.38V150.4Zm-6.085,5.021a4.559,4.559,0,0,1-5.619.005l-4.388-3.619L770.2,184.558v.053a.3.3,0,0,0,.3.3h55.625a.3.3,0,0,0,.3-.3v-.049l-20.974-16.852Z"
          transform="translate(-770.195 -147.311)"
        ></path>
      </g>
    </svg>
  </div>
  <div className="ml-4">
    <h3 className="text-lg font-bold text-[#0C121D] ">Send a message</h3>
    <p className="text-[#0C121D99]">info@strategyflow.com</p>
  </div>
</div>
    
      
    
  );
};

export default Card;
