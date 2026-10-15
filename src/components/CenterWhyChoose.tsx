import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { whyNarasimhaReasons } from "../assets/data/centersPageData";

export const CenterWhyChoose: React.FC = () => {
  return (
    <section className="w-full bg-[#080808] border-b border-[#222222] py-12 sm:py-14 lg:py-16 relative">
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
            WHY{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              NARASIMHA SKILL SPHERE?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            We bridge the gap between classroom theory and real engineering creation with industry-aligned maker learning.
          </p>
        </motion.div>

        {/* 6 Reasons Cards Grid - Modern Horizontal Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {whyNarasimhaReasons.map((reason, idx) => {
            const accent = reason.accentColor || "#FF7711";

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl bg-[#111111] flex flex-col sm:flex-row hover:-translate-y-1"
              >
                {/* Ambient Glow */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: accent }}
                />

                {/* Left: Horizontal Image Container */}
                <div className="relative w-full sm:w-[210px] md:w-[230px] shrink-0 h-48 sm:h-auto overflow-hidden bg-black">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 sm:from-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  {reason.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-white shadow-md">
                      {reason.tag}
                    </span>
                  )}
                </div>

                {/* Right: Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Emoji + Tagline Header */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{reason.emoji}</span>
                      <span
                        className="text-[11px] font-mono font-bold uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {reason.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2.5 group-hover:text-white transition-colors">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#A1A1A1] leading-relaxed mb-4">
                      {reason.description}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 pt-3.5 border-t border-white/10">
                    {reason.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 text-xs text-[#E2E8F0]"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: accent }}
                        />
                        <span className="font-medium text-[11px] sm:text-xs text-[#CCCCCC] leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
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
