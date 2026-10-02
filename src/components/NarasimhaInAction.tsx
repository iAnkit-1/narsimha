import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredGalleryPhotos, type GalleryPhoto } from "../assets/data/galleryData";

export const NarasimhaInAction: React.FC = () => {
  const [activePreview, setActivePreview] = useState<GalleryPhoto | null>(null);

  return (
    <section id="narasimha-in-action" className="w-full bg-[#080808] border-b border-[#272727] py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <Camera className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              CAMPUS HIGHLIGHTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Narasimha{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              In Action
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto">
            Real labs, real students, real results. See how our experiential learning programs transform campuses into hubs of innovation.
          </p>
        </motion.div>

        {/* Gallery Cards Grid (3 Columns just like attached reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredGalleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActivePreview(photo)}
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

        {/* Prominent Centered "View All" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 sm:mt-14"
        >
          <Link
            to="/gallery"
            className="btn-orange-primary px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-xl hover:shadow-orange-glow transition-all hover:scale-105 active:scale-95"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {activePreview && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePreview(null)}
          >
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
                  src={activePreview.image}
                  alt={activePreview.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActivePreview(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#333333] hover:bg-[#FF7711] hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#121212]">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-[#FF7711] font-bold border border-[#2E2E2E]">
                    {activePreview.categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {activePreview.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A1]">
                  {activePreview.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

