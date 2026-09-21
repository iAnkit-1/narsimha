// Data source for /centers page at Narasimha Skill Sphere

export interface WeeklyActivity {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  tools: string[];
  image: string;
}

export interface LearningJourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  color: string;
  icon: string;
}

export interface LearningLevel {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  goal: string;
  targetAudience: string;
  skills: string[];
  color: string;
  bgGradient: string;
  borderColor: string;
  accentColor: string;
}

export interface CourseDetail {
  id: string;
  domain: string;
  title: string;
  tagline: string;
  emoji: string;
  image: string;
  level: "STARTER" | "LEARNER";
  focus: string;
  topics: string[];
  builds: string[];
  badgeColor: string;
}

export interface StudentProject {
  id: string;
  title: string;
  domain: string;
  authorGrade: string;
  description: string;
  hardware: string[];
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "learning" | "robotics" | "coding" | "3dprinting" | "projects" | "events";
  categoryLabel: string;
  caption: string;
  image: string;
  span?: string;
}

export interface WhyReason {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  highlights: string[];
}

// 1. Weekly Offline Activities
export const weeklyOfflineActivities: WeeklyActivity[] = [
  {
    id: "act-1",
    title: "Hands-On Electronics & Robotics",
    category: "Hardware & Circuits",
    icon: "Cpu",
    description: "Work directly with breadboards, microcontrollers, servos, motor drivers, and sensor breakout boards.",
    tools: ["Arduino Uno", "DC Motors", "IR Sensors", "Multimeters"],
    image: "/High tech lab .png",
  },
  {
    id: "act-2",
    title: "Coding & Programming Activities",
    category: "Software & Logic",
    icon: "Code2",
    description: "Write executable programs, develop computational algorithms, debug code, and build interactive applications.",
    tools: ["Python 3", "VS Code", "Scratch Studio", "Block Logic"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "act-3",
    title: "Robot Building & Automation",
    category: "Autonomous Systems",
    icon: "Bot",
    description: "Assemble physical chassis, calibrate mechanical gears, wire ultrasonic arrays, and program autonomous rovers.",
    tools: ["Chassis Kits", "Ultrasonic Modules", "ESP32", "PID Controllers"],
    image: "/robo with students.png",
  },
  {
    id: "act-4",
    title: "Problem-Solving Challenges",
    category: "Critical Thinking",
    icon: "Sparkles",
    description: "Tackle time-bound engineering challenges, design sprint problems, and real-world system debugging tasks.",
    tools: ["Design Thinking", "Logic Puzzles", "Rapid Prototyping"],
    image: "/Mobile lab .jpeg",
  },
  {
    id: "act-5",
    title: "3D Design & Printing",
    category: "Rapid Prototyping",
    icon: "Printer",
    description: "Create parametric 3D CAD models, calibrate slicing parameters, and fabricate durable mechanical parts on 3D printers.",
    tools: ["Autodesk Tinkercad", "Fusion 360", "Cura Slicer", "FDM 3D Printers"],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "act-6",
    title: "Real-World Project Development",
    category: "Applied Innovation",
    icon: "Rocket",
    description: "Turn concepts into functional end-to-end solutions, smart home devices, telemetry nodes, and smart gadgets.",
    tools: ["IoT Cloud", "Sensor Nodes", "Mobile UI", "Enclosures"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "act-7",
    title: "Project Presentation & Demonstration",
    category: "Communication Mastery",
    icon: "Award",
    description: "Demonstrate working prototypes, explain technical logic to peers and mentors, and master public communication.",
    tools: ["Live Demo Bay", "Tech Pitch Deck", "Exhibition Floor"],
    image: "/Event.png",
  },
];

// 2. Learning Journey 6-Step Pathway
export const learningJourneySteps: LearningJourneyStep[] = [
  {
    step: "01",
    title: "Think",
    subtitle: "Identify & Inquire",
    description: "Identify challenges, ask curious questions, and brainstorm original solutions to everyday problems.",
    details: ["Problem identification", "Curious inquiry", "Creative brainstorming"],
    color: "#FF7711",
    icon: "Lightbulb",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Architect & Model",
    description: "Blueprint mechanisms, sketch architectural schemas, and model system workflows before building.",
    details: ["CAD schematics", "Circuit diagrams", "Algorithmic flowcharts"],
    color: "#38BDF8",
    icon: "Layers",
  },
  {
    step: "03",
    title: "Create",
    subtitle: "Assemble & Code",
    description: "Assemble physical robotics, wire sensors & microchips, and write executable code from scratch.",
    details: ["Soldering & wiring", "Microcontroller coding", "Physical assembly"],
    color: "#4ADE80",
    icon: "Wrench",
  },
  {
    step: "04",
    title: "Improve",
    subtitle: "Test & Refine",
    description: "Test prototypes under stress, debug glitches, and iteratively refine mechanical and code performance.",
    details: ["Stress testing", "Debugging bugs", "Performance tuning"],
    color: "#FACC15",
    icon: "Activity",
  },
  {
    step: "05",
    title: "Explain",
    subtitle: "Articulate & Master",
    description: "Articulate computational logic, explain how it works, and build communication mastery.",
    details: ["Logic walkthroughs", "Technical Q&A", "Peer reviews"],
    color: "#C084FC",
    icon: "MessageSquare",
  },
  {
    step: "06",
    title: "Showcase",
    subtitle: "Exhibit & Compete",
    description: "Present working innovations at tech expos, school fests, and competitive national hackathons.",
    details: ["Expo booths", "National competitions", "Verified portfolio"],
    color: "#FB7185",
    icon: "Trophy",
  },
];

// 3. Learning Levels (3 Progressive Levels)
export const learningLevelsList: LearningLevel[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Explore • Learn • Create",
    badge: "Foundation Level",
    description:
      "Students begin their learning journey by exploring technology through hands-on activities, experiments, creativity, and guided projects.",
    goal: "Build strong foundations, develop curiosity, and create a “learning by doing” mindset.",
    targetAudience: "Grades K-5 & Beginners",
    skills: ["Hands-On Curiosity", "Basic Circuits & Motors", "Block Coding & Logic", "3D Tinkering", "Creative Problem Solving"],
    color: "#FF7711",
    bgGradient: "from-[#FF7711]/10 via-[#161616] to-[#0E0E0E]",
    borderColor: "border-[#FF7711]/40",
    accentColor: "text-[#FF7711]",
  },
  {
    id: "learner",
    name: "LEARNER",
    tagline: "Build • Apply • Innovate",
    badge: "Intermediate Level",
    description:
      "Students move beyond the basics and begin applying their knowledge through meaningful projects, teamwork, experimentation, and real-world problem-solving.",
    goal: "Turn learning into practical skills, innovation, and impressive projects.",
    targetAudience: "Grades 6-8 & Intermediate Makers",
    skills: ["Microcontroller Programming", "Text Coding in Python/C++", "Parametric 3D CAD", "AI & Computer Vision", "Team Innovation Sprints"],
    color: "#38BDF8",
    bgGradient: "from-[#38BDF8]/10 via-[#161616] to-[#0E0E0E]",
    borderColor: "border-[#38BDF8]/40",
    accentColor: "text-[#38BDF8]",
  },
  {
    id: "performer",
    name: "PERFORMER",
    tagline: "Master • Build • Get Career-Ready",
    badge: "Advanced Level",
    description:
      "Learners take their skills further through advanced projects, professional skill development, portfolio building, industry-oriented training, and real-world problem-solving.",
    goal: "Transform technical skills into strong portfolios, professional confidence, internship opportunities, and job & placement readiness.",
    targetAudience: "Grades 9-12 & Advanced Innovators",
    skills: ["Full-Stack Engineering", "Industrial IoT & Kinematics", "Deep Learning & Neural Networks", "Rapid Manufacturing & Fusion 360", "Venture Pitch & Hackathon Mastery"],
    color: "#4ADE80",
    bgGradient: "from-[#4ADE80]/10 via-[#161616] to-[#0E0E0E]",
    borderColor: "border-[#4ADE80]/40",
    accentColor: "text-[#4ADE80]",
  },
];

// 4. Our Courses: 2 Practical Learning Levels (STARTER & LEARNER) across 7 Domains
export const starterCourses: CourseDetail[] = [
  {
    id: "starter-robotics",
    domain: "ROBOTICS",
    title: "Build Your First Robots",
    tagline: "Learn electronics, circuits, motors, sensors, mechanical systems, and basic robotics.",
    emoji: "🤖",
    image: "/High tech lab .png",
    level: "STARTER",
    focus: "Tactile electronics, basic circuits, gear ratios, DC motors, and autonomous obstacle detection.",
    topics: ["Circuit Basics", "Motors & Gears", "Sensors & Switches", "Chassis Assembly", "Basic Automation"],
    builds: ["Line Follower Robot", "Sensor-Triggered Rover", "Obstacle Detection Car", "Basic Automation Gate"],
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  },
  {
    id: "starter-coding",
    domain: "CODING",
    title: "Build Your First Programs",
    tagline: "Develop computational thinking, programming logic, creativity, and basic AI awareness.",
    emoji: "💻",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Core programming logic, algorithms, event listeners, loops, and playful game development.",
    topics: ["Computer Basics", "Coding Logic", "Algorithms", "Variables", "Loops", "Game Development", "AI Basics"],
    builds: ["Interactive Arcade Games", "Animated Storybooks", "Mini Math Solvers", "Simple Coding Projects"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    id: "starter-ai",
    domain: "AI / ML",
    title: "Discover the World of AI",
    tagline: "Understand how AI works and explore machine learning through simple, practical activities.",
    emoji: "🧠",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Demystifying computer intelligence, training vision models, voice recognition, and responsible AI.",
    topics: ["AI Fundamentals", "Data Basics", "Machine Learning Concepts", "Pattern Recognition", "AI Tools", "Responsible AI"],
    builds: ["Simple AI Image Classifier", "Prediction Toy Models", "Voice-Controlled Bot", "AI Experiment Demos"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    id: "starter-3d",
    domain: "3D PRINTING",
    title: "Turn Ideas Into Objects",
    tagline: "Learn how digital designs are transformed into real physical products.",
    emoji: "🖨️",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Spatial geometry, CAD visualization in Tinkercad, nozzle temperatures, and filament fabrication.",
    topics: ["3D Printing Concepts", "CAD Basics", "Tinkercad", "3D Modelling", "Materials", "Slicing"],
    builds: ["Custom Name Keychains", "Mini Geometric Models", "Mechanical Gears", "Custom Desk Accessories"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "starter-drone",
    domain: "DRONE TECHNOLOGY",
    title: "Explore the World of Drones",
    tagline: "Discover drone technology, flight principles, components, and safe operation.",
    emoji: "🚁",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Aerodynamics, propeller lift, balance, remote controller radio telemetry, and flight safety.",
    topics: ["Drone Basics", "Components", "Flight Principles", "Propellers", "Motors", "Safety Protocols"],
    builds: ["Indoor Flight Manoeuvres", "Propeller Thrust Rig", "Basic Mini-Drone Projects", "Obstacle Course Run"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "starter-finance",
    domain: "FINANCIAL LITERACY",
    title: "Learn to Manage Money",
    tagline: "Develop practical money-management skills and understand how financial decisions work.",
    emoji: "💰",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Everyday money awareness, piggy banks vs bank accounts, budgeting for projects, and smart choices.",
    topics: ["Money Basics", "Saving", "Budgeting", "Needs vs Wants", "Banking Concepts", "Smart Spending"],
    builds: ["Personal Piggy Budget", "Savings Target Tracker", "Maker Materials Cost Sheet", "Financial Quiz Game"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    id: "starter-entrepreneur",
    domain: "ENTREPRENEUR MINDSET",
    title: "Turn Ideas Into Opportunities",
    tagline: "Develop creativity, confidence, problem-solving, and the mindset to turn ideas into meaningful solutions.",
    emoji: "🚀",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
    focus: "Finding real everyday problems, team collaboration, sketching ideas, and presenting solutions.",
    topics: ["Idea Generation", "Problem Solving", "Creativity", "Teamwork", "Communication", "Basic Business Thinking"],
    builds: ["Problem-Solution Canvas", "Product Invention Sketch", "60-Second Mini Pitch", "Innovation Fair Poster"],
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  },
];

export const learnerCourses: CourseDetail[] = [
  {
    id: "learner-robotics",
    domain: "ROBOTICS",
    title: "Build Intelligent Robots",
    tagline: "Explore Arduino, programming, sensors, automation, IoT, and advanced robotics.",
    emoji: "🤖",
    image: "/robo with students.png",
    level: "LEARNER",
    focus: "Microcontroller logic, sensor fusion, servo kinematics, IoT telemetry, and autonomous decision loops.",
    topics: ["Arduino C++", "Programming", "Electronics", "Sensors", "Motor Control", "IoT", "Automation"],
    builds: ["Smart IoT Bot", "Bluetooth Controlled Arm", "Autonomous Maze Solver", "Smart Factory Conveyor"],
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  },
  {
    id: "learner-coding",
    domain: "CODING",
    title: "Build Intelligent Software",
    tagline: "Develop programming and software-development skills while using AI-assisted development.",
    emoji: "💻",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Text coding in Python & C++, object-oriented structures, database APIs, Git versioning, and AI tooling.",
    topics: ["Python", "Java", "C/C++", "OOP", "APIs", "Data Handling", "Debugging", "Git", "AI-Assisted Coding"],
    builds: ["Full-Stack Web App", "Student Management System", "AI Chatbot Assistant", "Automated Desktop Utility"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    id: "learner-ai",
    domain: "AI / ML",
    title: "Build Intelligent Solutions",
    tagline: "Move from AI concepts to practical machine-learning and AI application development.",
    emoji: "🧠",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Dataset training, computer vision with OpenCV, neural classification, and integrating LLM APIs.",
    topics: ["Python for AI", "Data Processing", "Machine Learning", "Model Training", "Computer Vision", "Generative AI", "AI APIs"],
    builds: ["Real-Time Face/Gesture Recognition", "Predictive House Price Model", "AI Medical Diagnostic Demo", "Custom Smart Assistant"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    id: "learner-3d",
    domain: "3D PRINTING",
    title: "Build Professional Products",
    tagline: "Move into advanced CAD, engineering design, prototyping, and product development.",
    emoji: "🖨️",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Autodesk Fusion 360, parametric assemblies, mechanical tolerances, stress simulation, and FDM manufacturing.",
    topics: ["Advanced CAD", "Fusion 360", "Precision Design", "Advanced Slicing", "Materials", "Prototyping", "Manufacturing"],
    builds: ["Functional Gearbox Assembly", "Robotic End-Effector Gripper", "Custom Weatherproof Sensor Enclosure", "Drone Frame Prototype"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "learner-drone",
    domain: "DRONE TECHNOLOGY",
    title: "Build & Understand Advanced Drones",
    tagline: "Explore drone systems, flight control, sensors, programming, and real-world applications.",
    emoji: "🚁",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Flight controller configuration, PID tuning, GPS waypoints, telemetry radios, and autonomous mission design.",
    topics: ["Drone Components", "Flight Controllers", "Sensors", "Motors", "GPS", "Programming", "Automation", "Safety"],
    builds: ["Custom Quadcopter Assembly", "Autonomous GPS Waypoint Flight", "Livestream FPV Video System", "Aerial Mapping Survey Demo"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "learner-finance",
    domain: "FINANCIAL LITERACY",
    title: "Build Financial Confidence",
    tagline: "Develop the knowledge needed to make informed financial decisions and understand personal finance.",
    emoji: "💰",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Compound interest, stock market simulations, risk analysis, cash flow management, and startup cap tables.",
    topics: ["Budgeting", "Saving & Investing", "Banking", "Digital Payments", "Financial Planning", "Risk", "Entrepreneurship Finance"],
    builds: ["Comprehensive Personal Finance Plan", "Virtual Equity Portfolio Simulation", "Hardware Startup Unit Economics Sheet", "Tax & Investment Dashboard"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    id: "learner-entrepreneur",
    domain: "ENTREPRENEUR MINDSET",
    title: "Turn Ideas Into Real Ventures",
    tagline: "Develop the skills to identify problems, create solutions, communicate ideas, and understand how businesses grow.",
    emoji: "🚀",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
    focus: "Lean startup methodology, MVP prototyping, customer interviews, unit economics, and venture pitching.",
    topics: ["Design Thinking", "Market Research", "Business Models", "Product Development", "Marketing", "Communication", "Leadership"],
    builds: ["Validated MVP Prototype", "Investor-Ready 10-Slide Pitch Deck", "Business Model Canvas (BMC)", "Go-to-Market Launch Strategy"],
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  },
];

// 5. Student Portfolio Showcase
export const studentPortfolioItems: StudentProject[] = [
  {
    id: "port-1",
    title: "Autonomous Obstacle-Navigating Rover",
    domain: "Robotics & Microcontrollers",
    authorGrade: "Built by Grade 7 Student Team",
    description: "Multi-sensor autonomous rover with ultrasonic ranging, IR collision sensors, and dual H-bridge motor drivers capable of navigating complex maze paths.",
    hardware: ["Arduino Nano", "HC-SR04 Sonar", "L298N Driver", "3D Printed Chassis"],
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    tag: "Autonomous Hardware",
  },
  {
    id: "port-2",
    title: "AI Real-Time Hand Gesture Controller",
    domain: "Artificial Intelligence & Python",
    authorGrade: "Built by Grade 9 Student",
    description: "OpenCV and MediaPipe powered computer vision system that interprets real-time hand gestures to wirelessly control physical robotic actuators.",
    hardware: ["Python OpenCV", "MediaPipe", "ESP32 WiFi Node", "HD Webcam"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tag: "Computer Vision",
  },
  {
    id: "port-3",
    title: "Parametric 4-Axis Robotic Arm Gripper",
    domain: "3D CAD & Digital Fabrication",
    authorGrade: "Built by Grade 8 Innovator",
    description: "Designed completely in Autodesk Fusion 360 with custom gear tooth profiles, sliced in Cura, and 3D printed with 100% infill PLA for mechanical strength.",
    hardware: ["Fusion 360", "FDM 3D Printer", "MG996R Metal Servos", "PLA Polymer"],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    tag: "Mechanical CAD",
  },
  {
    id: "port-4",
    title: "Smart Agricultural Soil & Weather Node",
    domain: "Internet of Things (IoT)",
    authorGrade: "Built by Grade 10 Team",
    description: "Solar-powered environmental telemetry station transmitting soil moisture, temperature, and ambient humidity to a live cloud dashboard every 30 seconds.",
    hardware: ["ESP32 NodeMCU", "Capacitive Moisture Sensor", "DHT22", "MQTT Cloud"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    tag: "Cloud Telemetry",
  },
  {
    id: "port-5",
    title: "Autonomous Aerial Survey Quadcopter",
    domain: "Drone Aviation & Telemetry",
    authorGrade: "Built by Grade 11 Student",
    description: "Custom quadcopter with brushless motors, electronic speed controllers, barometer altitude-hold, and failsafe return-to-home GPS lock.",
    hardware: ["APM Flight Controller", "2212 920KV Motors", "UBLOX GPS", "FlySky TX/RX"],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    tag: "Aeronautics",
  },
  {
    id: "port-6",
    title: "CleanTech Dual-Axis Solar Tracker",
    domain: "Renewable Energy & Automation",
    authorGrade: "Built by Grade 8 Team",
    description: "Dual-axis solar tracking panel powered by 4 light-dependent resistors and micro-servos that maximizes solar cell photovoltaic absorption by 38%.",
    hardware: ["4x LDR Sensors", "Micro Servos", "Photovoltaic Cell", "LCD Monitor"],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    tag: "CleanTech",
  },
];

// 6. Why Narasimha Skill Sphere 6 Pillars
export const whyNarasimhaReasons: WhyReason[] = [
  {
    id: "why-1",
    title: "Hands-On Learning",
    emoji: "🛠️",
    tagline: "Learning happens by doing.",
    description:
      "Students build, experiment, test, and create with real tools, components, and technology—not just learn from textbooks.",
    highlights: ["Real microcontrollers & sensors", "Zero theoretical rote memorization", "Trial-and-error troubleshooting mindset"],
  },
  {
    id: "why-2",
    title: "Future-Focused Curriculum",
    emoji: "💡",
    tagline: "Learn the technologies shaping tomorrow.",
    description:
      "From Robotics, Coding, and AI to 3D Printing and emerging technologies, students develop relevant technical skills through practical learning.",
    highlights: ["Cutting-edge industry tools", "Aligned with NEP 2020 & ATL standards", "Updated annually with emerging deep tech"],
  },
  {
    id: "why-3",
    title: "Expert Mentorship",
    emoji: "👨‍🏫",
    tagline: "Guidance that turns curiosity into capability.",
    description:
      "Mentors support students through projects, challenges, experimentation, and problem-solving—helping them build with confidence.",
    highlights: ["Low student-to-mentor ratio (1:8)", "Engineers & passionate makers", "Personalized pace for every learner"],
  },
  {
    id: "why-4",
    title: "Real-World Projects",
    emoji: "🚀",
    tagline: "Turn ideas into something you can show.",
    description:
      "Students apply what they learn to build working prototypes, applications, robots, and innovative solutions to real-world problems.",
    highlights: ["Working tangible prototypes", "Personal portfolio of completed projects", "Certificate with verified skill credentials"],
  },
  {
    id: "why-5",
    title: "Hackathons & Competitions",
    emoji: "🏆",
    tagline: "Build. Compete. Innovate.",
    description:
      "Students get opportunities to explore and participate in technology, coding, innovation, and robotics competitions such as Smart India Hackathon Junior Edition, IRIS National Science Fair, Avishkaar Makeathon, INOI, HPE CodeWars, FTC, VEX Robotics, and IRC, subject to eligibility and event availability.",
    highlights: ["National & International platform prep", "Competitive hackathon mentorship", "Stage presentation confidence"],
  },
  {
    id: "why-6",
    title: "Future-Ready Skills",
    emoji: "🎯",
    tagline: "Build skills that go beyond the classroom.",
    description:
      "Students develop coding, technical thinking, creativity, communication, teamwork, problem-solving, and innovation skills that can support their future academic and career journeys.",
    highlights: ["Analytical computational thinking", "Resilience & debugging grit", "Verbal presentation & pitching mastery"],
  },
];

// 7. Center Gallery Items
export const centerGalleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "High-Tech Maker Lab in Action",
    category: "robotics",
    categoryLabel: "Robotics Lab",
    caption: "Students calibrating gear trains, circuit connections, and motor drivers in the main arena.",
    image: "/High tech lab .png",
    span: "col-span-12 md:col-span-8 row-span-2",
  },
  {
    id: "gal-2",
    title: "Student Innovation Fair & Expo",
    category: "events",
    categoryLabel: "Events & Showcases",
    caption: "Young innovators presenting their working prototypes to visiting educators and parents.",
    image: "/Event.png",
    span: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
  },
  {
    id: "gal-3",
    title: "Faculty & Mentor Training",
    category: "learning",
    categoryLabel: "Learning Sessions",
    caption: "Certified robotics mentors undergoing hands-on lab calibration and pedagogical tuning.",
    image: "/FDP.jpeg",
    span: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
  },
  {
    id: "gal-4",
    title: "Electronics & Mobile IoT Bay",
    category: "robotics",
    categoryLabel: "Robotics Lab",
    caption: "Tinkering with breadboard circuits, multi-sensor telemetry, and embedded nodes.",
    image: "/Mobile lab .jpeg",
    span: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
  },
  {
    id: "gal-5",
    title: "3D CAD & Digital Fabrication",
    category: "3dprinting",
    categoryLabel: "3D Printing",
    caption: "Parametric solid modeling in Fusion 360 and live additive 3D manufacturing.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    span: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
  },
  {
    id: "gal-6",
    title: "Python & Machine Learning Pods",
    category: "coding",
    categoryLabel: "Coding Sessions",
    caption: "Writing Python scripts, debugging OpenCV loops, and training neural vision models.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    span: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
  },
  {
    id: "gal-7",
    title: "Autonomous Drone Flight Systems",
    category: "projects",
    categoryLabel: "Student Projects",
    caption: "Testing quadcopter avionics, GPS lock, and propeller thrust telemetry in the safety bay.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    span: "col-span-12 sm:col-span-6 md:col-span-6 row-span-1",
  },
  {
    id: "gal-8",
    title: "Hands-On Robotics Mentorship",
    category: "learning",
    categoryLabel: "Learning Sessions",
    caption: "Mentors guiding students step-by-step through line followers and ultrasonic obstacle rovers.",
    image: "/robo with students.png",
    span: "col-span-12 sm:col-span-6 md:col-span-6 row-span-1",
  },
];
