import React from "react";
import { FaRegNewspaper, FaPenFancy, FaParagraph, FaListUl } from "react-icons/fa";
import { RiFileCopy2Line } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

const AllAiTools = () => {
  // Data for each tool card
  const tools = [
    {
      icon: <FaRegNewspaper className="text-4xl text-blue-500" />,
      title: "Blog Headlines",
      description: "Write a better blog title with our AI tool.",
    },
    {
      icon: <FaPenFancy className="text-4xl text-purple-500" />,
      title: "Blog Intros",
      description: "Generate a paragraph of blog content using Blog Intros tool.",
    },
    {
      icon: <FaListUl className="text-4xl text-green-500" />,
      title: "Blog Outline",
      description: "Need an attention-grabbing headline for your article?",
    },
    {
      icon: <FaParagraph className="text-4xl text-orange-500" />,
      title: "Blog Conclusions",
      description: "Write better conclusions with AI writing tools.",
    },
    {
      icon: <RiFileCopy2Line className="text-4xl text-red-500" />,
      title: "Content Rewriter",
      description: "Get AI writer to rewrite your sentence in a different way.",
    },
    {
      icon: <MdOutlineDescription className="text-4xl text-teal-500" />,
      title: "Product Description",
      description: "Need an attention-grabbing headline for your article?",
    },
    {
      icon: <AiOutlineAppstore className="text-4xl text-yellow-500" />,
      title: "PAS Copywriting Formula",
      description: "Get AI writer to rewrite your sentence in a different way.",
    },
    {
      icon: <FaRegNewspaper className="text-4xl text-indigo-500" />,
      title: "Company About Us",
      description: "Write a better blog title with our AI tool.",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">54 Exciting Writing Tools</h2>
        <p className="text-gray-300 my-8">
          AI engines take information from various sources and read <br /> them like a human would do.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:my-12 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#282a37] p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          See all 54 available tools
        </button>
      </div>
    </div>
  );
};

export default AllAiTools;
