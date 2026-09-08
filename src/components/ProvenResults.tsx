import React from "react";
import { Building2, Users, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export const ProvenResults: React.FC = () => {
  const stats = [
    {
      value: "55+",
      label: "Partner Institutions",
      detail: "Schools & leading educational campuses across Bihar & Jharkhand",
      icon: Building2,
      color: "text-[#FF7711]",
    },
    {
      value: "37,745+",
      label: "Students Trained",
      detail: "Active young innovators building real-world technology projects",
      icon: Users,
      color: "text-amber-400",
    },
    {
      value: "97.47%",
      label: "Satisfaction Rate",
      detail: "Evaluated by principals, STEM teachers, parents, and students",
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
    {
      value: "99.99%",
      label: "Retention Rate",
      detail: "Sustained long-term annual institutional lab partnerships",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="proven-results" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF7711]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              PROVEN RESULTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
            We don’t just teach.{" "}
            <span className="font-serif italic font-normal text-[#FF7711]">We create impact.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Our numbers define our dedication. From retention to student success, the data speaks for the Narasimha ecosystem.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 lg:p-8 rounded-2xl bg-[#111111] border border-[#272727] hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2B2B2B] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#555555]">0{idx + 1}</span>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 group-hover:text-[#FF7711] transition-colors">
                    {stat.value}
                  </div>

                  <h3 className="text-base font-bold text-[#F1F1F1] mb-2">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-[#888888] leading-relaxed pt-4 border-t border-[#1F1F1F]">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
