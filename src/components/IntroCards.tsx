"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridGlobe } from "./ui/GridGlobe";
import { siteConfig, philosophy, socials } from "@/data";
import { cn } from "@/lib/utils";

const card = "rounded-3xl border border-white/[0.08] bg-black/90 backdrop-blur-sm overflow-hidden flex flex-col";

export const IntroCards = () => {
  const [activePhil, setActivePhil] = useState(philosophy[0].key);
  const [copied, setCopied] = useState(false);

  const active = philosophy.find((p) => p.key === activePhil)!;

  const copyLinkedIn = () => {
    navigator.clipboard.writeText(siteConfig.linkedin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full pt-14 md:pt-28 pb-6 md:pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {/* Card 1: name + socials */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={card}
          >
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                <span className="font-sans">{siteConfig.firstName}</span>{" "}
                <span className="font-serif italic text-white/90">{siteConfig.lastName}</span>
              </h1>
              <div className="flex items-center gap-2 text-white/60 text-sm mt-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="w-4 h-4 flex-shrink-0" height="1em" width="1em">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <span>{siteConfig.locationShort} </span>
              </div>
              <div className="mt-6 flex-1 min-h-[140px] rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E50914]/30 to-[#E50914]/10 flex items-center justify-center text-2xl font-bold text-[#E50914]/60">
                  {siteConfig.initials}
                </div>
              </div>
              <div className="flex gap-4 mt-6 pt-4 border-t border-white/[0.08]">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label={s.name}
                  >
                    <Image src={s.img} alt={s.name} width={24} height={24} className="w-6 h-6 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Card 2: philosophy + 3D globe */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={card}
          >
            <div className="p-6 md:p-8 flex flex-col flex-1 min-h-0">
              <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                <span className="inline-block w-4 h-4 border border-white/30 rounded-sm rotate-45" />
                Detail-driven UI
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-bold text-white">
                Interfaces <span className="font-serif italic text-white/80">you can feel.</span>
              </h2>
              <p className="text-sm text-white/60 mt-2">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>

              <div className="mt-6 flex items-center justify-between gap-2">
                <span className="text-white/50 text-xs uppercase tracking-wider">Philosophy</span>
                <span className="text-white/40 text-lg">+</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {philosophy.map((p) => (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActivePhil(p.key)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                      activePhil === p.key
                        ? "bg-[#E50914] border-[#E50914] text-white"
                        : "border-white/20 text-white/70 hover:border-white/40"
                    )}
                  >
                    {p.key}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-base font-semibold text-white">{active.title}</p>
              <p className="text-sm text-white/60">{active.desc}</p>

              <div className="mt-6 flex-1 min-h-[280px] flex items-end justify-center -mb-4">
                <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-square rounded-full overflow-hidden bg-black/80 shadow-2xl">
                  <GridGlobe />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Card 3: contact */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={card}
          >
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm text-white/80">Available for work</span>
              </div>
              <div className="mt-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Let&apos;s build something{" "}
                  <span className="font-serif italic text-white/80">that actually works.</span>
                </h2>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-white/60">in</span>
                  <button
                    type="button"
                    onClick={copyLinkedIn}
                    className="text-white font-medium hover:text-[#E50914] transition-colors text-left text-sm"
                  >
                    {siteConfig.linkedinDisplay}
                  </button>
                </div>
                <p className="text-xs text-white/50 mt-1">{copied ? "Copied!" : "Tap to copy LinkedIn URL"}</p>
              </div>
              <div className="mt-8">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E50914] via-red-600 to-[#b81c1c] px-6 text-sm font-semibold text-white shadow-lg shadow-[#E50914]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#E50914]/30 hover:scale-[1.02]"
                >
                  Connect now
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
