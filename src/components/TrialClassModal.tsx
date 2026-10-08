import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  PhoneCall,
  GraduationCap,
  School,
  User,
  Compass,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

interface TrialClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDomain?: string;
}

const domainOptions = [
  "Robotics & Hardware",
  "Coding & Software Development",
  "Artificial Intelligence & ML",
  "3D Design & 3D Printing",
  "Drone Technology & Aeronautics",
  "IoT & Smart Automation",
  "AR / VR & Game Development",
  "Financial Literacy",
  "Entrepreneurial Mindset",
  "Other",
];

const classOptions = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "College / Other",
];

export const TrialClassModal: React.FC<TrialClassModalProps> = ({
  isOpen,
  onClose,
  defaultDomain = "Robotics & Hardware",
}) => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("Class 5");
  const [schoolName, setSchoolName] = useState("");
  const [domain, setDomain] = useState(defaultDomain);
  const [customDomain, setCustomDomain] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedDomainText = domain === "Other" ? (customDomain.trim() || "Other / Custom") : domain;

    const formattedMessage = `👋 *Hello Narasimha Skill Sphere Team!*

I would like to book a *Free Trial Class* for the *Future Skills Continuous Program*.

📋 *Student & Enrollment Details:*
• *Name:* ${name.trim()}
• *Class / Grade:* ${studentClass}
• *School Name:* ${schoolName.trim()}
• *Domain Interested:* ${selectedDomainText}

📍 *Program:* Offline Continuous Program (Class 3 Onwards)
📞 Please share the available trial batch timings and center location details. Thank you!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919709719731&text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        {/* Modal Backdrop Click Handler */}
        <div className="absolute inset-0" onClick={handleResetAndClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-[#111111] border border-[#2B2B2B] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-48 h-32 bg-[#FF7711]/15 blur-3xl pointer-events-none" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-[#171717] via-[#141414] to-[#121212] border-b border-white/10 flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FF7711]/15 border border-[#FF7711]/40 flex items-center justify-center text-[#FF7711] shadow-inner">
                <Sparkles className="w-5 h-5 text-[#FF7711]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#FF7711] font-bold uppercase tracking-widest block">
                  Future Skills Program
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  Book a Free Trial Class
                </h3>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#A1A1A1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 overflow-y-auto flex-1 relative z-10">
            {submitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#10B981]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Trial Request Formatted!
                </h4>
                <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-sm mx-auto mb-6 leading-relaxed">
                  We have forwarded your trial class details to our academic team on WhatsApp. We will confirm your free hands-on slot shortly!
                </p>

                <div className="p-4 rounded-2xl bg-[#171717] border border-white/10 max-w-sm mx-auto text-left text-xs font-mono mb-6 space-y-2.5">
                  <div className="flex items-center justify-between text-[#8E8E8E]">
                    <span>STUDENT:</span>
                    <span className="text-white font-bold">{name || "Learner"}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E8E8E]">
                    <span>CLASS:</span>
                    <span className="text-white font-semibold">{studentClass}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E8E8E]">
                    <span>DOMAIN:</span>
                    <span className="text-[#FF7711] font-semibold">
                      {domain === "Other" ? customDomain || "Other" : domain}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#8E8E8E] pt-1 border-t border-white/10">
                    <span>DIRECT NUMBER:</span>
                    <span className="text-[#38BDF8] font-bold tracking-wider">97 0 97 1 97 31</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      const selectedDomainText = domain === "Other" ? (customDomain.trim() || "Other / Custom") : domain;
                      const formattedMessage = `👋 *Hello Narasimha Skill Sphere Team!*

I would like to book a *Free Trial Class* for the *Future Skills Continuous Program*.

📋 *Student & Enrollment Details:*
• *Name:* ${name.trim()}
• *Class / Grade:* ${studentClass}
• *School Name:* ${schoolName.trim()}
• *Domain Interested:* ${selectedDomainText}

📍 *Program:* Offline Continuous Program (Class 3 Onwards)
📞 Please share the available trial batch timings and center location details. Thank you!`;

                      window.open(`https://api.whatsapp.com/send?phone=919709719731&text=${encodeURIComponent(formattedMessage)}`, "_blank");
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF7711] via-[#FF5500] to-[#E11D48] text-white font-bold text-xs tracking-wide shadow-[0_4px_20px_rgba(255,119,17,0.45)] hover:shadow-[0_4px_30px_rgba(255,119,17,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Re-Open WhatsApp</span>
                  </button>
                  <button
                    onClick={handleResetAndClose}
                    className="btn-dark-secondary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[#A1A1A1] leading-relaxed">
                  Fill in the student details below to book a free hands-on trial session at our offline innovation center.
                </p>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono text-[#D4D4D4] mb-1.5 font-semibold">
                    <span className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF7711]" />
                      <span>Full Name (Student / Parent) *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FF7711] focus:ring-1 focus:ring-[#FF7711] transition-all"
                  />
                </div>

                {/* Class & School Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Class / Grade Field */}
                  <div>
                    <label className="block text-xs font-mono text-[#D4D4D4] mb-1.5 font-semibold">
                      <span className="flex items-center space-x-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Class / Grade *</span>
                      </span>
                    </label>
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] text-sm text-white focus:outline-none focus:border-[#FF7711] focus:ring-1 focus:ring-[#FF7711] transition-all cursor-pointer"
                    >
                      {classOptions.map((cls) => (
                        <option key={cls} value={cls} className="bg-[#161616] text-white">
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* School Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-[#D4D4D4] mb-1.5 font-semibold">
                      <span className="flex items-center space-x-1.5">
                        <School className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>School Name *</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. DPS / St. Michael's"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FF7711] focus:ring-1 focus:ring-[#FF7711] transition-all"
                    />
                  </div>
                </div>

                {/* Domain Interested Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-[#D4D4D4] mb-1.5 font-semibold">
                    <span className="flex items-center space-x-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Domain Interested *</span>
                    </span>
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] text-sm text-white focus:outline-none focus:border-[#FF7711] focus:ring-1 focus:ring-[#FF7711] transition-all cursor-pointer"
                  >
                    {domainOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#161616] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic Input Field: Only shown when "Other" is selected */}
                {domain === "Other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label className="block text-xs font-mono text-[#FF7711] mb-1.5 font-semibold">
                      Please Specify Your Domain Interest *
                    </label>
                    <input
                      type="text"
                      required={domain === "Other"}
                      placeholder="e.g. Space Science, Ethical Hacking, App Building"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1510] border border-[#FF7711]/50 text-sm text-white placeholder-[#888888] focus:outline-none focus:border-[#FF7711] focus:ring-1 focus:ring-[#FF7711] transition-all"
                      autoFocus
                    />
                  </motion.div>
                )}

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF7711] via-[#FF5500] to-[#E11D48] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,119,17,0.45)] hover:shadow-[0_4px_30px_rgba(255,119,17,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Confirm & Book on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Modal Footer / Bottom Contact Strip */}
          <div className="px-5 py-3.5 sm:px-6 bg-[#0B0B0B] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono relative z-10">
            <div className="flex items-center space-x-2 text-[#A1A1A1]">
              <PhoneCall className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
              <span>Contact:</span>
              <a
                href="https://api.whatsapp.com/send?phone=919709719731"
                target="_blank"
                rel="noreferrer"
                className="text-white font-extrabold tracking-widest hover:text-[#FF7711] transition-colors"
              >
                97 0 97 1 97 31
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
