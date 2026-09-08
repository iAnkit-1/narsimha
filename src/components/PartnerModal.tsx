import React, { useState } from "react";
import { X, Building2, CheckCircle2, Send } from "lucide-react";
import { companyDetails } from "../data/navigation";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    interest: "Robotics & STEM Lab Setup",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#272727] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#151515] border-b border-[#272727] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#FF7711] font-bold uppercase tracking-wider">
                INSTITUTIONAL ENGAGEMENT
              </span>
              <h3 className="text-lg font-bold text-[#F1F1F1]">
                Partner With Narasimha Skill Sphere
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#272727]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-[#FF7711]/15 border border-[#FF7711] text-[#FF7711] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#F1F1F1] mb-2">
                Partnership Inquiry Received
              </h4>
              <p className="text-sm text-[#A1A1A1] max-w-md mx-auto mb-6">
                Thank you, <span className="text-[#F1F1F1] font-semibold">{formData.contactPerson || "Educator"}</span>. Our academic lab coordinator will connect with {formData.schoolName || "your school"} within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-[#151515] border border-[#272727] max-w-sm mx-auto text-left text-xs font-mono mb-6 space-y-2">
                <div className="flex items-center justify-between text-[#707070]">
                  <span>DIRECT HELPLINE:</span>
                  <span className="text-[#F1F1F1] font-bold">{companyDetails.phone}</span>
                </div>
                <div className="flex items-center justify-between text-[#707070]">
                  <span>CENTRAL EMAIL:</span>
                  <span className="text-[#FF7711]">{companyDetails.email}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="btn-orange-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                Connect directly with our STEM curriculum directors to explore lab setup, trainer facilitation, and Atal Tinkering Lab (ATL) integration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                    School / Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. St. Xavier's High School"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                    Contact Person Name & Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Principal / STEM Coordinator"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@school.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                    City / State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Patna, Bihar"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                  Primary Program Focus
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] focus:outline-none focus:border-[#FF7711]"
                >
                  <option value="Robotics & STEM Lab Setup">Robotics & STEM Lab Setup</option>
                  <option value="Atal Tinkering Lab (ATL) Support & Facilitation">Atal Tinkering Lab (ATL) Support & Facilitation</option>
                  <option value="Structured K-12 Hands-on Curriculum">Structured K-12 Hands-on Curriculum</option>
                  <option value="AI & Coding Bootcamp for Students">AI & Coding Bootcamp for Students</option>
                  <option value="School Innovation Exhibition / Maker Day">School Innovation Exhibition / Maker Day</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A1A1A1] mb-1.5">
                  Specific Requirements / Remarks
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about student count, target grades, or lab space available..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151515] border border-[#272727] text-sm text-[#F1F1F1] placeholder-[#707070] focus:outline-none focus:border-[#FF7711]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] font-mono text-[#707070]">
                  Immediate help? Call: <span className="text-[#FF7711]">{companyDetails.phone}</span>
                </div>
                <button
                  type="submit"
                  className="btn-orange-primary flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
