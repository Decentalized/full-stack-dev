"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { approach } from "@/data";

export const Approach = () => {
  const colors: number[][][] = [
    [[229, 9, 20]],
    [
      [236, 72, 72],
      [180, 20, 20],
    ],
    [[125, 10, 10]],
  ];
  const bgColors = ["bg-black", "bg-black", "bg-black"];

  return (
    <section className="w-full py-20">
      <h1 id="services-approach" className="heading">
        My <span className="text-[#E50914]">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {approach.map((phase, i) => (
          <Card
            key={phase.id}
            title={phase.title}
            description={phase.desc}
            phase={phase.phase}
            bg={bgColors[i]}
          >
            <CanvasRevealEffect
              animationSpeed={i === 1 ? 3 : 5.1}
              containerClassName={bgColors[i]}
              colors={colors[i]}
              dotSize={i === 1 ? 2 : 3}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  phase,
  children,
  bg,
}: {
  title: string;
  description: string;
  phase: string;
  children?: React.ReactNode;
  bg: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-white/[0.1] group/canvas-card flex items-center justify-center hover:border-[#E50914]/40 max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl transition-colors ${bg}`}
      style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)" }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-[#E50914]/40" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-[#E50914]/40" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-[#E50914]/40" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-[#E50914]/40" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-50%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E50914_0%,#000000_50%,#E50914_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-white backdrop-blur-3xl font-bold text-2xl">
              {phase}
            </span>
          </button>
        </div>
        <h2 className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-center group-hover/canvas-card:-translate-y-2 transition duration-200 text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
};

const Icon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
