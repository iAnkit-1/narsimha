import React from "react";
import { ArrowRight, Quote } from "lucide-react";
import { companyDetails } from "../assets/data/navigation";

interface TailoredInnovationProps {
  onRequestProposal: () => void;
}

export const TailoredInnovation: React.FC<TailoredInnovationProps> = ({ onRequestProposal }) => {
  return (
    <section
      id="tailored-innovation"
      className="w-full bg-[#080808] border-b border-[#222222] py-8 sm:py-10 lg:py-12 relative overflow-hidden font-sans"
    >
      {/* Subtle Background Glow with Website Theme Orange */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#FF7711]/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Compact container to reduce width */}
      <div className="max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Glassy Dark Card with Website Theme Orange Accents */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#161616]/80 via-[#111111]/80 to-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 hover:border-[#FF7711]/40 transition-all duration-300 p-5 sm:p-7 overflow-hidden shadow-[0_15px_45px_-10px_rgba(0,0,0,0.85),0_0_30px_rgba(255,119,17,0.12)]">
          
          {/* ================= MAIN CONTENT ================= */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Tagline / Label (Cyan accent matching the reference image) */}
            <div className="text-center mb-2.5">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#38BDF8] uppercase font-mono drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                TAILORED INNOVATION
              </span>
            </div>

            {/* Main Heading (Simple modern sans font matching 'Ready to design your lab') */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-5 font-sans">
              Build Your Dream{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent block sm:inline">
                Innovation Hub
              </span>
            </h2>

            {/* Glassy Framed Quote Box */}
            <div className="relative w-full max-w-lg mx-auto rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6 shadow-inner my-1 sm:my-2">
              
              {/* Top-Left Quote Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-3.5 sm:-left-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-[#FF7711]/60 text-[#FF7711] flex items-center justify-center shadow-lg">
                <Quote className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FF7711] rotate-180" />
              </div>

              {/* Bottom-Right Quote Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-3.5 sm:-right-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#161616] border border-[#FF7711]/60 text-[#FF7711] flex items-center justify-center shadow-lg">
                <Quote className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FF7711]" />
              </div>

              {/* Watermark Logo inside Quote Box */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.14]">
                <img
                  src="/logo.png"
                  alt="Narasimha Skill Sphere"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_20px_rgba(255,119,17,0.4)]"
                />
                <span className="font-sans text-[10px] text-[#FFA149] font-semibold mt-0.5 tracking-wider uppercase">
                  Learning by Doing
                </span>
              </div>

              {/* Quote Text (Simple sans font matching 'Ready to design your lab') */}
              <div className="relative z-10 py-1">
                <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#E2E8F0] font-normal leading-relaxed sm:leading-relaxed">
                  “We don’t build labs first—we build your vision.
                  <br />
                  By aligning with your institutional goals,
                  <br />
                  we develop the right innovation lab
                  <br />
                  that delivers real academic impact.”
                </p>
              </div>
            </div>

            {/* CTA Banner: "Ready to design your lab?" in same style as Setup Your ATL on navbar */}
            <button
              type="button"
              onClick={onRequestProposal}
              className="group relative mt-6 sm:mt-7 w-full max-w-md rounded-xl btn-orange-primary px-4 py-3 sm:px-5 sm:py-3.5 shadow-md hover:shadow-orange-glow hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 text-left font-sans"
            >
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#080808] tracking-tight leading-snug group-hover:translate-x-0.5 transition-transform font-sans">
                  Ready to design your lab?
                </h3>
                <p className="text-[11px] sm:text-xs text-[#080808]/90 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs shrink-0" aria-hidden="true">👉</span>
                  <span className="truncate sm:whitespace-normal">
                    Get in touch with us for a customized proposal.
                  </span>
                </p>
              </div>

              {/* Trailing arrow indicator */}
              <div className="shrink-0 p-1.5 rounded-lg bg-black/10 group-hover:bg-black/20 text-[#080808] transition-colors">
                <ArrowRight className="w-4 h-4 text-[#080808] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

          </div>

          {/* ================= BOTTOM: Honeycomb (Left) & Circuit + Details (Right) ================= */}
          <div className="relative mt-6 sm:mt-8 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/10 z-10">
            
            {/* Bottom-Left: Honeycomb Hexagon Cluster in Theme Orange */}
            <div className="w-20 h-12 sm:w-24 sm:h-14 pointer-events-none select-none shrink-0 self-start sm:self-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#FF7711" strokeWidth="1.25" opacity="0.6">
                  <polygon points="28,8 40,15 40,28 28,35 16,28 16,15" />
                  <polygon points="44,24 56,31 56,44 44,51 32,44 32,31" />
                  <polygon points="12,24 24,31 24,44 12,51 0,44 0,31" />
                </g>
              </svg>
            </div>

            {/* Bottom-Right: Circuit trace, URL & Phone */}
            <div className="flex flex-col items-end w-full sm:w-auto">
              {/* Tech details: Website & Phone */}
              <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-0.5 font-mono text-[10px] sm:text-[11px] text-[#A1A1A1] font-semibold tracking-wide">
                <a
                  href={companyDetails.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF7711] transition-colors"
                >
                  www.narasimhaskillsphere.com
                </a>
                <span className="text-[#FF7711]/50 hidden sm:inline">•</span>
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#FF7711] transition-colors"
                >
                  97 0 97 1 97 31
                </a>
              </div>

              {/* Circuit Board Trace Graphic in Theme Orange */}
              <div className="w-full sm:w-56 h-6 mt-0.5 pointer-events-none select-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 220 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Segmented slits */}
                  <g fill="#FF7711" opacity="0.7">
                    <rect x="25" y="8" width="4" height="2" />
                    <rect x="32" y="8" width="4" height="2" />
                    <rect x="39" y="8" width="4" height="2" />
                    <rect x="46" y="8" width="4" height="2" />
                    <rect x="53" y="8" width="4" height="2" />
                  </g>
                  {/* Trace Line */}
                  <path
                    d="M 65 9 L 165 9 L 178 16 L 202 16"
                    stroke="#FF7711"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                  />
                  {/* Hexagon Terminal Node */}
                  <polygon
                    points="202,10 208,13 208,19 202,22 196,19 196,13"
                    stroke="#FF7711"
                    strokeWidth="1.25"
                    fill="none"
                    opacity="0.9"
                  />
                  <circle cx="202,16" r="2" fill="#FF7711" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
