export interface EcosystemNode {
  id: string;
  name: string;
  category: "core" | "engineering" | "digital" | "future";
  size: "large" | "medium" | "small";
  x: number; // percentage coordinate for SVG/visual layout
  y: number;
  iconName: string;
  description: string;
}

export const skillSphereNodes: EcosystemNode[] = [
  { id: "robotics", name: "Robotics", category: "core", size: "large", x: 28, y: 22, iconName: "Bot", description: "Kinematics, microcontrollers, motor drivers, and sensor integration." },
  { id: "ai", name: "AI & Machine Learning", category: "future", size: "large", x: 72, y: 22, iconName: "BrainCircuit", description: "Computer vision, neural logic, and generative problem-solving." },
  { id: "coding", name: "Coding", category: "core", size: "large", x: 18, y: 52, iconName: "Code2", description: "Logic syntax, Python algorithms, and embedded firmware scripting." },
  { id: "electronics", name: "Electronics", category: "engineering", size: "large", x: 82, y: 52, iconName: "Cpu", description: "Circuit topology, breadboard prototyping, and PCB design basics." },
  { id: "iot", name: "IoT", category: "engineering", size: "medium", x: 30, y: 80, iconName: "Wifi", description: "Sensor telemetry, wireless protocols, and cloud automation nodes." },
  { id: "3d-design", name: "3D Design", category: "digital", size: "medium", x: 70, y: 80, iconName: "Box", description: "Parametric CAD modeling and mechanical spatial design." },
  { id: "3d-printing", name: "3D Printing", category: "engineering", size: "medium", x: 50, y: 15, iconName: "Printer", description: "Additive manufacturing, slicing parameters, and physical fabrication." },
  { id: "drones", name: "Drones", category: "future", size: "medium", x: 50, y: 86, iconName: "Compass", description: "Aerodynamics, flight telemetry, and autonomous aerial navigation." },
  { id: "ar-vr", name: "AR / VR / MR", category: "future", size: "small", x: 14, y: 35, iconName: "Glasses", description: "Spatial computing and immersive interactive environments." },
  { id: "web-dev", name: "Web Development", category: "digital", size: "small", x: 86, y: 35, iconName: "Globe", description: "Modern responsive web interfaces and dynamic web apps." },
  { id: "mobile-dev", name: "Mobile Development", category: "digital", size: "small", x: 14, y: 68, iconName: "Smartphone", description: "Cross-platform app creation and mobile hardware hooks." },
  { id: "graphic-design", name: "Graphic Design", category: "digital", size: "small", x: 86, y: 68, iconName: "Palette", description: "Visual communication, product UI/UX, and vector design." },
  { id: "entrepreneurship", name: "Entrepreneurship", category: "core", size: "medium", x: 50, y: 50, iconName: "Lightbulb", description: "Ideation, prototype validation, pitching, and real-world viability." },
];

export interface TechCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  iconName: string;
  featured?: boolean;
  tags: string[];
}

export const technologyShowcase: TechCard[] = [
  {
    id: "robotics",
    title: "Robotics Engineering",
    category: "PHYSICAL COMPUTING",
    description: "Students assemble microcontrollers, actuators, and sensor arrays to engineer autonomous rovers, robotic arms, and obstacle-avoidance machines.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    iconName: "Bot",
    featured: true,
    tags: ["Microcontrollers", "Motors & Servos", "Sensors", "Automation"],
  },
  {
    id: "coding",
    title: "Coding & Computational Logic",
    category: "SOFTWARE ARCHITECTURE",
    description: "From block-based problem solving to full Python programming, data structures, and embedded system scripting.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    iconName: "Code2",
    tags: ["Python", "Logic Building", "Algorithms", "C++ for Hardware"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    category: "INTELLIGENT SYSTEMS",
    description: "Demystifying computer vision, neural networks, voice recognition, and generative AI models with hands-on experiments.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    iconName: "BrainCircuit",
    tags: ["Computer Vision", "Model Training", "Smart Automation"],
  },
  {
    id: "electronics",
    title: "Electronics & IoT",
    category: "HARDWARE INNOVATION",
    description: "Breadboard prototyping, schematic reading, signal analysis, and building wireless connected IoT devices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    iconName: "Cpu",
    tags: ["Circuit Design", "Sensors", "WiFi / Bluetooth Nodes", "Breadboarding"],
  },
  {
    id: "3d-making",
    title: "3D Design & Printing",
    category: "RAPID FABRICATION",
    description: "Transforming 2D sketches into 3D CAD models and fabricating physical parts with modern additive manufacturing printers.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    iconName: "Printer",
    tags: ["CAD Modeling", "Slicing Software", "Rapid Prototyping"],
  },
  {
    id: "drones",
    title: "Drone Technology",
    category: "AEROMODELLING",
    description: "Understanding aerodynamics, propeller thrust, electronic speed controllers, telemetry receivers, and autonomous flight pathing.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    iconName: "Compass",
    tags: ["Quadcopter Assembly", "Flight Telemetry", "Aerospace Basics"],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Development",
    category: "DIGITAL CREATION",
    description: "Building responsive digital tools, interactive web portals, and mobile prototypes that interact with student hardware creations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    iconName: "Globe",
    tags: ["UI Systems", "Full-Stack Concepts", "App Prototypes"],
  },
  {
    id: "creative-design",
    title: "Creative Design & Media",
    category: "VISUAL SYSTEMS",
    description: "Mastering visual communication, user experience principles, technical diagrams, and project presentation branding.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    iconName: "Palette",
    tags: ["UI / UX", "Digital Graphics", "Project Showcase Design"],
  },
];
