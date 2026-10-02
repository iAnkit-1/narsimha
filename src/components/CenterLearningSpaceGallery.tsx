import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Eye, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredGalleryPhotos, allGalleryPhotos } from "../assets/data/galleryData";

export const CenterLearningSpaceGallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % featuredGalleryPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + featuredGalleryPhotos.length) % featuredGalleryPhotos.length
      );
    }
  };

  const activePhoto = selectedPhotoIndex !== null ? featuredGalleryPhotos[selectedPhotoIndex] : null;

  return (
    <section className="w-full bg-[#0C0C0C] border-b border-[#222222] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                CENTER GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Inside Our <span className="font-serif italic font-normal text-[#FF7711]">Learning Space</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FF7711] font-mono mt-2">
              Learn. Build. Create. Repeat.
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-md">
            A glimpse into the real experiences, drone assemblies, robotics testing, and championship projects created by students at our innovation centers.
          </p>
        </motion.div>

        {/* 3x2 Photo Grid matching the attached reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {featuredGalleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-4/3 sm:aspect-square md:aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#161616] border border-[#262626] hover:border-[#FF7711] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF7711]/15 cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Pill */}
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#FF7711] border border-[#333333]">
                  {photo.category}
                </span>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-[#333333] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <Eye className="w-4 h-4 text-[#FF7711]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7711] transition-colors leading-snug">
                  {photo.title}
                </h4>
                {photo.location && (
                  <div className="flex items-center space-x-1.5 text-[11px] text-[#A1A1A1] mt-1">
                    <MapPin className="w-3 h-3 text-[#FF7711]" />
                    <span>{photo.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <Link
            to="/gallery"
            className="btn-orange-primary inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider font-bold shadow-lg shadow-[#FF7711]/25 hover:shadow-[#FF7711]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>View All Gallery Photos ({allGalleryPhotos.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs font-mono text-[#777777] mt-3">
            Explore 27+ photos of drone testing, ATL projects, robotic showcases, and student championships.
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#181818] border border-[#333333] text-white hover:text-[#FF7711] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181818]/90 border border-[#333333] text-white hover:text-[#FF7711] hover:scale-110 transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181818]/90 border border-[#333333] text-white hover:text-[#FF7711] hover:scale-110 transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[88vh] bg-[#121212] border border-[#282828] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative overflow-hidden flex items-center justify-center bg-black max-h-[70vh]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-5 bg-[#121212] border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7711]/15 text-[#FF7711] text-[11px] font-mono font-bold uppercase mb-1">
                    {activePhoto.category}
                  </div>
                  <h3 className="text-lg font-bold text-white">{activePhoto.title}</h3>
                  {activePhoto.location && (
                    <p className="text-xs text-[#A1A1A1] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#FF7711]" />
                      {activePhoto.location}
                    </p>
                  )}
                </div>

                <Link
                  to="/gallery"
                  className="btn-orange-primary inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase shrink-0"
                >
                  <span>Open Full Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
