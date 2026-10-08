import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { allGalleryPhotos, type GalleryPhoto } from "../assets/data/galleryData";

export const NarasimhaInAction: React.FC = () => {
  const [activePreview, setActivePreview] = useState<GalleryPhoto | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  // Curate photos for marquee
  const galleryList = allGalleryPhotos.slice(0, 14);

  // Smooth continuous automatic scroll loop (same mechanism as CenterCourses)
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.85; // px per frame

    const autoScroll = () => {
      if (!isPaused && !isDragging && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += speed;

        // Loop seamlessly when reached halfway
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragScrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

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
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
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

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto mb-3">
            Real labs, real students, real results. See how our experiential learning programs transform campuses into hubs of innovation.
          </p>
        </motion.div>

      </div>

      {/* Horizontally Scrolling Auto-moving Carousel Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full overflow-hidden py-4 group/carousel rounded-3xl">

          {/* Draggable & Auto-scrolling Gallery Track */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseUpOrLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className={`flex overflow-x-auto scrollbar-none space-x-6 px-10 sm:px-16 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Duplicated list for seamless infinite wrap-around */}
            {[...galleryList, ...galleryList, ...galleryList].map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => {
                  if (!isDragging) {
                    setActivePreview(photo);
                  }
                }}
                className="group relative h-[320px] sm:h-[360px] w-[280px] sm:w-[320px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121212] border border-white/15 hover:border-[#FF7711]/75 transition-all duration-500 shadow-2xl cursor-pointer"
              >
                {/* Clean Background Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  draggable={false}
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.03] group-hover:scale-108 group-hover:brightness-105 transition-transform duration-700 ease-out pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prominent Centered "View All" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            to="/gallery"
            className="btn-orange-primary px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-xl hover:shadow-orange-glow transition-all hover:scale-105 active:scale-95"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal Preview: Pure Image Only */}
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
              className="relative max-w-5xl max-h-[90vh] w-full bg-black/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePreview.image}
                alt="Gallery Preview"
                className="w-full max-h-[85vh] object-contain rounded-3xl"
              />
              <button
                onClick={() => setActivePreview(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center border border-[#333333] hover:bg-[#FF7711] hover:text-black transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
