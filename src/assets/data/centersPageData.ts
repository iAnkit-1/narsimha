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
  emoji: string;
  title: string;
  detail: string;
  learn?: string[];
  build: string[];
  buildLabel: string;
  image: string;
  level: "STARTER" | "LEARNER";
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

export interface StudentPortfolioProfile {
  id: string;
  name: string;
  avatar: string;
  photoBadge: string;
  quote: string;
  taglineQuote: string;
  tier: string;
  tierColor: string;
  domain: string;
  domainEmoji: string;
  domainColor: string;
  completedProject: {
    title: string;
    description: string;
    image: string;
    caption: string;
  };
  workingOnProject: {
    title: string;
    description: string;
    image: string;
    caption: string;
  };
  achievements: {
    icon: string;
    title: string;
  }[];
  progress: {
    label: string;
    value: number;
    color: string;
  }[];
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

// 4. Our Courses: STARTER & LEARNER Across 7 Tracks
export const starterCourses: CourseDetail[] = [
  {
    id: "starter-robotics",
    domain: "ROBOTICS",
    emoji: "🤖",
    title: "Build Your First Robots",
    detail: "Learn electronics, circuits, motors, sensors, mechanical systems, and basic robotics.",
    build: ["Line Follower", "Sensor Robot", "Obstacle Detection", "Basic Automation"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-coding",
    domain: "CODING",
    emoji: "💻",
    title: "Build Your First Programs",
    detail: "Develop computational thinking, programming logic, creativity, and basic AI awareness.",
    learn: ["Computer Basics", "Coding Logic", "Algorithms", "Variables", "Loops", "Game Development", "AI Basics"],
    build: ["Games", "Animations", "Interactive Apps", "Simple Coding Projects"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-ai",
    domain: "AI / ML",
    emoji: "🧠",
    title: "Discover the World of Artificial Intelligence",
    detail: "Understand how AI works and explore machine learning through simple, practical activities.",
    learn: ["AI Fundamentals", "Data Basics", "Machine Learning Concepts", "Pattern Recognition", "AI Tools", "Responsible AI"],
    build: ["Simple AI Models", "Prediction Projects", "Image Recognition", "AI Experiments"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-3d",
    domain: "3D PRINTING",
    emoji: "🖨️",
    title: "Turn Ideas Into Objects",
    detail: "Learn how digital designs are transformed into real physical products.",
    learn: ["3D Printing", "CAD Basics", "Tinkercad", "3D Modelling", "Materials", "Slicing"],
    build: ["Keychains", "Mini Models", "Mechanical Parts", "Custom Designs"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-drone",
    domain: "DRONE TECHNOLOGY",
    emoji: "🚁",
    title: "Explore the World of Drones",
    detail: "Discover drone technology, flight principles, components, and safe operation.",
    learn: ["Drone Basics", "Components", "Flight Principles", "Propellers", "Motors", "Safety"],
    build: ["Flight Activities", "Basic Drone Projects"],
    buildLabel: "Students Build / Explore:",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-finance",
    domain: "FINANCIAL LITERACY",
    emoji: "💰",
    title: "Learn to Manage Money",
    detail: "Develop practical money-management skills and understand how financial decisions work.",
    learn: ["Money Basics", "Saving", "Budgeting", "Needs vs Wants", "Banking", "Smart Spending"],
    build: ["Personal Budget", "Savings Plan", "Money Management Activities"],
    buildLabel: "Students Create:",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
  {
    id: "starter-entrepreneur",
    domain: "ENTREPRENEUR MINDSET",
    emoji: "🚀",
    title: "Turn Ideas Into Opportunities",
    detail: "Develop creativity, confidence, problem-solving, and the mindset to turn ideas into meaningful solutions.",
    learn: ["Idea Generation", "Problem Solving", "Creativity", "Teamwork", "Communication", "Basic Business Thinking"],
    build: ["Business Ideas", "Product Concepts", "Simple Pitches", "Innovation Projects"],
    buildLabel: "Students Create:",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    level: "STARTER",
  },
];

export const learnerCourses: CourseDetail[] = [
  {
    id: "learner-robotics",
    domain: "ROBOTICS",
    emoji: "🤖",
    title: "Build Intelligent Robots",
    detail: "Explore Arduino, programming, sensors, automation, IoT, and advanced robotics.",
    learn: ["Arduino", "Programming", "Electronics", "Sensors", "Motor Control", "IoT", "Automation"],
    build: ["Smart Robots", "IoT Systems", "Automation Projects", "Advanced Robotics"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-coding",
    domain: "CODING",
    emoji: "💻",
    title: "Build Intelligent Software",
    detail: "Develop programming and software-development skills while using AI-assisted development.",
    learn: ["Python", "Java", "C/C++", "OOP", "APIs", "Data Handling", "Debugging", "Git", "AI-Assisted Coding"],
    build: ["Web Applications", "Management Systems", "Chatbots", "AI Applications", "Smart Utilities"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-ai",
    domain: "AI / ML",
    emoji: "🧠",
    title: "Build Intelligent Solutions",
    detail: "Move from AI concepts to practical machine-learning and AI application development.",
    learn: ["Python for AI", "Data Processing", "Machine Learning", "Model Training", "Computer Vision", "Generative AI", "AI APIs"],
    build: ["Prediction Models", "AI Assistants", "Image Recognition", "Recommendation Systems", "AI Applications"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-3d",
    domain: "3D PRINTING",
    emoji: "🖨️",
    title: "Build Professional Products",
    detail: "Move into advanced CAD, engineering design, prototyping, and product development.",
    learn: ["Advanced CAD", "Fusion 360", "Precision Design", "Advanced Slicing", "Materials", "Prototyping", "Manufacturing"],
    build: ["Mechanical Components", "Robot Parts", "Product Prototypes", "Functional Enclosures"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-drone",
    domain: "DRONE TECHNOLOGY",
    emoji: "🚁",
    title: "Build & Understand Advanced Drones",
    detail: "Explore drone systems, flight control, sensors, programming, and real-world applications.",
    learn: ["Drone Components", "Flight Controllers", "Sensors", "Motors", "GPS", "Programming", "Automation", "Safety"],
    build: ["Drone Assembly", "Autonomous Flight Concepts", "Sensor-Based Systems", "Drone Applications"],
    buildLabel: "Students Build / Explore:",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-finance",
    domain: "FINANCIAL LITERACY",
    emoji: "💰",
    title: "Build Financial Confidence",
    detail: "Develop the knowledge needed to make informed financial decisions and understand personal finance.",
    learn: ["Budgeting", "Saving & Investing", "Banking", "Digital Payments", "Financial Planning", "Risk", "Entrepreneurship Finance"],
    build: ["Personal Financial Plan", "Investment Simulation", "Business Budget", "Financial Goals"],
    buildLabel: "Students Create:",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
  },
  {
    id: "learner-entrepreneur",
    domain: "ENTREPRENEUR MINDSET",
    emoji: "🚀",
    title: "Turn Ideas Into Real Ventures",
    detail: "Develop the skills to identify problems, create solutions, communicate ideas, and understand how businesses grow.",
    learn: ["Design Thinking", "Market Research", "Business Models", "Product Development", "Marketing", "Communication", "Leadership"],
    build: ["Business Ideas", "Product Prototypes", "Business Models", "Pitch Decks", "Startup Projects"],
    buildLabel: "Students Build:",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    level: "LEARNER",
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

export const studentPortfolioProfiles: StudentPortfolioProfile[] = [
  {
    id: "azad",
    name: "Azad",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    photoBadge: "BUILD EXPLORE LEARN REPEAT",
    quote: "I love building things that solve real problems.",
    taglineQuote: "Small ideas. Big possibilities.",
    tier: "Junior Champs",
    tierColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    domain: "Robotics",
    domainEmoji: "🤖",
    domainColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    completedProject: {
      title: "Smart Obstacle Avoiding Robot",
      description: "Built and programmed a robot capable of detecting obstacles and changing its direction automatically.",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
      caption: "Smart Obstacle Avoiding Robot",
    },
    workingOnProject: {
      title: "Smart Home Automation",
      description: "Exploring sensors, IoT and automated control systems.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
      caption: "Smart Home Automation (Work in Progress)",
    },
    achievements: [
      {
        icon: "Trophy",
        title: "School Innovation Showcase",
      },
      {
        icon: "Award",
        title: "Robotics Level Certificate",
      },
    ],
    progress: [
      {
        label: "Concept Understanding",
        value: 90,
        color: "bg-[#38BDF8]",
      },
      {
        label: "Hands-on Skills",
        value: 80,
        color: "bg-[#FF7711]",
      },
      {
        label: "Creativity & Innovation",
        value: 85,
        color: "bg-[#22C55E]",
      },
    ],
  },
  {
    id: "ananya",
    name: "Ananya Singh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    photoBadge: "AI FOR GOOD • SOLVE WITH CODE",
    quote: "Teaching neural models to recognize patterns feels like building tomorrow's assistants today.",
    taglineQuote: "Curiosity decoded into intelligence.",
    tier: "Senior Champs",
    tierColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    domain: "AI / ML",
    domainEmoji: "🧠",
    domainColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    completedProject: {
      title: "AI Real-Time Hand Gesture Controller",
      description: "Implemented OpenCV and MediaPipe computer vision to interpret hand gestures and control robotic actuators.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      caption: "AI Gesture Controller (Live Model)",
    },
    workingOnProject: {
      title: "Smart Eco-Sort Computer Vision",
      description: "Training neural network classifiers to identify recyclable waste types in real time.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      caption: "Eco-Sort Vision (Work in Progress)",
    },
    achievements: [
      {
        icon: "Trophy",
        title: "National Young AI Innovator Top 10",
      },
      {
        icon: "Award",
        title: "Applied Machine Learning Certificate",
      },
    ],
    progress: [
      {
        label: "Concept Understanding",
        value: 95,
        color: "bg-[#38BDF8]",
      },
      {
        label: "Hands-on Skills",
        value: 88,
        color: "bg-[#FF7711]",
      },
      {
        label: "Creativity & Innovation",
        value: 92,
        color: "bg-[#22C55E]",
      },
    ],
  },
  {
    id: "rohan",
    name: "Rohan Verma",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    photoBadge: "DESIGN IT • SLICE IT • PRINT IT",
    quote: "3D CAD lets me turn complex math and spatial ideas into functional physical products.",
    taglineQuote: "Precision engineering from screen to reality.",
    tier: "Junior Champs",
    tierColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    domain: "3D Printing",
    domainEmoji: "🖨️",
    domainColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    completedProject: {
      title: "Parametric 4-Axis Robotic Arm Gripper",
      description: "Modeled interlocking spur gears in Autodesk Fusion 360 and 3D printed a heavy-duty gripper with PLA.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      caption: "Parametric 4-Axis Gripper (V2 Prototype)",
    },
    workingOnProject: {
      title: "Biomimetic Prosthetic Hand",
      description: "Engineering flexible tendon channels and lightweight ergonomic finger joints.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      caption: "Biomimetic Hand (Work in Progress)",
    },
    achievements: [
      {
        icon: "Trophy",
        title: "Maker Faire Best Mechanical Build",
      },
      {
        icon: "Award",
        title: "Fusion 360 Certified Modeler",
      },
    ],
    progress: [
      {
        label: "Concept Understanding",
        value: 88,
        color: "bg-[#38BDF8]",
      },
      {
        label: "Hands-on Skills",
        value: 94,
        color: "bg-[#FF7711]",
      },
      {
        label: "Creativity & Innovation",
        value: 90,
        color: "bg-[#22C55E]",
      },
    ],
  },
  {
    id: "kavya",
    name: "Kavya Sharma",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    photoBadge: "THINK IN LOGIC • WRITE THE FUTURE",
    quote: "Programming taught me that bugs are just puzzles waiting for creative solutions.",
    taglineQuote: "Clean code, unlimited imagination.",
    tier: "Junior Champs",
    tierColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    domain: "Coding",
    domainEmoji: "💻",
    domainColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    completedProject: {
      title: "Multiplayer 2D Physics Arena Game",
      description: "Engineered responsive game loop physics, sprite animations, collision grids, and realtime high scores.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      caption: "2D Physics Game (Playable Web Release)",
    },
    workingOnProject: {
      title: "Community Food Rescue Web App",
      description: "Developing a full-stack dashboard with real-time location matching for surplus food donations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      caption: "Rescue App Portal (Work in Progress)",
    },
    achievements: [
      {
        icon: "Trophy",
        title: "Inter-School Coding Champion Gold",
      },
      {
        icon: "Award",
        title: "Full-Stack Web Foundations Badge",
      },
    ],
    progress: [
      {
        label: "Concept Understanding",
        value: 92,
        color: "bg-[#38BDF8]",
      },
      {
        label: "Hands-on Skills",
        value: 86,
        color: "bg-[#FF7711]",
      },
      {
        label: "Creativity & Innovation",
        value: 94,
        color: "bg-[#22C55E]",
      },
    ],
  },
  {
    id: "ishaan",
    name: "Ishaan Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    photoBadge: "AERO DYNAMICS • FLIGHT TELEMETRY",
    quote: "Calibrating flight controllers and ESCs taught me how precision transforms power into flight.",
    taglineQuote: "Building wings for bold ideas.",
    tier: "Senior Champs",
    tierColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    domain: "Aero Modeling",
    domainEmoji: "🚁",
    domainColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    completedProject: {
      title: "Autonomous Aerial Survey Quadcopter",
      description: "Assembled carbon fiber frame, calibrated 920KV brushless motors, and programmed failsafe GPS return-to-home.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      caption: "Survey Quadcopter (Autonomous Test Complete)",
    },
    workingOnProject: {
      title: "Fixed-Wing Solar Glider UAV",
      description: "Simulating airfoil lift-to-drag ratios and integrating ultra-light flexible solar film on composite wings.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      caption: "Solar Glider UAV (Work in Progress)",
    },
    achievements: [
      {
        icon: "Trophy",
        title: "State Aero Innovation Top Honors",
      },
      {
        icon: "Award",
        title: "Certified UAV Pilot & Builder",
      },
    ],
    progress: [
      {
        label: "Concept Understanding",
        value: 94,
        color: "bg-[#38BDF8]",
      },
      {
        label: "Hands-on Skills",
        value: 92,
        color: "bg-[#FF7711]",
      },
      {
        label: "Creativity & Innovation",
        value: 88,
        color: "bg-[#22C55E]",
      },
    ],
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
