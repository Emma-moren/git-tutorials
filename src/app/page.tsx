"use client";
import { useState, useEffect } from "react";
import { helix } from "ldrs";
import Header from "./components/header";
import { Nav } from "./components/nav";
import About from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

import { Testimonials } from "./components/testimonials";
import { Hire } from "./components/hire";
import { Footer } from "./components/footer";

helix.register();

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="min-h-screen bg-[#F4EFEC] ">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen w-full">
          <l-helix size="90" speed="2.5" color="black"></l-helix>
        </div>
      ) : (
        <>
          <Nav />
          <div id="header">
            <Header />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="projects">
            {" "}
            <Projects />
          </div>

          <div id="testimonials">
            {" "}
            <Testimonials />
          </div>
          <div>
            {" "}
            <Hire />
          </div>

          {/*  <AnimatedSection>
        <div id="contact">
          {" "}
          <Contact />
        </div>
      </AnimatedSection> */}

          <div id="footer">
            {" "}
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
