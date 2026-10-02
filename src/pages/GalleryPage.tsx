import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { allGalleryPhotos, type GalleryPhoto } from "../assets/data/galleryData";
import { Link } from "react-router-dom";

interface GalleryPageProps {
  onOpenPartnerModal?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenPartnerModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePreviewIndex, setActivePreviewIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "drone", label: "Drone & Aeronautics" },
    { id: "robotics", label: "Robotics & Hardware" },
    { id: "events", label: "Events & Championships" },
    { id: "maker-lab", label: "Maker Lab & Sessions" },
    { id: "mentorship", label: "Campus & Mentorship" },
  ];

  const filteredPhotos = allGalleryPhotos.filter((photo) => {
    if (selectedCategory === "all") return true;
    return photo.category === selectedCategory;
  });

  const handleOpenPreview = (photo: GalleryPhoto) => {
    const index = filteredPhotos.findIndex((p) => p.id === photo.id);
    if (index !== -1) {
      setActivePreviewIndex(index);
    }
  };

  const handlePrevPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePreviewIndex === null) return;
    setActivePreviewIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : (prev as number) - 1
    );
  };

  const handleNextPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePreviewIndex === null) return;
    setActivePreviewIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const currentPreviewPhoto =
    activePreviewIndex !== null ? filteredPhotos[activePreviewIndex] : null;

  return (
    <div className="w-full bg-[#080808] text-[#F1F1F1] min-h-screen selection:bg-[#FF7711] selection:text-black pt-24 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Narasimha{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              In Action
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Explore authentic moments from our offline innovation labs, drone test flights, state robotics expos, and student project showcases across Bihar & Jharkhand.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#FF7711] text-black shadow-lg shadow-[#FF7711]/20 scale-105"
                  : "bg-[#141414] text-[#A1A1A1] hover:text-white hover:bg-[#1E1E1E] border border-[#272727]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Cards Grid (3 Columns just like reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (idx % 6) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => handleOpenPreview(photo)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#FF7711]/70 transition-all duration-300 shadow-xl cursor-pointer aspect-square sm:aspect-4/3"
            >
              {/* Clean Image */}
              <img
                src={photo.image}
                alt="Narasimha Gallery Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-[#121212] border border-[#272727] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Want to experience our innovation labs in person?
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1A1]">
              Book a 45-minute offline lab walkthrough and meet our senior research mentors.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/centers"
              className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-md hover:shadow-orange-glow transition-all"
            >
              <span>Explore Our Centers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {onOpenPartnerModal && (
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333333] transition-all cursor-pointer"
              >
                Setup Your ATL
              </button>
            )}

            <Link
              to="/"
              className="btn-dark-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {currentPreviewPhoto && activePreviewIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePreviewIndex(null)}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrevPreview}
              aria-label="Previous Photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF7711] text-white hover:text-black flex items-center justify-center border border-white/20 transition-all cursor-pointer z-50 shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextPreview}
              aria-label="Next Photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF7711] text-white hover:text-black flex items-center justify-center border border-white/20 transition-all cursor-pointer z-50 shadow-2xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-[#121212] border border-[#2C2C2C] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 sm:h-[480px] bg-black flex items-center justify-center">
                <img
                  src={currentPreviewPhoto.image}
                  alt={currentPreviewPhoto.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActivePreviewIndex(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#333333] hover:bg-[#FF7711] hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#121212]">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                    {currentPreviewPhoto.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-[#707070]">
                    Photo {activePreviewIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {currentPreviewPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A1]">
                  {currentPreviewPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
