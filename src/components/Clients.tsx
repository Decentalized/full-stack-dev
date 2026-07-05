import Image from "next/image";
import { companies } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from<span className="text-[#E50914]"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image src={company.img} alt={company.name} width={40} height={40} className="md:w-10 w-5 h-auto" />
              <Image src={company.nameImg} alt={company.name} width={150} height={40} className="md:w-24 w-20 h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
