import React, { useState, useEffect, useRef } from "react";
import { Building2, Users, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "framer-motion";

interface CounterItemProps {
  targetValue: number;
  suffix?: string;
  decimals?: number;
  useCommas?: boolean;
}

const AnimatedCounter: React.FC<CounterItemProps> = ({
  targetValue,
  suffix = "",
  decimals = 0,
  useCommas = false,
}) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2200; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * targetValue;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetValue);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, targetValue]);

  const formattedNumber = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: useCommas,
  });

  return (
    <span ref={ref}>
      {formattedNumber}
      {suffix}
    </span>
  );
};

export const ProvenResults: React.FC = () => {
  const stats = [
    {
      num: "01",
      targetValue: 55,
      suffix: "+",
      decimals: 0,
      useCommas: false,
      label: "Partner Institutions",
      detail: "Schools & leading educational campuses across Bihar & Jharkhand",
      icon: Building2,
      accent: "#FF7711",
    },
    {
      num: "02",
      targetValue: 37745,
      suffix: "+",
      decimals: 0,
      useCommas: true,
      label: "Students Trained",
      detail: "Active young innovators building real-world technology projects",
      icon: Users,
      accent: "#FBBF24",
    },
    {
      num: "03",
      targetValue: 97.47,
      suffix: "%",
      decimals: 2,
      useCommas: false,
      label: "Satisfaction Rate",
      detail: "Evaluated by principals, STEM teachers, parents, and students",
      icon: CheckCircle2,
      accent: "#10B981",
    },
    {
      num: "04",
      targetValue: 99.99,
      suffix: "%",
      decimals: 2,
      useCommas: false,
      label: "Retention Rate",
      detail: "Sustained long-term annual institutional lab partnerships",
      icon: ShieldCheck,
      accent: "#38BDF8",
    },
  ];

  return (
    <section id="proven-results" className="w-full bg-[#080808] border-b border-[#272727] py-12 sm:py-14 lg:py-16 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[320px] bg-[#FF7711]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              PROVEN RESULTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            We don’t just teach.{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              We create impact.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Our numbers define our dedication. From retention to student success, the data speaks for the Narasimha ecosystem.
          </p>
        </div>

        {/* 4 Animated Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 lg:p-8 rounded-3xl bg-[#111114]/90 backdrop-blur-xl border border-white/10 hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Color Accent Line on Hover */}
                <div
                  className="absolute top-0 inset-x-6 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${stat.accent}, transparent)`,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${stat.accent}15`,
                        borderColor: `${stat.accent}40`,
                        color: stat.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-white/40 font-bold">{stat.num}</span>
                  </div>

                  {/* Animated Counter Metric */}
                  <div
                    className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight font-mono mb-2 group-hover:scale-[1.02] origin-left transition-transform duration-300"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    <AnimatedCounter
                      targetValue={stat.targetValue}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      useCommas={stat.useCommas}
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/10 font-normal">
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
