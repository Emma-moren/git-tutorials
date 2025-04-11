"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Working with Emmanuel was a pleasure; he not only perfected the aesthetics but also made sure that every encounter was smooth and orderly.  We communicated well at all times, and he took the initiative to provide suggestions for enhancements that I hadn't even thought of.",
      author: "Glory Aptech",
    },
    {
      text: "I had the good fortune to have Emmanuel make my vision a reality.  He was incredibly helpful to the project because of his ability to think creatively and provide ideas that went above and beyond our expectations.",
      author: "Adenike Lapite",
    },
    {
      text: "Emmanuel is a dedicated developer who works hard!  Working with him has been enjoyable, and I can state with confidence that he regularly produces excellent work on schedule.",
      author: "Lechi Obayi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-[#F4EFEC] overflow-hidden animate-element">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
          Testimonials
        </h2>
        <div className="relative">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 ">
                <div className="relative p-8 rounded-lg bg-[#F4EFEC] transition-all duration-300 hover:shadow-[0_0_25px_rgba(222,122,11,0.3)]">
                  <Quote className="w-8 h-8 text-[#F4EFEC]/20 absolute top-6 left-6" />
                  <div className="relative">
                    <p className="text-[#000]/80 mb-6 leading-relaxed text-2xl">
                      {testimonial.text}
                    </p>
                    <p className="text-[#de7a0b] font-semibold text-2xl">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#de7a0b] w-4"
                    : "bg-[#de7a0b]/20 hover:bg-[#5686fb]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
