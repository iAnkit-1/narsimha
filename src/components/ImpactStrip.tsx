import React from "react";
import { impactStats } from "../data/stats";
import { DynamicIcon } from "./DynamicIcon";

export const ImpactStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] border-b border-[#272727] py-8 sm:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#272727]">
          {impactStats.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : "pr-4"
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="p-1 rounded bg-[#151515] border border-[#272727] text-[#FF7711]">
                  <DynamicIcon name={item.iconName} className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-mono font-medium text-[#A1A1A1] uppercase tracking-wider">
                  {item.label}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F1F1F1] tracking-tight font-mono text-left">
                {item.value}
              </div>

              <p className="text-xs text-[#707070] mt-1 leading-normal">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
