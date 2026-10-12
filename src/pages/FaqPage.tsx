import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { FAQ_DATA, FaqItem } from '../data/siteData';

const FAQ_CATEGORIES = [
  'All Topics',
  'Admission',
  'Care Programs',
  'Opening Hours',
  'Child Safety',
  'Meals',
  'Activities',
  'Parent Communication',
] as const;

type FaqCategoryFilter = (typeof FAQ_CATEGORIES)[number];

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategoryFilter>('All Topics');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3', 'faq-6']);

  const filteredFaqs: FaqItem[] =
    selectedCategory === 'All Topics'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="FAMILY GUIDE · ADMISSIONS, SAFETY & DAILY ROUTINES"
        title="Frequently Asked Questions"
        subtitle="Everything parents ask us about admission transitions, caregiver ratios, opening hours, pediatric safety protocols, allergy-free organic meals, and daily communication."
        breadcrumbCurrent="FAQ"
        accentColor="#FFF0B3"
      />

      {/* Category Filter + Interactive Accordion */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Topic Filter Buttons */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-[#27364B]">
              Filter Questions by Topic
            </h2>
            <div className="flex items-center gap-3 text-xs font-semibold text-[#27364B]">
              <button
                type="button"
                onClick={expandAll}
                className="hover:underline cursor-pointer"
              >
                Expand All
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={collapseAll}
                className="hover:underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="FAQ topic filter"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#D8F1FF]/40 rounded-2xl border border-[#27364B]/10"
          >
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#27364B] text-[#FFFDF7] shadow-2xs'
                    : 'text-[#27364B]/80 hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-colors ${
                  isOpen
                    ? 'border-[#27364B]/25 bg-white shadow-xs'
                    : 'border-[#27364B]/12 bg-white/80 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#27364B]/65">
                      Topic: {faq.category}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#27364B]">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#27364B] text-[#FFFDF7] rotate-180' : 'bg-[#D8F1FF] text-[#27364B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-[#27364B]/8 text-sm sm:text-base text-[#27364B]/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="rounded-3xl bg-[#D8F4E5]/50 border border-[#27364B]/12 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B]">
              <HelpCircle className="w-4 h-4" />
              <span>PERSONALIZED FAMILY GUIDANCE</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#27364B]">
              Have a Specific Question About Your Child’s Needs?
            </h3>
            <p className="text-sm text-[#27364B]/80">
              Our Director and Registered Pediatric Nurse are happy to discuss individualized sleep
              schedules, allergy care plans, or transition support.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs sm:text-sm font-semibold hover:bg-[#27364B]/90 whitespace-nowrap"
            >
              <span>Ask Us a Question</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/enroll"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#27364B]/15 text-[#27364B] text-xs sm:text-sm font-semibold hover:bg-[#FFF0B3]/40 whitespace-nowrap"
            >
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
