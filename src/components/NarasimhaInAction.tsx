import React from "react";
import { Camera, ArrowRight } from "lucide-react";
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
    },
    {
      id: "s2",
      title: "Drone Testing Field Day",
      tag: "FLIGHT LAB",
      location: "Outdoor Campus Grounds",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      description: "Live outdoor quadcopter flight calibrations, PID tuning, and safety clearance drills.",
    },
    {
      id: "s3",
      title: "Drone Training Session",
      tag: "AEROMODELLING",
      location: "Maker Space",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      description: "Assembling ESCs, brushless motors, and carbon fiber propellers step-by-step.",
    },
    {
      id: "s4",
      title: "AI Logic Building",
      tag: "MACHINE LEARNING",
      location: "Computer Lab",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      description: "Training OpenCV vision models and testing gesture-controlled robotic rovers.",
    },
    {
      id: "s5",
      title: "Workshop - Hands-on Soldering",
      tag: "TACTILE SKILLS",
      location: "Electronics Bench",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Mastering safe soldering, component polarity, heat sinks, and PCB circuit trace soldering.",
    },
    {
      id: "s6",
      title: "Mentorship - 1-on-1 Guidance",
      tag: "FACULTY SUPPORT",
      location: "FDP & Student Desk",
      image: media.fdp,
      description: "Dedicated Narasimha instructors assisting students through complex debugging loops.",
    },
    {
      id: "s7",
      title: "Live Action - India’s Next Step Forward",
      tag: "NATIONAL STAGE",
      location: "Innovation Fest Showcase",
      image: media.event,
      description: "Young makers pitching their functional prototypes to industry judges and parents.",
    },
  ];

  return (
    <section id="narasimha-in-action" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#272727] mb-3.5">
              <Camera className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                CAMPUS HIGHLIGHTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight">
              Narasimha{" "}
              <span className="font-serif italic font-normal text-[#FF7711]">In Action</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#A1A1A1] mb-3">
              Real labs, real students, real results. See how our training programs transform campuses into hubs of innovation.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#FF7711] hover:underline font-semibold"
            >
              <span>Follow Our Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery Story-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, idx) => {
            const isFeatured = idx === 6; // India's Next Step Forward / wide card
            return (
              <div
                key={story.id}
                className={`rounded-2xl bg-[#111111] border border-[#272727] overflow-hidden group hover:border-[#FF7711]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg ${
                  isFeatured ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className={`aspect-[16/10] w-full overflow-hidden relative ${isFeatured ? "lg:aspect-[24/9]" : ""}`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#FF7711] font-bold uppercase">
                    {story.tag}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#D4D4D4]">
                    <span>📍 {story.location}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors mb-1.5">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                      {story.description}
                    </p>
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
