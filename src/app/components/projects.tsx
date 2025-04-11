import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  const project = {
    title: "Cloud Express Logistics",
    description:
      "A comprehensive logistics platform built with Next.js and TypeScript, featuring real-time cargo tracking, worldwide shipping management, and integrated warehouse solutions.",
    link: "https://cloudexpressltd.com/#",
  };

  return (
    <section className="py-8 lg:py-12 md:py-16 bg-[#F4EFEC]">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5">
          Explore my work
        </h2>

        <div className="flex justify-center text-2xl animate-element">
          <div className="max-w-md w-full">
            <div className="group overflow-hidden rounded-lg bg-[#F4EFEC] transition-all duration-300 hover:shadow-[0_0_25px_rgba(222,122,11,0.3)] animate-element">
              <div className="aspect-[16/9] overflow-hidden relative animate-element">
                <Image
                  src="/images/projects/pinoss.jpg"
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(44,2,35,0.1)]"></div>
              </div>
              <div className="p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-2 lg:mb-3">
                  <h3 className="text-2xl lg:text-2xl font-semibold text-[#de7a0b] group-hover:text-[#de7a0b] transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    className="text-white/70 hover:text-[#F4EFEC] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 lg:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="sr-only">Visit {project.title}</span>
                  </Link>
                </div>
                <p className="text-[#000]/70 text-xs sm:text-lg leading-relaxed text-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
