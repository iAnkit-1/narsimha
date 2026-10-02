import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { media } from "../assets/data/media";
import essentialSkillsImg from "../assets/Essential Skills_ 21st Century Tech Program.png";

interface HeroProps {
  onExplorePrograms?: () => void;
  onPartnerWithUs?: () => void;
}

interface HeroSlide {
  id: number;
  badge: string;
  badgeIcon: string;
  title: string;
  description: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Redefining STEM Education",
    badgeIcon: "🚀",
    title: "🌟 Building the Innovators of Tomorrow",
    description: "Hands-on STEM learning that turns classrooms into spaces for discovery, creation and real-world problem-solving.",
  },
  {
    id: 2,
    badge: "Robotics for Young Innovators",
    badgeIcon: "🤖",
    title: "⚙️ Turn Ideas into Intelligent Machines",
    description: "Design, build and program robots while developing engineering, computational thinking and creativity.",
  },
  {
    id: 3,
    badge: "AI for Young Minds",
    badgeIcon: "🧠",
    title: "💡 From Curiosity to Computational Thinking",
    description: "Explore AI through age-appropriate activities that build logic, pattern recognition and responsible technology skills.",
  },
  {
    id: 4,
    badge: "Connected Classrooms",
    badgeIcon: "🌐",
    title: "💬 Make Ideas Talk to the Real World",
    description: "Build sensor-based projects and explore IoT, smart systems and real-world applications.",
  },
  {
    id: 5,
    badge: "Design • Prototype • Improve",
    badgeIcon: "🎨",
    title: "✨ Bring Imagination into Three Dimensions",
    description: "Turn ideas into prototypes through 3D design, fabrication and iterative making.",
  },
];

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  // Typing animation effect for the slide title
  useEffect(() => {
    const fullText = activeSlide.title;
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
          setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 4200);
      }
    }, 45);

    return () => {
      clearInterval(typeInterval);
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, [currentSlideIndex, activeSlide.title]);

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-0">

      {/* 1. Full-Width Background Video Player with Crystal-Clear Contrast */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08] saturate-[1.1] scale-100 transition-all bg-[#080808]"
        >
          <source src={media.heroVideo} type="video/mp4" />
          <source src={media.heroVideoStatic} type="video/mp4" />
        </video>

        {/* Lightweight translucent gradient to ensure crisp text contrast over live video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/30" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080808]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808]/90 to-transparent" />
      </div>

      {/* 2. Left-Center Dynamic Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center text-left my-auto py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl xl:max-w-3xl flex flex-col items-start text-left">

          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full flex flex-col items-start text-left"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FF7711]/50 w-fit mb-4 backdrop-blur-md shadow-lg shadow-black/60">
                <span className="text-sm">{activeSlide.badgeIcon}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  {activeSlide.badge}
                </span>
              </div>

              {/* Main Headline with Real-Time Typing Animation */}
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#FFFFFF] tracking-tight leading-[1.15] mb-4 min-h-[64px] sm:min-h-[85px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                <span>{typedTitle}</span>
                <span className="inline-block w-1 h-[0.9em] bg-[#FF7711] ml-1.5 align-middle animate-pulse" />
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#E2E8F0] leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-3">
                {activeSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Progress Dots / Indicators */}
          <div className="flex items-center space-x-2 mt-2 pt-2 border-t border-white/10 w-fit">
            <span className="text-[11px] font-mono text-white/60 tracking-wider">
              PROGRAMS
            </span>
            <div className="flex items-center space-x-1.5 pl-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                    setCurrentSlideIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlideIndex
                      ? "w-7 bg-[#FF7711]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Essential Skills Of 21st Century Image - Independently Positioned at Bottom Right */}
      <div className="w-full lg:w-auto relative lg:absolute lg:bottom-0 lg:right-6 xl:right-10 z-20 flex justify-end px-4 sm:px-6 lg:px-0 mt-auto pointer-events-auto">
        <div className="relative w-full sm:max-w-md lg:w-[380px] xl:w-[420px] transition-all duration-300">
          <img
            src={essentialSkillsImg}
            alt="Essential Skills: 21st Century Tech Program"
            className="w-full h-auto object-contain block filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};
