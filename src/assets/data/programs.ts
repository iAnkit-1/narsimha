export interface SchoolPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const schoolPillars: SchoolPillar[] = [
  {
    number: "01",
    title: "PROGRAMS",
    subtitle: "Structured learning experiences",
    description: "Curated, age-appropriate STEM and emerging technology programs seamlessly embedded into institutional academic calendars.",
    features: ["Standard-aligned progression", "Dedicated mentor facilitation", "Hands-on hardware & tool kits"],
  },
  {
    number: "02",
    title: "ACTIVITIES",
    subtitle: "Hands-on technology sessions",
    description: "Immersive workshops, innovation challenges, and practical tinkering sessions where students solve real-world problems.",
    features: ["Tinkering workshops", "Mini-hackathons", "Live project debugging"],
  },
  {
    number: "03",
    title: "SKILL DEVELOPMENT",
    subtitle: "Practical problem-solving and creativity",
    description: "Building foundational computational thinking, mechanical intuition, spatial design, and public presentation confidence.",
    features: ["Critical thinking exercises", "Collaborative team building", "Public project demonstrations"],
  },
];

export interface FlowStep {
  step: string;
  title: string;
  detail: string;
  iconName: string;
}

export const schoolImplementationSteps: FlowStep[] = [
  {
    step: "01",
    title: "SCHOOL",
    detail: "Institutional alignment & lab requirement assessment tailored to school infrastructure.",
    iconName: "Building2",
  },
  {
    step: "02",
    title: "PROGRAM",
    detail: "Custom curriculum design and schedule integration for target grades.",
    iconName: "FileSpreadsheet",
  },
  {
    step: "03",
    title: "HANDS-ON SESSIONS",
    detail: "Expert-facilitated lab sessions with real hardware, kits, and software environments.",
    iconName: "Wrench",
  },
  {
    step: "04",
    title: "PROJECTS",
    detail: "Students build working prototypes, circuit boards, codebases, and 3D models.",
    iconName: "Cpu",
  },
  {
    step: "05",
    title: "STUDENT SHOWCASE",
    detail: "Exhibitions and presentations where students explain and demonstrate their builds.",
    iconName: "Trophy",
  },
];
