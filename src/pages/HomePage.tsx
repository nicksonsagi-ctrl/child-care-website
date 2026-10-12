import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Palette,
  Apple,
  UserCheck,
  MessageSquareHeart,
  Star,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage, FloatingClouds, DecorativeSun } from '../components/SafeImage';
import {
  IMAGES,
  PROGRAMS_DATA,
  FACILITIES_DATA,
  GALLERY_DATA,
  TEAM_DATA,
  TESTIMONIALS_DATA,
  EVENTS_DATA,
} from '../data/siteData';

const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Safe Environment',
    description:
      'Biometric vestibule access, 6-foot enclosed gardens, HEPA H13 medical air filtration, and zero-VOC natural wood interiors.',
    accent: '#D8F1FF',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Loving Caregivers',
    description:
      'Low 1:3 to 1:6 ratios led by AMI Montessori and Reggio-trained educators certified in Pediatric CPR and attachment care.',
    accent: '#FFDCE5',
    icon: HeartHandshake,
  },
  {
    number: '03',
    title: 'Creative Learning',
    description:
      'Daily sunlit Atelier workshops in botanical watercolors, natural clay sculpture, acoustic rhythm, and wooden architecture.',
    accent: '#FFF0B3',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Healthy Meals',
    description:
      '100% nut-free commercial kitchen preparing warm, seasonal organic breakfasts, lunches, and garden-harvest snacks daily.',
    accent: '#D8F4E5',
    icon: Apple,
  },
  {
    number: '05',
    title: 'Personalized Attention',
    description:
      'Individualized developmental portfolios and gentle transition rhythms that honor every child’s unique temperament.',
    accent: '#E8DDFB',
    icon: UserCheck,
  },
  {
    number: '06',
    title: 'Parent Communication',
    description:
      'Daily photo journals, nap and nutrition logs, and monthly developmental coffee chats with your child’s lead educator.',
    accent: '#D8F1FF',
    icon: MessageSquareHeart,
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-8">
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#27364B]/10"
        style={{
          background:
            'linear-gradient(135deg, #D8F1FF66 0%, #FFFDF7 48%, #FFDCE544 85%, #FFF0B344 100%)',
        }}
      >
        {/* Creative Animated Decorations */}
        <FloatingClouds className="w-48 text-white/85 absolute top-6 left-6 animate-float-slow hidden md:block" />
        <FloatingClouds className="w-64 text-white/75 absolute bottom-8 left-1/3 animate-float-gentle hidden lg:block" />
        <DecorativeSun className="w-32 h-32 absolute top-8 right-12 opacity-75 animate-float-slow hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Hero Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="text-xs font-semibold tracking-wider text-[#27364B]/75">
                <span>Montessori &amp; Reggio Emilia Sanctuary</span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>Ages 6 Months to 7 Years</span>
              </div>

              <h1
                className="font-display font-semibold text-[#27364B] tracking-tight leading-[1.1]"
                style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)' }}
              >
                Where Little Hearts Grow Big Dreams
              </h1>

              <p className="text-base sm:text-lg text-[#27364B]/80 leading-relaxed max-w-xl">
                Welcome to Little Hearts Children&apos;s Care Home—a sunlit, screen-free sanctuary
                where curious young minds blossom through gentle attachment care, creative wooden
                play, organic garden harvests, and joyful discovery.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-transform active:scale-98 whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#27364B]/20 text-[#27364B] text-sm font-semibold hover:bg-[#FFF0B3]/50 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-[#27364B]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#27364B]/75">
                <span>100% Nut-Free Organic Kitchen</span>
                <span aria-hidden="true">·</span>
                <span>1:3 to 1:6 Caregiver Ratios</span>
                <span aria-hidden="true">·</span>
                <span>Full-Time &amp; Part-Time Care</span>
              </div>
            </div>

            {/* Right Column: Large Attractive Image of Happy Children */}
            <div className="lg:col-span-6 relative flex">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-full rounded-3xl overflow-hidden border border-[#27364B]/12 bg-white p-3 shadow-sm flex flex-col"
              >
                <div className="relative w-full h-full min-h-[320px] sm:min-h-[400px] rounded-2xl overflow-hidden">
                  <SafeImage
                    src={IMAGES.heroChildren}
                    alt="Happy children playing with wooden blocks in sunlit classroom at Little Hearts Children's Care Home"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* 4-Column Quantitative Proof Strip Below Hero Split */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/90 border border-[#27364B]/10 rounded-2xl p-5">
              <p className="font-mono-num text-2xl sm:text-3xl font-semibold text-[#27364B]">
                1:4 Avg
              </p>
              <p className="text-xs text-[#27364B]/75 mt-1">
                Dedicated educator-to-child ratio across all five studios
              </p>
            </div>
            <div className="bg-white/90 border border-[#27364B]/10 rounded-2xl p-5">
              <p className="font-mono-num text-2xl sm:text-3xl font-semibold text-[#27364B]">
                100%
              </p>
              <p className="text-xs text-[#27364B]/75 mt-1">
                Fresh chef-prepared organic meals &amp; snacks included daily
              </p>
            </div>
            <div className="bg-white/90 border border-[#27364B]/10 rounded-2xl p-5">
              <p className="font-mono-num text-2xl sm:text-3xl font-semibold text-[#27364B]">
                14,000 sq ft
              </p>
              <p className="text-xs text-[#27364B]/75 mt-1">
                Sunlit indoor studios &amp; shaded botanical timber gardens
              </p>
            </div>
            <div className="bg-white/90 border border-[#27364B]/10 rounded-2xl p-5">
              <p className="font-mono-num text-2xl sm:text-3xl font-semibold text-[#27364B]">
                4.9 / 5.0
              </p>
              <p className="text-xs text-[#27364B]/75 mt-1">
                Parent satisfaction rating across 180+ enrolled local families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#27364B]/12 bg-[#FFDCE5]/35 p-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <SafeImage
                  src={IMAGES.caregiverStory}
                  alt="Warm caregiver reading an illustrated storybook to toddlers in our reading corner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-[#27364B]/70">
              <span>Welcome to Little Hearts</span>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <span>Established 2014</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight leading-tight">
              A Second Home Built on Patience, Wonder, and Unhurried Childhood
            </h2>

            <p className="text-base text-[#27364B]/80 leading-relaxed">
              We believe the earliest years of life should feel warm, unhurried, and deeply secure.
              Founded by early childhood educators and pediatric specialists, Little Hearts bridges
              the cozy intimacy of family life with thoughtfully prepared Montessori and Reggio
              Emilia learning studios.
            </p>

            <p className="text-base text-[#27364B]/80 leading-relaxed">
              Whether your infant is discovering gentle sensory lullabies or your preschooler is
              harvesting strawberries in our outdoor garden, every child is known by name,
              temperament, and dream.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D8F1FF] text-[#27364B] text-sm font-semibold hover:bg-[#D8F1FF]/80 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS SECTION */}
      <section className="bg-[#D8F1FF]/25 border-y border-[#27364B]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                01 · Age-Tailored Curriculums
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
                Our Five Signature Care &amp; Learning Programs
              </h2>
              <p className="text-base text-[#27364B]/80">
                From nurturing infant attachment to after-school STEAM clubs, each program is
                crafted to support your child&apos;s emotional, social, and cognitive milestones.
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs sm:text-sm font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>View Full Program Schedules</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Colorful Cards Grid for All 5 Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS_DATA.map((program, index) => (
              <div
                key={program.id}
                className={`rounded-3xl border border-[#27364B]/12 p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
                  index === 0 ? 'lg:col-span-2' : 'col-span-1'
                }`}
                style={{ backgroundColor: `${program.accentColor}50` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#27364B]/75">
                    <span className="font-mono-num font-semibold">{program.number}. Program</span>
                    <span>
                      {program.ageGroup} · {program.ratio}
                    </span>
                  </div>

                  <div
                    className={`rounded-2xl overflow-hidden border border-[#27364B]/10 bg-white ${
                      index === 0 ? 'aspect-[16/9] max-h-64' : 'aspect-[4/3] max-h-52'
                    }`}
                  >
                    <SafeImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#27364B]">
                    {program.title}
                  </h3>

                  <p className="text-sm text-[#27364B]/80 leading-relaxed">{program.shortDesc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#27364B]/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#27364B]/70">{program.schedule}</span>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#27364B] hover:underline whitespace-nowrap"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
            02 · The Little Hearts Difference
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
            Why Families Trust Us With Their Most Precious Years
          </h2>
          <p className="text-base text-[#27364B]/80">
            Every architectural detail, meal recipe, and classroom routine is intentionally designed
            around child safety, emotional security, and joyful exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="rounded-3xl border border-[#27364B]/10 bg-white p-7 space-y-4 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#27364B]"
                    style={{ backgroundColor: item.accent }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono-num text-xs font-semibold text-[#27364B]/50">
                    {item.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#27364B]">{item.title}</h3>
                <p className="text-sm text-[#27364B]/80 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FACILITIES PREVIEW SECTION */}
      <section className="bg-[#FFF0B3]/30 border-y border-[#27364B]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                03 · Purpose-Built Spaces
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
                Sunlit Classrooms &amp; Botanical Playgrounds
              </h2>
              <p className="text-base text-[#27364B]/80">
                Explore our eight specialized child-scaled spaces—from our Scandinavian reading
                sanctuary to our shaded timber playground.
              </p>
            </div>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs sm:text-sm font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>Tour All 8 Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.slice(0, 4).map((facility) => (
              <div
                key={facility.id}
                className="rounded-3xl bg-white border border-[#27364B]/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="text-xs text-[#27364B]/65">
                      {facility.number} · {facility.zone}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-[#27364B]">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-[#27364B]/80 leading-relaxed line-clamp-3">
                      {facility.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <Link
                    to="/facilities"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#27364B] hover:underline"
                  >
                    <span>Inspect Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW & MEET OUR TEAM PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Gallery Preview */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                04 · Everyday Moments
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
                A Glimpse Inside Our Daily Joy
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#27364B]/20 text-xs sm:text-sm font-semibold text-[#27364B] hover:bg-[#FFDCE5]/50 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>Open Interactive Lightbox Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_DATA.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative rounded-3xl overflow-hidden border border-[#27364B]/10 aspect-[4/3] block"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <p className="text-xs text-white/80">
                    {item.category} · {item.date}
                  </p>
                  <h3 className="font-display text-base font-semibold mt-0.5">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Meet Our Team Preview */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                05 · Dedicated Educators (Sample Profiles)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
                Meet the Loving Hearts Guiding Your Children
              </h2>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#27364B]/20 text-xs sm:text-sm font-semibold text-[#27364B] hover:bg-[#D8F4E5]/60 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>Meet All 6 Caregivers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_DATA.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="rounded-3xl border border-[#27364B]/10 bg-white p-6 space-y-4"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#D8F1FF]/40">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#27364B]/65">
                    {member.role} · {member.experience}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#27364B]">
                    {member.name}
                  </h3>
                </div>
                <p className="text-sm text-[#27364B]/80 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & UPCOMING EVENTS PREVIEW */}
      <section className="bg-[#E8DDFB]/30 border-y border-[#27364B]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Featured Parent Testimonials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  06 · Parent Stories (Sample Demonstrations)
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B] mt-1">
                  Words From Our Families
                </h2>
              </div>
              <Link
                to="/testimonials"
                className="text-xs font-semibold text-[#27364B] hover:underline whitespace-nowrap"
              >
                All Testimonials →
              </Link>
            </div>

            <div className="space-y-4">
              {TESTIMONIALS_DATA.slice(0, 2).map((test) => (
                <div
                  key={test.id}
                  className="rounded-3xl bg-white border border-[#27364B]/10 p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-[#27364B]/65">{test.childInfo}</span>
                  </div>
                  <p className="text-sm text-[#27364B]/85 leading-relaxed italic">
                    &ldquo;{test.beforeAfterQuote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-[#27364B]/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#27364B]">{test.parentName}</span>
                    <span className="text-[#27364B]/70">{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Upcoming Events Preview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  07 · Campus Calendar
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B] mt-1">
                  Upcoming Family Events
                </h2>
              </div>
              <Link
                to="/events"
                className="text-xs font-semibold text-[#27364B] hover:underline whitespace-nowrap"
              >
                Full Calendar →
              </Link>
            </div>

            <div className="space-y-4">
              {EVENTS_DATA.filter((e) => e.category === 'Upcoming')
                .slice(0, 2)
                .map((event) => (
                  <div
                    key={event.id}
                    className="rounded-3xl bg-white border border-[#27364B]/10 p-6 space-y-3"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#27364B]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#27364B]" />
                      <span className="font-semibold text-[#27364B]">{event.date}</span>
                      <span aria-hidden="true">·</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#27364B]">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#27364B]/80 leading-relaxed">{event.summary}</p>
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 text-[#27364B]/70">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      <Link
                        to="/events"
                        className="font-semibold text-[#27364B] hover:underline whitespace-nowrap"
                      >
                        View Event Details →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENROLLMENT CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl border border-[#27364B]/15 p-8 sm:p-12 lg:p-16 overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #FFDCE5 0%, #FFF0B3 50%, #D8F4E5 100%)',
          }}
        >
          <FloatingClouds className="w-48 text-white/70 absolute -top-4 right-10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-5">
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/75">
              2026 / 2027 Enrollment Open · Limited Studio Spaces
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#27364B] tracking-tight">
              Ready to Give Your Child a Joyful, Nurturing Start?
            </h2>
            <p className="text-base text-[#27364B]/85 leading-relaxed">
              Submit an online enrollment application in under five minutes or schedule a private
              morning tour with our Director to experience Little Hearts in person.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-transform active:scale-98 whitespace-nowrap shrink-0"
              >
                <span>Start Enrollment Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 border border-[#27364B]/15 text-[#27364B] text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>Read Admission FAQs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
