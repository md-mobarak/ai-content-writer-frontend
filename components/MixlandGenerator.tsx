"use client"

import { useState } from "react"
import { FaBlog, FaFacebook, FaBox } from "react-icons/fa"
import { MdContentCopy, MdDescription } from "react-icons/md"
import { BsPencilSquare } from "react-icons/bs"

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
}

export default function MixlandGenerator() {
  const [activeItem, setActiveItem] = useState("headlines")

  const menuItems: MenuItem[] = [
    { id: "headlines", label: "Blog Headlines", icon: <FaBlog className="w-4 h-4" /> },
    { id: "intros", label: "Blog Intros", icon: <BsPencilSquare className="w-4 h-4" /> },
    { id: "rewriter", label: "Content Rewriter", icon: <MdContentCopy className="w-4 h-4" /> },
    { id: "ads", label: "Facebook Ads", icon: <FaFacebook className="w-4 h-4" /> },
    { id: "product", label: "Product Description", icon: <MdDescription className="w-4 h-4" /> },
    { id: "pas", label: "PAS Copywriting Formula", icon: <FaBox className="w-4 h-4" /> },
  ]

  const headlines = [
    "Create original content that ranks for SEO",
    "Any mechanical keyboard enthusiasts in design?",
    "The More Important the Work, the More Important the Rest",
    "How to design a product that can grow itself 10x in year",
    "Any mechanical keyboard enthusiasts in design?",
  ]

  return (
    <div className="min-h-screen relative bg-black text-white p-8 lg:px-24">
        <div className="absolute bg-gradient-to-r from-black to-[#5b0584] lg:bottom-24 right-40  lg:w-60 lg:h-40 blur-3xl bg-opacity-80 "></div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-12">
          Mixland helps you
          <br />
          build beautiful website
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[400px,1fr] gap-6">
          {/* Menu */}
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full border border-gray-600 flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${activeItem === item.id ? "bg-gradient-to-r from-blue-600 to-purple-600" : "hover:bg-gray-800"}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Content Window */}
          <div className="bg-[#2A2A2F] z-50 rounded-lg overflow-hidden relative">
          
            {/* Window Controls */}
            <div className="px-4 py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400">4 Blog Headlines Generated</span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {headlines.map((headline, index) => (
                <div key={index} className="text-gray-200">
                  {headline}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

