export interface E3Pillar {
  key: "ENJOYABLE" | "ENGAGING" | "EXPERIENTIAL";
  title: string;
  badge: string;
  quote: string;
  description: string;
  photoUrl: string;
  actionPoints: string[];
}

export const e3FrameworkData: E3Pillar[] = [
  {
    key: "ENJOYABLE",
    title: "Enjoyable",
    badge: "E1 • Spark Curiosity",
    quote: "We replace boredom with excitement.",
    description: "Interactive activities, tangible hardware, and gamified prototyping spark genuine curiosity and make complex STEM disciplines joyful to learn.",
    photoUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    actionPoints: [
      "Gamified mechanics & live challenges",
      "Immediate visual and physical feedback",
      "Stress-free experimental environment",
    ],
  },
  {
    key: "ENGAGING",
    title: "Engaging",
    badge: "E2 • Active Making",
    quote: "Students move from passive listening to active building.",
    description: "No endless lectures. Students actively hold screwdrivers, connect breadboards, program sensor inputs, and run code directly on physical hardware.",
    photoUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    actionPoints: [
      "100% hands-on workbench ratio",
      "Peer collaboration & team problem solving",
      "Direct microcontroller interaction",
    ],
  },
  {
    key: "EXPERIENTIAL",
    title: "Experiential",
    badge: "E3 • Tangible Impact",
    quote: "Students connect concepts with practical applications.",
    description: "Bridging textbook physics and mathematics with real autonomous rovers, smart IoT stations, and custom 3D printed mechanical prototypes.",
    photoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    actionPoints: [
      "Real engineering components & tools",
      "Iterative prototype refinement",
      "Project exhibition & communication",
    ],
  },
];

export const e3ProgressionStages = [
  { stage: "01", label: "CURIOUS", desc: "Wants to understand how technology works" },
  { stage: "02", label: "INVOLVED", desc: "Tinkers with components and code" },
  { stage: "03", label: "BUILDING", desc: "Constructs working hardware prototypes" },
  { stage: "04", label: "EXPERIENCING", desc: "Tests and solves real engineering bugs" },
  { stage: "05", label: "CONFIDENT", desc: "Capable of creating independent solutions" },
];

export const philosophyPillars = [
  {
    id: "confidence",
    title: "CONFIDENCE",
    badge: "Experimentation",
    summary: "Learn through iterative experimentation.",
    description: "Students learn that failure is merely a debugging step. When a motor doesn't spin or code throws an error, fixing it builds lifelong resilience.",
    iconName: "Shield",
  },
  {
    id: "problem-solving",
    title: "PROBLEM SOLVING",
    badge: "Analytical Grit",
    summary: "Work through real-world challenges.",
    description: "Moving beyond abstract questions to building automated irrigation, obstacle-avoiding rovers, and smart sensor solutions.",
    iconName: "Target",
  },
  {
    id: "future-skills",
    title: "FUTURE SKILLS",
    badge: "Tech Fluency",
    summary: "Develop hands-on familiarity with modern technology.",
    description: "Equipping young minds with practical fluency in robotics, AI logic, additive manufacturing, and programming paradigms.",
    iconName: "Sparkles",
  },
];
