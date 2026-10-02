import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { whyNarasimhaReasons } from "../assets/data/centersPageData";

export const CenterWhyChoose: React.FC = () => {
  return (
    <section className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              THE NSS ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
            WHY <span className="font-serif italic font-normal text-[#FF7711]">NARASIMHA SKILL SPHERE?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            We bridge the gap between classroom theory and real engineering creation with industry-aligned maker learning.
          </p>
        </motion.div>

        {/* 6 Reasons Cards Grid with Images and Varied Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyNarasimhaReasons.map((reason, idx) => {
            // Varied hover transition styles for each card
            const hoverVariants = [
              {
                drawer: "translate-y-full group-hover:translate-y-0",
                defaultExit: "group-hover:-translate-y-6 group-hover:opacity-0",
              },
              {
                drawer: "-translate-x-full group-hover:translate-x-0",
                defaultExit: "group-hover:translate-x-6 group-hover:opacity-0",
              },
              {
                drawer: "translate-x-full group-hover:translate-x-0",
                defaultExit: "group-hover:-translate-x-6 group-hover:opacity-0",
              },
              {
                drawer: "-translate-y-full group-hover:translate-y-0",
                defaultExit: "group-hover:translate-y-6 group-hover:opacity-0",
              },
              {
                drawer: "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                defaultExit: "group-hover:scale-95 group-hover:opacity-0",
              },
              {
                drawer: "translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0",
                defaultExit: "group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0",
              },
            ];

            const variant = hoverVariants[idx % hoverVariants.length];
            const accent = reason.accentColor || "#FF7711";

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-500 shadow-2xl bg-[#0D0D0D] cursor-pointer flex flex-col justify-between"
                style={{
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
                }}
              >
                {/* Background Image with Zoom & Dark Scrim */}
                {reason.image && (
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.08] transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.45]"
                    loading="lazy"
                  />
                )}

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none" />

                {/* Dynamic Colored Ambient Glow on Hover */}
                <div
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: accent }}
                />

                {/* Top Bar Header (Always Visible) */}
                <div className="relative z-10 p-6 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center space-x-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-wider border shadow-sm"
                      style={{
                        backgroundColor: `${accent}20`,
                        borderColor: `${accent}50`,
                        color: accent,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {reason.tag && (
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                        {reason.tag}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    {reason.emoji}
                  </div>
                </div>

                {/* Default Bottom Content (Fades/Slides out on hover) */}
                <div
                  className={`relative z-10 p-6 transition-all duration-500 ease-out ${variant.defaultExit}`}
                >
                  <p
                    className="text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 drop-shadow-md"
                    style={{ color: accent }}
                  >
                    {reason.tagline}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2 group-hover:text-white drop-shadow-md">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed font-normal mb-3 drop-shadow">
                    {reason.description}
                  </p>
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-white/60 group-hover:text-white transition-colors">
                    <span>Hover to inspect details</span>
                    <ArrowRight className="w-3 h-3 text-[#FF7711]" />
                  </div>
                </div>

                {/* Hover Drawer Overlay (Animated with varied directions) */}
                <div
                  className={`absolute inset-0 z-20 bg-[#0B0B0C]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-in-out border border-white/20 rounded-3xl ${variant.drawer}`}
                >
                  {/* Drawer Top Header */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{reason.emoji}</span>
                        <span
                          className="text-xs font-mono font-bold uppercase tracking-wider"
                          style={{ color: accent }}
                        >
                          {reason.tagline}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 font-bold">
                        {String(idx + 1).padStart(2, "0")} / 06
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                      {reason.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                      {reason.description}
                    </p>
                  </div>

                  {/* Drawer Highlights Checklist & Footer */}
                  <div className="space-y-4 pt-3 border-t border-white/10">
                    <div className="space-y-2">
                      {reason.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start space-x-2.5 text-xs text-neutral-200"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: accent }}
                          />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="w-full py-2.5 px-3.5 rounded-xl border flex items-center justify-between text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: `${accent}15`,
                        borderColor: `${accent}35`,
                        color: accent,
                      }}
                    >
                      <span>NSS Maker Standard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
