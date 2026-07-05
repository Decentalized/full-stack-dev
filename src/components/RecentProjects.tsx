"use client";

import Image from "next/image";
import { PinContainer } from "./ui/PinContainer";
import { projects } from "@/data";

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ms-3" style={{ color: "#E50914" }} height="1em" width="1em">
    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
  </svg>
);

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Featured <span className="text-[#E50914]">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title="Project Details" href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <Image src="/bg.png" alt="bg" fill className="object-cover" sizes="570px" />
                </div>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="z-10 absolute bottom-0 object-contain"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{project.title}</h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={icon + i}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i + 2}px)` }}
                    >
                      <Image src={icon} alt="tech" width={24} height={24} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-[#E50914]">Check Live Site</p>
                  <ArrowIcon />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
