import React, { useState } from "react";
import { 
  Bot, BrainCircuit, Code2, Cpu, Wifi, Box, Printer, 
  Compass, Glasses, Globe, Smartphone, Palette, Lightbulb, 
  Sparkles, CheckCircle2 
} from "lucide-react";
import { skillSphereNodes } from "../data/skills";
import type { EcosystemNode } from "../data/skills";
import { media } from "../data/media";

export const SkillSphere: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode>(skillSphereNodes[0]);

  const iconLookup: Record<string, React.ElementType> = {
    Bot,
    BrainCircuit,
    Code2,
    Cpu,
    Wifi,
    Box,
    Printer,
    Compass,
    Glasses,
    Globe,
    Smartphone,
    Palette,
    Lightbulb,
  };

  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF7711]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              SIGNATURE ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            The Skill Sphere ecosystem.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] mt-3">
            An interconnected landscape of mechanical, computational, and creative competencies designed for hands-on mastery.
          </p>
        </div>

        {/* Main Grid: Visual Ecosystem Canvas + Real Photography Context & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Center 7 cols: Interactive Ecosystem Diagram */}
          <div className="lg:col-span-7 bg-[#080808] border border-[#272727] rounded-2xl p-6 sm:p-8 relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between overflow-hidden">
            
            {/* SVG Orbital Background Rings & Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              {/* Concentric subtle orbital rings */}
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#272727" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="28%" fill="none" stroke="#FF7711" strokeOpacity="0.25" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="14%" fill="none" stroke="#272727" strokeWidth="1" />
              
              {/* Diagonal axis rays */}
              <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#272727" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="#272727" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="50%" y1="5%" x2="50%" y2="95%" stroke="#272727" strokeWidth="0.75" strokeDasharray="2 2" />
              <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="#272727" strokeWidth="0.75" strokeDasharray="2 2" />
            </svg>

            {/* Top Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#707070] relative z-10">
              <span className="flex items-center space-x-1.5 text-[#FF7711]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711] animate-ping" />
                <span>INTERACTIVE NODES</span>
              </span>
              <span>13 INTEGRATED DOMAINS</span>
            </div>

            {/* Center Core Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#111111] border-2 border-[#FF7711] flex flex-col items-center justify-center p-2 text-center shadow-[0_0_30px_rgba(255,119,17,0.3)]">
                <div className="w-6 h-6 mb-1">
                  <img src={media.logo} alt="Narasimha Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#FF7711] leading-tight">
                  SKILL SPHERE
                </span>
                <span className="text-[8px] text-[#707070] font-mono">
                  CORE HUB
                </span>
              </div>
            </div>

            {/* Floating Ecosystem Nodes */}
            <div className="relative w-full h-[380px] sm:h-[420px] my-auto">
              {skillSphereNodes.map((node) => {
                const Icon = iconLookup[node.iconName] || Sparkles;
                const isSelected = selectedNode.id === node.id;
                
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer focus:outline-none ${
                      isSelected
                        ? "bg-[#FF7711] text-[#080808] border-[#FF7711] shadow-[0_0_15px_rgba(255,119,17,0.5)] scale-110 font-bold"
                        : "bg-[#111111]/90 text-[#F1F1F1] border-[#272727] hover:border-[#FF7711] hover:bg-[#151515] font-medium"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#080808]" : "text-[#FF7711]"}`} />
                    <span className="text-[11px] whitespace-nowrap font-mono tracking-tight">
                      {node.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#707070] pt-4 border-t border-[#272727]/80 gap-2">
              <span className="text-[#A1A1A1]">Click any node to inspect capabilities</span>
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#FF7711]" />
                  <span>Selected</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#272727]" />
                  <span>Ecosystem Nodes</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right 5 cols: Node Inspector Card + Real Photography Integration */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Active Node Detail Card */}
            <div className="bg-[#151515] border border-[#272727] rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-lg bg-[#080808] border border-[#FF7711]/40 text-[#FF7711]">
                    {(() => {
                      const Icon = iconLookup[selectedNode.iconName] || Bot;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7711] font-semibold">
                      DOMAIN INSPECTION
                    </span>
                    <h3 className="text-xl font-bold text-[#F1F1F1]">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808] border border-[#272727] text-[#A1A1A1] uppercase">
                  {selectedNode.category}
                </span>
              </div>

              <p className="text-sm text-[#A1A1A1] leading-relaxed mb-4">
                {selectedNode.description}
              </p>

              <div className="pt-3 border-t border-[#272727] flex items-center justify-between text-xs font-mono text-[#707070]">
                <span className="text-[#FF7711] flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hands-on Lab Integration</span>
                </span>
                <span>Active Track</span>
              </div>
            </div>

            {/* Real Student Maker Photograph embedded with context */}
            <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#111111] flex-1 min-h-[220px] group">
              <img
                src={media.robotics}
                alt="Student practicing physical robotics integration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#080808]/85 border border-[#272727] backdrop-blur-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#F1F1F1]">
                    Cross-Discipline Maker Projects
                  </span>
                  <span className="text-[10px] font-mono text-[#A1A1A1]">
                    Hardware + Embedded Code + 3D Chassis
                  </span>
                </div>
                <span className="px-2 py-1 rounded bg-[#FF7711]/20 text-[#FF7711] border border-[#FF7711]/40 text-[10px] font-mono font-bold">
                  APPLIED STEM
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
