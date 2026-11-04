import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Heart, ArrowRight } from "lucide-react";
import parentMessageImg from "../assets/msgtoparents.png";
import { TrialClassModal } from "./TrialClassModal";

export const CenterParentMessage: React.FC = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#090909] border-b border-[#222222] py-10 sm:py-14 relative overflow-hidden">
      {/* Glow ambient background accents */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#38BDF8]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-[420px] h-[420px] bg-[#FF7711]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Container with balanced proportion */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] via-[#101010] to-[#131313] border border-[#272727] shadow-2xl relative overflow-hidden min-h-[460px] lg:min-h-[500px] flex flex-col justify-between">

          {/* Subtle decorative curved ambient corner accents */}
          <div className="absolute -top-16 -left-16 w-44 h-44 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[#FF7711]/12 rounded-full blur-3xl pointer-events-none" />

          {/* Unbound, uncropped full-height image anchored to the right (Desktop) */}
          <div className="hidden lg:flex absolute right-0 bottom-0 top-0 h-full w-[54%] xl:w-[50%] max-w-[580px] items-end justify-end pointer-events-none select-none z-0">
            {/* Ambient radial glow behind the transparent cutout */}
            <div className="absolute inset-0 bg-radial from-[#FF7711]/12 via-[#38BDF8]/6 to-transparent blur-2xl rounded-full" />
            <img
              src={parentMessageImg}
              alt="Parents and child exploring robotics and STEM learning together"
              className="h-full w-full object-contain object-right-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Left Column: Wrapped Text Content around the image's left side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8 lg:p-10 relative z-10 max-w-full lg:max-w-[58%] xl:max-w-[60%] flex flex-col justify-between h-full"
          >
            <div>
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1813] border border-amber-500/30 mb-3.5 shadow-sm">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-extrabold">
                  A MESSAGE TO PARENTS
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-[1.18] mb-3.5 max-w-xl">
                Is your child ready for the world they will enter{" "}
                <span className="text-[#FF7711]">tomorrow?</span>
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-normal mb-4 max-w-lg">
                <p>
                  The world is changing faster than ever. Technology, AI, robotics, and digital skills are becoming part of everyday life — and children who start exploring these skills early get more opportunities to learn, experiment, and build confidence.
                </p>

                <p>
                  Because the future is not something children should only prepare for — it is something they should experience, explore, and create.
                </p>
              </div>

              {/* Heart Callout Box */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#1A1813] border border-amber-500/30 flex items-center space-x-3 mb-5 shadow-sm max-w-md lg:max-w-[480px]">
                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs sm:text-[13px] font-semibold text-[#F1F1F1] leading-snug">
                  Give your child a place to explore. Give them the freedom to create. Give them the opportunity to build their future.
                </p>
              </div>

              {/* Closing Callout with Decorative Underline & CTA Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 max-w-xl">
                <div className="relative inline-block">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Let’s start their journey together.
                  </h3>
                  <svg className="w-full h-2.5 text-[#FF7711] mt-0.5" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                <button
                  onClick={() => setIsTrialModalOpen(true)}
                  className="btn-orange-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 self-start sm:self-auto cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
                >
                  <span>Book A Center Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </motion.div>

          {/* Mobile / Tablet: Uncropped image displayed below text */}
          <div className="w-full flex items-end justify-center pt-2 pb-0 lg:hidden overflow-hidden z-0">
            <img
              src={parentMessageImg}
              alt="Parents and child exploring robotics and STEM learning together"
              className="w-full max-w-[360px] sm:max-w-[400px] h-auto object-contain object-bottom drop-shadow-xl"
            />
          </div>

        </div>
      </div>

      {/* Book a Free Trial Class WhatsApp Popup Modal */}
      <TrialClassModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </section>
  );
};
