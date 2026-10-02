import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { sendEmailNotification } from "../services/emailService";

export const NewsletterCommunity: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendEmailNotification({
      formType: "newsletter_subscription",
      email: email.trim(),
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubscribed(true);
    } else {
      setErrorMessage(result.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 sm:py-20 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7711]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            COMMUNITY & INSIGHTS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
          Join Our{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            Innovation Community
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto mb-8 leading-relaxed">
          Get the latest updates on STEM trends, workshops, and competitions.
        </p>

        {isSubscribed ? (
          <div className="p-4 rounded-2xl bg-[#111111] border border-emerald-500/40 text-emerald-400 flex items-center justify-center space-x-2 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-semibold">Thank you for subscribing to our community!</span>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-3">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5">
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
                disabled={isSubmitting}
                className="w-full sm:w-auto btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 shadow-md hover:shadow-orange-glow transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center justify-center space-x-2 text-xs text-red-300">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 text-[11px] font-mono text-[#666666]">
          No spam ever. Unsubscribe at any time with 1-click.
        </div>

      </div>
    </section>
  );
};
