import React from "react";
import { Camera, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { media } from "../data/media";

export const NarasimhaInAction: React.FC = () => {
  const stories = [
    {
      id: "s1",
      title: "Preparing IoT Project",
      tag: "HARDWARE & SENSORS",
      location: "Active Tinkering Lab",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description: "Students breadboarding ESP32 nodes to construct real-time telemetry environmental monitors.",
      direction: "bottom",
    },
    {
      id: "s2",
      title: "Drone Testing Field Day",
      tag: "FLIGHT LAB",
      location: "Outdoor Campus Grounds",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      description: "Live outdoor quadcopter flight calibrations, PID tuning, and safety clearance drills.",
      direction: "left",
    },
    {
      id: "s3",
      title: "Drone Training Session",
      tag: "AEROMODELLING",
      location: "Maker Space",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      description: "Assembling ESCs, brushless motors, and carbon fiber propellers step-by-step.",
      direction: "right",
    },
    {
      id: "s4",
      title: "AI Logic Building",
      tag: "MACHINE LEARNING",
      location: "Computer Lab",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      description: "Training OpenCV vision models and testing gesture-controlled robotic rovers.",
      direction: "top",
    },
    {
      id: "s5",
      title: "Workshop - Hands-on Soldering",
      tag: "TACTILE SKILLS",
      location: "Electronics Bench",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Mastering safe soldering, component polarity, heat sinks, and PCB circuit trace soldering.",
      direction: "bottom",
    },
    {
      id: "s6",
      title: "Mentorship - 1-on-1 Guidance",
      tag: "FACULTY SUPPORT",
      location: "FDP & Student Desk",
      image: media.fdp,
      description: "Dedicated Narasimha instructors assisting students through complex debugging loops.",
      direction: "left",
    },
    {
      id: "s7",
      title: "Live Action - India’s Next Step Forward",
      tag: "NATIONAL STAGE",
      location: "Innovation Fest Showcase",
      image: media.event,
      description: "Young makers pitching their functional prototypes to industry judges and parents.",
      direction: "bottom",
    },
  ];

  const getSlideClass = (dir: string) => {
    switch (dir) {
      case "left":
        return "-translate-x-full group-hover:translate-x-0";
      case "right":
        return "translate-x-full group-hover:translate-x-0";
      case "top":
        return "-translate-y-full group-hover:translate-y-0";
      case "bottom":
      default:
        return "translate-y-full group-hover:translate-y-0";
    }
  };

  return (
    <section id="narasimha-in-action" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <Camera className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              CAMPUS HIGHLIGHTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Narasimha{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              In Action
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] mb-5 leading-relaxed max-w-2xl mx-auto">
            Real labs, real students, real results. See how our training programs transform campuses into hubs of innovation.
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#FF7711] hover:underline font-bold px-4 py-2 rounded-full bg-[#141414] border border-[#FF7711]/30 hover:border-[#FF7711] transition-all shadow-md"
          >
            <span>Follow Our Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Story-Cards Grid (Image-First with Varied Slide Hover Effects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, idx) => {
            const isFeatured = idx === 6; // India's Next Step Forward / wide card
            return (
              <div
                key={story.id}
                className={`relative rounded-3xl overflow-hidden group border border-white/10 hover:border-[#FF7711]/60 transition-all duration-500 shadow-xl bg-[#111111] h-[280px] sm:h-[320px] ${
                  isFeatured ? "md:col-span-2 lg:col-span-3 lg:h-[340px]" : ""
                }`}
              >
                {/* Full Card Background Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-105"
                  loading="lazy"
                />

                {/* Ambient Bottom Gradient for Visible Heading in Default State */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Tag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#FF7711] font-bold uppercase shadow-md">
                    {story.tag}
                  </span>
                </div>

                {/* Default Visible Heading at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#A3A3A3] mb-1">
                    <MapPin className="w-3 h-3 text-[#FF7711]" />
                    <span>{story.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {story.title}
                  </h3>
                </div>

                {/* Dynamic Directional Slide-in Hover Overlay */}
                <div
                  className={`absolute inset-0 p-6 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/85 to-black/40 backdrop-blur-[2px] transition-transform duration-500 ease-out transform ${getSlideClass(
                    story.direction
                  )}`}
                >
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-[#FF7711] font-bold uppercase mb-1.5">
                    <span>📍 {story.location}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight mb-2 text-[#FF7711]">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E5E5E5] leading-relaxed mb-4 font-normal">
                    {story.description}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="text-[11px] text-[#A3A3A3]">Narasimha Live Campus</span>
                    <span className="flex items-center space-x-1 text-[#FF7711] font-semibold">
                      <span>View Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
