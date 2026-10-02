import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CenterFooterNavProps {
  onOpenPartnerModal: () => void;
}

export const CenterFooterNav: React.FC<CenterFooterNavProps> = ({
  onOpenPartnerModal,
}) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#080808] py-12 text-center border-t border-[#1C1C1C]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="btn-dark-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
        >
          <span>← Return to Homepage</span>
        </button>

        <button
          onClick={onOpenPartnerModal}
          className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-md hover:shadow-orange-glow transition-all"
        >
          <span>For Schools: Setup An ATL Lab</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
};
