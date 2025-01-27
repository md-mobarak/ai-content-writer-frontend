import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBySection from "@/components/TrustedBySection";
import AIWritingTools from "@/components/AIWritingTools";
import WritingTools from "@/components/WritingTools";
import AllAiTools from "@/components/AllAiTools";
import MixlandGenerator from "@/components/MixlandGenerator";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
// import { Hero } from "@/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
       <Navbar />
       <Hero />
       <TrustedBySection/>
       <AIWritingTools/>
       <WritingTools/>
       <AllAiTools/>
       <MixlandGenerator/>
       <TestimonialsSection/>
       <PricingSection/>
       <Footer></Footer>
  </div>
  );
}
