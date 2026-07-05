"use client";

import { motion } from "framer-motion";
import { blogPosts, siteConfig } from "@/data";

export const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <h1 className="heading mb-12">
        Recent <span className="text-[#E50914]">Insights</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="lg:min-h-[20rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <a
              href={post.link}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#04071D] to-[#0C0E23] w-full h-full p-6 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
            >
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E50914] bg-[#E50914]/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/40">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E50914] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-xs font-bold text-white">
                    {siteConfig.initials}
                  </div>
                  <span className="text-xs text-white/60">{siteConfig.name}</span>
                </div>
                <span className="text-[#E50914] text-sm group-hover:translate-x-1 transition-transform">
                  Read Post →
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a href="#">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E50914_0%,#000000_50%,#E50914_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View All Articles
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};
