import React from "react";
import {
  ArrowRight,
  FlaskConical,
  Users,
  Building,
  Bot,
  Code2,
  Lightbulb,
} from "lucide-react";
import { media } from "../assets/data/media";

interface AudienceModalProps {
  isOpen: boolean;
  onSelectRole: (role: "school" | "student") => void;
}

export const AudienceModal: React.FC<AudienceModalProps> = ({ isOpen, onSelectRole }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Outer Card Container */}
      <div className="relative w-full max-w-[880px] my-auto bg-gradient-to-b from-[#F3F8FD] via-[#F8FBFE] to-[#F1F6FB] rounded-[28px] sm:rounded-[36px] border border-blue-100 shadow-[0_25px_70px_rgba(0,0,0,0.4)] p-4 sm:p-6 md:p-8 overflow-hidden z-10">

        {/* ========================================================================= */}
        {/* DOODLE DECORATIONS (MATCHING ATTACHED IMAGE)                              */}
        {/* ========================================================================= */}

        {/* Top-Left Lightbulb Doodle */}
        <div className="absolute top-3 left-3 sm:top-5 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-85 select-none">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Bulb */}
            <path
              d="M32 14C23.16 14 16 21.16 16 30C16 35.8 19.12 40.88 23.75 43.63C24.8 44.25 25.45 45.38 25.45 46.6V48C25.45 49.1 26.35 50 27.45 50H36.55C37.65 50 38.55 49.1 38.55 48V46.6C38.55 45.38 39.2 44.25 40.25 43.63C44.88 40.88 48 35.8 48 30C48 21.16 40.84 14 32 14Z"
              stroke="#0099FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bulb lines */}
            <path d="M26 53H38" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M28 56H36" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M27 30C27 27.24 29.24 25 32 25" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
            {/* Radiating Rays */}
            <path d="M32 6V9" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 14L17 17" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M50 14L47 17" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 30H11" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M53 30H56" stroke="#0099FF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Top-Right Rocket Doodle */}
        <div className="absolute top-3 right-12 sm:top-5 sm:right-16 w-16 sm:w-20 h-16 sm:h-20 pointer-events-none opacity-90 select-none">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Dotted motion trail */}
            <path
              d="M15 65 Q25 45 42 35"
              stroke="#0099FF"
              strokeWidth="1.8"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />
            {/* Rocket Body */}
            <g transform="translate(30, 8) rotate(45)">
              <path
                d="M16 2C16 2 26 8 26 24C26 34 22 40 22 40H10C10 40 6 34 6 24C6 8 16 2 16 2Z"
                fill="#FFFFFF"
                stroke="#FF7711"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="18" r="4.5" fill="#EBF5FF" stroke="#0099FF" strokeWidth="2" />
              {/* Fins */}
              <path d="M6 28L1 36L10 36" fill="#FF7711" stroke="#FF7711" strokeWidth="2" strokeLinejoin="round" />
              <path d="M26 28L31 36L22 36" fill="#FF7711" stroke="#FF7711" strokeWidth="2" strokeLinejoin="round" />
              {/* Flame */}
              <path d="M12 40L16 47L20 40" stroke="#FF7711" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>

        {/* Bottom-Left Gear Doodle */}
        <div className="absolute bottom-2 left-3 sm:bottom-3 sm:left-6 w-14 sm:w-16 h-14 sm:h-16 pointer-events-none opacity-70 select-none">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="28" cy="34" r="10" stroke="#0099FF" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="28" cy="34" r="4.5" stroke="#0099FF" strokeWidth="2" />
            <path d="M10 52 Q18 46 26 48" stroke="#0099FF" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Bottom-Center Set-Square & Book Doodle */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-10 pointer-events-none opacity-70 select-none flex items-center justify-center space-x-4">
          <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-9">
            {/* Triangle Ruler */}
            <path d="M10 34L45 34L10 8Z" stroke="#0099FF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M16 30L34 30L16 18Z" stroke="#0099FF" strokeWidth="1.5" />
            <path d="M18 34V31M24 34V31M30 34V31M36 34V31" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-9">
            {/* Open Book */}
            <path d="M8 32 C18 29 26 31 30 33 C34 31 42 29 52 32 V12 C42 9 34 11 30 13 C26 11 18 9 8 12 Z" stroke="#0099FF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M30 13V33" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom-Right Warm Curve Accent */}
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-tl from-[#FF7711]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* ========================================================================= */}
        {/* MODAL HEADER: BRAND LOGO & WELCOME TITLE                                  */}
        {/* ========================================================================= */}
        <div className="text-center relative z-10 pt-1 sm:pt-2 mb-5 sm:mb-6">
          
          {/* Logo & Brand Name */}
          <div className="inline-flex items-center justify-center space-x-2.5 mb-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm p-1 flex items-center justify-center shrink-0">
              <img
                src={media.logo}
                alt="Narasimha Skill Sphere"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0F1E36]">
                  Narasimha
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#FF6A00]">
                  Skill Sphere
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 block -mt-0.5 tracking-wide">
                Learning-By-Doing<span className="text-[#FF6A00]">.</span>
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0F1E36] tracking-tight">
            Welcome to Narasimha Skill Sphere
          </h3>

          {/* Main Question with Decorative Orange Burst Rays */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-0.5 sm:mt-1">
            
            {/* Left Accent Rays */}
            <div className="flex items-center space-x-1 opacity-90">
              <span className="w-3 sm:w-4 h-[3px] bg-[#FF7711] rounded-full -rotate-12" />
              <span className="w-2 sm:w-3 h-[3px] bg-[#FF7711] rounded-full" />
              <span className="w-3 sm:w-4 h-[3px] bg-[#FF7711] rounded-full rotate-12" />
            </div>

            {/* Question Text */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[#0F1E36]">Are you </span>
              <span className="text-[#FF6A00] drop-shadow-sm">here as?</span>
            </h2>

            {/* Right Accent Rays */}
            <div className="flex items-center space-x-1 opacity-90">
              <span className="w-3 sm:w-4 h-[3px] bg-[#FF7711] rounded-full rotate-12" />
              <span className="w-2 sm:w-3 h-[3px] bg-[#FF7711] rounded-full" />
              <span className="w-3 sm:w-4 h-[3px] bg-[#FF7711] rounded-full -rotate-12" />
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* CARDS GRID: SCHOOL / INSTITUTION vs STUDENT / PARENT                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 1: SCHOOL / INSTITUTION (ROYAL BLUE THEME)                         */}
          {/* ----------------------------------------------------------------------- */}
          <div
            onClick={() => onSelectRole("school")}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0062FF] via-[#004FE0] to-[#0038B8] p-2 sm:p-2.5 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,98,255,0.38)] hover:-translate-y-1 transition-all duration-300 border border-blue-400/40 relative"
          >
            {/* Top Photo Frame */}
            <div className="relative w-full h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={media.schoolPartnership || "/High tech lab .png"}
                alt="School / Institution Campus & ATL Labs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Centered Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#00A2FF] to-[#0055EE] border-2 border-white shadow-lg flex items-center justify-center text-white">
                  {/* School / Building Icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" />
                    <path d="M5 10.5V17C5 17 8 19 12 19C16 19 19 17 19 17V10.5L12 14.5L5 10.5Z" />
                    <path d="M22 10.5V16H20V10.5L22 10.5Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Blue Card Body Content */}
            <div className="pt-6 px-2 sm:px-3 pb-2">
              
              {/* Header Row: Title + Arrow Action Button */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">
                    School / <br />
                    Institution
                  </h4>
                </div>
                
                {/* Round Arrow Button */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#0052E0] shadow-md group-hover:bg-blue-50 group-hover:scale-105 group-hover:translate-x-0.5 transition-all shrink-0">
                  <ArrowRight className="w-5 h-5 font-bold" />
                </div>
              </div>

              {/* Description with Highlighted Yellow Keyword */}
              <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal mt-2.5">
                Transform your school with ATL Labs, STEM programs, innovation workshops &{" "}
                <span className="text-[#FFDD00] font-bold">hands-on skill learning.</span>
              </p>

              {/* White Feature Strip (3 Column Badges) */}
              <div className="mt-3.5 sm:mt-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 grid grid-cols-3 gap-1 shadow-sm border border-blue-100">
                
                {/* 1. ATL Labs Setup */}
                <div className="flex flex-col items-center text-center p-1">
                  <div className="w-7 h-7 flex items-center justify-center text-[#0047BA] mb-1">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    ATL Labs <br /> Setup
                  </span>
                </div>

                {/* 2. STEM Programs */}
                <div className="flex flex-col items-center text-center p-1 border-x border-slate-100">
                  <div className="w-7 h-7 flex items-center justify-center text-[#0066FF] mb-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    STEM <br /> Programs
                  </span>
                </div>

                {/* 3. Innovation Workshops */}
                <div className="flex flex-col items-center text-center p-1">
                  <div className="w-7 h-7 flex items-center justify-center text-[#0038A8] mb-1">
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    Innovation <br /> Workshops
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 2: STUDENT / PARENT (VIBRANT ORANGE THEME)                         */}
          {/* ----------------------------------------------------------------------- */}
          <div
            onClick={() => onSelectRole("student")}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#FF7300] via-[#FF5500] to-[#E03E00] p-2 sm:p-2.5 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(255,115,0,0.38)] hover:-translate-y-1 transition-all duration-300 border border-orange-300/40 relative"
          >
            {/* Top Photo Frame */}
            <div className="relative w-full h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900">
              <img
                src="/parents_child_robotics.jpg"
                onError={(e) => {
                  // Fallback if direct path needs alternate
                  const target = e.currentTarget;
                  if (target.src !== media.juniorChamps) {
                    target.src = media.juniorChamps;
                  }
                }}
                alt="Student / Parent Hands-on STEM Robotics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Centered Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#FFA726] to-[#E65100] border-2 border-white shadow-lg flex items-center justify-center text-white">
                  {/* Users / People Group Icon */}
                  <Users className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Orange Card Body Content */}
            <div className="pt-6 px-2 sm:px-3 pb-2">
              
              {/* Header Row: Title + Arrow Action Button */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">
                    Student / <br />
                    Parent
                  </h4>
                </div>
                
                {/* Round Arrow Button */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-md group-hover:bg-orange-50 group-hover:scale-105 group-hover:translate-x-0.5 transition-all shrink-0">
                  <ArrowRight className="w-5 h-5 font-bold" />
                </div>
              </div>

              {/* Description with Highlighted Yellow Keyword */}
              <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal mt-2.5">
                Build future-ready skills through hands-on{" "}
                <span className="text-[#FFDD00] font-bold">
                  Robotics, AI, Coding, Design & Innovation
                </span>{" "}
                programs.
              </p>

              {/* White Feature Strip (3 Column Badges) */}
              <div className="mt-3.5 sm:mt-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 grid grid-cols-3 gap-1 shadow-sm border border-orange-100">
                
                {/* 1. Robotics & AI */}
                <div className="flex flex-col items-center text-center p-1">
                  <div className="w-7 h-7 flex items-center justify-center text-[#059669] mb-1">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    Robotics <br /> & AI
                  </span>
                </div>

                {/* 2. Coding & Design */}
                <div className="flex flex-col items-center text-center p-1 border-x border-slate-100">
                  <div className="w-7 h-7 flex items-center justify-center text-[#7C3AED] mb-1">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    Coding <br /> & Design
                  </span>
                </div>

                {/* 3. Innovation Programs */}
                <div className="flex flex-col items-center text-center p-1">
                  <div className="w-7 h-7 flex items-center justify-center text-[#D97706] mb-1">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                    Innovation <br /> Programs
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
