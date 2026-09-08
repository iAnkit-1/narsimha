import React from "react";
import { FileText, CheckCircle2, ArrowRight, Layout, Cpu, ShieldCheck } from "lucide-react";

interface TailoredInnovationProps {
  onRequestProposal: () => void;
}

export const TailoredInnovation: React.FC<TailoredInnovationProps> = ({ onRequestProposal }) => {
  const steps = [
    {
      title: "Campus Space & Budget Assessment",
      desc: "We analyze your available square footage, electrical load, and grade levels to draft an optimal footprint.",
      icon: Layout,
    },
    {
      title: "Curriculum & Hardware Alignment",
      desc: "Equipping your lab with exactly what your students need—from basic electronics to AI edge nodes and drones.",
      icon: Cpu,
    },
    {
      title: "Turnkey Setup & Faculty Onboarding",
      desc: "Complete hardware delivery, workbench assembly, software licensing, and initial intensive teacher FDP.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="tailored-innovation" className="w-full bg-[#0D0D0D] border-b border-[#272727] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] via-[#101010] to-[#0D0D0D] border border-[#272727] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7711]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#333333] mb-6">
                  <span className="text-sm">🧩</span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                    TAILORED INNOVATION
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-6">
                  Build Your Dream{" "}
                  <span className="font-serif italic font-normal text-[#FF7711]">Innovation Hub</span>
                </h2>

                <blockquote className="text-base sm:text-lg text-[#E2E8F0] italic leading-relaxed border-l-2 border-[#FF7711] pl-5 mb-8 bg-[#151515]/60 py-3 rounded-r-xl">
                  “We don’t build labs first—we build your vision. By aligning with your institutional goals, we develop the right innovation lab that delivers real academic impact.”
                </blockquote>

                {/* 3 Steps */}
                <div className="space-y-4 mb-8">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="flex items-start space-x-3.5">
                        <div className="p-2 rounded-lg bg-[#181818] border border-[#2B2B2B] text-[#FF7711] shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#F1F1F1]">
                            {idx + 1}. {step.title}
                          </h4>
                          <p className="text-xs text-[#888888] mt-0.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Action Proposal Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#151515] border border-[#2E2E2E] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
                
                <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#FF7711] to-transparent" />

                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#FF7711] uppercase tracking-wider mb-2 font-bold">
                    <FileText className="w-4 h-4" />
                    <span>Free Institutional Proposal</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to design your lab?
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6">
                    Get a free consultation and a tailored 2D/3D layout proposal for your institution today.
                  </p>

                  <div className="space-y-3 mb-8 bg-[#0D0D0D] p-4 rounded-xl border border-[#222222]">
                    <div className="flex items-center space-x-2 text-xs text-[#D4D4D4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                      <span>Customized Blueprint & Bill of Materials</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-[#D4D4D4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                      <span>NEP 2020 S.T.E.M Curriculum Integration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-[#D4D4D4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                      <span>Budget Optimization & Grant Assistance</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onRequestProposal}
                  className="w-full btn-orange-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:shadow-orange-glow transition-all cursor-pointer"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono text-center text-[#666666] mt-3">
                  No obligation • Response within 24 business hours
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
