export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Center", href: "/centers" },
  { label: "School Program", href: "#school-program" },
  { label: "ATL Solutions", href: "#atl-solutions" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" },
];

export const recognitionBadges = [
  { name: "Startup India", sub: "DPIIT Recognized", icon: "Award" },
  { name: "NITI Aayog / AIM", sub: "Atal Innovation Mission", icon: "Cpu" },
  { name: "Skill India", sub: "Govt. Initiative", icon: "Sparkles" },
  { name: "MSME Registered", sub: "Govt. of India", icon: "ShieldCheck" },
  { name: "ISO 9001:2015", sub: "Certified Quality", icon: "CheckCircle2" },
  { name: "Startup Bihar", sub: "Dept. of Industries", icon: "Building2" },
];

export const companyDetails = {
  name: "Narasimha Skill Sphere Private Limited",
  shortName: "Narasimha Skill Sphere",
  tagline: "Learning-By-Doing",
  websiteUrl: "https://www.narasimhaskillsphere.com",
  phone: "97 09 71 97 31",
  email: "narasimhasphillsphere@gmail.com",
  brandDescription: "To bridge classroom learning with real-world skill through affordable, accessible, high-quality, hands-on education.",
  address: {
    headOffice: "G-7, Shardanagar, Rosera, Samastipur - 848210",
    center: "Nc/10B, Near: Gayatri Shaktipith, Kankarbagh, Patna-20",
    line1: "NC/10B",
    line2: "Near Gayatri Shaktipith",
    area: "Kankarbagh",
    city: "Patna",
    pincode: "800020",
    state: "Bihar",
    country: "India",
  },
  branches: ["Patna", "Champaran", "Nalanda", "Purnia", "Jamshedpur"],
  socials: [
    { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
};
