import Image from "next/image";

export function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#646CFF",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

      color: "#764ABC",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

      color: "#E535AB",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },

    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

      color: "#FF6C37",
    },

    {
      name: "php",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#FFCA28",
    },
    {
      name: "mysql",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#000",
    },
    {
      name: "tailwindcss",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
      color: "#000",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      color: "#000",
    },
    {
      name: "Nodejs",
      icon: "http://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#000",
    },
  ];
  // Split skills into two groups for different marquee directions
  const firstHalf = skills.slice(0, skills.length / 2);
  const secondHalf = skills.slice(skills.length / 2);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F4EFEC] animate-element">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5">
          My Skills
        </h2>
        {/* Left to Right Marquee */}
        <div className="relative w-full mb-8 overflow-hidden">
          <div className="flex space-x-6 animate-marquee-left">
            {[...firstHalf, ...firstHalf].map((skill, index) => (
              <div
                key={`left-${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-[#F4EFEC] transition-all duration-300 hover:scale-90 flex-shrink-0 w-24 sm:w-28 md:w-32 border-2 border-[#de7a0b] outline outline-0 outline-[#de7a0b]"
                /*   style={{
                  boxShadow: `0 0 20px rgba(222, 122, 11, 0.2)`,
                }} */
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 relative flex items-center justify-center">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    style={{
                      filter:
                        skill.name === "NextJS"
                          ? "invert(1)"
                          : "brightness(1.2)",
                    }}
                  />
                </div>
                <span className="text-[#000]/80 text-xs sm:text-sm text-center font-medium group-hover:text-[#de7a0b] transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right to Left Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-marquee-right">
            {[...secondHalf, ...secondHalf].map((skill, index) => (
              <div
                key={`right-${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-[#F4EFEC] transition-all duration-300 hover:scale-90 flex-shrink-0 w-24 sm:w-28 md:w-32 border-2 border-[#de7a0b] outline outline-1 outline-[#de7a0b]"
                /*  style={{
                  boxShadow: `0 0 20px rgba(222, 122, 11, 0.2)`,
                }} */
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 relative flex items-center justify-center">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    style={{
                      filter:
                        skill.name === "NextJS"
                          ? "invert(1)"
                          : "brightness(1.2)",
                    }}
                  />
                </div>
                <span className="text-[#000]/80 text-xs sm:text-sm text-center font-medium group-hover:text-[#de7a0b] transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
