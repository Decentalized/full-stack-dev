import { siteConfig, footerLinks, footerSocials } from "@/data";
import { MagicButton } from "./ui/MagicButton";

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden rounded-t-3xl border-t border-white/[0.2] bg-[#0a0a0a] pt-16 pb-24 md:pb-8"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent opacity-90" />
      <div className="absolute inset-0 top-auto left-0 right-0 h-40 pointer-events-none opacity-30">
        <img src="/footer-grid.svg" alt="" className="w-full h-full object-cover object-top" />
      </div>

      <div className="relative flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center lg:max-w-[45vw]">
          Ready to take <span className="text-[#E50914]">your</span> digital presence to the next level?
        </h2>
        <p className="text-[#BEC1DD] text-sm md:text-base text-center mt-4 mb-2 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <div className="flex items-center gap-2 text-[#BEC1DD] text-xs md:text-sm mb-6">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="w-3.5 h-3.5 flex-shrink-0" height="1em" width="1em">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
          <span>{siteConfig.location} — serving clients worldwide</span>
        </div>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
          <MagicButton title="Let's get in touch" icon={<ArrowIcon />} position="right" />
        </a>
      </div>

      <div className="relative mx-auto mt-14 mb-8 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />

      <div className="relative flex flex-col sm:flex-row justify-between items-center gap-4 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 order-1">
          {footerSocials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs flex justify-center items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 hover:border-[#E50914]/60 hover:bg-[#E50914]/10 hover:text-white transition-colors duration-200"
              aria-label={s.name}
              title={s.name}
            >
              {s.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center sm:items-end order-2 gap-2">
          <p className="text-[#BEC1DD] text-xs md:text-sm font-light text-center sm:text-right">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 md:gap-4 text-[#BEC1DD] text-xs mt-1">
            {footerLinks.map((l) => (
              <a key={l.name} href={l.link} className="hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
