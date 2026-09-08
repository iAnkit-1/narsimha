import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNavLinks } from "../data/navigation";
import { media } from "../data/media";

interface NavbarProps {
  onPartnerClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPartnerClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href === "/centers") {
      navigate("/centers");
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

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#272727] py-2.5 shadow-lg shadow-black/60"
            : "bg-[#080808] border-b border-[#272727]/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavLinkClick("/")}
            className="flex items-center space-x-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg bg-[#111111] border border-[#272727] flex items-center justify-center p-1 group-hover:border-[#FF7711]/60 transition-colors shrink-0">
              <img
                src={media.logo}
                alt="Narasimha Skill Sphere Logo"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors leading-tight">
                NARASIMHA
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-bold uppercase leading-none mt-0.5">
                SKILL SPHERE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link) => {
              const isActive =
                (link.href === "/" && location.pathname === "/") ||
                (link.href === "/centers" && location.pathname === "/centers");

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavLinkClick(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#FF7711] bg-[#151515] border border-[#272727]"
                      : "text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#111111]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Setup ATL / Partner CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onPartnerClick}
              className="btn-orange-primary flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-orange-glow transition-all"
            >
              <span>Setup Your ATL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111111] border border-[#272727] text-[#A1A1A1] hover:text-[#F1F1F1] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0D0D0D] border-b border-[#272727] px-4 py-5 shadow-2xl z-50 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <nav className="flex flex-col space-y-1">
              {mainNavLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#F1F1F1] hover:bg-[#151515] text-left"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#707070]" />
                </button>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onPartnerClick();
                }}
                className="w-full btn-orange-primary py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>Setup Your ATL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
