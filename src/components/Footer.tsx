import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Building } from "lucide-react";
import { companyDetails } from "../data/navigation";
import { media } from "../data/media";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    if (href === "/" || href === "/centers") {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const companyLinks = [
    { label: "About Us", href: "#about-us" },
    { label: "Our Team", href: "#why-narasimha" },
    { label: "Careers", href: "#contact" },
    { label: "Success Stories", href: "#proven-results" },
  ];

  const solutionLinks = [
    { label: "ATL Solutions", href: "#atl-solutions" },
    { label: "Robotics Curriculum", href: "#courses-learning-path" },
    { label: "IoT Workshops", href: "#courses-learning-path" },
    { label: "Teacher Training", href: "#atl-solutions" },
  ];

  return (
    <footer id="contact" className="w-full bg-[#060606] border-t border-[#222222] text-[#A1A1A1] pt-16 pb-10 relative overflow-hidden">
      
      {/* Huge NARASIMHA Stylized Background Watermark Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-40">
        <span className="text-[120px] sm:text-[180px] lg:text-[230px] font-extrabold tracking-widest font-mono text-outline uppercase whitespace-nowrap block">
          NARASIMHA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#222222]">
          
          {/* Brand Block (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#111111] border border-[#272727] p-1 flex items-center justify-center shadow-md">
                  <img src={media.logo} alt="Narasimha Skill Sphere Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#F1F1F1] tracking-tight">
                    NARASIMHA <span className="text-[#FF7711]">SKILL SPHERE</span>
                  </h3>
                  <p className="text-[10px] font-mono text-[#707070] uppercase">
                    Private Limited
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed max-w-sm mb-5">
                To bridge classroom learning with real-world skill through affordable, accessible, high-quality, hands-on education.
              </p>

              <div className="inline-block px-3 py-1 rounded bg-[#111111] border border-[#272727] text-xs font-mono text-[#FF7711] font-semibold">
                Tagline: Learning-By-Doing
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 mt-6">
              {companyDetails.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg bg-[#111111] border border-[#272727] text-[#A1A1A1] hover:text-[#FF7711] hover:border-[#FF7711]/50 transition-all shadow-sm"
                >
                  {social.name === "Facebook" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.name === "Instagram" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.name === "LinkedIn" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                    </svg>
                  )}
                  {social.name === "YouTube" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1F1F1] font-bold block mb-4">
              COMPANY
            </span>
            <ul className="space-y-2.5 text-xs font-medium">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-[#FF7711] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1F1F1] font-bold block mb-4">
              SOLUTIONS
            </span>
            <ul className="space-y-2.5 text-xs font-medium">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-[#FF7711] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1F1F1] font-bold block mb-4">
              GET IN TOUCH
            </span>
            <div className="space-y-3.5 text-xs">
              
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#FF7711] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-semibold text-white">Head Office:</span>
                  <div>{companyDetails.address.headOffice}</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Building className="w-4 h-4 text-[#FF7711] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-semibold text-white">Our Center:</span>
                  <div>{companyDetails.address.center}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#FF7711] shrink-0" />
                <a href={`tel:9709719731`} className="hover:text-[#FF7711] font-mono transition-colors">
                  {companyDetails.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#FF7711] shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-[#FF7711] font-mono transition-colors">
                  {companyDetails.email}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#707070] gap-4">
          <div>
            © 2025 Narasimha Skill Sphere. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Learning-By-Doing</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111111] border border-[#272727] text-[#A1A1A1] hover:text-[#FF7711] transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

