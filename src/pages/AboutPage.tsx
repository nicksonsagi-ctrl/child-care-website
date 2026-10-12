import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Compass,
  Eye,
  Sparkles,
  ShieldCheck,
  Sprout,
  BookOpen,
  Sun,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { IMAGES } from '../data/siteData';

const CORE_VALUES = [
  {
    number: '01',
    title: 'Unconditional Emotional Safety',
    description:
      'Every child is met with warm eye contact, gentle co-regulation, and respect for their feelings before any academic expectation.',
    accent: '#FFDCE5',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Wonder-Led Exploration',
    description:
      'We follow children’s natural questions—turning a morning rainstorm or a garden ladybug into a week of storytelling, painting, and science.',
    accent: '#D8F1FF',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Connection to Nature',
    description:
      'Children spend at least two hours outdoors daily tending organic herbs, climbing natural Robinia timber forts, and observing seasonal cycles.',
    accent: '#D8F4E5',
    icon: Sprout,
  },
  {
    number: '04',
    title: 'Unhurried Childhood Rhythms',
    description:
      'We protect childhood from overscheduling and screens, honoring deep uninterrupted play blocks, acoustic music, and restorative rest.',
    accent: '#FFF0B3',
    icon: Sun,
  },
];

const SAFETY_PILLARS = [
  {
    title: 'Biometric & PIN Vestibule Entry',
    detail:
      'Double-door lobby security with encrypted parent check-in codes and continuous front-desk visual verification.',
  },
  {
    title: 'Medical-Grade HEPA H13 Air & Non-Toxic Finishes',
    detail:
      'Every studio features continuous HEPA H13 filtration, radiant warm birch floors, and 100% zero-VOC organic paints.',
  },
  {
    title: 'On-Site Registered Pediatric Nurse',
    detail:
      'Full-time pediatric RN overseeing daily wellness checks, allergy action plans, and 100% Pediatric CPR-certified staff.',
  },
  {
    title: '100% Nut-Free Organic Culinary Protocol',
    detail:
      'Dedicated commercial kitchen with color-coded allergy tableware and daily fresh whole-food preparation.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 pb-12">
      {/* Separate Page Hero Banner with Breadcrumb Navigation */}
      <PageHero
        kicker="ABOUT LITTLE HEARTS · ESTABLISHED 2014"
        title="Nurturing Curious Minds and Compassionate Hearts"
        subtitle="Discover the story, educational philosophy, and uncompromising safety standards behind Meadowbrook’s most beloved early childhood sanctuary."
        breadcrumbCurrent="About Us"
        accentColor="#FFDCE5"
      />

      {/* 1. OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
              01 · Our Founding Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
              Born From a Dream to Make Childcare Feel Like Home
            </h2>
            <p className="text-base text-[#27364B]/80 leading-relaxed">
              In 2014, developmental psychologist and Montessori educator Dr. Clara Vance noticed a
              stark divide in early childhood options: families had to choose between large,
              institutional centers with fluorescent lighting or informal home daycares lacking
              specialized learning studios.
            </p>
            <p className="text-base text-[#27364B]/80 leading-relaxed">
              She partnered with pediatric nurses, children&apos;s architects, and Reggio Emilia
              atelieristas to create <strong>Little Hearts Children&apos;s Care Home</strong>—a
              purpose-built sanctuary surrounded by willow trees and organic gardens where children
              experience both clinical-grade safety and the tender warmth of a family living room.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#27364B]/10">
              <div>
                <p className="font-mono-num text-2xl font-semibold text-[#27364B]">12+ Yrs</p>
                <p className="text-xs text-[#27364B]/70 mt-0.5">Serving local families</p>
              </div>
              <div>
                <p className="font-mono-num text-2xl font-semibold text-[#27364B]">650+</p>
                <p className="text-xs text-[#27364B]/70 mt-0.5">Graduates thriving in school</p>
              </div>
              <div>
                <p className="font-mono-num text-2xl font-semibold text-[#27364B]">98%</p>
                <p className="text-xs text-[#27364B]/70 mt-0.5">Educator annual retention</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-3xl overflow-hidden border border-[#27364B]/10 bg-[#D8F1FF]/40 p-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <SafeImage
                  src={IMAGES.caregiverStory}
                  alt="Educator reading with toddlers in cozy reading corner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#27364B]/10 bg-[#FFF0B3]/40 p-3 sm:mt-8">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <SafeImage
                  src={IMAGES.creativeArt}
                  alt="Children painting on wooden easels in the sunlit art studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & OUR VISION */}
      <section className="bg-[#D8F1FF]/30 border-y border-[#27364B]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="rounded-3xl bg-white border border-[#27364B]/12 p-8 sm:p-10 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#FFDCE5] flex items-center justify-center text-[#27364B]">
              <Compass className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/65">
              02 · OUR MISSION
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
              To Honor Every Child’s Pace, Voice, and Natural Curiosity
            </h2>
            <p className="text-base text-[#27364B]/80 leading-relaxed">
              Our mission is to provide an emotionally secure, sensory-rich, and screen-free home
              environment where children ages 6 months to 7 years develop lifelong confidence,
              empathy, and creative problem-solving in partnership with their families.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-white border border-[#27364B]/12 p-8 sm:p-10 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#D8F4E5] flex items-center justify-center text-[#27364B]">
              <Eye className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/65">
              03 · OUR VISION
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
              Raising a Generation of Kind, Resilient, and Joyful Learners
            </h2>
            <p className="text-base text-[#27364B]/80 leading-relaxed">
              We envision a world where early childhood education is never rushed—where children
              enter elementary school not only reading and counting with ease, but knowing how to
              listen deeply, care for the earth, and collaborate with kindness.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
            04 · Guiding Principles
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
            Our Core Values in Everyday Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val) => {
            const IconComponent = val.icon;
            return (
              <div
                key={val.number}
                className="rounded-3xl border border-[#27364B]/10 p-6 space-y-4"
                style={{ backgroundColor: `${val.accent}45` }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#27364B] shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono-num text-xs font-semibold text-[#27364B]/60">
                    {val.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#27364B]">{val.title}</h3>
                <p className="text-sm text-[#27364B]/80 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CHILDCARE PHILOSOPHY */}
      <section className="bg-[#FFF0B3]/35 border-y border-[#27364B]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-[#27364B]/12 bg-white p-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <SafeImage
                  src={IMAGES.indoorPlay}
                  alt="Scandinavian Montessori indoor play sanctuary with wooden shelves and teepee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B]/75">
              <BookOpen className="w-4 h-4" />
              <span>05 · CHILDCARE &amp; PEDAGOGICAL PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
              Where Montessori Independence Meets Reggio Emilia Wonder
            </h2>
            <p className="text-base text-[#27364B]/80 leading-relaxed">
              Our pedagogical framework blends three complementary traditions:
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/90 border border-[#27364B]/10 p-5">
                <h3 className="font-display text-lg font-semibold text-[#27364B]">
                  1. RIE &amp; Attachment-Based Care (Infants &amp; Toddlers)
                </h3>
                <p className="text-sm text-[#27364B]/80 mt-1">
                  Primary caregiving assignments ensure your baby bonds deeply with a consistent
                  educator who narrates every care routine with warmth and respect.
                </p>
              </div>
              <div className="rounded-2xl bg-white/90 border border-[#27364B]/10 p-5">
                <h3 className="font-display text-lg font-semibold text-[#27364B]">
                  2. Montessori Practical Life &amp; Tactile Order
                </h3>
                <p className="text-sm text-[#27364B]/80 mt-1">
                  Low birch shelves hold self-correcting wooden materials, real porcelain pitchers,
                  and sensory trays that empower children to choose their work independently.
                </p>
              </div>
              <div className="rounded-2xl bg-white/90 border border-[#27364B]/10 p-5">
                <h3 className="font-display text-lg font-semibold text-[#27364B]">
                  3. Reggio Emilia Atelier &amp; Project Inquiry
                </h3>
                <p className="text-sm text-[#27364B]/80 mt-1">
                  The environment acts as the &ldquo;third teacher,&rdquo; inviting small groups to
                  investigate nature, architecture, and music through clay, paint, and light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAFETY AND WELLBEING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#27364B]/12 bg-[#D8F4E5]/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B]">
                <ShieldCheck className="w-4 h-4" />
                <span>06 · SAFETY &amp; WELLBEING ARCHITECTURE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
                Peace of Mind for Parents, Complete Protection for Children
              </h2>
              <p className="text-base text-[#27364B]/80 leading-relaxed">
                We believe warm hospitality and rigorous clinical safety belong together. Our campus
                exceeds state licensing requirements across physical security, air purity, food
                allergy management, and emergency medical readiness.
              </p>

              <div className="space-y-4">
                {SAFETY_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27364B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#27364B]">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-[#27364B]/75 mt-0.5">{pillar.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs sm:text-sm font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap"
                >
                  <span>Explore Our Safe Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#27364B]/15 text-[#27364B] text-xs sm:text-sm font-semibold hover:bg-[#FFF0B3]/40 transition-colors whitespace-nowrap"
                >
                  <span>Meet Our Pediatric &amp; Teaching Team</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-[#27364B]/12 bg-white p-3">
                <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                  <SafeImage
                    src={IMAGES.outdoorPlayground}
                    alt="Enclosed eco-friendly outdoor playground with UV shade sails and timber climbing fort"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
