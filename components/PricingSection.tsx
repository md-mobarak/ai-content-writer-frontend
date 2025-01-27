
// import { FaCheck } from "react-icons/fa"

// interface PricingFeature {
//   text: string
// }

// interface PricingTier {
//   name: string
//   price: number
//   description: string
//   features: PricingFeature[]
//   isPopular?: boolean
// }

// const pricingTiers: PricingTier[] = [
//   {
//     name: "Starter Plan",
//     price: 29,
//     description: "This package is suitable for teams 1-15 people.",
//     features: [
//       { text: "10 GB Dedicated Hosting Free" },
//       { text: "Best for Developers, Freelancers" },
//       { text: "1 Year Support" },
//     ],
//   },
//   {
//     name: "Basic Plan",
//     price: 79,
//     description: "This package is suitable for teams 1-50 people.",
//     features: [
//       { text: "15 GB Dedicated Hosting Free" },
//       { text: "Best for Developers, Freelancers" },
//       { text: "5 Year Support" },
//       { text: "Free Custom Domain" },
//       { text: "Basic Statistics" },
//     ],
//     isPopular: true,
//   },
//   {
//     name: "Premium Plan",
//     price: 129,
//     description: "This package is suitable for teams 1-100 people.",
//     features: [
//       { text: "20 GB Dedicated Hosting Free" },
//       { text: "Best for Developers, Freelancers" },
//       { text: "Unlimited Support" },
//       { text: "Free Custom Domain" },
//       { text: "Full Statistics" },
//     ],
//   },
// ]

// export default function PricingSection() {
//   return (
//     <section className="bg-black relative  lg:px-20 py-20 px-4">
//                <div className="absolute bg-gradient-to-r from-black to-[#5f0688] lg:top-20 lg:right-0 lg:w-60 lg:h-40 blur-3xl bg-opacity-80 "></div>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Make the wise decision
//             <br />
//             for your business
//           </h2>
//           <p className="text-gray-400">Choose from our affordable 3 packages</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {pricingTiers.map((tier, index) => (
//             <div key={index} className={`rounded-lg p-6 ${tier.isPopular ? "bg-[#282A37]" : "bg-[#282A37]"}`}>
//               <h3 className="text-white font-semibold mb-4">{tier.name}</h3>

//               <div className="mb-4">
//                 <span className="text-4xl font-bold text-white">${tier.price}</span>
//                 <span className="text-gray-400 ml-1">/month</span>
//               </div>

//               <p className="text-sm text-gray-400 mb-6">{tier.description}</p>

//               <div className="mb-8">
//                 <div className="text-sm font-medium text-white mb-4">What's included:</div>
//                 <ul className="space-y-3">
//                   {tier.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
//                       <FaCheck className="w-4 h-4 text-gray-400 mt-0.5" />
//                       <span>{feature.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button
//                 className={`w-full py-4 px-6 rounded-md text-sm font-medium transition-colors
//                   ${
//                     tier.isPopular
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
//                       : "bg-gray-800 text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 border border-black"
//                   }`}
//               >
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



import { FaCheck } from "react-icons/fa";

interface PricingFeature {
  text: string;
}

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter Plan",
    price: 29,
    description: "This package is suitable for teams 1-15 people.",
    features: [
      { text: "10 GB Dedicated Hosting Free" },
      { text: "Best for Developers, Freelancers" },
      { text: "1 Year Support" },
    ],
  },
  {
    name: "Basic Plan",
    price: 79,
    description: "This package is suitable for teams 1-50 people.",
    features: [
      { text: "15 GB Dedicated Hosting Free" },
      { text: "Best for Developers, Freelancers" },
      { text: "5 Year Support" },
      { text: "Free Custom Domain" },
      { text: "Basic Statistics" },
    ],
    isPopular: true,
  },
  {
    name: "Premium Plan",
    price: 129,
    description: "This package is suitable for teams 1-100 people.",
    features: [
      { text: "20 GB Dedicated Hosting Free" },
      { text: "Best for Developers, Freelancers" },
      { text: "Unlimited Support" },
      { text: "Free Custom Domain" },
      { text: "Full Statistics" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-black relative  lg:px-20 py-20 px-4">
      <div className="absolute bg-gradient-to-r from-black to-[#5f0688] lg:top-20 lg:right-0 lg:w-60 lg:h-40 blur-3xl bg-opacity-80"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Make the wise decision
            <br />
            for your business
          </h2>
          <p className="text-gray-400">Choose from our affordable 3 packages</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 w-[330px] ${
                tier.isPopular ? "bg-[#282A37]" : "bg-[#282A37]"
              }`}
            >
              <h3 className="text-white font-semibold mb-4">{tier.name}</h3>

              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  ${tier.price}
                </span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>

              <p className="text-sm text-gray-400 mb-6">{tier.description}</p>

              <div className="mb-8">
                <div className="text-sm font-medium text-white mb-4">
                  What&#39;s included:
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <FaCheck className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 px-6 rounded-md text-sm font-medium transition-colors
                  ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      : "bg-gray-800 text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 border border-black"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
