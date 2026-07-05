"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { skillColumns } from "@/data";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { MagicButton } from "./MagicButton";
import { siteConfig } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string;
  description?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.linkedin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl hover:shadow-[#E50914]/10 transition duration-200 justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)" }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={title || ""}
              fill
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={220}
              height={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#e5e5e5] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {skillColumns.map((column, i) => (
                <div key={i} className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {i === 1 && (
                    <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#1a1a1a]" />
                  )}
                  {column.map((item) => (
                    <span
                      key={item}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1a1a1a] text-red-500"
                    >
                      {item}
                    </span>
                  ))}
                  {i === 0 && (
                    <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#1a1a1a]" />
                  )}
                </div>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative z-50">
              <MagicButton
                title={copied ? "LinkedIn copied!" : "Copy my LinkedIn"}
                icon={<CopyIcon />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#E50914] !text-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CopyIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z" />
  </svg>
);
