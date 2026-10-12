import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="PARENT FEEDBACK · SAMPLE DEMONSTRATION TESTIMONIALS"
        title="Heartfelt Words From Our Little Hearts Families"
        subtitle="Read how gentle attachment routines, sunlit Montessori classrooms, and nourishing organic meals have transformed mornings for families in our community."
        breadcrumbCurrent="Testimonials"
        accentColor="#D8F1FF"
      />

      {/* Demonstration Label Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#FFF0B3]/45 border border-[#27364B]/12 px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#27364B]">
          <span>
            <strong>Demonstration Notice:</strong> The parent reviews on this page are clearly
            labeled sample demonstrations illustrating parent feedback and developmental outcomes.
          </span>
          <span className="font-mono-num font-semibold">4.9 / 5.0 Average Family Rating</span>
        </div>
      </section>

      {/* Smooth Featured Testimonial Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl border border-[#27364B]/12 p-6 sm:p-12 lg:p-14 relative overflow-hidden transition-colors duration-300"
          style={{ backgroundColor: `${activeTestimonial.accentColor}45` }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: activeTestimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#27364B]/70">
                  · Featured Family Spotlight ({activeIndex + 1} of {TESTIMONIALS_DATA.length})
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B] bg-white/85 px-3.5 py-2 rounded-xl border border-[#27364B]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0" />
                    <span>Outcome: {activeTestimonial.outcomeMetric}</span>
                  </div>

                  <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-[#27364B] leading-relaxed">
                    &ldquo;{activeTestimonial.beforeAfterQuote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4 pt-2">
                    {/* Parent Profile Placeholder Avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-[#27364B] text-[#FFFDF7] flex items-center justify-center font-display text-lg font-semibold shrink-0">
                      {activeTestimonial.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#27364B]">
                        {activeTestimonial.parentName}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#27364B]/75">
                        {activeTestimonial.role} · {activeTestimonial.childInfo}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex lg:flex-col items-center justify-between lg:justify-center gap-4 shrink-0">
              <Quote className="w-16 h-16 text-[#27364B]/15 hidden lg:block" />
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-2xl bg-white border border-[#27364B]/15 text-[#27364B] flex items-center justify-center hover:bg-[#27364B] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-2xl bg-[#27364B] text-[#FFFDF7] flex items-center justify-center hover:bg-[#27364B]/90 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeIndex ? 'w-7 bg-[#27364B]' : 'w-2 bg-[#27364B]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Grid of All Parent Testimonial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
            ALL FAMILY REFLECTIONS
          </p>
          <h2 className="font-display text-3xl font-semibold text-[#27364B]">
            Stories Across Every Age Group &amp; Program
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-[#27364B]/12 bg-white p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#27364B]/65">{item.program}</span>
                </div>

                <p className="text-xs font-semibold text-[#27364B] bg-[#FFFDF7] p-3 rounded-xl border border-[#27364B]/10">
                  {item.outcomeMetric}
                </p>

                <p className="text-sm text-[#27364B]/85 leading-relaxed italic">
                  &ldquo;{item.beforeAfterQuote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#27364B]/10 flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-display text-sm font-semibold text-[#27364B] shrink-0"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#27364B]">{item.parentName}</h3>
                  <p className="text-xs text-[#27364B]/70">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FFDCE5]/45 border border-[#27364B]/12 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-semibold text-[#27364B]">
              Experience the Little Hearts Difference Firsthand
            </h2>
            <p className="text-sm text-[#27364B]/80">
              Schedule a morning visit or submit an online enrollment inquiry today.
            </p>
          </div>
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 whitespace-nowrap shrink-0"
          >
            <span>Apply for Enrollment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
