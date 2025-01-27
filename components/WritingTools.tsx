import React from "react";
import Image from "next/image";
import Image1 from "../asset/Card 1.png";
const WritingTools: React.FC = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 py-16 lg:px-24">
       <div className="absolute bg-gradient-to-r from-black to-[#2B59FF] top-40 lg:right-[450px] lg:w-60 lg:h-40 blur-3xl bg-opacity-80 "></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Image */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Create content efficiently and quickly with great AI writing tools
          </h1>
          <p className="text-gray-400 mb-6">
            150k+ users. No Credit Card Required. Pro designs and writing at no
            cost. Start for free. AI Writer Tool | Generate text for ecom,
            social media, website, sales, blogs etc.
          </p>
          <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90">
            Start 14 Days Free Trial
          </button>
        </div>
      

        {/* Right Section: Content */}
        <div className="flex z-0 justify-center">
               <Image
                            src={Image1}
                          alt="AI Results"
                            // width={300}
                            // height={400}
                            className="max-w-full h-auto rounded-xl shadow-lg"
                          />
        </div>
      </div>
    </section>
  );
};

export default WritingTools;
