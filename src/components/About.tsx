"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems, siteConfig } from "@/data";

export const About = () => {
  return (
    <section id="about">
      <div className="w-full py-20 space-y-8 lg:space-y-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-black via-[#080808] to-black shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_80px_-20px_rgba(229,9,20,0.12)] hover:border-white/[0.12] transition-all duration-300"
        >
          <div className="relative z-10 px-6 pt-4 pb-8 md:px-10 md:py-10">
            <div className="max-w-2xl mx-auto text-center md:text-left">
              <p className="text-sm md:text-base text-white/60 font-light tracking-wide uppercase mb-2">
                Full-stack, AI, and blockchain - shipped for startups and enterprises worldwide
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-[#E50914] via-red-500 to-[#E50914] bg-clip-text text-transparent">
                  {siteConfig.role}
                </span>
              </h2>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent opacity-80" />
        </motion.article>

        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
