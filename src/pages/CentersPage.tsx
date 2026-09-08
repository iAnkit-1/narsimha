import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, Clock, CheckCircle2, 
  ArrowRight, Calendar, Send, Bot, Code2, BrainCircuit, Printer, 
  Lightbulb, Wifi, Compass, Palette, Award, Sparkles 
} from "lucide-react";
import { companyDetails } from "../data/navigation";
import { centerFacilityHighlights, skillCentersList } from "../data/centers";

interface CentersPageProps {
  onOpenPartnerModal: () => void;
}

export const CentersPage: React.FC<CentersPageProps> = ({ onOpenPartnerModal }) => {
  const navigate = useNavigate();
  // Category tabs for Common Courses:
  const [activeCommonCategory, setActiveCommonCategory] = useState<"little" | "junior" | "senior">("little");
  
  // Level filter for Specialized Courses:
  const [activeLevelFilter, setActiveLevelFilter] = useState<"ALL" | "STARTER" | "LEARNER" | "PERFORMER">("ALL");

  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const [visitForm, setVisitForm] = useState({
    parentName: "",
    studentName: "",
    studentGrade: "Grades 6-8 (Junior Champs)",
    phone: "",
    email: "",
    preferredDate: "",
    interestedCourse: "Robotics & Embedded Systems",
  });

  // 1. Common Courses Data across 3 Age Categories:
  const commonCoursesData = {
    little: {
      category: "Little Champs",
      grades: "Grades K – 5",
      tagline: "Foundational STEM exploration through tactile play, visual block building, and simple circuits.",
      courses: [
        {
          title: "Foundational Robotics",
          icon: Bot,
          tag: "Robotics",
          focus: "Lego robotics assembly, motor drives, gears & pulleys, and movement physics.",
          tools: "Lego Kits, Micro-motors, Chassis Blocks",
        },
        {
          title: "Block Coding & Logic",
          icon: Code2,
          tag: "Coding",
          focus: "Visual programming with Scratch & MIT App Inventor, story animations & puzzle loops.",
          tools: "Scratch, Block Code, Visual Game Engines",
        },
        {
          title: "Early AI & Smart Systems",
          icon: BrainCircuit,
          tag: "Artificial Intelligence",
          focus: "Demystifying smart cameras, voice recognition games, and human-machine interaction.",
          tools: "Teachable Machine, Voice Kits",
        },
        {
          title: "3D Spatial Design & Pens",
          icon: Printer,
          tag: "3D Printing",
          focus: "3D printing pens, spatial structure prototyping, geometric stability, and creative models.",
          tools: "3D Printing Pens, PLA Filament, Mesh Stencils",
        },
        {
          title: "Junior Entrepreneur Mindset",
          icon: Lightbulb,
          tag: "Entrepreneurial Mindset",
          focus: "Idea generation, problem finding in daily life, creative teamwork, and project presentation.",
          tools: "Maker Workbooks, Pitch Cards, Team Boards",
        },
      ],
    },
    junior: {
      category: "Junior Champs",
      grades: "Grades 6 – 8",
      tagline: "Transitioning from blocks to text coding, microcontrollers, and autonomous smart systems.",
      courses: [
        {
          title: "Autonomous Robotics Engineering",
          icon: Bot,
          tag: "Robotics",
          focus: "Building line-followers, obstacle-avoiders, ultrasonic sonar rangers, and motor drivers.",
          tools: "Arduino Nano/Uno, Servo Motors, Sonar Sensors",
        },
        {
          title: "C++ & Python Programming",
          icon: Code2,
          tag: "Coding",
          focus: "Text coding syntax, variables, conditionals, loops, functions, and microcontroller scripts.",
          tools: "VS Code, Arduino IDE, Python 3",
        },
        {
          title: "Computer Vision & Applied AI",
          icon: BrainCircuit,
          tag: "Artificial Intelligence",
          focus: "Face detection, gesture controls, image classification models, and smart automation.",
          tools: "OpenCV Python, Edge Vision Nodes",
        },
        {
          title: "Parametric 3D CAD & Slicing",
          icon: Printer,
          tag: "3D Printing",
          focus: "Tinkercad & Autodesk CAD modeling, slicing software calibration, and FDM 3D printing.",
          tools: "Autodesk Tinkercad, Cura Slicer, 3D Printers",
        },
        {
          title: "Maker Ideation & Prototype Pitching",
          icon: Lightbulb,
          tag: "Entrepreneurial Mindset",
          focus: "Design thinking, user problem validation, bill of materials estimation, and demo pitching.",
          tools: "Design Thinking Canvas, Pitch Decks",
        },
      ],
    },
    senior: {
      category: "Senior Champs",
      grades: "Grades 9 – 12",
      tagline: "Mastering deep tech, industrial cloud telemetry, neural AI models, and real-world deployment.",
      courses: [
        {
          title: "Advanced Kinematics & Robotics",
          icon: Bot,
          tag: "Robotics",
          focus: "6-DOF robotic arms, inverse kinematics, PID tuning, precision actuators, and ROS basics.",
          tools: "ESP32 Boards, Precision Servos, Motor Encoders",
        },
        {
          title: "Full-Stack Software & Embedded C",
          icon: Code2,
          tag: "Coding",
          focus: "Object-oriented software architectures, hardware communication protocols (I2C, SPI, UART).",
          tools: "Python, C++, PlatformIO, Git",
        },
        {
          title: "Neural Networks & Deep Learning",
          icon: BrainCircuit,
          tag: "Artificial Intelligence",
          focus: "Training neural network classifiers, predictive data models, and edge computing deployment.",
          tools: "TensorFlow Lite, Python NumPy/Pandas",
        },
        {
          title: "Industrial Rapid Prototyping & CAD",
          icon: Printer,
          tag: "3D Printing",
          focus: "Fusion 360 mechanical assemblies, tolerance fitting, custom enclosures, and PCB integration.",
          tools: "Autodesk Fusion 360, High-Precision FDM Labs",
        },
        {
          title: "Tech Startup Lab & Venture Pitch",
          icon: Lightbulb,
          tag: "Entrepreneurial Mindset",
          focus: "Building functional MVPs, patenting awareness, cost modeling, and competition entry.",
          tools: "Business Model Canvas, Product Roadmap",
        },
      ],
    },
  };

  // 2. Specialized Courses Data (with 3 Opting Levels: Starter, Learner, Performer)
  const specializedCoursesList = [
    {
      id: "coding-spec",
      title: "Coding & Computational Logic",
      category: "Software",
      levels: ["STARTER", "LEARNER", "PERFORMER"],
      description: "From block-based problem solving to full Python programming, data structures, and embedded system scripting.",
      skills: ["Logic Building", "Object-Oriented Python", "API & Cloud Hooks", "Data Structures"],
      tools: ["Block Logic", "Python 3", "VS Code", "MicroPython"],
      icon: Code2,
    },
    {
      id: "iot-spec",
      title: "Internet of Things (IoT) & Smart Tech",
      category: "Connected Hardware",
      levels: ["STARTER", "LEARNER", "PERFORMER"],
      description: "Sensor telemetry, wireless protocols (Wi-Fi, Bluetooth, MQTT), cloud dashboards, and home automation.",
      skills: ["ESP32 / NodeMCU", "MQTT Protocols", "Cloud Telemetry", "Relay Control"],
      tools: ["ESP32", "DHT Sensors", "Adafruit IO", "Blynk Cloud"],
      icon: Wifi,
    },
    {
      id: "3d-printing-spec",
      title: "3D Printing & Parametric CAD",
      category: "Rapid Fabrication",
      levels: ["STARTER", "LEARNER", "PERFORMER"],
      description: "Transforming 2D sketches into 3D CAD models and fabricating physical parts with modern additive manufacturing.",
      skills: ["3D CAD Modeling", "Slicing & Infill Tuning", "FDM Maintenance", "Tolerance Fitting"],
      tools: ["Tinkercad", "Autodesk Fusion", "UltiMaker Cura", "FDM Printers"],
      icon: Printer,
    },
    {
      id: "robotics-spec",
      title: "Robotics & Embedded Systems",
      category: "Physical Computing",
      levels: ["STARTER", "LEARNER", "PERFORMER"],
      description: "Hands-on robotics covering chassis design, sensor fusion, servo kinematics, and microcontroller code.",
      skills: ["Microcontrollers", "Motor Drivers", "Autonomous Sensors", "Feedback Loops"],
      tools: ["Arduino Boards", "Sonar Modules", "Motor Shields", "Chassis Hardware"],
      icon: Bot,
    },
    {
      id: "ai-spec",
      title: "AI & Machine Intelligence",
      category: "Future Tech",
      levels: ["LEARNER", "PERFORMER"],
      description: "Explore machine learning models, computer vision, voice recognition, and edge AI applications.",
      skills: ["Computer Vision", "Neural Classifiers", "Model Training", "Prompt Engineering"],
      tools: ["Teachable Machine", "OpenCV", "Python ML", "Edge AI Nodes"],
      icon: BrainCircuit,
    },
    {
      id: "young-innovator-spec",
      title: "Young Innovator & Maker Lab",
      category: "Applied Innovation",
      levels: ["STARTER", "LEARNER", "PERFORMER"],
      description: "Multi-disciplinary maker experience solving real-world challenges through hands-on prototyping and pitching.",
      skills: ["Design Thinking", "Rapid Prototyping", "Troubleshooting", "Project Demo"],
      tools: ["Tinkering Kit", "Sensors", "Soldering Station", "Pitch Deck Tools"],
      icon: Lightbulb,
    },
    {
      id: "graphic-design-spec",
      title: "Graphic Design & Digital UI/UX",
      category: "Creative Media",
      levels: ["STARTER", "LEARNER"],
      description: "Master visual communication, color psychology, vector illustration, and digital product interface layouts.",
      skills: ["Typography", "Vector Illustration", "Wireframing", "UI Prototyping"],
      tools: ["Figma", "Vector Editors", "Canva Pro", "Design Tokens"],
      icon: Palette,
    },
    {
      id: "drone-spec",
      title: "Drone Technology & Aerodynamics",
      category: "Aviation & Robotics",
      levels: ["LEARNER", "PERFORMER"],
      description: "Aerodynamics, flight controller calibration, propeller thrust, and autonomous aerial navigation.",
      skills: ["Quadcopter Assembly", "ESC Telemetry", "Gyro Calibration", "Safety Protocols"],
      tools: ["Quadcopter Kits", "Flight Controllers", "Radio Transmitters"],
      icon: Compass,
    },
  ];

  // Filter specialized courses by level:
  const filteredSpecializedCourses = specializedCoursesList.filter((course) => {
    if (activeLevelFilter === "ALL") return true;
    return course.levels.includes(activeLevelFilter);
  });

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
  };

  const activeCommonTrack = commonCoursesData[activeCommonCategory];

  return (
    <div className="w-full bg-[#080808] text-[#F1F1F1] min-h-screen selection:bg-[#FF7711] selection:text-black">
      
      {/* 1. HERO / CENTER HEADER */}
      <section className="relative w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF7711]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-bold uppercase">
                  OUR INNOVATION CENTERS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.1] mb-5">
                Step Into The{" "}
                <span className="font-serif italic font-normal text-[#FF7711]">Maker Space.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed max-w-2xl font-normal mb-8">
                Equipped with microcontrollers, 3D printers, autonomous rovers, and sensor arrays. Explore our structured common pathways and specialized certification courses.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#272727] text-[#E2E8F0]">
                  <MapPin className="w-4 h-4 text-[#FF7711]" />
                  <span>Patna Flagship Center</span>
                </div>
                <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#272727] text-[#E2E8F0]">
                  <Clock className="w-4 h-4 text-[#FF7711]" />
                  <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 rounded-2xl bg-[#141414] border border-[#272727] p-6 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF7711] font-bold uppercase tracking-wider block mb-1">
                  FLAGSHIP INNOVATION CENTER
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {skillCentersList[0]?.name || "Patna Central Lab"}
                </h3>
                <p className="text-xs text-[#A1A1A1] leading-relaxed mb-4">
                  {skillCentersList[0]?.address}, {skillCentersList[0]?.landmark}, {skillCentersList[0]?.city}
                </p>
                <div className="text-xs text-[#FF7711] font-mono mb-4">
                  Helpline: {skillCentersList[0]?.phone || companyDetails.phone}
                </div>
              </div>

              <a
                href="#book-visit"
                className="w-full btn-orange-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-orange-glow transition-all"
              >
                <span>Book Free Trial Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5. CENTER FACILITIES & LAB INFRASTRUCTURE SHOWCASE */}
      <section className="w-full bg-[#0B0B0B] border-b border-[#272727] py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  ADVANCED LAB INFRASTRUCTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight">
                Our Center <span className="font-serif italic font-normal text-[#FF7711]">Facilities & Labs</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md">
              Purpose-built spaces for high-engagement learning. Every station is outfitted with industry-grade tools, testing bays, and microcontroller equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {centerFacilityHighlights.map((facility) => (
              <div
                key={facility.title}
                className="group relative rounded-2xl bg-[#121212] border border-[#272727] overflow-hidden hover:border-[#FF7711]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#181818]">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#FF7711] font-bold border border-[#272727]">
                    {facility.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF7711] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMMON COURSES SECTION (Robotics, Coding, AI, 3D Printing, Entrepreneurial Mindset) */}
      <section id="common-courses" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                CORE STEM PATHWAY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
              Common Courses For{" "}
              <span className="font-serif italic font-normal text-[#FF7711]">Every Student</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
              Every student develops a 360° practical foundation across robotics, coding, AI, 3D printing, and entrepreneurial problem-solving.
            </p>
          </div>

          {/* 3 Category Tabs (Little Champs, Junior Champs, Senior Champs) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 rounded-2xl bg-[#111111] border border-[#272727] max-w-2xl mx-auto mb-12">
            {(["little", "junior", "senior"] as const).map((tabKey) => {
              const track = commonCoursesData[tabKey];
              const isActive = activeCommonCategory === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveCommonCategory(tabKey)}
                  className={`py-3 sm:py-3.5 px-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center space-y-0.5 ${
                    isActive
                      ? "bg-[#1E1E1E] text-white border border-[#FF7711]/60 shadow-lg shadow-black"
                      : "text-[#888888] hover:text-[#D4D4D4] hover:bg-[#151515]"
                  }`}
                >
                  <span>{track.category}</span>
                  <span className={`text-[10px] ${isActive ? "text-[#FF7711]" : "text-[#666666]"}`}>
                    {track.grades}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description */}
          <div className="p-5 rounded-2xl bg-[#111111] border border-[#272727] mb-8 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF7711] font-bold">
              {activeCommonTrack.category} ({activeCommonTrack.grades})
            </span>
            <p className="text-xs sm:text-sm text-[#CCCCCC] mt-1">
              {activeCommonTrack.tagline}
            </p>
          </div>

          {/* 5 Common Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {activeCommonTrack.courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="p-6 rounded-2xl bg-[#121212] border border-[#272727] hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-[#FF7711] font-bold">
                        {course.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F1F1F1] group-hover:text-white mb-2">
                      {course.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6 font-normal">
                      {course.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#222222]">
                    <span className="text-[10px] font-mono text-[#707070] uppercase block mb-1">Tools & Hardware:</span>
                    <span className="text-xs font-mono text-[#E2E8F0] font-medium">{course.tools}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SPECIALIZED COURSES (Coding, IoT, 3D Printing, Robotics, AI, Young Innovator, Graphics Design, Drones) */}
      <section id="specialized-courses" className="w-full bg-[#0D0D0D] border-b border-[#272727] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-3">
                <Award className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  DEEP-DIVE CERTIFICATIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight">
                Specialized <span className="font-serif italic font-normal text-[#FF7711]">Electives & Levels</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md">
              Choose dedicated technology tracks tailored to your interest. Each course offers 3 opting levels from foundational start to advanced deployment.
            </p>
          </div>

          {/* 3 Levels Opting Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-[#141414] border border-[#272727] mb-12">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-[#777777] uppercase px-2 hidden sm:inline">SELECT LEVEL:</span>
              {(["ALL", "STARTER", "LEARNER", "PERFORMER"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevelFilter(level)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeLevelFilter === level
                      ? "bg-[#FF7711] text-black shadow-md shadow-orange-glow/30"
                      : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
                  }`}
                >
                  {level === "ALL" ? "All Levels" : level}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-[#888888] px-2 hidden md:block">
              Starter: Level 01 • Learner: Level 02 • Performer: Level 03
            </div>
          </div>

          {/* Specialized Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredSpecializedCourses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl bg-[#121212] border border-[#272727] hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#2A2A2A] text-[#888888]">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#F1F1F1] group-hover:text-white mb-2 leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-xs text-[#A1A1A1] leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Level Badges */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.levels.map((lvl) => (
                        <span
                          key={lvl}
                          className="px-2 py-0.5 rounded bg-[#1A1A1A] text-[9px] font-mono font-bold text-[#FF7711] border border-[#2E2E2E]"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="space-y-1 pt-3 border-t border-[#222222]">
                      {course.skills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-1.5 text-[10px] font-mono text-[#CCCCCC]">
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

        </div>
      </section>

      {/* 4. LAB VISIT BOOKING FORM */}
      <section id="book-visit" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  EXPERIENCE CENTER VISIT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
                Visit our{" "}
                <span className="font-serif italic font-normal text-[#FF7711]">Innovation Center</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6">
                Parents and students are welcome for a free 45-minute maker orientation, hands-on robotics trial, and level evaluation with our senior mentors.
              </p>

              <div className="space-y-3.5 text-xs font-mono text-[#D4D4D4] mb-8">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#111111] border border-[#222222]">
                  <MapPin className="w-4 h-4 text-[#FF7711]" />
                  <span>{companyDetails.address.center}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#111111] border border-[#222222]">
                  <Clock className="w-4 h-4 text-[#FF7711]" />
                  <span>Mon – Sat: 9:00 AM – 6:30 PM | Sunday By Appointment</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 bg-[#111111] border border-[#272727] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Book a Free Trial Class
              </h3>
              <p className="text-xs text-[#A1A1A1] mb-6">
                Fill in the details below. Our academic mentor will contact you to confirm your slot.
              </p>

              {visitSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#151515] border border-emerald-500/40 text-center my-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-[#F1F1F1] mb-1">
                    Slot Request Confirmed!
                  </h4>
                  <p className="text-xs text-[#A1A1A1] leading-relaxed">
                    Thank you! We have received your request for <span className="text-white font-semibold">{visitForm.studentName || "your child"}</span>. Our center coordinator will call you shortly.
                  </p>
                  <button
                    onClick={() => setVisitSubmitted(false)}
                    className="btn-dark-secondary mt-4 px-4 py-2 rounded-xl text-xs font-mono"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={visitForm.parentName}
                      onChange={(e) => setVisitForm({ ...visitForm, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Child's name"
                        value={visitForm.studentName}
                        onChange={(e) => setVisitForm({ ...visitForm, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Category Level *
                      </label>
                      <select
                        value={visitForm.studentGrade}
                        onChange={(e) => setVisitForm({ ...visitForm, studentGrade: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711]"
                      >
                        <option value="Little Champs (Grades K-5)">Little Champs (Grades K-5)</option>
                        <option value="Junior Champs (Grades 6-8)">Junior Champs (Grades 6-8)</option>
                        <option value="Senior Champs (Grades 9-12)">Senior Champs (Grades 9-12)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Interested Track
                      </label>
                      <select
                        value={visitForm.interestedCourse}
                        onChange={(e) => setVisitForm({ ...visitForm, interestedCourse: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711]"
                      >
                        <option value="Robotics & Embedded Systems">Robotics & Embedded Systems</option>
                        <option value="Coding & Computational Logic">Coding & Logic</option>
                        <option value="AI & Machine Intelligence">AI & Machine Learning</option>
                        <option value="3D Printing & CAD">3D Printing & CAD</option>
                        <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                        <option value="Drone Technology">Drone Technology</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-orange-primary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 mt-4 cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
                  >
                    <span>Confirm Trial Booking</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Return to Homepage / For Schools */}
      <section className="w-full bg-[#080808] py-12 text-center border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-dark-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
          >
            <span>← Return to Homepage</span>
          </button>

          <button
            onClick={onOpenPartnerModal}
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
          >
            <span>For Schools: Setup An ATL Lab</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
