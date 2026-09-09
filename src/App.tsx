import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { AudienceModal } from "./components/AudienceModal";
import { PartnerModal } from "./components/PartnerModal";
import { ProgramModal } from "./components/ProgramModal";
import { HomePage } from "./pages/HomePage";
import { CentersPage } from "./pages/CentersPage";
import type { Course } from "./data/specializedCourses";

export function App() {
  const navigate = useNavigate();
  const [, setActivePersona] = useState<"school" | "student" | null>(null);
  const [isAudienceModalOpen, setIsAudienceModalOpen] = useState<boolean>(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState<boolean>(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState<boolean>(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  // Check if first-time visitor to show persona modal
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("nss_has_selected_persona");
    if (!hasSeenModal) {
      setIsAudienceModalOpen(true);
    } else {
      const savedPersona = sessionStorage.getItem("nss_active_persona") as "school" | "student" | null;
      if (savedPersona) {
        setActivePersona(savedPersona);
      }
    }
  }, []);

  const handleSelectRole = (role: "school" | "student") => {
    setActivePersona(role);
    sessionStorage.setItem("nss_has_selected_persona", "true");
    sessionStorage.setItem("nss_active_persona", role);
    setIsAudienceModalOpen(false);

    if (role === "student") {
      navigate("/centers");
    } else {
      navigate("/#atl-solutions");
    }
  };

  const handleOpenCourseModal = (course: Course) => {
    setSelectedCourseForModal(course);
    setIsProgramModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F1F1F1] flex flex-col font-sans selection:bg-[#FF7711] selection:text-black">
      <ScrollToTop />

      {/* Global Navigation / Header */}
      <Navbar onPartnerClick={() => setIsPartnerModalOpen(true)} />

      {/* Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
                onOpenCourseModal={handleOpenCourseModal}
              />
            }
          />
          <Route
            path="/centers"
            element={
              <CentersPage
                onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
                onOpenCourseModal={handleOpenCourseModal}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Audience Entry Modal (First Visit) */}
      <AudienceModal
        isOpen={isAudienceModalOpen}
        onSelectRole={handleSelectRole}
      />

      {/* Partner / Proposal Institutional Modal */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      {/* Course & Program Details Modal */}
      <ProgramModal
        isOpen={isProgramModalOpen}
        onClose={() => {
          setIsProgramModalOpen(false);
          setSelectedCourseForModal(null);
        }}
        selectedCourse={selectedCourseForModal}
        onPartnerClick={() => {
          setIsProgramModalOpen(false);
          setIsPartnerModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
