import React, { useState } from "react";
import { CenterHero } from "../components/CenterHero";
import { CenterWeeklyOffline } from "../components/CenterWeeklyOffline";
import { CenterLearningJourney } from "../components/CenterLearningJourney";
import { CenterLearningLevels } from "../components/CenterLearningLevels";
import { CenterCourses } from "../components/CenterCourses";
import { CenterStudentPortfolio } from "../components/CenterStudentPortfolio";
import { CenterParentMessage } from "../components/CenterParentMessage";
import { CenterWhyChoose } from "../components/CenterWhyChoose";
import { CenterLearningSpaceGallery } from "../components/CenterLearningSpaceGallery";
import { ThreeDGallery } from "../components/ThreeDGallery";
import { CenterBookingCTA } from "../components/CenterBookingCTA";
import { CenterFooterNav } from "../components/CenterFooterNav";
import type { GalleryItem } from "../assets/data/centersPageData";

interface CentersPageProps {
  onOpenPartnerModal: () => void;
}

export const CentersPage: React.FC<CentersPageProps> = ({ onOpenPartnerModal }) => {
  // Lightbox / image modal preview state
  const [activeGalleryPreview, setActiveGalleryPreview] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full bg-[#080808] text-[#F1F1F1] min-h-screen selection:bg-[#FF7711] selection:text-black">
      {/* 1. HERO SECTION */}
      <CenterHero />

      {/* 2. WEEKLY OFFLINE (Learning Beyond Screen & Hands-on Sessions) */}
      <CenterWeeklyOffline />

      {/* 3. LEARNING JOURNEY & LEVELS */}
      <section className="w-full bg-[#080808] border-b border-[#222222] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3A. LEARNING JOURNEY (Think, Design, Create, Improve, Explain, Showcase) */}
          <CenterLearningJourney />

          {/* 3B. LEARNING LEVELS (Starter, Learner, Performer) */}
          <CenterLearningLevels />
        </div>
      </section>

      {/* 4. OUR COURSES (Starter & Learner Tracks with Continuous Marquee) */}
      <CenterCourses />

      {/* 5. STUDENT PORTFOLIO (Interactive Profiles & Real Projects) */}
      <CenterStudentPortfolio onOpenPartnerModal={onOpenPartnerModal} />

      {/* 6. A MESSAGE TO PARENTS (Editorial Note & Family Connection) */}
      <CenterParentMessage />

      {/* 7. WHY NARASIMHA SKILL SPHERE (6 Core Advantages) */}
      <CenterWhyChoose />

      {/* 8. CENTER GALLERY (Inside Our Learning Space) */}
      <CenterLearningSpaceGallery onOpenPreview={(item) => setActiveGalleryPreview(item)} />

      {/* 3D ROTATING GALLERY CAROUSEL */}
      <ThreeDGallery onItemClick={(item) => setActiveGalleryPreview(item)} />

      {/* 9. FINAL CALL TO ACTION & BOOKING FORM */}
      <CenterBookingCTA onOpenPartnerModal={onOpenPartnerModal} />

      {/* 10. RETURN TO HOMEPAGE & PARTNER NAVIGATION */}
      <CenterFooterNav onOpenPartnerModal={onOpenPartnerModal} />

      {/* Lightbox Modal Preview */}
      {activeGalleryPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveGalleryPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] border border-[#2C2C2C] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-[420px] bg-black">
              <img
                src={activeGalleryPreview.image}
                alt={activeGalleryPreview.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveGalleryPreview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#333333] hover:bg-[#FF7711] hover:text-black transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                  {activeGalleryPreview.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {activeGalleryPreview.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1]">
                {activeGalleryPreview.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
