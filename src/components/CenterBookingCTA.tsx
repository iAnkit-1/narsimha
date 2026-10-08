import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  MapPin,
  Clock,
  Phone,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { companyDetails } from "../assets/data/navigation";
import { sendEmailNotification } from "../services/emailService";

interface CenterBookingCTAProps {
  onOpenPartnerModal: () => void;
}

export const CenterBookingCTA: React.FC<CenterBookingCTAProps> = ({
  onOpenPartnerModal,
}) => {
  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const [visitErrorMessage, setVisitErrorMessage] = useState<string | null>(null);
  const [visitForm, setVisitForm] = useState({
    parentName: "",
    studentName: "",
    studentGrade: "Grades 6-8 (Learner)",
    phone: "",
    email: "",
    preferredDate: "",
    interestedTrack: "🤖 Robotics & Hardware",
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitErrorMessage(null);

    if (!visitForm.parentName.trim() || !visitForm.studentName.trim() || !visitForm.phone.trim()) {
      setVisitErrorMessage("Please fill all required fields.");
      return;
    }

    const formattedMessage = `👋 *Hello Narasimha Skill Sphere Team!*

I would like to book a *45-Minute Free Trial Demo & Center Visit* at your offline center.

📋 *Registration Details:*
• *Parent / Guardian Name:* ${visitForm.parentName.trim()}
• *Student / Child Name:* ${visitForm.studentName.trim()}
• *Grade / Learning Level:* ${visitForm.studentGrade}
• *Contact Mobile:* ${visitForm.phone.trim()}
• *Preferred Track / Interest:* ${visitForm.interestedTrack}

📍 *Location:* Patna Offline Center (Kankarbagh Lab)
📞 Please share available batch slots and mentor consultation timings. Thank you!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919709719731&text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Background email logging
    sendEmailNotification({
      formType: "center_trial_booking",
      parentName: visitForm.parentName,
      studentName: visitForm.studentName,
      studentGrade: visitForm.studentGrade,
      phone: visitForm.phone,
      interestedTrack: visitForm.interestedTrack,
      centerLocation: "Patna Learning Center",
    }).catch(() => {});

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setVisitSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF7711", "#FF8A33", "#38BDF8", "#4ADE80", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="book-visit" className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            {/* Bold Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FF7711]/10 border border-[#FF7711]/40 text-[#FF7711] font-mono text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET THEM BUILD THEIR FUTURE.</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
              Their Future Starts With What They{" "}
              <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                Build Today.
              </span>
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed mb-6 font-normal">
              Give your child an environment where they can explore technology, solve problems, build projects, and discover their potential.
            </p>

            {/* Center Location & Timings Details */}
            <div className="space-y-3.5 text-xs font-mono text-[#D4D4D4] mb-8">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                <MapPin className="w-4 h-4 text-[#FF7711] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">PATNA FLAGSHIP CENTER</span>
                  <span className="font-bold text-white">{companyDetails.address.center}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                <Clock className="w-4 h-4 text-[#FF7711] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">OPERATING HOURS</span>
                  <span className="font-bold text-white">Mon – Sat: 9:00 AM – 6:30 PM (Sunday By Appointment)</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#111111] border border-[#222222]">
                <Phone className="w-4 h-4 text-[#FF7711] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">DIRECT COUNSELLOR HELPLINE</span>
                  <span className="font-bold text-white">+91 {companyDetails.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#our-courses"
                className="btn-dark-secondary px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4 text-[#FF7711]" />
                <span>Explore Programs</span>
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="btn-dark-secondary px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711]"
              >
                <span>For Schools: Setup Lab</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-[#111111] border border-[#2A2A2A] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Visit Our Center
              </h3>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                FREE TRIAL DEMO
              </span>
            </div>
            <p className="text-xs text-[#A1A1A1] mb-6">
              Book a 45-minute hands-on robotics trial and level orientation with our senior technical mentors.
            </p>

            {visitSubmitted ? (
              <div className="p-7 rounded-2xl bg-[#151515] border border-emerald-500/40 text-center my-4 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#F1F1F1] mb-1">
                  Free Trial Slot Reserved!
                </h4>
                <p className="text-xs text-[#A1A1A1] leading-relaxed mb-4">
                  Thank you, <strong className="text-white">{visitForm.parentName}</strong>! We have registered your trial request for <strong className="text-[#FF7711]">{visitForm.studentName || "your child"}</strong>. Our Patna center coordinator will call you at <strong className="text-white">{visitForm.phone}</strong> shortly to confirm your preferred time slot.
                </p>
                <button
                  onClick={() => setVisitSubmitted(false)}
                  className="btn-dark-secondary px-5 py-2.5 rounded-xl text-xs font-mono cursor-pointer"
                >
                  Book Another Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={visitForm.parentName}
                    onChange={(e) => setVisitForm({ ...visitForm, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Student / Child's Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav"
                      value={visitForm.studentName}
                      onChange={(e) => setVisitForm({ ...visitForm, studentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Grade / Learning Level *
                    </label>
                    <select
                      value={visitForm.studentGrade}
                      onChange={(e) => setVisitForm({ ...visitForm, studentGrade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711] transition-colors"
                    >
                      <option value="Grades K-5 (Starter / Little Champs)">Grades K-5 (Starter)</option>
                      <option value="Grades 6-8 (Learner / Junior Champs)">Grades 6-8 (Learner)</option>
                      <option value="Grades 9-12 (Performer / Senior Champs)">Grades 9-12 (Performer)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] placeholder-[#666666] focus:outline-none focus:border-[#FF7711] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1A1] mb-1">
                      Preferred Track / Interest
                    </label>
                    <select
                      value={visitForm.interestedTrack}
                      onChange={(e) => setVisitForm({ ...visitForm, interestedTrack: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#2C2C2C] text-xs text-[#F1F1F1] focus:outline-none focus:border-[#FF7711] transition-colors"
                    >
                      <option value="Robotics & Hardware">🤖 Robotics & Hardware</option>
                      <option value="Coding & Software">💻 Coding & Programming</option>
                      <option value="Artificial Intelligence">🧠 AI & Machine Learning</option>
                      <option value="3D Printing & CAD">🖨️ 3D Printing & CAD</option>
                      <option value="Drone Technology">🚁 Drone Technology</option>
                      <option value="Financial Literacy">💰 Financial Literacy</option>
                      <option value="Entrepreneur Mindset">🚀 Entrepreneur Mindset</option>
                    </select>
                  </div>
                </div>

                {visitErrorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center space-x-2.5 text-xs text-red-300 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{visitErrorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-orange-primary py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 mt-4 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm & Book on WhatsApp</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
