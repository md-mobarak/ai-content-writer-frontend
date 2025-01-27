import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const Hero: React.FC = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute bg-gradient-to-r from-black to-[#BB2BFF] top-32 w-60 h-20 blur-3xl bg-opacity-80 "></div>
      <div className="absolute bg-gradient-to-r from-black to-[#BB2BFF] bottom-0 right-0 w-20 h-40 blur-3xl bg-opacity-80 "></div>
      <div className="relative text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Write better <br /> content for your <br />
          {/* <span className=" text-gradient-to-r from-orange-500 to-yellow-600">Facebook Ads</span> */}
          <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
  Facebook Ads
</span>

        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Artificial intelligence writing tool helps you create blogs,<br /> social
          media websites, and much more.
        </p>
     
          <button className="my-3 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-6 py-3 rounded hover:bg-purple-700">
            Start 14 Days Free Trial
          </button> <br />
          <div className="flex justify-center items-center">
        <FaPlayCircle />  <button className=" bg-transparent px-2 py-2 rounded ">
         Watch A Demo
          </button>
          </div>
        
  
      </div>
    </section>
  );
};

export default Hero;
