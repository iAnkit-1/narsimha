import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Layers,
  Wrench,
  Trophy,
  Send,
  ExternalLink,
  Laptop,
  BookOpen,
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Zap,
  Bot,
  Lightbulb,
  Code,
  Code2,
  BrainCircuit,
  Printer,
  Compass,
  Coins,
  PenTool,
  Cog,
  RefreshCw,
  Presentation,
  ChevronLeft,
  ChevronRight,
  Award,
  BarChart3,
} from "lucide-react";
import { companyDetails } from "../assets/data/navigation";
import roboWithStudentsImg from "../assets/robo with students.png";
import stairsImg from "../assets/stairs.png";
import {
  starterCourses,
  learnerCourses,
  studentPortfolioProfiles,
  whyNarasimhaReasons,
  centerGalleryItems,
  type GalleryItem,
} from "../assets/data/centersPageData";

interface CentersPageProps {
  onOpenPartnerModal: () => void;
}

export const CentersPage: React.FC<CentersPageProps> = ({ onOpenPartnerModal }) => {
  const navigate = useNavigate();

  // Active level tab in Courses section
  const [activeCourseLevel, setActiveCourseLevel] = useState<"STARTER" | "LEARNER">("STARTER");

  // Gallery category filter
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<
    "all" | "learning" | "robotics" | "coding" | "3dprinting" | "projects" | "events"
  >("all");

  // Lightbox / image modal preview
  const [activeGalleryPreview, setActiveGalleryPreview] = useState<GalleryItem | null>(null);

  // Visit booking form state
  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const [visitForm, setVisitForm] = useState({
    parentName: "",
    studentName: "",
    studentGrade: "Grade 6-8 (Junior)",
    phone: "",
    email: "",
    preferredDate: "",
    interestedTrack: "Robotics & Hardware",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF7711", "#FF8A33", "#38BDF8", "#4ADE80", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  const filteredGallery = centerGalleryItems.filter((item) => {
    if (selectedGalleryCategory === "all") return true;
    return item.category === selectedGalleryCategory;
  });

  const activeCourseList = activeCourseLevel === "STARTER" ? starterCourses : learnerCourses;

  // Active student portfolio profile selection
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);

  const handlePrevStudent = () => {
    setSelectedStudentIndex((prev) =>
      prev === 0 ? studentPortfolioProfiles.length - 1 : prev - 1
    );
  };

  const handleNextStudent = () => {
    setSelectedStudentIndex((prev) =>
      prev === studentPortfolioProfiles.length - 1 ? 0 : prev + 1
    );
  };

  const getCourseDomainIcon = (domain: string) => {
    switch (domain.toUpperCase()) {
      case "ROBOTICS":
        return Bot;
      case "CODING":
        return Code2;
      case "AI / ML":
        return BrainCircuit;
      case "3D PRINTING":
        return Printer;
      case "DRONE TECHNOLOGY":
        return Compass;
      case "FINANCIAL LITERACY":
        return Coins;
      case "ENTREPRENEUR MINDSET":
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="w-full bg-[#080808] text-[#F1F1F1] min-h-screen selection:bg-[#FF7711] selection:text-black">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#090909] border-b border-[#222222] pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Background glow effects & technical grid */}
        <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-[#FF7711]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#38BDF8]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Center Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#2D2D2D] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-ping" />
                <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-bold uppercase">
                  OUR CENTER • OFFLINE LEARNING LAB
                </span>
              </div>

              {/* Main Headlines */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.08] mb-4">
                Where Curiosity <br className="hidden sm:inline" />
                Becomes{" "}
                <span className="font-serif italic font-normal text-[#FF7711]">
                  Creation.
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl font-medium text-[#E2E8F0] mb-5">
                Learning by Doing. Building Skills for Tomorrow.
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed max-w-2xl font-normal mb-8">
                At Narasimha Skill Sphere, students don't just learn technology — they experience it, build with it, and turn ideas into real-world projects. From Robotics and Coding with AI to 3D Printing, our center provides a hands-on environment where young learners explore, experiment, solve problems, and create.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#our-courses"
                  className="btn-orange-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg hover:shadow-orange-glow transition-all cursor-pointer"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#book-visit"
                  className="btn-dark-secondary px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#FF7711]" />
                  <span>Visit Our Center</span>
                </a>
              </div>

              {/* Center Quick Coordinates & Hours */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#D4D4D4]">
                <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#121212] border border-[#262626]">
                  <MapPin className="w-4 h-4 text-[#FF7711]" />
                  <span>NC/10B, Kankarbagh, Patna</span>
                </div>
                <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#121212] border border-[#262626]">
                  <Clock className="w-4 h-4 text-[#FF7711]" />
                  <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
                </div>
                <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#121212] border border-[#262626]">
                  <Phone className="w-4 h-4 text-[#FF7711]" />
                  <span>+91 {companyDetails.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Lab Card & Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0D0D0D] border border-[#2A2A2A] p-2 shadow-2xl overflow-hidden group">

                {/* Visual Image with Overlay */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#181818]">
                  <img
                    src="/High tech lab .png"
                    alt="Narasimha Skill Sphere Robotics & Innovation Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

                  {/* Floating Live Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#333333] text-[10px] font-mono font-bold text-[#FF7711]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PATNA FLAGSHIP LAB</span>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#333333] text-right">
                    <span className="text-[10px] font-mono text-[#888888] block">STUDENT RATIO</span>
                    <span className="text-xs font-mono font-bold text-white">1:8 Dedicated Mentorship</span>
                  </div>
                </div>

                {/* Card Features Info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#FF7711] font-bold tracking-wider uppercase">
                      IN-CENTER IMMERSION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202020] text-[#CCCCCC]">
                      Grades K – 12
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    Robotics, IoT, 3D Printing & AI Workbenches
                  </h3>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed mb-5">
                    Equipped with real microcontrollers, additive manufacturing 3D printers, autonomous rovers, and sensor testing enclosures.
                  </p>

                  {/* 4 Mini Stat Pills */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#222222] text-[11px] font-mono">
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                      <span>100% Hands-On</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>7 Core Tracks</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                      <span>Real Hardware Kits</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Hackathon Prep</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WEEKLY OFFLINE                                                         */}
      {/* ========================================================================= */}
      <section id="weekly-offline" className="relative w-full py-16 lg:py-24 bg-[#080808] border-b border-[#222222] overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Main Hero Banner Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#161616] to-[#0D0D0D] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 lg:p-10 overflow-hidden mb-12">

            {/* Subtle radial grid background pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />

            {/* Top Main Section: Content (Left) + Robot & Students (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 mb-8 lg:mb-10">

              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7 flex flex-col text-left">

                {/* Badge: WEEKLY OFFLINE */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#FF7711]/40 w-fit mb-5 shadow-lg shadow-black/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[#FF7711] uppercase">
                    WEEKLY OFFLINE
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3">
                  Learning Happens <br />
                  <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                    Beyond the Screen.
                  </span>
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg font-bold text-[#38BDF8] tracking-tight mb-4">
                  Every Week. Every Project. Every Learner.
                </p>

                {/* Paragraph Description */}
                <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-3">
                  Our offline sessions give students the opportunity to move from learning concepts to building things with their own hands.
                </p>

                <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
                  Students work with real components, tools and technology while receiving guidance from mentors.
                </p>

              </div>

              {/* Right Visual Image & Floating Badges (5 cols) */}
              <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">

                {/* Glow background behind students */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7711]/20 via-[#3B82F6]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                {/* Floating Doodle Sticker 1 (Top Left) */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-2 left-0 sm:left-2 z-20 px-3 py-1.5 rounded-xl bg-[#181818]/90 border border-[#38BDF8]/40 shadow-xl backdrop-blur-md flex items-center space-x-1.5"
                >
                  <Bot className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                    Weekly Offline
                  </span>
                </motion.div>

                {/* Floating Doodle Sticker 2 (Top Right) */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute top-2 right-0 sm:right-2 z-20 px-3 py-1.5 rounded-xl bg-[#181818]/90 border border-[#F59E0B]/40 shadow-xl backdrop-blur-md flex items-center space-x-1.5"
                >
                  <Lightbulb className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#F59E0B] tracking-wide">
                    Hands-On
                  </span>
                </motion.div>

                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#1C1C1C] to-[#121212] w-full max-w-[480px]">
                  <img
                    src={roboWithStudentsImg}
                    alt="Learning Happens Beyond the Screen"
                    className="w-full h-auto object-cover filter brightness-[1.02] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Sticky Note (Bottom Right) */}
                <motion.div
                  initial={{ rotate: 3 }}
                  animate={{ rotate: [3, 0, 3] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-3 right-2 sm:right-4 z-20 px-3.5 py-2 rounded-xl bg-gradient-to-br from-[#FEF08A] to-[#FDE047] text-black shadow-2xl border border-yellow-200/50 flex items-center space-x-1.5 font-sans"
                >
                  <Sparkles className="w-4 h-4 text-amber-900" />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[11px] font-black text-amber-950">Every Project</span>
                    <span className="text-[10px] font-bold text-amber-900">Every Learner</span>
                  </div>
                </motion.div>

              </div>

            </div>

            {/* Bottom Card: 100% Hands-On Learning Highlight */}
            <div className="rounded-2xl bg-[#101010]/95 border border-[#FF7711]/40 p-5 sm:p-6 shadow-xl relative z-10">
              <div className="flex items-start sm:items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7711]/20 border border-[#FF7711] flex items-center justify-center text-[#FF7711] shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    100% Hands-On Learning
                  </h3>
                  <p className="text-sm sm:text-base text-[#CCCCCC] font-normal">
                    Students don't simply watch a project being made. <strong className="text-white font-semibold">They build it themselves.</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* What Happens in Our Weekly Sessions? */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                What Happens in Our Weekly Sessions?
              </h3>
              <div className="h-[1px] flex-1 bg-[#262626]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {[
                { number: "01", title: "Hands-on electronics & robotics", icon: Zap, color: "text-[#FF7711]", border: "hover:border-[#FF7711]/60" },
                { number: "02", title: "Coding & programming activities", icon: Code, color: "text-[#38BDF8]", border: "hover:border-[#38BDF8]/60" },
                { number: "03", title: "Robot building and automation", icon: Bot, color: "text-[#4ADE80]", border: "hover:border-[#4ADE80]/60" },
                { number: "04", title: "Problem-solving challenges", icon: Target, color: "text-[#FACC15]", border: "hover:border-[#FACC15]/60" },
                { number: "05", title: "3D design & printing", icon: Layers, color: "text-[#C084FC]", border: "hover:border-[#C084FC]/60" },
                { number: "06", title: "Real-world project development", icon: Rocket, color: "text-[#FB7185]", border: "hover:border-[#FB7185]/60" },
                { number: "07", title: "Project presentation & demonstration", icon: Trophy, color: "text-[#38BDF8]", border: "hover:border-[#38BDF8]/60" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.number}
                    className={`group relative p-5 rounded-2xl bg-[#121212] border border-[#242424] ${item.border} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#888888]">
                        {item.number}
                      </span>
                      <div className={`w-9 h-9 rounded-xl bg-[#181818] border border-[#282828] flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                        <ItemIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7711] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LEARNING JOURNEY & LEARNING LEVELS                                    */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 3A. LEARNING JOURNEY */}
          <div className="mb-20">
            
            {/* Top Heading & Description */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FF7711]/40 mb-3.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  LEARNING JOURNEY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                From Curious Learner to{" "}
                <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                  Future-Ready Creator
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
                Every child starts with curiosity. At Narasimha Skill Sphere, we transform that curiosity into practical skills, confidence, and career-oriented capabilities.
              </p>
            </div>

            {/* Central Stairs Layout: Left (01-03) • Center (Image) • Right (04-06) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10">
              
              {/* Left Column: Steps 01, 02, 03 */}
              <div className="lg:col-span-4 space-y-4">
                {[
                  {
                    num: "01",
                    step: "Think",
                    icon: Lightbulb,
                    desc: "Identify challenges, ask curious questions, and brainstorm original solutions.",
                    color: "text-[#FF7711]",
                    bg: "bg-[#FF7711]/10",
                    border: "border-[#FF7711]/30",
                    hoverBorder: "hover:border-[#FF7711]/70",
                  },
                  {
                    num: "02",
                    step: "Design",
                    icon: PenTool,
                    desc: "Blueprint mechanisms, sketch architectural schemas, and model system workflows.",
                    color: "text-[#EC4899]",
                    bg: "bg-[#EC4899]/10",
                    border: "border-[#EC4899]/30",
                    hoverBorder: "hover:border-[#EC4899]/70",
                  },
                  {
                    num: "03",
                    step: "Create",
                    icon: Cog,
                    desc: "Assemble physical robotics, wire sensors & microchips, and write executable code.",
                    color: "text-[#A855F7]",
                    bg: "bg-[#A855F7]/10",
                    border: "border-[#A855F7]/30",
                    hoverBorder: "hover:border-[#A855F7]/70",
                  },
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-4 sm:p-5 rounded-2xl bg-[#121212]/95 border border-white/10 ${step.hoverBorder} transition-all duration-300 group flex items-start space-x-3.5 shadow-lg hover:-translate-y-0.5`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-mono text-[#FF7711] font-bold">
                            {step.num}.
                          </span>
                          <h3 className={`text-base font-bold text-white group-hover:${step.color} transition-colors`}>
                            {step.step}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Center Column: Stairs Image */}
              <div className="lg:col-span-4 flex items-center justify-center relative py-4 lg:py-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7711]/15 via-[#38BDF8]/10 to-[#A855F7]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative w-full max-w-[420px] flex items-center justify-center">
                  <img
                    src={stairsImg}
                    alt="Learning Journey Stairs - Think, Design, Create, Improve, Explain, Showcase"
                    className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column: Steps 04, 05, 06 */}
              <div className="lg:col-span-4 space-y-4">
                {[
                  {
                    num: "04",
                    step: "Improve",
                    icon: RefreshCw,
                    desc: "Test prototypes under stress, debug glitches, and iteratively refine performance.",
                    color: "text-[#3B82F6]",
                    bg: "bg-[#3B82F6]/10",
                    border: "border-[#3B82F6]/30",
                    hoverBorder: "hover:border-[#3B82F6]/70",
                  },
                  {
                    num: "05",
                    step: "Explain",
                    icon: Presentation,
                    desc: "Articulate computational logic, explain how it works, and build communication mastery.",
                    color: "text-[#06B6D4]",
                    bg: "bg-[#06B6D4]/10",
                    border: "border-[#06B6D4]/30",
                    hoverBorder: "hover:border-[#06B6D4]/70",
                  },
                  {
                    num: "06",
                    step: "Showcase",
                    icon: Trophy,
                    desc: "Present working innovations at tech expos, school fests, and competitive hackathons.",
                    color: "text-[#10B981]",
                    bg: "bg-[#10B981]/10",
                    border: "border-[#10B981]/30",
                    hoverBorder: "hover:border-[#10B981]/70",
                  },
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-4 sm:p-5 rounded-2xl bg-[#121212]/95 border border-white/10 ${step.hoverBorder} transition-all duration-300 group flex items-start space-x-3.5 shadow-lg hover:-translate-y-0.5`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-mono text-[#FF7711] font-bold">
                            {step.num}.
                          </span>
                          <h3 className={`text-base font-bold text-white group-hover:${step.color} transition-colors`}>
                            {step.step}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* The Goal Bar */}
            <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#171717] via-[#141414] to-[#171717] border-l-4 border-l-[#FF7711] border border-white/10 p-4 sm:p-5 shadow-lg">
              <div className="flex items-start sm:items-center space-x-3">
                <Target className="w-5 h-5 text-[#FF7711] shrink-0 mt-0.5 sm:mt-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7711]">
                    The Goal:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#F1F1F1] leading-relaxed">
                    Learn skills. Build projects. Develop confidence. Prepare for the future.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 3B. LEARNING LEVELS */}
          <div className="pt-14 border-t border-[#222222]">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FF7711]/40 mb-3.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  LEARNING LEVELS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                One Journey. Three Levels.{" "}
                <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                  A Future of Possibilities.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-2 font-medium">
                Learning should grow with the learner — from curiosity to skills, and from skills to careers.
              </p>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                At Narasimha Skill Sphere, our three progressive levels help learners build foundations, develop practical skills, create projects, and become career-ready.
              </p>
            </div>

            {/* 3 Beautiful Level Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "starter",
                  level: "LEVEL 01",
                  name: "STARTER",
                  tagline: "Explore • Learn • Create",
                  description:
                    "Students begin their learning journey by exploring technology through hands-on activities, experiments, creativity, and guided projects.",
                  goal: "Build strong foundations, develop curiosity, and create a “learning by doing” mindset.",
                  accentColor: "text-[#FF7711]",
                  bgGradient: "from-[#FF7711]/15 via-[#141414] to-[#0D0D0D]",
                  borderColor: "border-[#FF7711]/30 hover:border-[#FF7711]/70",
                  badgeBg: "bg-[#FF7711]/10 text-[#FF7711] border-[#FF7711]/30",
                  goalBg: "bg-black/60 border-[#FF7711]/30",
                },
                {
                  id: "learner",
                  level: "LEVEL 02",
                  name: "LEARNER",
                  tagline: "Build • Apply • Innovate",
                  description:
                    "Students move beyond the basics and begin applying their knowledge through meaningful projects, teamwork, experimentation, and real-world problem-solving.",
                  goal: "Turn learning into practical skills, innovation, and impressive projects.",
                  accentColor: "text-[#38BDF8]",
                  bgGradient: "from-[#38BDF8]/15 via-[#141414] to-[#0D0D0D]",
                  borderColor: "border-[#38BDF8]/30 hover:border-[#38BDF8]/70",
                  badgeBg: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30",
                  goalBg: "bg-black/60 border-[#38BDF8]/30",
                },
                {
                  id: "performer",
                  level: "LEVEL 03",
                  name: "PERFORMER",
                  tagline: "Master • Build • Get Career-Ready",
                  description:
                    "Learners take their skills further through advanced projects, professional skill development, portfolio building, industry-oriented training, and real-world problem-solving.",
                  goal: "Transform technical skills into strong portfolios, professional confidence, internship opportunities, and job & placement readiness.",
                  accentColor: "text-[#4ADE80]",
                  bgGradient: "from-[#4ADE80]/15 via-[#141414] to-[#0D0D0D]",
                  borderColor: "border-[#4ADE80]/30 hover:border-[#4ADE80]/70",
                  badgeBg: "bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/30",
                  goalBg: "bg-black/60 border-[#4ADE80]/30",
                },
              ].map((lvl, idx) => (
                <motion.div
                  key={lvl.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-b ${lvl.bgGradient} border ${lvl.borderColor} flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300`}
                >
                  <div>
                    {/* Level Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${lvl.badgeBg}`}>
                        {lvl.level}
                      </span>
                    </div>

                    {/* Level Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5 tracking-tight">
                      {lvl.name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className={`text-sm font-mono font-bold mb-5 ${lvl.accentColor}`}>
                      {lvl.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-8 font-normal">
                      {lvl.description}
                    </p>
                  </div>

                  {/* Goal Box */}
                  <div className={`p-4 sm:p-5 rounded-2xl ${lvl.goalBg} border`}>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1.5 ${lvl.accentColor}`}>
                      Goal:
                    </span>
                    <p className="text-xs sm:text-sm text-[#E2E8F0] font-medium leading-relaxed">
                      {lvl.goal}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR COURSES (STARTER & LEARNER PATHWAYS)                              */}
      {/* ========================================================================= */}
      <section id="our-courses" className="w-full bg-[#0B0B0B] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
              <Laptop className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                HANDS-ON CURRICULUM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-3">
              OUR <span className="font-serif italic font-normal text-[#FF7711]">COURSES</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
              Explore our structured learning tracks designed for foundational discovery and advanced innovation.
            </p>
          </div>

          {/* Level Switcher (STARTER vs LEARNER) */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#141414] border border-[#2B2B2B] shadow-2xl">
              <button
                onClick={() => setActiveCourseLevel("STARTER")}
                className={`px-6 sm:px-8 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                  activeCourseLevel === "STARTER"
                    ? "bg-[#FF7711] text-black shadow-lg shadow-[#FF7711]/20"
                    : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
                }`}
              >
                <span>🌱 STARTER</span>
                <span className="text-[10px] opacity-80">(Foundation)</span>
              </button>

              <button
                onClick={() => setActiveCourseLevel("LEARNER")}
                className={`px-6 sm:px-8 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                  activeCourseLevel === "LEARNER"
                    ? "bg-[#38BDF8] text-black shadow-lg shadow-[#38BDF8]/20"
                    : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
                }`}
              >
                <span>⚡ LEARNER</span>
                <span className="text-[10px] opacity-80">(Advanced)</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-white/50 mt-4">
              ✨ Hover over any card to pause scroll and view full details
            </span>
          </div>

        </div>

        {/* Automatic Horizontally Moving Cards Track */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Side Gradient Masks for Smooth Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />

          {/* Continuous Marquee Track */}
          <div className="flex animate-marquee-scroll space-x-6 px-4">
            {[...activeCourseList, ...activeCourseList].map((course, idx) => {
              const DomainIcon = getCourseDomainIcon(course.domain);
              const slideDirections = [
                "translate-y-full group-hover:translate-y-0",
                "-translate-x-full group-hover:translate-x-0",
                "translate-x-full group-hover:translate-x-0",
                "-translate-y-full group-hover:translate-y-0",
              ];
              const slideClass = slideDirections[idx % slideDirections.length];

              return (
                <div
                  key={`${course.id}-${idx}`}
                  className="group relative h-[420px] w-[320px] sm:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF7711]/70 transition-all duration-500 shadow-2xl cursor-pointer bg-[#101010]"
                >
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-110 group-hover:brightness-[0.95] transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <div className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg text-[#FF7711]">
                      <DomainIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-white font-bold backdrop-blur-md shadow-sm">
                      {course.domain}
                    </span>
                  </div>

                  {/* Default Bottom Content (Visible by default, slides out on hover) */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-3 pointer-events-none">
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-base drop-shadow-md">{course.emoji}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF7711]">
                        {course.domain}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1.5">
                      {course.title}
                    </h4>
                    <p className="text-xs text-[#E5E5E5] line-clamp-2 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                      {course.detail}
                    </p>
                  </div>

                  {/* Hover Overlay: Directional Slide-in Drawer */}
                  <div
                    className={`absolute inset-0 p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-black/98 via-black/90 to-black/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-out transform ${slideClass}`}
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-base">{course.emoji}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF7711]">
                        {course.domain}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-1">
                      {course.title}
                    </h4>

                    <p className="text-xs text-[#FFA149] font-medium leading-relaxed mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {course.detail}
                    </p>

                    {/* Students Learn (if present) */}
                    {course.learn && course.learn.length > 0 && (
                      <div className="mb-2.5 pt-2.5 border-t border-white/20">
                        <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block mb-1 font-semibold">
                          Students Learn:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {course.learn.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white border border-white/15"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Students Build / Create */}
                    <div className="pt-2 border-t border-white/20">
                      <span className="text-[10px] font-mono uppercase text-[#FF7711] block mb-1 font-bold">
                        {course.buildLabel}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.build.map((bItem) => (
                          <span
                            key={bItem}
                            className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#FF7711]/15 text-[10px] font-mono text-[#FFA149] border border-[#FF7711]/30 font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#FF7711] shrink-0" />
                            <span>{bItem}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {/* Quick Enquire CTA Bar */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Interested in enrolling your child in a specialized track?
              </h4>
              <p className="text-xs text-[#A1A1A1]">
                Our mentors evaluate the student's background and map the best level for optimal growth.
              </p>
            </div>
            <a
              href="#book-visit"
              className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
            >
              Request Syllabus & Trial
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STUDENT PORTFOLIO                                                     */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF7711]/5 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#38BDF8]/5 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
                STUDENT PORTFOLIO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
              Don't Just Tell <span className="text-[#38BDF8]">Us What You Learned.</span><br />
              Show Us What You <span className="text-[#FF7711]">Built.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
              Every student creates a learning journey of their own. Our Student Portfolio section documents the student's projects, progress, achievements and growth throughout their time at Narasimha Skill Sphere.
            </p>
          </div>

          {/* Featured Student Showcase Card */}
          {(() => {
            const currentStudent = studentPortfolioProfiles[selectedStudentIndex] || studentPortfolioProfiles[0];
            return (
              <div className="relative max-w-6xl mx-auto mb-8">
                {/* Desktop Left / Right Floating Circular Navigation Buttons */}
                <button
                  onClick={handlePrevStudent}
                  aria-label="Previous Student Portfolio"
                  className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-[#38BDF8] hover:text-[#38BDF8] text-white items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextStudent}
                  aria-label="Next Student Portfolio"
                  className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-[#38BDF8] hover:text-[#38BDF8] text-white items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Main Card Frame */}
                <motion.div
                  key={currentStudent.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#121212] border border-[#272727] rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle ambient gradient highlights */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/5 blur-[120px] pointer-events-none rounded-full" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7711]/5 blur-[120px] pointer-events-none rounded-full" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
                    
                    {/* Column 1: Student Portrait & Quote Box (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between bg-[#151515] border border-[#262626] rounded-2xl overflow-hidden relative min-h-[380px] lg:min-h-[420px] shadow-lg">
                      <div className="relative w-full h-full min-h-[360px] overflow-hidden flex flex-col justify-end p-3.5">
                        <img
                          src={currentStudent.avatar}
                          alt={currentStudent.name}
                          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                        {/* Bottom Testimonial Quote Overlay Card */}
                        <div className="relative z-10 p-3.5 rounded-xl bg-[#0B1528]/90 backdrop-blur-md border border-[#1E3A5F]/80 shadow-2xl">
                          <div className="flex items-start space-x-2">
                            <span className="text-xl font-serif text-[#38BDF8] leading-none shrink-0 font-black">
                              “
                            </span>
                            <div>
                              <p className="text-xs text-[#E2E8F0] font-medium leading-snug mb-1">
                                {currentStudent.quote}
                              </p>
                              <span className="text-[11px] font-mono font-bold text-[#38BDF8] block">
                                — {currentStudent.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Completed & Currently Working On Projects (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                      {/* Top Student Header Row */}
                      <div className="pb-3 border-b border-[#242424]">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-2">
                          {currentStudent.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border font-bold ${currentStudent.tierColor}`}>
                            🛡️ {currentStudent.tier}
                          </span>
                          <span className="text-[#555555] font-bold">|</span>
                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border font-bold flex items-center space-x-1 ${currentStudent.domainColor}`}>
                            <span>{currentStudent.domainEmoji}</span>
                            <span>{currentStudent.domain}</span>
                          </span>
                        </div>
                      </div>

                      {/* Completed Project Box */}
                      <div className="p-3.5 rounded-2xl bg-[#171717] border border-[#272727] flex flex-col sm:flex-row gap-3.5 items-center hover:border-emerald-500/40 transition-colors">
                        <div className="flex-1">
                          <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold mb-1.5">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Completed Project</span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                            {currentStudent.completedProject.title}
                          </h4>
                          <p className="text-xs text-[#9CA3AF] leading-relaxed">
                            {currentStudent.completedProject.description}
                          </p>
                        </div>
                        <div className="relative w-full sm:w-44 h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                          <img
                            src={currentStudent.completedProject.image}
                            alt={currentStudent.completedProject.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                          <span className="absolute bottom-1 inset-x-1 text-[8px] font-mono text-white truncate text-center px-1 font-semibold bg-black/70 rounded py-0.5">
                            {currentStudent.completedProject.caption}
                          </span>
                        </div>
                      </div>

                      {/* Currently Working On Box */}
                      <div className="p-3.5 rounded-2xl bg-[#171717] border border-[#272727] flex flex-col sm:flex-row gap-3.5 items-center hover:border-orange-500/40 transition-colors">
                        <div className="flex-1">
                          <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 text-[10px] font-mono font-bold mb-1.5">
                            <Cog className="w-3 h-3 animate-spin" />
                            <span>Currently Working On</span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                            {currentStudent.workingOnProject.title}
                          </h4>
                          <p className="text-xs text-[#9CA3AF] leading-relaxed">
                            {currentStudent.workingOnProject.description}
                          </p>
                        </div>
                        <div className="relative w-full sm:w-44 h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                          <img
                            src={currentStudent.workingOnProject.image}
                            alt={currentStudent.workingOnProject.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                          <span className="absolute bottom-1 inset-x-1 text-[8px] font-mono text-white truncate text-center px-1 font-semibold bg-black/70 rounded py-0.5">
                            {currentStudent.workingOnProject.caption}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Achievements & Progress Bars (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col justify-between space-y-3.5">
                      {/* Achievements Box */}
                      <div className="p-4 rounded-2xl bg-[#1A1813] border border-amber-500/25 shadow-md flex-1 flex flex-col justify-between">
                        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
                          <Trophy className="w-4 h-4 text-amber-400" />
                          <span>Achievements</span>
                        </div>

                        <div className="space-y-2">
                          {currentStudent.achievements.map((ach) => (
                            <div
                              key={ach.title}
                              className="p-2.5 rounded-xl bg-[#231F16] border border-amber-500/20 flex items-center space-x-2.5 hover:border-amber-400/40 transition-colors"
                            >
                              <Award className="w-4 h-4 text-amber-400 shrink-0" />
                              <span className="text-xs text-[#E2E8F0] font-semibold leading-tight">
                                {ach.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Progress Metrics Box */}
                      <div className="p-4 rounded-2xl bg-[#0E1624] border border-blue-500/25 shadow-md flex-1 flex flex-col justify-between">
                        <div className="flex items-center space-x-2 text-[#38BDF8] text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
                          <BarChart3 className="w-4 h-4 text-[#38BDF8]" />
                          <span>Progress</span>
                        </div>

                        <div className="space-y-2.5">
                          {currentStudent.progress.map((prog) => (
                            <div key={prog.label}>
                              <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-[#CBD5E1] text-[11px]">{prog.label}</span>
                                <span className="text-white font-bold text-[11px]">{prog.value}%</span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-[#1A2638] overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${prog.color} transition-all duration-700`}
                                  style={{ width: `${prog.value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })()}

          {/* Quick Student Selector Tabs Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-8">
            {studentPortfolioProfiles.map((student, idx) => (
              <button
                key={student.id}
                onClick={() => setSelectedStudentIndex(idx)}
                className={`px-3.5 py-2 rounded-2xl border transition-all cursor-pointer flex items-center space-x-2.5 shadow-md ${
                  selectedStudentIndex === idx
                    ? "bg-[#162235] border-[#38BDF8] text-white shadow-lg shadow-[#38BDF8]/20 scale-105"
                    : "bg-[#131313] border-[#262626] text-[#A1A1A1] hover:text-white hover:bg-[#181818]"
                }`}
              >
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/20 shrink-0"
                />
                <div className="text-left">
                  <span className="text-xs font-bold block text-white leading-tight">
                    {student.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#38BDF8]">
                    {student.domain}
                  </span>
                </div>
              </button>
            ))}

            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2 rounded-2xl border border-[#333333] bg-[#141414] hover:bg-[#1C1C1C] hover:border-[#38BDF8]/60 text-white transition-all cursor-pointer flex items-center space-x-2 text-xs font-mono shadow-md"
            >
              <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Many More Innovators...</span>
            </button>
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center mt-6">
            <button
              onClick={onOpenPartnerModal}
              className="btn-orange-primary px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-lg hover:shadow-orange-glow transition-all cursor-pointer"
            >
              <span>Explore More Student Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 6. PARENT MESSAGE                                                         */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0D0D0D] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7711]/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="rounded-3xl bg-gradient-to-b from-[#161616] via-[#121212] to-[#0E0E0E] border border-[#2D2D2D] p-8 sm:p-12 lg:p-14 shadow-2xl relative">

            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#333333] mb-6">
              <Users className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                A MESSAGE TO PARENTS
              </span>
            </div>

            {/* Heart of the Message Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Is your child ready for the world they will enter{" "}
              <span className="font-serif italic font-normal text-[#FF7711]">
                tomorrow?
              </span>
            </h2>

            {/* Editorial Body Text */}
            <div className="space-y-5 text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-normal">
              <p>
                The world is changing faster than ever. Technology, AI, robotics, and digital skills are becoming part of everyday life — and children who start exploring these skills early get more opportunities to learn, experiment, and build confidence.
              </p>

              <p>
                At Narasimha Skill Sphere, we don't want your child to simply watch the future being created. <strong className="text-white font-semibold">We want them to learn it, build it, and become part of it.</strong>
              </p>

              <p>
                Through Robotics, Coding, Artificial Intelligence, 3D Printing, and more, children get hands-on opportunities to turn ideas into real projects and develop skills beyond textbooks.
              </p>

              {/* Callout Quote Box */}
              <div className="p-6 rounded-2xl bg-black/60 border-l-4 border-[#FF7711] border-y border-r border-[#262626] my-6">
                <p className="text-base sm:text-lg font-medium text-white italic font-serif leading-relaxed">
                  “Because the future is not something children should only prepare for — it is something they should experience, explore, and create.”
                </p>
              </div>

              <p>
                Every child has the potential to become a problem-solver, creator, and innovator when given the right environment, guidance, and opportunities.
              </p>

              <p className="text-white font-semibold text-base sm:text-lg">
                Give your child a place to explore. Give them the freedom to create. Give them the opportunity to build their future.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <span className="text-base sm:text-lg font-bold text-[#FF7711]">
                  Let’s start their journey together.
                </span>

                <a
                  href="#book-visit"
                  className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
                >
                  <span>Book Free Orientation Session</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY NARASIMHA SKILL SPHERE? (6 Core Pillars)                          */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                THE NSS ADVANTAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
              WHY <span className="font-serif italic font-normal text-[#FF7711]">NARASIMHA SKILL SPHERE?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
              We bridge the gap between classroom theory and real engineering creation with industry-aligned maker learning.
            </p>
          </div>

          {/* 6 Reasons Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNarasimhaReasons.map((reason) => (
              <div
                key={reason.id}
                className="p-7 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#FF7711]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {reason.emoji}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF7711] transition-colors mb-1.5">
                    {reason.title}
                  </h3>

                  <p className="text-xs font-mono text-[#FF7711] font-medium mb-3">
                    {reason.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6 font-normal">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202020] space-y-1.5">
                  {reason.highlights.map((item) => (
                    <div key={item} className="flex items-center space-x-2 text-[11px] font-mono text-[#CCCCCC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CENTER GALLERY (Inside Our Learning Space)                            */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0C0C0C] border-b border-[#222222] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  CENTER GALLERY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
                Inside Our <span className="font-serif italic font-normal text-[#FF7711]">Learning Space</span>
              </h2>
              <p className="text-sm sm:text-base text-[#FF7711] font-mono mt-2">
                Learn. Build. Create. Repeat.
              </p>
            </div>
            <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md">
              A glimpse into the real experiences, experiments, and projects that happen daily inside our center.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {[
              { id: "all", label: "All Photos" },
              { id: "learning", label: "Learning Sessions" },
              { id: "robotics", label: "Robotics Lab" },
              { id: "coding", label: "Coding Sessions" },
              { id: "3dprinting", label: "3D Printing" },
              { id: "projects", label: "Student Projects" },
              { id: "events", label: "Events & Showcases" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedGalleryCategory(cat.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${selectedGalleryCategory === cat.id
                    ? "bg-[#FF7711] text-black shadow-md shadow-[#FF7711]/20"
                    : "bg-[#141414] text-[#A1A1A1] hover:text-white hover:bg-[#1E1E1E] border border-[#272727]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-12 gap-5 mb-12">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveGalleryPreview(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#151515] border border-[#262626] hover:border-[#FF7711] transition-all duration-300 cursor-pointer ${item.span || "col-span-12 sm:col-span-6 md:col-span-4"}`}
                style={{ minHeight: "260px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#FF7711] font-bold border border-[#2E2E2E]">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF7711] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#CCCCCC] leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery CTA Button */}
          <div className="text-center">
            <a
              href="#book-visit"
              className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-[#FF7711] hover:text-[#FF8A33] transition-colors group"
            >
              <span>See What Our Students Are Creating →</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CALL TO ACTION & BOOKING FORM                                   */}
      {/* ========================================================================= */}
      <section id="book-visit" className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6">
              {/* Bold Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FF7711]/10 border border-[#FF7711]/40 text-[#FF7711] font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET THEM BUILD THEIR FUTURE.</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
                Their Future Starts With What They{" "}
                <span className="font-serif italic font-normal text-[#FF7711]">
                  Build Today.
                </span>
              </h2>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed mb-6 font-normal">
                Give your child an environment where they can explore technology, solve problems, build projects, and discover their potential.
              </p>

              {/* Center Location & Timings Details */}
              <div className="space-y-3.5 text-xs font-mono text-[#D4D4D4] mb-8">
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <MapPin className="w-4 h-4 text-[#FF7711] shrink-0" />
                  <div>
                    <span className="text-[#888888] block text-[10px]">PATNA FLAGSHIP CENTER</span>
                    <span className="font-bold text-white">{companyDetails.address.center}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <Clock className="w-4 h-4 text-[#FF7711] shrink-0" />
                  <div>
                    <span className="text-[#888888] block text-[10px]">OPERATING HOURS</span>
                    <span className="font-bold text-white">Mon – Sat: 9:00 AM – 6:30 PM (Sunday By Appointment)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <Phone className="w-4 h-4 text-[#FF7711] shrink-0" />
                  <div>
                    <span className="text-[#888888] block text-[10px]">DIRECT COUNSELLOR HELPLINE</span>
                    <span className="font-bold text-white">+91 {companyDetails.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#our-courses"
                  className="btn-dark-secondary px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4 text-[#FF7711]" />
                  <span>Explore Programs</span>
                </a>

                <button
                  onClick={onOpenPartnerModal}
                  className="btn-dark-secondary px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711]"
                >
                  <span>For Schools: Setup Lab</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-6 bg-[#111111] border border-[#2A2A2A] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Visit Our Center
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                  FREE TRIAL DEMO
                </span>
              </div>
              <p className="text-xs text-[#A1A1A1] mb-6">
                Book a 45-minute hands-on robotics trial and level orientation with our senior technical mentors.
              </p>

              {visitSubmitted ? (
                <div className="p-7 rounded-2xl bg-[#151515] border border-emerald-500/40 text-center my-4 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#F1F1F1] mb-1">
                    Free Trial Slot Reserved!
                  </h4>
                  <p className="text-xs text-[#A1A1A1] leading-relaxed mb-4">
                    Thank you, <strong className="text-white">{visitForm.parentName}</strong>! We have registered your trial request for <strong className="text-[#FF7711]">{visitForm.studentName || "your child"}</strong>. Our Patna center coordinator will call you at <strong className="text-white">{visitForm.phone}</strong> shortly to confirm your preferred time slot.
                  </p>
                  <button
                    onClick={() => setVisitSubmitted(false)}
                    className="btn-dark-secondary px-5 py-2.5 rounded-xl text-xs font-mono cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={visitForm.parentName}
                      onChange={(e) => setVisitForm({ ...visitForm, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Student / Child's Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav"
                        value={visitForm.studentName}
                        onChange={(e) => setVisitForm({ ...visitForm, studentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Grade / Learning Level *
                      </label>
                      <select
                        value={visitForm.studentGrade}
                        onChange={(e) => setVisitForm({ ...visitForm, studentGrade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711] transition-colors"
                      >
                        <option value="Grades K-5 (Starter / Little Champs)">Grades K-5 (Starter)</option>
                        <option value="Grades 6-8 (Learner / Junior Champs)">Grades 6-8 (Learner)</option>
                        <option value="Grades 9-12 (Performer / Senior Champs)">Grades 9-12 (Performer)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                        Preferred Track / Interest
                      </label>
                      <select
                        value={visitForm.interestedTrack}
                        onChange={(e) => setVisitForm({ ...visitForm, interestedTrack: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711] transition-colors"
                      >
                        <option value="Robotics & Hardware">🤖 Robotics & Hardware</option>
                        <option value="Coding & Software">💻 Coding & Programming</option>
                        <option value="Artificial Intelligence">🧠 AI & Machine Learning</option>
                        <option value="3D Printing & CAD">🖨️ 3D Printing & CAD</option>
                        <option value="Drone Technology">🚁 Drone Technology</option>
                        <option value="Financial Literacy">💰 Financial Literacy</option>
                        <option value="Entrepreneur Mindset">🚀 Entrepreneur Mindset</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-orange-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 mt-4 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all"
                  >
                    <span>Confirm Free Trial Booking</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* Return to Homepage / Footer Navigation Strip                             */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#080808] py-12 text-center border-t border-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-dark-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
          >
            <span>← Return to Homepage</span>
          </button>

          <button
            onClick={onOpenPartnerModal}
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
          >
            <span>For Schools: Setup An ATL Lab</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Gallery Lightbox Modal Preview                                            */}
      {/* ========================================================================= */}
      {activeGalleryPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveGalleryPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] border border-[#2C2C2C] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-[420px] bg-black">
              <img
                src={activeGalleryPreview.image}
                alt={activeGalleryPreview.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveGalleryPreview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#333333] hover:bg-[#FF7711] hover:text-black transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                  {activeGalleryPreview.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {activeGalleryPreview.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1]">
                {activeGalleryPreview.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
