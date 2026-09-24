export type JourneyLevel = "STARTER" | "LEARNER" | "PERFORMER";

export interface Course {
  id: string;
  title: string;
  category: string;
  levels: JourneyLevel[];
  description: string;
  skillsLearned: string[];
  tools: string[];
  iconName: string;
}

export const specializedCourses: Course[] = [
  {
    id: "robotics",
    title: "Robotics & Embedded Systems",
    category: "Hardware",
    levels: ["STARTER", "LEARNER", "PERFORMER"],
    description: "Hands-on robotics covering chassis design, sensor fusion, servo kinematics, and microcontroller code.",
    skillsLearned: ["Circuit Wiring", "Sensor Calibration", "Motor Control", "Autonomous Navigation"],
    tools: ["Microcontroller Boards", "Ultrasonic Sensors", "Motor Drivers", "Actuators"],
    iconName: "Bot",
  },
  {
    id: "coding",
    title: "Coding & Computational Thinking",
    category: "Software",
    levels: ["STARTER", "LEARNER", "PERFORMER"],
    description: "Algorithmic thinking from visual programming through object-oriented Python and hardware integration.",
    skillsLearned: ["Logic Structures", "Loops & Conditions", "Data Structures", "API Integration"],
    tools: ["Block Logic", "Python", "VS Code", "MicroPython"],
    iconName: "Code2",
  },
  {
    id: "ai",
    title: "AI & Machine Intelligence",
    category: "Future Tech",
    levels: ["LEARNER", "PERFORMER"],
    description: "Explore machine learning models, computer vision, voice recognition, and ethical AI applications.",
    skillsLearned: ["Data Classification", "Computer Vision", "Neural Model Basics", "Prompt Engineering"],
    tools: ["Teachable Machine", "OpenCV", "Python ML Libraries", "Edge AI Nodes"],
    iconName: "BrainCircuit",
  },
  {
    id: "3d-design",
    title: "3D CAD & Additive Prototyping",
    category: "Design & Fab",
    levels: ["STARTER", "LEARNER", "PERFORMER"],
    description: "Turn ideas into tangible 3D objects through parametric spatial design and FDM 3D printing.",
    skillsLearned: ["Spatial Geometry", "Tinkercad / Fusion basics", "Mesh Slicing", "Material Infill Tuning"],
    tools: ["Tinkercad", "Autodesk Fusion", "Cura Slicer", "FDM 3D Printers"],
    iconName: "Printer",
  },
  {
    id: "graphic-design",
    title: "Graphic & UI/UX Design",
    category: "Design",
    levels: ["STARTER", "LEARNER"],
    description: "Master visual communication, color psychology, vector illustration, and digital product interface layouts.",
    skillsLearned: ["Color Theory", "Typography", "Vector Illustration", "Wireframing"],
    tools: ["Figma", "Vector Tools", "Canva Pro", "Design Systems"],
    iconName: "Palette",
  },
  {
    id: "young-innovator",
    title: "Young Innovator & Maker Lab",
    category: "Innovation",
    levels: ["STARTER", "LEARNER", "PERFORMER"],
    description: "Comprehensive multi-disciplinary maker experience solving real-world challenges through prototyping and pitching.",
    skillsLearned: ["Design Thinking", "Rapid Prototyping", "Troubleshooting", "Project Presentation"],
    tools: ["Tinkering Kit", "Sensors", "Craft & Tech Components", "Pitch Deck Tools"],
    iconName: "Lightbulb",
  },
];

export const journeyStageDetails: Record<JourneyLevel, { title: string; subtitle: string; description: string; badge: string }> = {
  STARTER: {
    title: "STARTER LEVEL",
    badge: "Level 01: Discover & Touch",
    subtitle: "First steps into hands-on technology",
    description: "Focus on curiosity, foundational understanding, simple circuits, and playful block-based problem solving with zero prerequisite knowledge required.",
  },
  LEARNER: {
    title: "LEARNER LEVEL",
    badge: "Level 02: Construct & Code",
    subtitle: "Active building and real programming",
    description: "Students move into writing real code, wiring physical breadboards, calibrating complex sensor arrays, and assembling multi-part mechanisms.",
  },
  PERFORMER: {
    title: "PERFORMER LEVEL",
    badge: "Level 03: Innovate & Deploy",
    subtitle: "Advanced autonomous systems and prototypes",
    description: "Independent project building with AI, IoT telemetry, advanced CAD fabrication, and preparing functional prototypes for technology showcases.",
  },
};
