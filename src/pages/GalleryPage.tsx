import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { GALLERY_DATA, GalleryItem } from '../data/siteData';

const CATEGORIES = ['All', 'Learning', 'Playtime', 'Activities', 'Events', 'Facilities'] as const;
type CategoryType = (typeof CATEGORIES)[number];

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    activeCategory === 'All'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [lightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-16 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="VISUAL CHRONICLE · EVERYDAY WONDER"
        title="Moments of Laughter, Discovery, and Creative Play"
        subtitle="Browse photographs from our sunlit classrooms, watercolor atelier, outdoor botanical gardens, and seasonal family festivals."
        breadcrumbCurrent="Gallery"
        accentColor="#FFF0B3"
      />

      {/* Interactive Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#27364B]/10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#27364B]">
               campus Photo Collection
            </h2>
            <p className="text-xs text-[#27364B]/70 mt-0.5">
              Showing <span className="font-mono-num font-semibold">{filteredItems.length}</span>{' '}
              photographs · Click any image to open the full-screen lightbox viewer
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Gallery category filter"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FFF0B3]/45 rounded-2xl border border-[#27364B]/10"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#27364B] text-[#FFFDF7] shadow-2xs'
                    : 'text-[#27364B]/80 hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => {
            const aspectHeightClass =
              item.aspect === 'tall'
                ? 'aspect-[3/4]'
                : item.aspect === 'wide'
                ? 'aspect-[16/10]'
                : 'aspect-square';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="break-inside-avoid rounded-3xl overflow-hidden border border-[#27364B]/12 bg-white group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className={`relative overflow-hidden ${aspectHeightClass}`}>
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                    <div className="flex justify-end">
                      <span className="w-9 h-9 rounded-xl bg-white/90 text-[#27364B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-white/80">
                        {item.category} · {item.date}
                      </p>
                      <h3 className="font-display text-lg font-semibold mt-0.5">{item.title}</h3>
                      <p className="text-xs text-white/85 mt-1 line-clamp-2">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Image Lightbox with Next and Previous Controls */}
      <AnimatePresence>
        {currentLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#27364B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="fixed top-5 right-5 z-50 w-11 h-11 rounded-2xl bg-white/95 text-[#27364B] flex items-center justify-center hover:bg-[#FFDCE5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-2xl bg-white/95 text-[#27364B] flex items-center justify-center hover:bg-[#D8F1FF] transition-colors cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-2xl bg-white/95 text-[#27364B] flex items-center justify-center hover:bg-[#D8F1FF] transition-colors cursor-pointer shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              key={currentLightboxItem.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="max-w-4xl w-full bg-[#FFFDF7] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
                <SafeImage
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#27364B]/70 font-medium">
                    <span>{currentLightboxItem.category}</span>
                    <span className="mx-2">·</span>
                    <span>{currentLightboxItem.date}</span>
                    <span className="mx-2">·</span>
                    <span className="font-mono-num">
                      Photo {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#27364B]">
                    {currentLightboxItem.title}
                  </h3>
                  <p className="text-sm text-[#27364B]/80">{currentLightboxItem.caption}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="px-4 py-2 rounded-xl border border-[#27364B]/20 text-xs font-semibold text-[#27364B] hover:bg-[#D8F1FF]/50 cursor-pointer"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="px-4 py-2 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90 cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
