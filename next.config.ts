import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['w7.pngwing.com',"img.freepik.com"], // Add the domain here
   // https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.396478744.1737967391&semt=ais_hybrid
  },
};

export default nextConfig;
