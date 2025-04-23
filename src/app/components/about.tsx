"use client";
import { useRef, useEffect } from "react";
export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section className="py-6 sm:py-16 md:py-20 lg:py-24 bg-[#F4EFEC] ">
      <div className="-container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5">
          About Me
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden  bg-[#F4EFEC] shadow-lg border border-[#de7a0b]/10 ">
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Software%20engineer%20working%20on%20computer-dlggtS1RPsNWkTvbIBMuOA1JwJkHrP.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="space-y-4 text-[#000]/80 text-sm sm:text-base p-4 rounded-lg">
              <p className="text-2xl leading-relaxed animate-element">
                As a seasoned full stack software engineer, I have a strong
                desire to build outstanding, intuitive online experiences.
                Having worked with JavaScript, React, Next.js, TypeScript, PHP,
                and MySQL, I combine design and functionality to create fluid,
                captivating digital solutions.
              </p>
              <p className="text-2xl leading-relaxed animate-element">
                I operate well in Agile settings as a flexible and cooperative
                team player, collaborating with a variety of teams to provide
                lasting value to life. Beyond coding, I appreciate breaking down
                difficult technical ideas into understandable manuals and
                documentation that empower both developers and users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
