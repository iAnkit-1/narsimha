import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Eye, Sparkles, X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { centerGalleryItems, type GalleryItem } from "../assets/data/centersPageData";

interface ThreeDGalleryProps {
  onItemClick?: (item: GalleryItem) => void;
}

export const ThreeDGallery: React.FC<ThreeDGalleryProps> = ({ onItemClick }) => {
  const [rotation, setRotation] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartRotation, setDragStartRotation] = useState<number>(0);
  const [activePreview, setActivePreview] = useState<GalleryItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = centerGalleryItems;
  const totalItems = items.length;
  const anglePerItem = 360 / totalItems;
  const [radius, setRadius] = useState<number>(380);

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setRadius(230);
        } else if (window.innerWidth < 1024) {
          setRadius(320);
        } else {
          setRadius(390);
        }
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Calculate which item is currently in front (closest to rotateY 0)
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const activeIndex = Math.round((360 - normalizedRotation) / anglePerItem) % totalItems;
  const currentItem = items[(activeIndex + totalItems) % totalItems] || items[0];

  // Continuous smooth auto-rotation
  const animate = useCallback(
    (time: number) => {
      if (lastTimeRef.current !== null && isAutoPlay && !isDragging && !isHovered) {
        const delta = (time - lastTimeRef.current) / 1000;
        // Rotate ~14 degrees per second for a smooth cinematic circular motion
        setRotation((prev) => prev - delta * 14);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [isAutoPlay, isDragging, isHovered]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Mouse & Touch Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setRotation(dragStartRotation + diff * 0.4);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartRotation(rotation);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    setRotation(dragStartRotation + diff * 0.45);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleNext = () => {
    setRotation((prev) => prev - anglePerItem);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + anglePerItem);
  };

  const handleCardClick = (idx: number, item: GalleryItem) => {
    // Snap clicked card to front
    const targetAngle = -idx * anglePerItem;
    // Find closest rotation equivalent
    const currentRot = rotation;
    const diff = ((targetAngle - currentRot) % 360);
    const shortestDiff = diff > 180 ? diff - 360 : diff < -180 ? diff + 360 : diff;
    setRotation(currentRot + shortestDiff);
    
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#070709] overflow-hidden border-b border-[#222222] select-none">
      
      {/* 1. Large Artistic Background Typography ("GALLERY / INNOVATION") */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="font-serif italic font-black text-[90px] sm:text-[150px] md:text-[210px] lg:text-[250px] tracking-widest text-white/[0.04] uppercase whitespace-nowrap drop-shadow-2xl">
          INNOVATION
        </span>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF7711]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              3D INTERACTIVE IMMERSION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Our Learning Space in{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent font-serif italic">
              3D Motion
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Drag, swipe, or rotate through our active robotics, maker spaces, AI workshops, and student innovation labs.
          </p>
        </div>

        {/* 2. 3D Cylindrical Ring Stage */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            if (isDragging) setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible perspective-[1200px]"
        >
          {/* Main 3D Cylinder Container */}
          <div
            className="relative w-[280px] sm:w-[320px] h-[340px] sm:h-[380px] transition-transform duration-75 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {items.map((item, idx) => {
              const itemAngle = idx * anglePerItem;
              return (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(idx, item);
                  }}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer group"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    WebkitBoxReflect:
                      "below 8px linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.9) 100%)",
                  }}
                >
                  {/* Card Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.08] group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#FF7711] font-bold border border-white/20 shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Center Glass "VIEW" Badge */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePreview(item);
                      }}
                      className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/40 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW</span>
                    </button>
                  </div>

                  {/* Bottom Title & Details */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 pointer-events-none">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#FF7711] transition-colors mb-1 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Glossy Reflective Floor Surface */}
          <div className="absolute -bottom-10 inset-x-0 h-28 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent pointer-events-none z-10" />
        </div>

        {/* 3. Bottom Glass Control Dock (As in Attached Reference Image) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-10 relative z-20">
          
          {/* Main Control Pill */}
          <div className="flex items-center space-x-3.5 px-4 py-2.5 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            
            {/* Thumbnail Preview */}
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/30 shadow-md shrink-0 bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Current Item Meta */}
            <div className="flex flex-col text-left pr-2 min-w-[140px] sm:min-w-[180px]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                Category • {currentItem.categoryLabel}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate">
                {currentItem.title}
              </span>
            </div>

            {/* Next / Rotate Button */}
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-xl bg-white/15 hover:bg-[#FF7711] hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95 shrink-0"
              title="Rotate to Next"
              aria-label="Next Item"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Secondary Controls: Prev, Next, Play/Pause */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="Previous Item"
              aria-label="Previous Item"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isAutoPlay ? "Pause Auto-Rotation" : "Play Auto-Rotation"}
              aria-label="Toggle Auto-Rotation"
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="Next Item"
              aria-label="Next Item"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Lightbox Preview Modal for Full Size Photo */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-[#111111] border border-white/20 shadow-2xl">
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[320px] sm:h-[450px]">
              <img
                src={activePreview.image}
                alt={activePreview.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 bg-[#141414]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#FF7711] font-bold uppercase mb-2">
                <span>📍 {activePreview.categoryLabel}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {activePreview.title}
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                {activePreview.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
