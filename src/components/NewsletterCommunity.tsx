import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// NOTE: Replace this with your official WhatsApp Channel URL when ready
// e.g. "https://whatsapp.com/channel/0029Va..."
export const WHATSAPP_COMMUNITY_URL = "https://api.whatsapp.com/send?phone=919709719731&text=Hello%20Narasimha%20Skill%20Sphere!%20I%20would%20like%20to%20join%20the%20Innovation%20Community%20updates.";

export const NewsletterCommunity: React.FC = () => {
  const handleJoinWhatsApp = () => {
    window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-[#090909] border-b border-[#222222] py-12 sm:py-14 lg:py-16 relative overflow-hidden">
      
      {/* Background radial accent glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF7711]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#25D366]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-4 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            COMMUNITY & INSIGHTS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
          Join Our{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            Innovation Community
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
          Get real-time updates on STEM innovations, hackathons, robotics challenges, student showcases, and educator resources.
        </p>

        {/* WhatsApp Community Action Card / Button */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleJoinWhatsApp}
            className="group px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center space-x-3 shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* WhatsApp SVG Icon */}
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Join our WhatsApp Community</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
