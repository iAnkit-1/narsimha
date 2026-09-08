import React from "react";
import { Hero } from "../components/Hero";
import { SkillTicker } from "../components/SkillTicker";
import { WhyNarasimha } from "../components/WhyNarasimha";
import { NarasimhaMethod } from "../components/NarasimhaMethod";
import { StudentLearningPath } from "../components/StudentLearningPath";
import { CoreOfferings } from "../components/CoreOfferings";
import { ProvenResults } from "../components/ProvenResults";
import { TailoredInnovation } from "../components/TailoredInnovation";
import { NarasimhaInAction } from "../components/NarasimhaInAction";
import { NewsletterCommunity } from "../components/NewsletterCommunity";
import type { Course } from "../data/specializedCourses";
import { specializedCourses } from "../data/specializedCourses";

interface HomePageProps {
  onOpenPartnerModal: () => void;
  onOpenCourseModal: (course: Course) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenPartnerModal,
  onOpenCourseModal,
}) => {
  return (
    <>
      {/* 4. HOME PAGE - HERO SECTION */}
      <Hero
        onExplorePrograms={() => {
          const el = document.getElementById("school-program");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        onPartnerWithUs={onOpenPartnerModal}
      />

      {/* 5. TECHNOLOGY / SKILL TICKER */}
      <SkillTicker />

      {/* 6. WHY NARASIMHA? (4 Cards from image + E3 Pedagogy) */}
      <div id="about-us">
        <WhyNarasimha onPartnerClick={onOpenPartnerModal} />
      </div>

      {/* 7. THE NARASIMHA METHOD (Learning Beyond The Textbooks) */}
      <NarasimhaMethod
        onExploreMethodology={() => {
          const el = document.getElementById("school-program");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 9. COURSES / STUDENT LEARNING PATH (Little Champs, Junior Champs, Senior Champs) */}
      <div id="school-program">
        <StudentLearningPath
          onSelectCourseModal={(title) => {
            const match = specializedCourses.find((c) =>
              c.title.toLowerCase().includes(title.toLowerCase())
            );
            if (match) {
              onOpenCourseModal(match);
            }
          }}
          onPartnerClick={onOpenPartnerModal}
        />
      </div>

      {/* 12. CORE OFFERINGS (Mobile Lab, Turnkey ATL, Curriculum, FDP, Fests, Mentorship) */}
      <div id="atl-solutions">
        <CoreOfferings onPartnerClick={onOpenPartnerModal} />
      </div>

      {/* 13. PROVEN RESULTS / IMPACT NUMBERS */}
      <div id="proven-results">
        <ProvenResults />
      </div>

      {/* 14. TAILORED INNOVATION (Build Your Dream Innovation Hub) */}
      <TailoredInnovation onRequestProposal={onOpenPartnerModal} />

      {/* 15. NARSIMHA IN ACTION (Story Gallery) */}
      <NarasimhaInAction />

      {/* 16. NEWSLETTER / INNOVATION COMMUNITY */}
      <NewsletterCommunity />
    </>
  );
};
