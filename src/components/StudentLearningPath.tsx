import React, { useState } from "react";
import { 
  Bot, Code2, Cpu, Printer, BrainCircuit, Compass, Wifi, 
  Layers, ArrowRight, CheckCircle2 
} from "lucide-react";

interface StudentLearningPathProps {
  onSelectCourseModal?: (courseTitle: string) => void;
  onPartnerClick?: () => void;
}

export const StudentLearningPath: React.FC<StudentLearningPathProps> = ({ 
  onSelectCourseModal,
  onPartnerClick 
}) => {
  const [activeTab, setActiveTab] = useState<"little" | "junior" | "senior">("little");

  const learningTracks = {
    little: {
      id: "little",
      badge: "GRADES K – 5",
      name: "Little Champs",
      tagline: "Laying the foundation. Students learn the logic behind machines and code using block-based tools and simple circuits.",
      color: "text-amber-400",
      borderColor: "border-amber-400/40",
      modules: [
        {
          title: "Block Coding",
          description: "Logic building with Scratch & MIT App Inventor.",
          icon: Code2,
          tag: "Visual Programming",
          skills: ["Algorithmic Logic", "Event Triggers", "Game Loops"],
        },
        {
          title: "Basic Electronics",
          description: "Understanding sensors, LEDs, and motors.",
          icon: Cpu,
          tag: "Hardware Basics",
          skills: ["Breadboard Circuits", "Current & Voltage", "Switches & LEDs"],
        },
        {
          title: "Lego Robotics",
          description: "Mechanical assembly and movement physics.",
          icon: Bot,
          tag: "Mechanics",
          skills: ["Gears & Pulleys", "Chassis Physics", "Motor Drives"],
        },
        {
          title: "3D Printing Pens",
          description: "Introduction to spatial design and structure.",
          icon: Printer,
          tag: "Spatial Design",
          skills: ["3D Geometry", "Structural Stability", "Hands-on Prototyping"],
        },
      ],
    },
    junior: {
      id: "junior",
      badge: "GRADES 6 – 8",
      name: "Junior Champs",
      tagline: "Bridging software and hardware. Moving from blocks to text coding and building autonomous systems.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/40",
      modules: [
        {
          title: "Arduino & C/Python/HTML",
          description: "Microcontroller programming & automation.",
          icon: Code2,
          tag: "Embedded Code",
          skills: ["C++ Syntax", "Python Basics", "Pin Control & Loops"],
        },
        {
          title: "Basic AI",
          description: "Face detection and voice applications/learning.",
          icon: BrainCircuit,
          tag: "Machine Logic",
          skills: ["Computer Vision Basics", "Voice Classification", "Smart Automation"],
        },
        {
          title: "Real-world Robotic Project",
          description: "Building robots while learning how they think and work.",
          icon: Bot,
          tag: "Robotics",
          skills: ["Obstacle Avoidance", "Line Following", "Kinematics"],
        },
        {
          title: "Internet of Things",
          description: "Connecting devices to the cloud (Home Automation).",
          icon: Wifi,
          tag: "IoT & Cloud",
          skills: ["Wi-Fi Nodes", "Sensor Relays", "Mobile Dashboards"],
        },
      ],
    },
    senior: {
      id: "senior",
      badge: "GRADES 9 – 12",
      name: "Senior Champs",
      tagline: "Mastering deep tech and real-world deployment. Advanced engineering, AI models, drone aviation, and IoT applications.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400/40",
      modules: [
        {
          title: "Advanced AI & Machine Learning",
          description: "Computer vision, neural networks, predictive models and Python data science.",
          icon: BrainCircuit,
          tag: "Deep Tech",
          skills: ["Neural Networks", "TensorFlow / OpenCV", "Predictive Analytics"],
        },
        {
          title: "Drone Technology & Aerodynamics",
          description: "Quadcopter assembly, flight controller configuration, safety protocols & autonomous navigation.",
          icon: Compass,
          tag: "Aviation",
          skills: ["ESC & Gyro Telemetry", "Aerodynamics", "Autonomous Pathing"],
        },
        {
          title: "Industrial IoT & Cloud",
          description: "ESP32, MQTT protocols, cloud dashboards, sensor telemetry & automated control.",
          icon: Wifi,
          tag: "Cloud Systems",
          skills: ["MQTT Protocol", "ESP32 Microchips", "Industrial Telemetry"],
        },
        {
          title: "Full-Stack App & Embedded Systems",
          description: "End-to-end smart product prototyping, PCB design, mobile UI & hardware integration.",
          icon: Layers,
          tag: "End-to-End Build",
          skills: ["Custom PCB Design", "API Integration", "Commercial Prototypes"],
        },
      ],
    },
  };

  const currentTrack = learningTracks[activeTab];

  return (
    <section id="courses-learning-path" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              STUDENT LEARNING PATHWAY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
            Curriculum Tailored For{" "}
            <span className="font-serif italic font-normal text-[#FF7711]">Every Age Group</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            Our tiered curriculum grows with the student—ensuring foundational curiosity gracefully transitions into industry-grade technology engineering.
          </p>
        </div>

        {/* 3 Age Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-[#111111] border border-[#272727] max-w-2xl mx-auto mb-12">
          {(["little", "junior", "senior"] as const).map((tabKey) => {
            const track = learningTracks[tabKey];
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`py-3 sm:py-3.5 px-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center space-y-0.5 ${
                  isActive
                    ? "bg-[#1E1E1E] text-white border border-[#FF7711]/60 shadow-lg shadow-black"
                    : "text-[#888888] hover:text-[#D4D4D4] hover:bg-[#151515]"
                }`}
              >
                <span>{track.name}</span>
                <span className={`text-[10px] ${isActive ? "text-[#FF7711]" : "text-[#666666]"}`}>
                  {track.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4 Module Cards for Current Age Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentTrack.modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                onClick={() => onSelectCourseModal && onSelectCourseModal(mod.title)}
                className="p-6 rounded-2xl bg-[#121212] border border-[#272727] hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#2A2A2A] text-[#888888]">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F1F1F1] group-hover:text-white mb-2 tracking-tight">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6 font-normal">
                    {mod.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1.5 pt-4 border-t border-[#222222]">
                    {mod.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2 text-[11px] font-mono text-[#CCCCCC]">
                        <CheckCircle2 className="w-3 h-3 text-[#FF7711] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Institutional Alignment Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#141414] border border-[#272727] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#F1F1F1] mb-1">
              Aligned with NEP 2020 & Atal Innovation Mission Standards
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1A1]">
              Every course module comes with student workbooks, lesson plans, hardware toolkits, and mentor facilitation guides.
            </p>
          </div>

          <button
            onClick={onPartnerClick}
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
          >
            <span>Request School Syllabus PDF</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
