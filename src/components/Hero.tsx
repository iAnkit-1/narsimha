import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, BrainCircuit, Code2,
  Printer, Compass, Sparkles, Activity, CheckCircle2,
  Boxes, Lightbulb, Wifi
} from "lucide-react";
import { media } from "../assets/data/media";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  // Rotating images for the compact Essential Skills Card
  const rotatingImages = media.heroValueCardImages || [
    { url: media.hero, tag: "High-Tech Maker Lab" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingImages.length]);

  const skillOfferings = [
    { name: "Robotics", icon: Bot, highlight: true },
    { name: "IoT", icon: Wifi, highlight: false },
    { name: "AI/ML", icon: BrainCircuit, highlight: true },
    { name: "STEM", icon: Sparkles, highlight: false },
    { name: "ATL", icon: Activity, highlight: true },
    { name: "Coding", icon: Code2, highlight: false },
    { name: "Drone Tech", icon: Compass, highlight: false },
    { name: "AR/VR", icon: Boxes, highlight: false },
    { name: "Entrepreneurship", icon: Lightbulb, highlight: false },
    { name: "3D-Printing", icon: Printer, highlight: true },
    { name: "& Many More", icon: CheckCircle2, highlight: true },
  ];

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] overflow-hidden flex flex-col justify-between pt-8 sm:pt-12 pb-0">

      {/* 1. Full-Width Background Video Player with Crystal-Clear Contrast */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={media.hero}
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08] saturate-[1.1] scale-100 transition-all"
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

      {/* 3. Essential Skills Of 21st Century Card - Independently Positioned at Bottom Right */}
      <div className="w-full lg:w-auto relative lg:absolute lg:bottom-0 lg:right-6 xl:right-10 z-20 flex justify-end px-4 sm:px-6 lg:px-0 mt-auto">
        <div className="relative w-full sm:max-w-md lg:w-[380px] xl:w-[410px] rounded-t-2xl rounded-b-none border-t border-x border-b-0 border-white/20 shadow-2xl shadow-black/95 group hover:border-[#FF7711]/70 transition-all duration-300 overflow-hidden">

          {/* Changing Background Images Carousel Layer */}
          <div className="absolute inset-0 w-full h-full z-0 bg-[#080808]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={rotatingImages[currentImageIndex].url}
                  alt={rotatingImages[currentImageIndex].tag}
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-105 group-hover:brightness-[0.95] group-hover:scale-105 transition-all duration-500"
                />
              </motion.div>
            </AnimatePresence>

            {/* Translucent gradient overlay - significantly lightened on hover for crystal-clear image visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35 group-hover:from-black/65 group-hover:via-black/35 group-hover:to-black/15 transition-all duration-500" />
            <div className="absolute top-0 inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-[#FF7711] to-transparent z-10" />
          </div>

          {/* Foreground Text, Header & Skill Badges Placed DIRECTLY OVER the Changing Image */}
          <div className="relative z-10 p-4 sm:p-4.5 flex flex-col justify-between">

            {/* Header Row: We Offer + 100% Customizable badge */}
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#FF7711]">
                  WE OFFER
                </span>
              </div>

              <div className="px-2 py-0.5 rounded-full bg-[#FF7711]/30 text-[#FF7711] border border-[#FF7711]/60 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase flex items-center space-x-1 backdrop-blur-md shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                <span>100% CUSTOMIZABLE</span>
              </div>
            </div>

            {/* Main Card Title */}
            <h3 className="text-base sm:text-lg font-extrabold text-[#FFFFFF] tracking-tight leading-snug mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Essential Skills Of 21st Century
            </h3>

            {/* Active Rotating Tag Banner & Carousel Dots */}
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/15">
              <div className="flex items-center space-x-1.5">
                <span className="px-2 py-0.5 rounded bg-black/80 text-[#FF7711] border border-[#FF7711]/40 text-[10px] font-mono font-bold uppercase backdrop-blur-sm shadow-sm">
                  {rotatingImages[currentImageIndex].tag}
                </span>
              </div>

              {/* Carousel Progress Indicators */}
              <div className="flex items-center space-x-1">
                {rotatingImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${idx === currentImageIndex
                        ? "w-3.5 bg-[#FF7711]"
                        : "w-1 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Compact Skill Tags Placed Directly Over Changing Images */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {skillOfferings.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`flex items-center space-x-1 px-2 py-0.5 sm:py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium transition-all backdrop-blur-md shadow-sm ${skill.highlight
                        ? "bg-[#111111]/85 border border-[#FF7711]/70 text-[#FFFFFF] group-hover:bg-[#111111]/75 shadow-[0_0_10px_rgba(255,119,17,0.2)]"
                        : "bg-[#0A0A0A]/75 border border-white/15 text-white/90 group-hover:bg-[#0A0A0A]/60 hover:text-white hover:border-white/40"
                      }`}
                  >
                    <Icon className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${skill.highlight ? "text-[#FF7711]" : "text-white/70"}`} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
