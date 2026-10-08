import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Code2, Cpu, Printer, BrainCircuit, Compass, Wifi, 
  Layers, ArrowRight, Sparkles, Terminal, Rocket, CheckCircle2
} from "lucide-react";

// Real High-Definition Champs Assets from /assets/champs
import basicElectronicsImg from "../assets/champs/Basic Electronics.png";
import blockCodingImg from "../assets/champs/Block Coding.png";
import legoRoboticsImg from "../assets/champs/LEGO-style Robotics.png";
import threeDPrintingPensImg from "../assets/champs/3D Printing Pens.png";

import arduinoAndCImg from "../assets/champs/Arduino & C.png";
import iotImg from "../assets/champs/Internet of Things.png";
import robotBuildingImg from "../assets/champs/Robot Building & Automation.png";
import threeDCadImg from "../assets/champs/3D.png";

import pythonAppliedAiImg from "../assets/champs/Python & Applied AI.png";
import droneSystemsImg from "../assets/champs/Drone Systems.png";
import advancedRoboticsImg from "../assets/champs/Advanced Robotic.png";
import basicAiImg from "../assets/champs/Basic Ai.png";

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
          image: basicElectronicsImg,
        },
        {
          icon: Code2,
          iconEmoji: "💡",
          title: "Block Coding",
          detail: "Visual logic and sequencing with Scratch & MIT App Inventor.",
          skills: ["Algorithmic Logic", "Event Triggers", "Game Loops"],
          tag: "Visual Logic",
          image: blockCodingImg,
        },
        {
          icon: Bot,
          iconEmoji: "🤖",
          title: "LEGO-style Robotics",
          detail: "Mechanical assembly and motion.",
          skills: ["Gears & Pulleys", "Chassis Assembly", "Motor Drives"],
          tag: "Mechanics",
          image: legoRoboticsImg,
        },
        {
          icon: Printer,
          iconEmoji: "🖨️",
          title: "3D Printing Pens",
          detail: "Spatial thinking and making.",
          skills: ["3D Geometry", "Spatial Thinking", "Hands-on Prototyping"],
          tag: "Spatial Design",
          image: threeDPrintingPensImg,
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
          image: arduinoAndCImg,
        },
        {
          icon: Wifi,
          iconEmoji: "🌐",
          title: "Internet of Things",
          detail: "Cloud-connected projects.",
          skills: ["Wi-Fi Nodes", "Sensor Relays", "Smart Home Systems"],
          tag: "Cloud IoT",
          image: iotImg,
        },
        {
          icon: Bot,
          iconEmoji: "🤖",
          title: "Robot Building & Automation",
          detail: "Build, wire and program robots using sensors, motors and controllers.",
          skills: ["Obstacle Navigation", "Sensors & Controllers", "Kinematics"],
          tag: "Autonomous Systems",
          image: robotBuildingImg,
        },
        {
          icon: Compass,
          iconEmoji: "📐",
          title: "3D CAD & Modeling",
          detail: "Design and export prototypes for additive manufacturing.",
          skills: ["Solid Modeling", "Slicing Software", "Iterative Design"],
          tag: "Digital Fabrication",
          image: threeDCadImg,
        },
      ],
    },
    senior: {
      id: "senior",
      emoji: "🚀",
      name: "Senior Champs",
      grade: "Grades 9–12",
      tagline: "Industrial-grade innovation, AI computer vision, autonomous flight, and startup prototype deployment.",
      accentColor: "#A855F7",
      badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      modules: [
        {
          icon: BrainCircuit,
          iconEmoji: "🧠",
          title: "AI, Machine Learning & Edge Devices",
          detail: "Train computer vision models and deploy neural nets on embedded edge chips.",
          skills: ["OpenCV Vision", "TensorFlow Lite", "Edge Telemetry"],
          tag: "Edge AI",
          image: pythonAppliedAiImg,
        },
        {
          icon: Rocket,
          iconEmoji: "🛸",
          title: "Drone Aeronautics & Flight Physics",
          detail: "Flight controllers, telemetry, PID tuning and aeromodelling.",
          skills: ["Flight Controllers", "PID Tuning", "Payload Dynamics"],
          tag: "Aeronautics",
          image: droneSystemsImg,
        },
        {
          icon: Printer,
          iconEmoji: "⚙️",
          title: "Rapid Prototyping & Digital Making",
          detail: "FDM 3D printing, laser fabrication, and assembly for hackathon-grade prototypes.",
          skills: ["G-Code Optimization", "Tolerance Engineering", "Mechatronics"],
          tag: "Industrial Design",
          image: advancedRoboticsImg,
        },
        {
          icon: Layers,
          iconEmoji: "💡",
          title: "Capstone & Patent Filing Support",
          detail: "Turn an invention into a viable patent disclosure and pitch deck.",
          skills: ["Patent Documentation", "Pitch Deck Design", "Market Validation"],
          tag: "Intellectual Property",
          image: basicAiImg,
        },
      ],
    },
  };

  const currentTierData = learningTiers[activeTier];

  return (
    <section id="student-pathways" className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Ambient Aura */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[160px] rounded-full pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: currentTierData.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
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
        </motion.div>

        {/* 3 Tier Selector Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-[#121212] border border-white/10 max-w-2xl mx-auto mb-10 shadow-2xl"
        >
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12"
          >
            {currentTierData.modules.map((mod, idx) => {
              const slideDirections = ["bottom", "left", "right", "top"];
              const dir = slideDirections[idx % slideDirections.length];
              const slideClass =
                dir === "left"
                  ? "-translate-x-full group-hover:translate-x-0"
                  : dir === "right"
                  ? "translate-x-full group-hover:translate-x-0"
                  : dir === "top"
                  ? "-translate-y-full group-hover:translate-y-0"
                  : "translate-y-full group-hover:translate-y-0";

              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => onSelectCourseModal && onSelectCourseModal(mod.title)}
                  className="group relative h-[330px] rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF7711]/60 transition-all duration-500 shadow-2xl cursor-pointer bg-[#101010]"
                >
                  {/* Clean Background Image */}
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[1.0] group-hover:scale-110 group-hover:brightness-[0.95] transition-transform duration-700 ease-out"
                  />

                  {/* Default Bottom Content: Title and Detail with localized dark shadow mask */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-3 pointer-events-none bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-12 pb-4">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-base drop-shadow-md">{mod.iconEmoji}</span>
                      <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {mod.title}
                      </h4>
                    </div>

                  </div>

                  {/* Hover Overlay: Directional Slide-in Drawer showing full syllabus details */}
                  <div
                    className={`absolute inset-0 p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-black/98 via-black/85 to-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-out transform ${slideClass}`}
                  >
                    <div className="flex items-center space-x-1.5 mb-1.5">
                      <span className="text-base">{mod.iconEmoji}</span>
                      <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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

                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#141414] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
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
        </motion.div>

      </div>
    </section>
  );
};
