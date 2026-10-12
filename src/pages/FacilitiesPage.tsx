import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { FACILITIES_DATA, FacilityItem } from '../data/siteData';

export const FacilitiesPage: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="CAMPUS ARCHITECTURE · 14,000 SQ FT SANCTUARY"
        title="Thoughtfully Prepared Spaces for Play, Rest, and Discovery"
        subtitle="Tour our eight specialized indoor and outdoor environments—crafted with solid Scandinavian birch, natural daylight, medical-grade air purification, and enclosed botanical gardens."
        breadcrumbCurrent="Facilities"
        accentColor="#D8F4E5"
      />

      {/* Interactive Modern Image Grid of All 8 Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
              01 · Interactive Campus Tour
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] mt-1">
              Explore Our 8 Specialized Facilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#27364B]/75 max-w-md">
            Click any facility card below to open its full architectural specifications and safety
            certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <article
              key={facility.id}
              className="rounded-3xl border border-[#27364B]/12 bg-white overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Image Header */}
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedFacility(facility)}
                >
                  <SafeImage
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-between p-6 text-white">
                    <div>
                      <p className="text-xs text-white/85">
                        {facility.number} · {facility.zone} · {facility.capacity}
                      </p>
                      <h3 className="font-display text-2xl font-semibold mt-0.5">
                        {facility.name}
                      </h3>
                    </div>
                    <span className="w-10 h-10 rounded-xl bg-white/90 text-[#27364B] flex items-center justify-center shadow-xs group-hover:bg-[#FFF0B3] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-[#27364B]/80 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                      KEY ENVIRONMENTAL FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {facility.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#27364B]/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Safety Strip */}
              <div
                className="px-6 py-4 sm:px-8 border-t border-[#27364B]/10 flex flex-wrap items-center justify-between gap-3"
                style={{ backgroundColor: `${facility.accentColor}45` }}
              >
                <div className="flex items-center gap-2 text-xs font-medium text-[#27364B]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{facility.safetyStandard}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFacility(facility)}
                  className="text-xs font-semibold text-[#27364B] underline hover:opacity-80 whitespace-nowrap cursor-pointer"
                >
                  Inspect Spec Sheet
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#27364B]/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="bg-[#FFFDF7] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#27364B]/15 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9]">
                <SafeImage
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedFacility(null)}
                  aria-label="Close facility details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 text-[#27364B] flex items-center justify-center hover:bg-[#FFDCE5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="text-xs text-[#27364B]/70 font-medium">
                  <span>Facility {selectedFacility.number}</span>
                  <span className="mx-2">·</span>
                  <span>{selectedFacility.zone}</span>
                  <span className="mx-2">·</span>
                  <span>Capacity: {selectedFacility.capacity}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                  {selectedFacility.name}
                </h3>

                <p className="text-sm sm:text-base text-[#27364B]/80 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="rounded-2xl bg-[#D8F4E5]/40 p-4 border border-[#27364B]/10 space-y-2">
                  <p className="text-xs font-semibold text-[#27364B] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Certified Safety Standard: {selectedFacility.safetyStandard}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 rounded-xl border border-[#27364B]/20 text-xs font-semibold text-[#27364B] hover:bg-neutral-100 cursor-pointer"
                  >
                    Close Preview
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90"
                  >
                    <span>Book an In-Person Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
