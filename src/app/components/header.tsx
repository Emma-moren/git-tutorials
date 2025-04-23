"use client";
import "ldrs/ring";
import { useEffect, useState } from "react";

// Typing animation component with repeat
function TypingText({
  text,
  duration = 5000,
  repeatDelay = 1000,
}: {
  text: string;
  duration?: number;
  repeatDelay?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentIndex >= text.length) {
      // Wait before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, repeatDelay);
    } else if (isDeleting && currentIndex === 0) {
      // Wait before starting to type again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, repeatDelay);
    } else {
      const timePerChar = duration / text.length / 2; // Half for typing, half for deleting

      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(text.substring(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }
      }, timePerChar);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, text, duration, isDeleting, repeatDelay]);

  return (
    <span className="relative">
      {displayText}
      <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-white/80 animate-blink"></span>
    </span>
  );
}

import React from "react";
export default function Header() {
  return (
    <header className="pt-8 pb-16 bg-[#F4EFEC]  ">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex  items-center mb-8 w-full ">
          <h1 className="text-4xl font-bold text-[#de7a0b]">
            Pino<span className="text-[#000]">moren</span>
          </h1>

          <div className="text-2xl text-[#000] ml-auto">EN</div>
        </div>
        <p className="text-[#000]/80 mb-6 h-6 text-lg font-bold">
          <TypingText text="Hello, I'm" duration={5000} repeatDelay={2000} />
        </p>
        <h2 className="text-4xl font-bold text-[#de7a0b] mb-2">
          Emmanuel Irimoren
        </h2>
        <p className="text-[#000]/80 mb-6 h-6 text-lg font-bold">
          <TypingText
            text="Frontend Software Engineer"
            duration={5000}
            repeatDelay={2000}
          />
        </p>
      </div>
    </header>
  );
}
