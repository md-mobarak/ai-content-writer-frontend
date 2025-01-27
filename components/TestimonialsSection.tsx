"use client"

import Image from "next/image"
import { FaTwitter } from "react-icons/fa"

interface Testimonial {
  author: {
    name: string
    handle: string
    image: string
  }
  content: string
  hashtags?: string
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Darrell Steward",
      handle: "@darrels",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
  },
  {
    author: {
      name: "Leslie Alexander",
      handle: "@leslie",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    hashtags: "#postcrafts",
  },
  {
    author: {
      name: "Jenny Wilson",
      handle: "@jennywilson",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content: "This is a top quality product. No need to think twice before making it live on web.",
  },
  {
    author: {
      name: "Kristin Watson",
      handle: "@kristinwatson2",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content:
      "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
  },
  {
    author: {
      name: "Guy Hawkins",
      handle: "@guyhawkins",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content: "This is a top quality product. No need to think twice before making it live on web.",
  },
  {
    author: {
      name: "Floyd Miles",
      handle: "@floydmiles",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
  },
  {
    author: {
      name: "Floyd Miles",
      handle: "@floydmiles",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
  },
  {
    author: {
      name: "Floyd Miles",
      handle: "@floydmiles",
      image: "https://w7.pngwing.com/pngs/334/401/png-transparent-testimonial-avatar-business-plan-advertising-marketing-avatar-heroes-plan-business-thumbnail.png",
    },
    content:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#252835] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What our customers say</h2>
          <p className="text-gray-400">
            Read why thousands of marketers, writers, and
            <br />
            entrepreneurs love us so much.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-md p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={testimonial.author.image || "/placeholder.svg"}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.author.handle}</div>
                  </div>
                </div>
                <FaTwitter className="text-[#1DA1F2] h-4 w-4" />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">
                {testimonial.content}
                {testimonial.hashtags && <span className="text-[#1DA1F2]"> {testimonial.hashtags}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

