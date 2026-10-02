import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, ArrowRight } from "lucide-react";

export const CenterParentMessage: React.FC = () => {
  return (
    <section className="w-full bg-[#090909] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
      {/* Glow ambient background accents */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-[#38BDF8]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#FF7711]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="rounded-3xl bg-gradient-to-br from-[#141414] via-[#101010] to-[#141414] border border-[#272727] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Editorial Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1813] border border-amber-500/30 mb-5 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-extrabold">
                    A MESSAGE TO PARENTS
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
                  Is your child ready for the world they will enter{" "}
                  <span className="text-[#FF7711]">tomorrow?</span>
                </h2>

                {/* Body Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-normal mb-6">
                  <p>
                    The world is changing faster than ever. Technology, AI, robotics, and digital skills are becoming part of everyday life — and children who start exploring these skills early get more opportunities to learn, experiment, and build confidence.
                  </p>

                  <p>
                    Because the future is not something children should only prepare for — it is something they should experience, explore, and create.
                  </p>
                </div>

                {/* Heart Callout Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A1813] border border-amber-500/30 flex items-start space-x-3.5 mb-7 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#F1F1F1] leading-relaxed">
                    Give your child a place to explore. Give them the freedom to create. Give them the opportunity to build their future.
                  </p>
                </div>

                {/* Closing Callout with Decorative Underline & CTA Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
                  <div className="relative inline-block">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Let’s start their journey together.
                    </h3>
                    <svg className="w-full h-3 text-[#FF7711] mt-1" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>

                  <a
                    href="#book-visit"
                    className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 self-start sm:self-auto"
                  >
                    <span>Book A Center Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Visual Frame with Real Family Photo (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#161616] shadow-2xl group">
                <img
                  src="/parents_child_robotics.jpg"
                  alt="Parents and child exploring robotics and STEM learning together"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top-Right Mini Frame (Matching the wall frame in the reference image) */}
                <div className="absolute top-4 right-4 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-right shadow-xl">
                  <span className="text-[11px] font-mono font-extrabold text-[#38BDF8] block leading-tight">
                    Today They Learn
                  </span>
                  <span className="text-[11px] font-mono font-extrabold text-[#FF7711] block leading-tight mt-0.5">
                    Tomorrow They Create
                  </span>
                  <span className="text-sm block mt-0.5 text-white/90">☺</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
