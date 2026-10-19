import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Compass, Cpu, Bot } from "lucide-react";
import centerHeroVid from "../assets/center_hero.mp4";

interface CenterHeroProps {
  onExploreCourses?: () => void;
  onBookVisit?: () => void;
}

interface CenterHeroQuote {
  id: number;
  badge: string;
  badgeIcon: string;
  title: string;
  description: string;
}

const CENTER_HERO_QUOTES: CenterHeroQuote[] = [
  {
    id: 1,
    badge: "Curiosity to Innovation",
    badgeIcon: "🚀",
    title: "From Curiosity to Innovation",
    description: "Turning Ideas into Impact. Learn Future Skills for a Brighter Future.",
  },
  {
    id: 2,
    badge: "Logic to Code",
    badgeIcon: "💻",
    title: "From Logic to Code",
    description: "Think Creatively. Code Smartly. Learn Future Skills for a Brighter Future.",
  },
  {
    id: 3,
    badge: "Data to Intelligence",
    badgeIcon: "🧠",
    title: "From Data to Intelligence",
    description: "Explore AI. Unlock Possibilities. Learn Future Skills for a Brighter Future.",
  },
  {
    id: 4,
    badge: "Imagination to Creation",
    badgeIcon: "✨",
    title: "From Imagination to Creation",
    description: "Design the Future. Bring Ideas to Life. Learn Future Skills for a Brighter Future.",
  },
  {
    id: 5,
    badge: "Problems to Possibilities",
    badgeIcon: "⚙️",
    title: "From Problems to Possibilities",
    description: "Think Beyond Limits. Create Real-World Solutions. Learn Future Skills for a Brighter Future.",
  },
];

export const CenterHero: React.FC<CenterHeroProps> = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeQuote = CENTER_HERO_QUOTES[currentQuoteIndex];

  // Typing animation effect for the quote title (just like Hero.tsx)
  useEffect(() => {
    const fullText = activeQuote.title;
    setTypedTitle("");
    let charIndex = 0;

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    const typeInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedTitle(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // After finishing typing, wait before moving to next slide
        typingTimerRef.current = setTimeout(() => {
          setCurrentQuoteIndex((prev) => (prev + 1) % CENTER_HERO_QUOTES.length);
        }, 4200);
      }
    }, 45);

    return () => {
      clearInterval(typeInterval);
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, [currentQuoteIndex, activeQuote.title]);

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">

      {/* 1. Full-Width Background Video Player with Contrast Gradient Overlays */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08] saturate-[1.1] scale-100 transition-all bg-[#080808]"
        >
          <source src={centerHeroVid} type="video/mp4" />
        </video>

        {/* Multi-layered translucent gradient to ensure crisp text contrast over live video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080808]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center text-left my-auto">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FF7711]/50 w-fit mb-5 backdrop-blur-md shadow-lg shadow-black/60">
            <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              OUR CENTER
            </span>
            <span className="text-xs text-white/50">•</span>
            <span className="text-xs font-mono text-white/80">Offline Innovation Lab</span>
          </div>

          {/* Animated Quote Slide with Real-Time Typing Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full flex flex-col items-start text-left"
            >
              {/* Main Headline with Real-Time Typing Animation */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black text-white tracking-tight leading-[1.08] mb-3 min-h-[75px] sm:min-h-[120px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                <span>{typedTitle}</span>
                <span className="inline-block w-1.5 h-[0.88em] bg-[#FF7711] ml-2 align-middle animate-pulse" />
              </h1>

              {/* Subhead Tagline Quote */}
              <p className="text-base sm:text-xl font-bold text-[#38BDF8] tracking-tight mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                {activeQuote.description}
              </p>
            </motion.div>
          </AnimatePresence>


          {/* Slide Progress Dots / Indicators */}
          <div className="flex items-center space-x-2.5 mb-7 pt-2 border-t border-white/10 w-fit">
          
            <div className="flex items-center space-x-1.5 pl-2">
              {CENTER_HERO_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                    setCurrentQuoteIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentQuoteIndex
                      ? "w-7 bg-[#FF7711]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Quote ${idx + 1}`}
                />
              ))}
            </div>
       
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#our-courses"
              className="btn-orange-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_4px_20px_rgba(255,119,17,0.45)] hover:shadow-[0_4px_30px_rgba(255,119,17,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Our Courses</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#book-visit"
              className="btn-dark-secondary px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711] backdrop-blur-md bg-black/40 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#FF7711]" />
              <span>Visit Our Center</span>
            </a>
          </motion.div>

          {/* Quick Pillar Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/80"
          >
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Bot className="w-3.5 h-3.5 text-[#FF7711]" />
              <span>Robotics Lab</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>AI & Coding Workbench</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>3D Printing & Making</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>100% Hands-On</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
