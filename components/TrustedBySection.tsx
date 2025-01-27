import React from "react";
import Image from "next/image";
import logo1 from "../asset/logo-1.png";
import logo1_png from "../asset/logo-1-png.png";
import logo2 from "../asset/logo-2.png";
import logo2_png from "../asset/logo-2-png.png";
import logo3 from "../asset/logo-3.png";
import logo3_png from "../asset/logo-3-png.png";
import logo4 from "../asset/logo-4.png";
import logo4_png from "../asset/logo-4-png.png";
import logo5 from "../asset/logo-5.png";
import logo5_png from "../asset/logo-5-png.png";
import logo6 from "../asset/logo-6.png";
import logo6_png from "../asset/logo-6-png.png";
import logo7 from "../asset/logo-7.png";
import logo7_png from "../asset/logo-7-png.png";
import logo8 from "../asset/Logo-8.png";

const TrustedBySection = () => {
  const logos = [
    { src1: logo1, alt: "Logo 1", src: logo1_png },
    { src1: logo2, alt: "Logo 2", src: logo2_png },
    { src1: logo3, alt: "Logo 3", src: logo3_png },
    { src1: logo4, alt: "Logo 4", src: logo4_png },
    { src1: logo5, alt: "Logo 5", src: logo5_png },
    { src1: logo6, alt: "Logo 6", src: logo6_png },
    { src1: logo7, alt: "Logo 7", src: logo7_png },
    { src1: logo8, alt: "Logo 8", src: logo7_png },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-lg font-medium mb-8">
          Trusted by nearly <span className="text-yellow-400 font-bold">5000+</span> paying customers
        </h2>

        {/* Logo grid */}
        <div className="px-4 lg:px-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center my-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
            >
              {/* Main logo */}
              <Image
                src={logo.src1}
                alt={logo.alt}
                width={70}
                height={60}
                className="max-w-full h-auto mb-2"
              />
              {/* Secondary small logo */}
              <Image
                src={logo.src}
                alt={`${logo.alt} Icon`}
                width={24}
                height={24}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
