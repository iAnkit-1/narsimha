import React from "react";
import pedagogyImg from "../assets/OUR PEDAGOGY.png";

export const E3Framework: React.FC = () => {
  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              PROPRIETARY FRAMEWORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            Our E3 Pedagogy
          </h2>
        </div>

        {/* 2-Column: Direct Transparent Image on Left | Summarized 3-Stage Process on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Direct image without extra frame/boxes */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <img
              src={pedagogyImg}
              alt="Our E3 Pedagogy"
              className="w-full max-w-sm sm:max-w-md h-auto object-contain filter drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Right Column (7 cols): Crisp 3-Stage Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left">
            
            <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed font-normal mb-2">
              We bridge the gap between traditional education and future readiness through a structured, three-stage transformation process.
            </p>

            {/* Stage 1: Enjoyable */}
            <div className="p-4 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-colors">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-base">🎮</span>
                <h3 className="text-base font-bold text-[#F1F1F1]">
                  Enjoyable
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                We replace boredom with excitement. Using gamified elements and interactive tools, we spark the initial curiosity that makes a student want to learn.
              </p>
            </div>

            {/* Stage 2: Engaging */}
            <div className="p-4 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-colors">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-base">⚡</span>
                <h3 className="text-base font-bold text-[#F1F1F1]">
                  Engaging
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                Hands-on activity takes center stage. Students move from passive listening to active building—soldering, coding, and assembling robots.
              </p>
            </div>

            {/* Stage 3: Experiential */}
            <div className="p-4 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-colors">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-base">🧳</span>
                <h3 className="text-base font-bold text-[#F1F1F1]">
                  Experiential
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                Real-world application. Students tackle actual industry problems, preparing them for future careers with practical, job-ready skills.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
