export interface AgeGroup {
  id: string;
  badge: string;
  name: string;
  grades: string;
  tagline: string;
  focus: string[];
  keyProjects: string[];
  image: string;
}

export const ageGroups: AgeGroup[] = [
  {
    id: "little-champs",
    badge: "FOUNDATIONAL MAKING",
    name: "LITTLE CHAMPS",
    grades: "Grades KG – 5",
    tagline: "Sparking early curiosity and tactile discovery through playful engineering.",
    focus: [
      "Curiosity & sensory exploration",
      "Creativity & spatial thinking",
      "Foundational making & simple circuits",
      "Visual block-based logic games",
    ],
    keyProjects: ["Paper Circuit Light-Ups", "Simple Motorized Spinners", "Visual Story Animations"],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "junior-champs",
    badge: "PRACTICAL EXPLORATION",
    name: "JUNIOR CHAMPS",
    grades: "Grades 6 – 8",
    tagline: "Bridging scientific concepts with microcontrollers, sensors, and structural design.",
    focus: [
      "Technology exploration & robotics basics",
      "Structured hands-on projects",
      "Practical problem-solving & breadboarding",
      "Introduction to Python & 3D CAD",
    ],
    keyProjects: ["Line Follower Robot", "Automated Smart Streetlight", "3D Keychain & Gear Fabrication"],
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "senior-champs",
    badge: "ADVANCED PROTOTYPING",
    name: "SENIOR CHAMPS",
    grades: "Grades 9 – 12",
    tagline: "Engineering real-world technological solutions with AI, IoT, and complex mechanics.",
    focus: [
      "Advanced robotics & kinematics",
      "IoT telemetry & cloud integration",
      "AI computer vision & model scripting",
      "Future-ready technology application",
    ],
    keyProjects: ["Gesture-Controlled Rover", "IoT Environmental Weather Station", "Autonomous Drone Flight Systems"],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
  },
];
