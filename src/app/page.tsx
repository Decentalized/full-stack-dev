import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { IntroCards } from "@/components/IntroCards";
import { RecentProjects } from "@/components/RecentProjects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Clients } from "@/components/Clients";
import { Approach } from "@/components/Approach";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full max-w-full min-w-0 bg-black flex flex-col items-center overflow-x-clip pb-8 md:pb-0">
      <FloatingNav />
      <Hero />
      <IntroCards />
      <div className="w-full max-w-7xl min-w-0 mx-auto sm:px-10 px-5">
        <RecentProjects />
        <About />
        <Experience />
        <Clients />
        <Approach />
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
