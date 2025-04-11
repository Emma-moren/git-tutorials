"use client";

import { useEffect, useRef } from "react";

export function Hire() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set CSS variables for the 3D rotating cards
    const inner = innerRef.current;
    if (inner) {
      // Adjust size based on screen width
      const updateSize = () => {
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

        // Responsive sizes
        const width = isMobile ? "80px" : isTablet ? "90px" : "100px";
        const height = isMobile ? "120px" : isTablet ? "135px" : "150px";

        inner.style.setProperty("--w", width);
        inner.style.setProperty("--h", height);
        inner.style.setProperty(
          "--translateZ",
          "calc((var(--w) + var(--h)) + 0px)"
        );
        inner.style.setProperty("--rotateX", "-15deg");
        inner.style.setProperty("--perspective", "1000px");
        inner.style.setProperty("--quantity", "10");
      };

      // Initial setup
      updateSize();

      // Update on resize
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  // Card colors for the rotating cards
  const cardColors = [
    "0, 0, 0", // Black
    "222, 122, 11", // Orange
    "0, 0, 0", // Black
    "222, 122, 11", // Orange
    "0, 0, 0", // Black
    "222, 122, 11", // Orange
    "0, 0, 0", // Black
    "222, 122, 11", // Orange
    "0, 0, 0", // Black
    "222, 122, 11", // Orange
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F4EFEC] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-8 sm:mb-12 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
          Hire Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* 3D Rotating Cards */}
          <div className="rotating-cards-wrapper w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative flex items-center justify-center overflow-hidden">
            <div
              ref={innerRef}
              className="rotating-cards-inner"
              style={{
                position: "absolute",
                width: "100px", // Will be overridden by CSS var
                height: "150px", // Will be overridden by CSS var
                top: "25%",
                left: "calc(50% - var(--w)/2 - 2.5px)",
                zIndex: 2,
                transformStyle: "preserve-3d",
                animation: "rotating 30s linear infinite",
              }}
            >
              {cardColors.map((color, index) => (
                <div
                  key={index}
                  className="rotating-card"
                  style={
                    {
                      position: "absolute",
                      border: `2px solid rgba(${color})`,
                      borderRadius: "12px",
                      overflow: "hidden",
                      inset: 0,
                      background: `linear-gradient(45deg, rgba(${color}, 0.9) 0%, rgba(${color}, 0.6) 100%)`,
                      transform: `rotateY(calc((360deg / var(--quantity)) * ${index})) translateZ(var(--translateZ))`,
                      "--color-card": color,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="rotating-card-img"
                    style={{
                      width: "100%",
                      height: "80%",
                      objectFit: "cover",
                      background:
                        " radial-gradient(circle,rgba(222, 122, 11, 0.9) 100%), rgba(0, 0, 0, 0.01) 100%, rgba(222, 122, 11, 0.9) 100%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Card */}
          <div className="gradient-card-wrapper w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 text-[#000]">
            <div className="gradient-card relative w-[190px] sm:w-[220px] md:w-[250px] h-[254px] sm:h-[294px] md:h-[334px] bg-[#de7a0b] flex flex-col justify-end p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 rounded-lg cursor-pointer text-white transform transition-transform duration-300 hover:scale-105">
              <p className="text-lg sm:text-xl md:text-2xl font-bold capitalize text-[#000]">
                Hire Me Today
              </p>
              <p className="text-2xl sm:text-sm md:text-base text-[#000] font-bold">
                Available for:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-sm space-y-1 text-[#000] text-2xl font-bold">
                <li>Full-time positions</li>
                <li>Contract work</li>
                <li>Freelance projects</li>
              </ul>
              <button className="mt-2 sm:mt-3 text-lg sm:text-sm md:text-base bg-transparent border border-[#000] text-[#000] hover:bg-[#e81cff] hover:text-white py-1 px-3 sm:py-2 sm:px-4 rounded transition-colors duration-300">
                Contact Me
              </button>

              {/* Pseudo-elements created with divs */}
              <div
                className="gradient-card-before absolute -z-10 pointer-events-none transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                style={{
                  content: '""',
                  inset: 0,
                  left: "-5px",
                  margin: "auto",
                  width: "calc(100% + 10px)",
                  height: "calc(100% + 10px)",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(-45deg,  rgba(222, 122, 11, 1), rgba(222, 122, 11, 0.3) 0% 100%)",
                }}
              />

              <div
                className="gradient-card-after absolute -z-1"
                style={{
                  content: '""',
                  inset: 0,
                  background:
                    " linear-gradient(-45deg, rgba(222, 122, 11, 1),  rgba(222, 122, 11, 0.3) 0% 100%)",
                  transform: "translate3d(0, 0, 0) scale(0.95)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>
        {`
          @keyframes rotating {
            from {
              transform: perspective(var(--perspective)) rotateX(var(--rotateX))
                rotateY(0);
            }
            to {
              transform: perspective(var(--perspective)) rotateX(var(--rotateX))
                rotateY(1turn);
            }
          }

          .gradient-card:hover .gradient-card-after {
            filter: blur(30px);
          }

          .gradient-card:hover .gradient-card-before {npm 
            transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
          }

          /* Responsive adjustments for very small screens */
          @media (max-width: 360px) {
            .rotating-cards-inner {
              transform: scale(0.8);
            }

            .gradient-card {
              transform: scale(0.9);
            }

            .gradient-card:hover {
              transform: scale(0.95);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hire;
