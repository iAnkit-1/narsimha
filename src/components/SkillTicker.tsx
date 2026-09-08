import React from "react";
import { 
  Bot, BrainCircuit, Code2, Cpu, Wifi, Printer, Compass, 
  Sparkles, Layers, Activity, Palette, Smartphone, 
  Lightbulb, Rocket, Cog, CheckCircle2 
} from "lucide-react";

export const SkillTicker: React.FC = () => {
  const tickerItems = [
    { label: "STEM", icon: Sparkles, color: "text-[#FF7711]" },
    { label: "ATL", icon: Activity, color: "text-amber-400" },
    { label: "Electronic", icon: Cpu, color: "text-emerald-400" },
    { label: "Robotics", icon: Bot, color: "text-cyan-400" },
    { label: "Internet of Things (IoT)", icon: Wifi, color: "text-blue-400" },
    { label: "Artificial Intelligence (Ai)", icon: BrainCircuit, color: "text-purple-400" },
    { label: "3D Printing", icon: Printer, color: "text-orange-400" },
    { label: "Drone Tech", icon: Compass, color: "text-sky-400" },
    { label: "Coding", icon: Code2, color: "text-green-400" },
    { label: "Machine Learning", icon: Layers, color: "text-pink-400" },
    { label: "Automation", icon: Cog, color: "text-teal-400" },
    { label: "Entrepreneurship", icon: Rocket, color: "text-yellow-400" },
    { label: "Graphic Design", icon: Palette, color: "text-indigo-400" },
    { label: "Web & Mob-App", icon: Smartphone, color: "text-rose-400" },
    { label: "Young Innovator", icon: Lightbulb, color: "text-amber-300" },
    { label: "Skill-Full Mind", icon: CheckCircle2, color: "text-[#FF7711]" },
  ];

  // Double the array for seamless infinite looping
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#0B0B0B] border-y border-[#222222] py-3.5 overflow-hidden relative select-none shadow-inner z-20">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Wrapper */}
      <div className="animate-marquee-scroll flex items-center">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center space-x-2.5 mx-2.5 sm:mx-3 px-4 py-1.5 rounded-full bg-[#141414] border border-[#272727] hover:border-[#FF7711]/60 hover:bg-[#1A1A1A] transition-all group shrink-0 shadow-sm"
            >
              <Icon className={`w-3.5 h-3.5 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs sm:text-sm font-mono font-semibold text-[#D4D4D4] group-hover:text-[#FFFFFF] whitespace-nowrap">
                {item.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#333333] group-hover:bg-[#FF7711] transition-colors ml-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
