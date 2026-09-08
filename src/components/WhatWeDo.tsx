import React from "react";
import { Compass, Hammer, RefreshCw, Trophy } from "lucide-react";
import { media } from "../data/media";

export const WhatWeDo: React.FC = () => {
  const capabilityRows = [
    {
      num: "01",
      title: "EXPLORE",
      summary: "Students discover technology.",
      detail: "Unpacking the mechanisms behind everyday robotics, smart circuits, and algorithms.",
      icon: Compass,
    },
    {
      num: "02",
      title: "BUILD",
      summary: "Students turn ideas into projects.",
      detail: "Writing code, wiring breadboards, 3D printing custom parts, and soldering hardware.",
      icon: Hammer,
    },
    {
      num: "03",
      title: "EXPERIMENT",
      summary: "Students test and improve.",
      detail: "Debugging unexpected errors, iterating on mechanics, and optimizing performance.",
      icon: RefreshCw,
    },
    {
      num: "04",
      title: "SHOWCASE",
      summary: "Students explain and present.",
      detail: "Articulating logic, demonstrating live models, and building genuine public confidence.",
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Large Realistic Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#111111] group shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={media.whatWeDo}
                  alt="Students actively engineering robotic microcontroller hardware"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Dark editorial overlay caption */}
              <div className="p-4 bg-[#111111] border-t border-[#272727] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-2 text-[#A1A1A1]">
                  <span className="w-2 h-2 rounded-full bg-[#FF7711]" />
                  <span>MAKER LAB PRACTICE</span>
                </div>
                <span className="text-[#707070]">LEARNING-BY-DOING</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative + 4 Capability Rows */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase mb-2">
              01 / WHAT WE DO
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
              Learning becomes powerful when students can use it.
            </h2>

            <p className="text-base text-[#A1A1A1] leading-relaxed mb-6">
              Narasimha Skill Sphere bridges the gap between passive classroom concepts and tactile, real-world application. We immerse students into physical making—transforming theoretical science and computer principles into operational prototypes.
            </p>

            {/* 4 Compact Capability Rows */}
            <div className="divide-y divide-[#272727] border-y border-[#272727]">
              {capabilityRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.num}
                    className="py-3.5 flex items-start space-x-4 group hover:bg-[#0D0D0D]/80 transition-colors px-2 rounded-lg"
                  >
                    <span className="font-mono text-xs font-bold text-[#FF7711] pt-0.5 shrink-0">
                      {row.num}
                    </span>

                    <div className="p-1.5 rounded bg-[#151515] border border-[#272727] text-[#FF7711] shrink-0 mt-0.5 group-hover:border-[#FF7711]/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline space-x-2">
                        <h3 className="text-sm font-bold text-[#F1F1F1] tracking-wide">
                          {row.title}
                        </h3>
                        <span className="text-xs text-[#A1A1A1] font-medium hidden sm:inline">
                          — {row.summary}
                        </span>
                      </div>
                      <p className="text-xs text-[#707070] mt-0.5">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center space-x-3 text-xs font-mono text-[#A1A1A1]">
              <span className="text-[#FF7711] font-semibold">CORE PHILOSOPHY:</span>
              <span className="hidden sm:inline">Learn → Experiment → Build → Improve → Explain → Showcase</span>
              <span className="sm:hidden">Learn → Build → Showcase</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
