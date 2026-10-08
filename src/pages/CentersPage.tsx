import React from "react";
import { CenterHero } from "../components/CenterHero";
import { CenterWeeklyOffline } from "../components/CenterWeeklyOffline";
import { CenterLearningJourney } from "../components/CenterLearningJourney";
import { CenterLearningLevels } from "../components/CenterLearningLevels";
import { CenterCourses } from "../components/CenterCourses";
import { CenterStudentPortfolio } from "../components/CenterStudentPortfolio";
import { CenterParentMessage } from "../components/CenterParentMessage";
import { CenterWhyChoose } from "../components/CenterWhyChoose";
import { CenterLearningSpaceGallery } from "../components/CenterLearningSpaceGallery";
import { CenterBookingCTA } from "../components/CenterBookingCTA";

interface CentersPageProps {
  onOpenPartnerModal: () => void;
}

export const CentersPage: React.FC<CentersPageProps> = ({ onOpenPartnerModal }) => {
  return (
    <div className="w-full bg-[#080808] text-[#F1F1F1] min-h-screen selection:bg-[#FF7711] selection:text-black">
      {/* 1. HERO SECTION */}
      <CenterHero />

      {/* 2. WEEKLY OFFLINE (Learning Beyond Screen & Hands-on Sessions) */}
      <CenterWeeklyOffline />

      {/* 3. LEARNING JOURNEY & LEVELS */}
      <section className="w-full bg-[#080808] border-b border-[#222222] py-12 sm:py-14 lg:py-16 relative">
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
      <CenterLearningSpaceGallery />

      {/* 9. FINAL CALL TO ACTION & BOOKING FORM */}
      <CenterBookingCTA onOpenPartnerModal={onOpenPartnerModal} />
    </div>
  );
};
