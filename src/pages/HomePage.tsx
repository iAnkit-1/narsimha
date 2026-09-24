import React from "react";
import { Hero } from "../components/Hero";
import { SkillTicker } from "../components/SkillTicker";
import { FutureSkillsProgram } from "../components/FutureSkillsProgram";
import { ChampsLearningPathway } from "../components/ChampsLearningPathway";
import { StudentLearningPath } from "../components/StudentLearningPath";
import { FutureSkillsShowcase } from "../components/FutureSkillsShowcase";
import { E3Framework } from "../components/E3Framework";
import { CoreOfferings } from "../components/CoreOfferings";
import { WhyNarasimha } from "../components/WhyNarasimha";
import { ProvenResults } from "../components/ProvenResults";
import { RecognizedBy } from "../components/RecognizedBy";
import { TailoredInnovation } from "../components/TailoredInnovation";
import { NarasimhaInAction } from "../components/NarasimhaInAction";
import { NewsletterCommunity } from "../components/NewsletterCommunity";
import type { Course } from "../assets/data/specializedCourses";
import { specializedCourses } from "../assets/data/specializedCourses";

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
      {/* 1. HERO SECTION */}
      <Hero
        onExplorePrograms={() => {
          const el = document.getElementById("school-program");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        onPartnerWithUs={onOpenPartnerModal}
      />

      {/* 2. TECHNOLOGY / SKILL TICKER */}
      <SkillTicker />

      {/* 3. FUTURE SKILLS CONTINUOUS PROGRAM (Offline - Class 3 Onwards) */}
      <FutureSkillsProgram onBookTrial={onOpenPartnerModal} />

      {/* 4. CHAMPS LEARNING PATHWAY (Think, Design, Create, Improve, Explain, Showcase) */}
      <ChampsLearningPathway />

      {/* 5. COMPLETE LEARNING JOURNEY / STUDENT LEARNING PATH (Little -> Junior -> Senior) */}
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

      {/* 6. FUTURE SKILLS (10 Pillars Showcase with Interactive Filmstrip Bar) */}
      <FutureSkillsShowcase
        onExploreSkill={(title) => {
          const match = specializedCourses.find((c) =>
            c.title.toLowerCase().includes(title.toLowerCase())
          );
          if (match) {
            onOpenCourseModal(match);
          } else {
            onOpenPartnerModal();
          }
        }}
      />

      {/* 7. OUR PEDAGOGY (The E³ Approach) */}
      <E3Framework onPartnerClick={onOpenPartnerModal} />

      {/* 8. MODULAR ECOSYSTEM (Our Core Offerings) */}
      <div id="atl-solutions">
        <CoreOfferings onPartnerClick={onOpenPartnerModal} />
      </div>

      {/* 9. WHY NARASIMHA? (4 Institutional Pillars) */}
      <div id="about-us">
        <WhyNarasimha onPartnerClick={onOpenPartnerModal} />
      </div>

      {/* 10. PROVEN RESULTS / IMPACT NUMBERS */}
      <div id="proven-results">
        <ProvenResults />
      </div>

      {/* 11. RECOGNIZED & ACCREDITED BY (Continuous Auto-moving horizontal ribbon) */}
      <RecognizedBy />

      {/* 12. TAILORED INNOVATION (Build Your Dream Innovation Hub) */}
      <TailoredInnovation onRequestProposal={onOpenPartnerModal} />

      {/* 12. NARASIMHA IN ACTION (Story Gallery) */}
      <NarasimhaInAction />

      {/* 13. NEWSLETTER / INNOVATION COMMUNITY */}
      <NewsletterCommunity />
    </>
  );
};
