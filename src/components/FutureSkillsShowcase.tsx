import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Activity, Cpu, Bot, BrainCircuit, 
  Code2, Printer, Compass, Palette, Lightbulb,
  ArrowUpRight, ChevronLeft, ChevronRight
} from "lucide-react";

import legoRoboticsImg from "../assets/champs/LEGO-style Robotics.png";
import robotBuildingImg from "../assets/champs/Robot Building & Automation.png";
import basicElectronicsImg from "../assets/champs/Basic Electronics.png";
import advancedRoboticsImg from "../assets/champs/Advanced Robotic.png";
import pythonAppliedAiImg from "../assets/champs/Python & Applied AI.png";
import blockCodingImg from "../assets/champs/Block Coding.png";
import threeDCadImg from "../assets/champs/3D.png";
import droneSystemsImg from "../assets/champs/Drone Systems.png";
import threeDPrintingPensImg from "../assets/champs/3D Printing Pens.png";
import iotImg from "../assets/champs/Internet of Things.png";

interface FutureSkillsShowcaseProps {
  onExploreSkill?: (skillTitle: string) => void;
}

interface SkillCardData {
  id: string;
  title: string;
  shortTag: string;
  ribbonLabel: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  image: string;
  accentColor: string;
  badgeBg: string;
}

