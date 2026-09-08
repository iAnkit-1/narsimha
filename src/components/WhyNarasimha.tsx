import React from "react";
import { Settings, Brain, Rocket, Users, ArrowRight } from "lucide-react";
import pedagogyImg from "../assets/OUR PEDAGOGY.png";

interface WhyNarasimhaProps {
  onPartnerClick?: () => void;
}

export const WhyNarasimha: React.FC<WhyNarasimhaProps> = ({ onPartnerClick }) => {
  const whyCards = [
    {
      icon: Settings,
      title: "Holistic ATL Setup",
      description: "Beyond equipment. We design spaces that inspire creativity and collaboration tailored to your school's infrastructure.",
      tag: "INFRASTRUCTURE",
    },
    {
      icon: Brain,
      title: "Class-wise Curriculum",
      description: "Tailored syllabi for every age group covering Robotics, IoT, AI, and Coding ensuring age-appropriate learning curves.",
      tag: "PEDAGOGY",
    },
    {
      icon: Rocket,
      title: "Co-Curricular Events",
      description: "Summer camps, inter-school competitions, and hackathons to take learning beyond the classroom.",
      tag: "HACKATHONS & FAIRS",
    },
    {
      icon: Users,
      title: "Expert Mentoring",
      description: "Dedicated mentors and operational support to ensure your ATL lab remains active, utilized, and productive.",
      tag: "TRAINED FACULTY",
    },
  ];

  const e3Points = [
    {
      emoji: "🎮",
      title: "Enjoyable",
      description: "We replace boredom with excitement. Using gamified elements and interactive tools, we spark the initial curiosity that makes a student want to learn.",
      accent: "border-amber-500/40 bg-[#121212]",
    },
    {
      emoji: "⚡",
      title: "Engaging",
      description: "Hands-on activity takes center stage. Students move from passive listening to active building—soldering, coding, and assembling robots.",
      accent: "border-orange-500/40 bg-[#121212]",
    },
    {
      emoji: "🧳",
      title: "Experiential",
      description: "Real-world application. Students tackle actual industry problems, preparing them for future careers with practical, job-ready skills.",
      accent: "border-emerald-500/40 bg-[#121212]",
    },
  ];

  return (
    <section id="why-narasimha" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#FF7711]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: WHY NARASIMHA? (4 Pillars from Image) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              WHY NARASIMHA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-5">
            Bridging the gap to{" "}
            <span className="font-serif italic font-normal text-[#FF7711]">Future-Ready</span> Learning
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            We bridge the gap between traditional education and future readiness through a structured, three-stage transformation process.
          </p>
        </div>

        {/* The 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {whyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative rounded-2xl bg-[#111111] border border-[#272727] p-6 lg:p-7 flex flex-col justify-between hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-orange-glow/20"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-[#080808] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-[#666666] group-hover:text-[#A1A1A1]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#F1F1F1] group-hover:text-[#FFFFFF] mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-[#FF7711] font-semibold">
                    {card.tag}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF7711] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: OUR PEDAGOGY / The E³ Approach */}
        <div className="pt-16 border-t border-[#272727]/80">
          
          {/* Centered Heading & Intro Copy */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
              <span className="text-xs">⚡</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                OUR PEDAGOGY
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
              The{" "}
              <span className="font-serif italic font-normal text-[#FF7711]">E³ Approach</span>
            </h3>

            <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
              We bridge the gap between traditional education and future readiness through a structured, three-stage transformation process.
            </p>
          </div>

          {/* 2-Column Layout: Left (3 E3 Content Blocks) | Right (OUR PEDAGOGY.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: 3 Content Blocks */}
            <div className="lg:col-span-6 space-y-5">
              {e3Points.map((point) => (
                <div
                  key={point.title}
                  className="p-6 rounded-2xl bg-[#111111] border border-[#272727] hover:border-[#FF7711]/50 transition-all duration-300 shadow-md group hover:-translate-y-0.5"
                >
                  <div className="flex items-center space-x-3 mb-2.5">
                    <span className="text-2xl">{point.emoji}</span>
                    <h4 className="text-xl font-bold text-[#FFFFFF] tracking-tight group-hover:text-[#FF7711] transition-colors">
                      {point.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[#CCCCCC] leading-relaxed pl-9 font-normal">
                    {point.description}
                  </p>
                </div>
              ))}

              {onPartnerClick && (
                <div className="pt-4 pl-1">
                  <button
                    onClick={onPartnerClick}
                    className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-md hover:shadow-orange-glow transition-all cursor-pointer"
                  >
                    <span>Implement E³ In Your School</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Clean Image (without any styling or effect) */}
            <div className="lg:col-span-6 flex items-center justify-center p-2">
              <div className="w-full max-w-[420px] sm:max-w-[440px] rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
                <img
                  src={pedagogyImg}
                  alt="Our Pedagogy Blueprint - The E³ Approach"
                  className="w-full max-h-[480px] h-auto object-contain"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

