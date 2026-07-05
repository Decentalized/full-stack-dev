"use client";

import { useState } from "react";
import { navItems, siteConfig } from "@/data";
import { cn } from "@/lib/utils";

export const FloatingNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="fixed top-4 md:top-6 inset-x-0 mx-auto w-fit max-w-[95%] border border-white/[0.2] rounded-full bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 md:px-4 py-2 text-sm flex items-center justify-between gap-2 md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2 border-r border-white/[0.2] pr-3 md:pr-6">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#E50914]" />
          </span>
          <span className="text-[10px] md:text-xs text-white/80 font-medium uppercase tracking-wider whitespace-nowrap">
            Online
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setActive(item.name)}
              className={cn(
                "relative items-center flex px-4 py-2 rounded-full transition-colors duration-200",
                active === item.name ? "text-white" : "text-[#BEC1DD] hover:text-neutral-300"
              )}
            >
              {active === item.name && (
                <>
                  <span className="absolute inset-0 rounded-full bg-[#E50914] mix-blend-overlay opacity-30" />
                  <span className="absolute inset-0 rounded-full border border-[#E50914]/50" />
                </>
              )}
              <span className={cn("text-sm", active === item.name && "font-semibold")}>
                {item.name}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2 border-l border-white/[0.2] pl-3 md:pl-6">
          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-[10px] text-white/50 whitespace-nowrap">{siteConfig.locationShort}</span>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-[5000] md:hidden border-t border-white/[0.2] bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setActive(item.name)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center min-w-0 py-2 px-1 rounded-lg transition-colors",
                active === item.name
                  ? "text-[#E50914] bg-[#E50914]/10"
                  : "text-[#BEC1DD] hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-[10px] font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
