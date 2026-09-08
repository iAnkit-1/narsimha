import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const NewsletterCommunity: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 sm:py-20 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7711]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            COMMUNITY & INSIGHTS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-3">
          Join our{" "}
          <span className="font-serif italic font-normal text-[#FF7711]">Innovation Community</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1A1] max-w-xl mx-auto mb-8 leading-relaxed">
          Get the latest updates on STEM trends, workshops, and competitions.
        </p>

        {isSubscribed ? (
          <div className="p-4 rounded-2xl bg-[#111111] border border-emerald-500/40 text-emerald-400 flex items-center justify-center space-x-2 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-semibold">Thank you for subscribing to our community!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2.5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#707070]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 shadow-md hover:shadow-orange-glow transition-all cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] font-mono text-[#666666]">
          No spam ever. Unsubscribe at any time with 1-click.
        </div>

      </div>
    </section>
  );
};
