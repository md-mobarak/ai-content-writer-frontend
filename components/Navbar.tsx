// import React from "react";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-black text-white fixed w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//         <h1 className="text-xl font-bold">Brand</h1>
//         <ul className="flex space-x-6">
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Blog
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Contact
//             </a>
//           </li>
//         </ul>
//       <div className="">
//       <button className="
//  text-white px-4 py-2 mx-2 rounded border border-gray-500">
//           Sing in
//         </button>
//         <button className=" bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]
//  text-white px-4 py-2 rounded hover:bg-purple-700">
//           Get Started Free
//         </button>
//       </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black text-white fixed w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//         {/* Brand */}
//         <h1 className="text-xl font-bold">Brand</h1>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="lg:hidden block focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white mb-1"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//         </button>

//         {/* Navigation Menu */}
//         <ul
//           className={`lg:flex space-x-6 absolute lg:static top-16 left-0 w-full bg-black lg:w-auto lg:bg-transparent lg:flex-row flex-col items-center ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <li className="my-2 lg:my-0">
//             <a
//               href="#"
//               className="hover:text-gray-400 block lg:inline px-4 py-2"
//             >
//               Home
//             </a>
//           </li>
//           <li className="my-2 lg:my-0">
//             <a
//               href="#"
//               className="hover:text-gray-400 block lg:inline px-4 py-2"
//             >
//               About
//             </a>
//           </li>
//           <li className="my-2 lg:my-0">
//             <a
//               href="#"
//               className="hover:text-gray-400 block lg:inline px-4 py-2"
//             >
//               Blog
//             </a>
//           </li>
//           <li className="my-2 lg:my-0">
//             <a
//               href="#"
//               className="hover:text-gray-400 block lg:inline px-4 py-2"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Buttons */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button className="text-white px-4 py-2 rounded border border-gray-500 hover:bg-gray-800">
//             Sign in
//           </button>
//           <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-4 py-2 rounded hover:opacity-90">
//             Get Started Free
//           </button>
//         </div>
//       </div>

//       {/* Mobile Buttons */}
//       <div
//         className={`lg:hidden flex flex-col items-center space-y-2 mt-4 ${
//           isMenuOpen ? "block" : "hidden"
//         }`}
//       >
//         <button className="text-white px-4 py-2 rounded border border-gray-500 w-11/12">
//           Sign in
//         </button>
//         <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-4 py-2 rounded w-11/12">
//           Get Started Free
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { HiOutlineEquals } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-md bg-black/50 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <h1 className="text-xl font-bold text-white">Brand</h1>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <HiOutlineEquals className="text-white w-6 h-6" />
        </button>

        {/* Navigation Menu */}
        <ul
          className={`lg:flex space-x-6 absolute lg:static top-16 left-0 w-full bg-black lg:w-auto lg:bg-transparent lg:flex-row flex-col items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="my-2 lg:my-0">
            <a
              href="#"
              className="hover:text-gray-400 block lg:inline px-4 py-2 text-white"
            >
              Home
            </a>
          </li>
          <li className="my-2 lg:my-0">
            <a
              href="#"
              className="hover:text-gray-400 block lg:inline px-4 py-2 text-white"
            >
              About
            </a>
          </li>
          <li className="my-2 lg:my-0">
            <a
              href="#"
              className="hover:text-gray-400 block lg:inline px-4 py-2 text-white"
            >
              Blog
            </a>
          </li>
          <li className="my-2 lg:my-0">
            <a
              href="#"
              className="hover:text-gray-400 block lg:inline px-4 py-2 text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-white px-4 py-2 rounded border border-gray-500 hover:bg-gray-800">
            Sign in
          </button>
          <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-4 py-2 rounded hover:opacity-90">
            Get Started Free
          </button>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div
        className={`lg:hidden flex flex-col items-center space-y-2 mt-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button className="text-white px-4 py-2 rounded border border-gray-500 w-11/12">
          Sign in
        </button>
        <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white px-4 py-2 rounded w-11/12">
          Get Started Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
