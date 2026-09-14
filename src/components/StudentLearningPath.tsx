import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Code2, Cpu, Printer, BrainCircuit, Compass, Wifi, 
  Layers, ArrowRight, Sparkles, Terminal, Rocket, CheckCircle2
} from "lucide-react";

interface StudentLearningPathProps {
  onSelectCourseModal?: (courseTitle: string) => void;
  onPartnerClick?: () => void;
}

export const StudentLearningPath: React.FC<StudentLearningPathProps> = ({ 
  onSelectCourseModal,
  onPartnerClick 
}) => {
  const [activeTier, setActiveTier] = useState<"little" | "junior" | "senior">("little");

  const learningTiers = {
    little: {
      id: "little",
      emoji: "🧒",
      name: "Little Champs",
      grade: "Grades K–5",
      tagline: "Foundational discovery. Building logic, tactile sensory exploration, and visual programming.",
      accentColor: "#F59E0B",
      badgeClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      modules: [
        {
          icon: Cpu,
          iconEmoji: "🧩",
          title: "Basic Electronics",
          detail: "Sensors, LEDs and motors.",
          skills: ["Sensors & LEDs", "Motors & Switches", "Breadboard Basics"],
          tag: "Hardware Basics",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Code2,
          iconEmoji: "💡",
          title: "Block Coding",
          detail: "Visual logic and sequencing with Scratch & MIT App Inventor.",
          skills: ["Algorithmic Logic", "Event Triggers", "Game Loops"],
          tag: "Visual Logic",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Bot,
          iconEmoji: "🤖",
          title: "LEGO-style Robotics",
          detail: "Mechanical assembly and motion.",
          skills: ["Gears & Pulleys", "Chassis Assembly", "Motor Drives"],
          tag: "Mechanics",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Printer,
          iconEmoji: "🖨️",
          title: "3D Printing Pens",
          detail: "Spatial thinking and making.",
          skills: ["3D Geometry", "Spatial Thinking", "Hands-on Prototyping"],
          tag: "Spatial Design",
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    junior: {
      id: "junior",
      emoji: "🧑‍💻",
      name: "Junior Champs",
      grade: "Grades 6–8",
      tagline: "Transitioning to real text code, microcontrollers, IoT cloud systems, and intelligent automation.",
      accentColor: "#06B6D4",
      badgeClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
      modules: [
        {
          icon: Terminal,
          iconEmoji: "💻",
          title: "Arduino & C / Python / HTML",
          detail: "Programming and automation.",
          skills: ["Arduino C++", "Python Scripting", "Web & Automation"],
          tag: "Embedded Code",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Wifi,
          iconEmoji: "🌐",
          title: "Internet of Things",
          detail: "Cloud-connected projects.",
          skills: ["Wi-Fi Nodes", "Sensor Relays", "Smart Home Systems"],
          tag: "Cloud IoT",
          image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Bot,
          iconEmoji: "🤖",
          title: "Robot Building & Automation",
          detail: "Build, wire and program robots using sensors, motors and controllers.",
          skills: ["Obstacle Navigation", "Sensors & Controllers", "Kinematics"],
          tag: "Autonomous Systems",
          image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: BrainCircuit,
          iconEmoji: "🧠",
          title: "Basic AI",
          detail: "Recognition and AI concepts.",
          skills: ["Computer Vision", "Voice Recognition", "ML Logic"],
          tag: "Applied AI",
          image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    senior: {
      id: "senior",
      emoji: "🎓",
      name: "Senior Champs",
      grade: "Grades 9–12",
      tagline: "Mastery of advanced engineering, applied AI algorithms, mechatronics, drone aviation, and end-to-end prototyping.",
      accentColor: "#A855F7",
      badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      modules: [
        {
          icon: BrainCircuit,
          iconEmoji: "🐍",
          title: "Python & Applied AI",
          detail: "Data, models and automation.",
          skills: ["Neural Networks", "Data Science", "Intelligent Automation"],
          tag: "Deep Tech",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Layers,
          iconEmoji: "⚙️",
          title: "Advanced Robotics",
          detail: "Control and mechatronics.",
          skills: ["Kinematics & PID", "Custom PCB Design", "Servo Arrays"],
          tag: "Mechatronics",
          image: "/High tech lab .png",
        },
        {
          icon: Compass,
          iconEmoji: "🚁",
          title: "Drone Systems",
          detail: "Flight logic and safe operation.",
          skills: ["Flight Dynamics", "ESC & Gyro Telemetry", "Autonomous Operation"],
          tag: "Aeronautics",
          image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
        },
        {
          icon: Rocket,
          iconEmoji: "🚀",
          title: "Innovation Projects",
          detail: "Prototype, document and present.",
          skills: ["Design Sprints", "Patent Documentation", "Showcase Expo"],
          tag: "Capstone Build",
          image: "/Event.png",
        },
      ],
    },
  };

  const currentTierData = learningTiers[activeTier];

  return (
    <section id="school-program" className="w-full bg-[#080808] border-b border-[#222222] py-16 lg:py-24 relative overflow-hidden">
      
      {/* Dynamic Ambient Backlight based on active tier */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] blur-[150px] rounded-full pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: currentTierData.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              COMPLETE LEARNING JOURNEY
            </span>
          </div>

          {/* Heading with Arrow Sequence */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            <span>Little</span>
            <span className="text-[#FF7711] font-mono">→</span>
            <span>Junior</span>
            <span className="text-[#06B6D4] font-mono">→</span>
            <span>Senior</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Our progressive curriculum evolves seamlessly alongside every age tier—empowering students from initial curiosity to building production-grade engineering prototypes.
          </p>
        </div>

        {/* 3 Tier Selector Switcher */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-[#121212] border border-white/10 max-w-2xl mx-auto mb-10 shadow-2xl">
          {(["little", "junior", "senior"] as const).map((tierKey) => {
            const tier = learningTiers[tierKey];
            const isActive = activeTier === tierKey;
            return (
              <button
                key={tierKey}
                onClick={() => setActiveTier(tierKey)}
                className={`py-3 sm:py-3.5 px-2 sm:px-4 rounded-xl font-sans text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex flex-col items-center justify-center space-y-0.5 ${
                  isActive
                    ? "bg-[#1C1C1C] text-white shadow-lg border border-white/20 scale-[1.02]"
                    : "text-[#888888] hover:text-[#D4D4D4] hover:bg-white/[0.03]"
                }`}
                style={{
                  borderColor: isActive ? tier.accentColor : undefined,
                }}
              >
                <div className="flex items-center space-x-1.5">
                  <span className="text-sm sm:text-base">{tier.emoji}</span>
                  <span className="tracking-tight">{tier.name}</span>
                </div>
                <span 
                  className="text-[10px] font-mono font-semibold"
                  style={{ color: isActive ? tier.accentColor : "#666666" }}
                >
                  {tier.grade}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tier Overview Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{currentTierData.emoji}</span>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-black text-white">
                  {currentTierData.name}
                </h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${currentTierData.badgeClass}`}>
                  {currentTierData.grade}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">
                {currentTierData.tagline}
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-white/60 shrink-0 hidden md:inline">
            ✨ Hover Cards to Reveal Full Syllabus
          </span>
        </div>

        {/* 4 Module Cards with High-Visibility Image & Refined Lightweight Hover Reveal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12"
          >
            {currentTierData.modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  onClick={() => onSelectCourseModal && onSelectCourseModal(mod.title)}
                  className="group relative h-[330px] rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF7711] transition-all duration-500 shadow-2xl cursor-pointer bg-[#101010]"
                >
                  {/* Background Image - Bright and clear */}
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:brightness-[0.92] group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Gentle gradient scrim to keep text legible while image stays clearly visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <div 
                      className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg"
                      style={{ color: currentTierData.accentColor }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 border border-white/20 text-white font-bold backdrop-blur-md shadow-sm">
                      {mod.tag}
                    </span>
                  </div>

                  {/* Default Bottom Content (Visible by default, fades on hover) */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
                    <div className="flex items-center space-x-1.5 mb-1.5">
                      <span className="text-base drop-shadow-md">{mod.iconEmoji}</span>
                      <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {mod.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#E5E5E5] line-clamp-2 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                      {mod.detail}
                    </p>
                  </div>

                  {/* Hover Overlay: Lightweight Translucent Glass Overlay showing Full Content without heavy darkness */}
                  <div className="absolute inset-0 p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/65 to-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center space-x-1.5 mb-1.5">
                      <span className="text-base">{mod.iconEmoji}</span>
                      <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        {mod.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#FFA149] font-medium leading-relaxed mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {mod.detail}
                    </p>

                    {/* Skill Tags */}
                    <div className="space-y-1.5 pt-2.5 border-t border-white/20">
                      {mod.skills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-1.5 text-[11px] font-mono text-[#FFFFFF] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                          <CheckCircle2 
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: currentTierData.accentColor }}
                          />
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Consultation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#141414] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FF7711]/15 text-[#FF7711] border border-[#FF7711]/30 text-[11px] font-mono font-bold uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Institutional Support</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1.5">
              Want Consultation for Your School?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-2xl leading-relaxed">
              Connect with our curriculum and lab architects to implement customized Atal Tinkering Labs, NEP 2020 experiential learning tracks, and certified faculty development.
            </p>
          </div>

          <button
            onClick={onPartnerClick}
            className="w-full sm:w-auto btn-orange-primary px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all"
          >
            <span>Request School Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
