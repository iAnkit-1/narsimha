export interface MethodStep {
  step: string;
  title: string;
  sub: string;
  description: string;
  iconName: string;
  badge: string;
}

export const methodologySteps: MethodStep[] = [
  {
    step: "01",
    title: "THINK",
    sub: "Deconstruct Problem",
    badge: "Question & Observe",
    description: "Students define real-world problems, dissect challenges, and formulate foundational logic before writing a single line of code.",
    iconName: "Lightbulb",
  },
  {
    step: "02",
    title: "DESIGN",
    sub: "Schematics & Blueprint",
    badge: "Architect & Model",
    description: "Creating block diagrams, circuit schematics, 3D CAD sketches, and flowcharts to visually plan the solution architecture.",
    iconName: "PencilRuler",
  },
  {
    step: "03",
    title: "CREATE",
    sub: "Hands-on Fabrication",
    badge: "Wire, Code, Print",
    description: "Soldering, assembling chassis, connecting sensors, 3D printing custom parts, and compiling embedded scripts.",
    iconName: "Wrench",
  },
  {
    step: "04",
    title: "IMPROVE",
    sub: "Iterative Debugging",
    badge: "Test & Refine",
    description: "When code fails or mechanisms bind, students analyze telemetry, troubleshoot faults, and optimize their builds.",
    iconName: "Flame",
  },
  {
    step: "05",
    title: "EXPLAIN",
    sub: "Technical Articulation",
    badge: "Communicate Logic",
    description: "Students articulate why their mechanism works, explaining physics and computational logic to peers and mentors.",
    iconName: "MessagesSquare",
  },
  {
    step: "06",
    title: "SHOWCASE",
    sub: "Public Demonstration",
    badge: "Confidence & Pride",
    description: "Presenting working prototypes at school fairs, parent exhibitions, and innovation showcases.",
    iconName: "Sparkles",
  },
];

export const learningByDoingFlow = [
  { id: "1", label: "CURIOSITY", icon: "Sparkles", desc: "Triggered by physical challenges" },
  { id: "2", label: "QUESTION", icon: "HelpCircle", desc: "Why does it work this way?" },
  { id: "3", label: "IDEA", icon: "Lightbulb", desc: "Formulating a technological fix" },
  { id: "4", label: "DESIGN", icon: "PencilRuler", desc: "Schematics, flowcharts & CAD" },
  { id: "5", label: "BUILD", icon: "Hammer", desc: "Hardware wiring & programming" },
  { id: "6", label: "TEST", icon: "Activity", desc: "Real-world sensor trials" },
  { id: "7", label: "IMPROVE", icon: "RefreshCw", desc: "Iterative fault correction" },
  { id: "8", label: "SHOWCASE", icon: "Trophy", desc: "Demonstrating the finished build" },
];

export const coreFourProgression = [
  { title: "Knowledge", detail: "Foundational theory", step: "01" },
  { title: "Practice", detail: "Tactile experimentation", step: "02" },
  { title: "Project", detail: "Functional prototype", step: "03" },
  { title: "Confidence", detail: "Ability to build anything", step: "04" },
];
