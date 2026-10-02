import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { centerGalleryItems, type GalleryItem } from "../assets/data/centersPageData";

interface CenterLearningSpaceGalleryProps {
  onOpenPreview: (item: GalleryItem) => void;
}

export const CenterLearningSpaceGallery: React.FC<CenterLearningSpaceGalleryProps> = ({
  onOpenPreview,
}) => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<
    "all" | "learning" | "robotics" | "coding" | "3dprinting" | "projects" | "events"
  >("all");

  const filteredGallery = centerGalleryItems.filter((item) => {
    if (selectedGalleryCategory === "all") return true;
    return item.category === selectedGalleryCategory;
  });

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
            A glimpse into the real experiences, experiments, and projects that happen daily inside our center.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {[
            { id: "all", label: "All Photos" },
            { id: "learning", label: "Learning Sessions" },
            { id: "robotics", label: "Robotics Lab" },
            { id: "coding", label: "Coding Sessions" },
            { id: "3dprinting", label: "3D Printing" },
            { id: "projects", label: "Student Projects" },
            { id: "events", label: "Events & Showcases" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedGalleryCategory(cat.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedGalleryCategory === cat.id
                  ? "bg-[#FF7711] text-black shadow-md shadow-[#FF7711]/20"
                  : "bg-[#141414] text-[#A1A1A1] hover:text-white hover:bg-[#1E1E1E] border border-[#272727]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-5 mb-12">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (idx % 6) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onOpenPreview(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#151515] border border-[#262626] hover:border-[#FF7711] transition-all duration-300 cursor-pointer ${
                item.span || "col-span-12 sm:col-span-6 md:col-span-4"
              }`}
              style={{ minHeight: "260px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#FF7711] font-bold border border-[#2E2E2E]">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <h4 className="text-base font-bold text-white group-hover:text-[#FF7711] transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#CCCCCC] leading-snug line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#book-visit"
            className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-[#FF7711] hover:text-[#FF8A33] transition-colors group"
          >
            <span>See What Our Students Are Creating →</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
