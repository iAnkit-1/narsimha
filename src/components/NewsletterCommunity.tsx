import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// NOTE: Replace this with your official WhatsApp Channel URL when ready
// e.g. "https://whatsapp.com/channel/0029Va..."
export const WHATSAPP_COMMUNITY_URL =
  "https://api.whatsapp.com/send?phone=919709719731&text=Hello%20Narasimha%20Skill%20Sphere!%20I%20would%20like%20to%20join%20the%20Innovation%20Community%20updates.";

export const NewsletterCommunity: React.FC = () => {
  const handleJoinWhatsApp = () => {
    window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-[#090909] border-b border-[#222222] py-14 sm:py-16 lg:py-20 relative overflow-hidden font-sans">
      {/* Background radial accent glows (restored to original) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF7711]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#25D366]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge (original orange branding) */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-4 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            COMMUNITY & INSIGHTS
          </span>
        </div>

        {/* Headline (original orange gradient) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
          Join Our{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            Innovation Community
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Get real-time updates on STEM innovations, hackathons, robotics challenges, student showcases, and educator resources.
        </p>

        {/* WhatsApp Button with dancing image and green glassy look without shine */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleJoinWhatsApp}
            type="button"
            className="group relative inline-flex items-center gap-3.5 sm:gap-4.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 backdrop-blur-xl border border-[#25D366]/35 hover:border-[#25D366]/70 text-white shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-[#25D366]/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer font-sans"
          >
            {/* Dancing Floating 3D WhatsApp Icon */}
            <motion.div
              animate={{
                y: [0, -6, 1, -4, 0],
                rotate: [0, -5, 3, -3, 0],
                scale: [1, 1.05, 1.01, 1.03, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative shrink-0 flex items-center justify-center"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11">
                <img
                  src="/whatsapp_3d.png"
                  alt="WhatsApp 3D Icon"
                  className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                />
              </div>
            </motion.div>

            {/* Simple Text */}
            <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#25D366] transition-colors font-sans">
              Join our WhatsApp Community
            </span>

            {/* Hover Arrow Indicator */}
            <div className="p-1.5 rounded-lg bg-[#25D366]/20 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-[#090909] transition-all duration-300 ml-1">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
