"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { MagicButton } from "./ui/MagicButton";
import { siteConfig, heroStats, techPills } from "@/data";

const FaLocationDot = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
  </svg>
);

const StatIcon = ({ index }: { index: number }) => {
  const paths = [
    "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82z",
    "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177z",
    "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
  ];
  const viewBoxes = ["0 0 384 512", "0 0 496 512", "0 0 640 512"];
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={viewBoxes[index]}
      className={`w-5 h-5 mx-auto mb-2 text-transparent bg-gradient-to-r ${heroStats[index].gradient} bg-clip-text`}
      height="1em"
      width="1em"
    >
      <path d={paths[index]} />
    </svg>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-32">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse [animation-delay:2s]" />
        </div>
        <div className="absolute inset-0 bg-grid-white bg-[size:20px_20px]" />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#E50914" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#b81c1c" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
                    Hello, I&apos;m
                  </span>
                  <span className="block font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent mt-2">
                    {siteConfig.name}
                  </span>
                </h1>

                <div className="space-y-1 pt-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 leading-tight">
                    {siteConfig.title}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-medium">
                    {siteConfig.subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl pt-2">
                  {siteConfig.role}
                  {" · "}
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:text-red-400 transition-colors relative z-50"
                  >
                    LinkedIn
                  </a>
                  <br className="hidden sm:block" />
                  <span className="text-white/60">{siteConfig.tagline}</span>
                </p>

                <div className="flex items-center gap-2 text-white/50 text-sm md:text-base pt-1">
                  <FaLocationDot />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a href="#projects" className="inline-block">
                    <MagicButton title="Explore My Work" icon={<ArrowIcon />} position="right" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column: profile card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-900/20 via-black/20 to-zinc-900/20 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl" />
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 top-16 left-16 blur-2xl" />
                  <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-red-600/20 to-black/20 bottom-24 right-24 blur-2xl" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                      className="relative"
                    >
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#E50914] via-red-600 to-[#b81c1c] p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                          <Image
                            src={siteConfig.profileImage}
                            alt={siteConfig.name}
                            width={112}
                            height={112}
                            unoptimized
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-red-500/50" />
                    </motion.div>

                    <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                      {heroStats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <StatIcon index={i} />
                          <p className={`text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/50 mt-1 leading-tight">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center max-w-sm">
                      {techPills.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-center space-y-2 pt-2">
                      <p className="text-white/90 text-lg font-semibold">Building Digital Excellence</p>
                      <p className="text-white/50 text-sm">Secure • Scalable • Creative</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 lg:hidden">
            {heroStats.map((stat, i) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <StatIcon index={i} />
                <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-white/60 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
