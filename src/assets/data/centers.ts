export interface SkillCenter {
  id: string;
  name: string;
  type: "Headquarters & Flagship Center" | "Regional Innovation Hub";
  city: string;
  state: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  hours: string;
  facilities: string[];
  image: string;
  coordinates: { lat: number; lng: number };
}

export const skillCentersList: SkillCenter[] = [
  {
    id: "patna-flagship",
    name: "Narasimha Skill Sphere Flagship Innovation Center",
    type: "Headquarters & Flagship Center",
    city: "Patna",
    state: "Bihar",
    address: "NC/10B, Kankarbagh",
    landmark: "Near Gayatri Shaktipith",
    phone: "9709719731",
    email: "narasimhasphillsphere@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM (Sunday by Appointment)",
    facilities: [
      "Robotics Prototyping Arena",
      "Industrial FDM 3D Printing Bay",
      "IoT & Electronic Soldering Workbenches",
      "High-Performance Coding & AI Stations",
      "Drone Flight & Aeromodelling Test Enclosure",
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    coordinates: { lat: 25.5941, lng: 85.1376 },
  },
];

export const centerFacilityHighlights = [
  {
    title: "Robotics & Actuator Bay",
    description: "Equipped with DC gear motors, servo controllers, ultrasonic sensors, chassis kits, and dedicated robotics testing arenas.",
    image: "/High tech lab .png",
    tag: "HARDWARE LAB",
  },
  {
    title: "Additive Prototyping & 3D Lab",
    description: "Precision 3D printers and CAD workstations where students turn digital CAD drawings into solid plastic mechanical assemblies.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    tag: "FABRICATION",
  },
  {
    title: "Electronics & IoT Workbench",
    description: "Digital multimeters, soldering stations, breadboards, oscilloscopes, and WiFi/Bluetooth microcontroller units.",
    image: "/Mobile lab .jpeg",
    tag: "CIRCUITRY",
  },
  {
    title: "Coding & Embedded Scripting Pods",
    description: "Ergonomic workstations with Python, C++, MicroPython environments, and computer vision debugging monitors.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tag: "SOFTWARE",
  },
];
