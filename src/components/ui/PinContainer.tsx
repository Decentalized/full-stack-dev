"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  const onMouseLeave = () => setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");

  return (
    <a
      className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0deg)" }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-4"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>

      <PinPerspective title={title} href={href} />
    </a>
  );
};

export const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  return (
    <div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <span className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title || href}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#E50914]/0 via-[#E50914]/90 to-[#E50914]/0 transition-opacity duration-500 group-hover/pin:opacity-40" />
          </span>
        </div>

        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <span
              key={delay}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-[#E50914]/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] animate-ping"
              style={{
                animationDelay: `${delay}s`,
                animationDuration: "6s",
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </div>

        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#E50914] translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#E50914] translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-[#E50914] translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
        <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-red-400 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </div>
  );
};