export const FutureSkillsShowcase: React.FC<FutureSkillsShowcaseProps> = ({ onExploreSkill }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const skillsData: SkillCardData[] = [
    {
      id: "stem",
      title: "STEM",
      shortTag: "Science, Tech, Eng & Math",
      ribbonLabel: "STEM",
      description: "Learn Science, Technology, Engineering, and Mathematics through practical activities, experiments, and real-world projects.",
      icon: Sparkles,
      image: legoRoboticsImg,
      accentColor: "#FF7711",
      badgeBg: "bg-[#FF7711]/20 text-[#FF7711] border-[#FF7711]/40",
    },
    {
      id: "atl",
      title: "ATL (Atal Tinkering Lab)",
      shortTag: "Innovation Space & Prototyping",
      ribbonLabel: "ATL Lab",
      description: "A hands-on innovation space where students explore ideas, build prototypes, experiment, and solve real-world problems.",
      icon: Activity,
      image: robotBuildingImg,
      accentColor: "#10B981",
      badgeBg: "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40",
    },
    {
      id: "electronics",
      title: "Electronics",
      shortTag: "Circuits, Sensors & Microchips",
      ribbonLabel: "Electronics",
      description: "Understand circuits, sensors, components, and basic electronics by building and testing practical projects.",
      icon: Cpu,
      image: basicElectronicsImg,
      accentColor: "#38BDF8",
      badgeBg: "bg-[#38BDF8]/20 text-[#38BDF8] border-[#38BDF8]/40",
    },
    {
      id: "robotics",
      title: "Robotics",
      shortTag: "Design, Build & Autonomous Code",
      ribbonLabel: "Robotics",
      description: "Learn how to design, build, and program robots to perform tasks and solve real-world challenges.",
      icon: Bot,
      image: advancedRoboticsImg,
      accentColor: "#F59E0B",
      badgeBg: "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40",
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      shortTag: "Machine Learning & Neural Logic",
      ribbonLabel: "AI & ML",
      description: "Explore how machines can learn, recognize patterns, understand information, and make smart decisions.",
      icon: BrainCircuit,
      image: pythonAppliedAiImg,
      accentColor: "#A855F7",
      badgeBg: "bg-[#A855F7]/20 text-[#A855F7] border-[#A855F7]/40",
    },
    {
      id: "coding",
      title: "Coding & Programming",
      shortTag: "Software, Logic & Applications",
      ribbonLabel: "Coding",
      description: "Learn to create programs, games, websites, and applications while developing logical and problem-solving skills.",
      icon: Code2,
      image: blockCodingImg,
      accentColor: "#EC4899",
      badgeBg: "bg-[#EC4899]/20 text-[#EC4899] border-[#EC4899]/40",
    },
    {
      id: "3d-printing",
      title: "3D Design & Printing",
      shortTag: "3D CAD Modeling & Making",
      ribbonLabel: "3D Design",
      description: "Design ideas as 3D models using digital tools and turn them into real objects using 3D printing technology.",
      icon: Printer,
      image: threeDCadImg,
      accentColor: "#06B6D4",
      badgeBg: "bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/40",
    },
    {
      id: "drone",
      title: "Drone Technology",
      shortTag: "Aviation, Telemetry & Flight",
      ribbonLabel: "Drones",
      description: "Learn the basics of drones, including their design, components, control, safety, and practical applications.",
      icon: Compass,
      image: droneSystemsImg,
      accentColor: "#3B82F6",
      badgeBg: "bg-[#3B82F6]/20 text-[#38BDF8] border-[#3B82F6]/40",
    },
    {
      id: "creative-design",
      title: "Creative & Digital Design",
      shortTag: "Visual Tech & Creative Graphics",
      ribbonLabel: "Digital Design",
      description: "Develop creativity through graphic design, digital content, visual communication, and technology-based creative projects.",
      icon: Palette,
      image: threeDPrintingPensImg,
      accentColor: "#F43F5E",
      badgeBg: "bg-[#F43F5E]/20 text-[#F43F5E] border-[#F43F5E]/40",
    },
    {
      id: "entrepreneurship",
      title: "Innovation & Entrepreneurship",
      shortTag: "Problem Discovery & Ventures",
      ribbonLabel: "Entrepreneurship",
      description: "Learn how to turn ideas into solutions, identify problems, develop products, and understand the basics of building a venture.",
      icon: Lightbulb,
      image: iotImg,
      accentColor: "#EAB308",
      badgeBg: "bg-[#EAB308]/20 text-[#EAB308] border-[#EAB308]/40",
    },
  ];

  // Auto-advance the active skill card
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skillsData.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, skillsData.length]);

  // Center active thumbnail inside container only WITHOUT scrolling the window/page
  useEffect(() => {
    const container = filmstripRef.current;
    if (!container) return;
    const activeThumb = container.children[activeIndex] as HTMLElement;
    if (activeThumb) {
      const containerWidth = container.offsetWidth;
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const targetScrollLeft = thumbLeft - (containerWidth / 2) + (thumbWidth / 2);
      
      // Scroll strictly the internal container horizontally
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const activeSkill = skillsData[activeIndex];
  const ActiveIcon = activeSkill.icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % skillsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  };

  return (
    <section id="future-skills" className="w-full bg-[#090909] border-b border-[#222222] py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Ambience Glow tuned to active skill color */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[160px] rounded-full pointer-events-none transition-all duration-700 opacity-25"
        style={{ backgroundColor: activeSkill.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              FUTURE SKILLS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            10 Pillars of{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              21st Century Innovation
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Explore our foundational experiential tech domains. Select any thumbnail from the gallery bar below or watch the spotlight rotate automatically.
          </p>
        </div>

        {/* Center Spotlight Card (Main Viewer Stage as shown in demo) */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto mb-5"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              onClick={() => onExploreSkill && onExploreSkill(activeSkill.title)}
              className="group relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer bg-[#121212]"
            >
              {/* High-Resolution Horizontal Image with Full Clarity & Brightness */}
              <img
                src={activeSkill.image}
                alt={activeSkill.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-100 contrast-[1.02] saturate-[1.05] group-hover:scale-105 transition-all duration-700"
              />

              {/* Dark Mask Active ONLY on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Localized subtle bottom shadow for default title visibility without whole-image mask */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />

              {/* Default Bottom State (Visible by default, slides out on hover) */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-3 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-1.5 drop-shadow-[0_3px_12px_rgba(0,0,0,1)]">
                  {activeSkill.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono font-semibold text-[#FFA149] drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                  <span>Click to know more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Reveal State: Slide-in-from-bottom animation overlay showing full description */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/98 via-black/85 to-transparent backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out rounded-b-3xl">
                
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <div 
                    className="w-8 h-8 rounded-xl bg-black/70 flex items-center justify-center border border-white/25 shadow-md"
                    style={{ color: activeSkill.accentColor }}
                  >
                    <ActiveIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {activeSkill.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  {activeSkill.description}
                </p>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-[#FF7711] text-white hover:text-black border border-white/25 hover:border-[#FF7711] transition-all flex items-center justify-center shadow-2xl cursor-pointer backdrop-blur-md"
            aria-label="Previous skill"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-[#FF7711] text-white hover:text-black border border-white/25 hover:border-[#FF7711] transition-all flex items-center justify-center shadow-2xl cursor-pointer backdrop-blur-md"
            aria-label="Next skill"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Overlaid Navigation Strip inside viewer (Dots) */}
          <div className="absolute bottom-3.5 inset-x-0 z-20 flex items-center justify-center pointer-events-auto">
            {/* Carousel Dot Indicators */}
            <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
              {skillsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-5 h-2 bg-[#FF7711] shadow-[0_0_8px_#FF7711]"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Thumbnail Filmstrip Bar matching demo image */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          {/* Filmstrip Cards Row */}
          <div 
            ref={filmstripRef}
            className="flex items-start space-x-2.5 sm:space-x-3 overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 rounded-2xl bg-[#111111] border border-white/10 shadow-xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skillsData.map((skill, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center shrink-0 cursor-pointer group"
                >
                  {/* Thumbnail Image Box */}
                  <div
                    className={`relative w-20 sm:w-24 md:w-[104px] aspect-[16/10] rounded-xl overflow-hidden transition-all duration-300 bg-black ${
                      isActive
                        ? "border-2 scale-105 shadow-lg shadow-black ring-2 ring-offset-1 ring-offset-black"
                        : "border border-white/15 opacity-65 group-hover:opacity-100 group-hover:border-white/40"
                    }`}
                    style={{
                      borderColor: isActive ? skill.accentColor : undefined,
                      // @ts-ignore
                      "--tw-ring-color": isActive ? skill.accentColor : undefined,
                    }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Active highlight overlay */}
                    {isActive && (
                      <div className="absolute inset-0 bg-[#FF7711]/10 pointer-events-none" />
                    )}
                  </div>

                  {/* Skill Text Label Just Below Thumbnail */}
                  <span 
                    className={`text-[10px] sm:text-[11px] font-mono font-bold mt-1.5 transition-colors text-center tracking-tight max-w-[85px] truncate ${
                      isActive ? "text-white" : "text-[#888888] group-hover:text-white"
                    }`}
                    style={{
                      color: isActive ? skill.accentColor : undefined,
                    }}
                  >
                    {skill.ribbonLabel}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
