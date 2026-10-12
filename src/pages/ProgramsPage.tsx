import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, CheckCircle2, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { PROGRAMS_DATA } from '../data/siteData';

export const ProgramsPage: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('all');

  const filteredPrograms =
    selectedProgramId === 'all'
      ? PROGRAMS_DATA
      : PROGRAMS_DATA.filter((p) => p.id === selectedProgramId);

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="CURRICULUM & DAILY CARE · AGES 6 MONTHS TO 7 YEARS"
        title="Developmental Programs Tailored to Every Stage of Childhood"
        subtitle="Explore our five signature programs combining Montessori practical life skills, Reggio Emilia creative ateliers, organic garden wellness, and joyful play."
        breadcrumbCurrent="Our Programs"
        accentColor="#D8F1FF"
      />

      {/* Interactive Filter Control Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#27364B]/10">
          <div>
            <h2 className="font-display text-xl font-semibold text-[#27364B]">
              Filter by Age Group or Program
            </h2>
            <p className="text-xs text-[#27364B]/70 mt-0.5">
              Select a program below to inspect learning activities and daily care schedules
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Program filter"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#D8F1FF]/40 rounded-2xl border border-[#27364B]/10"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedProgramId === 'all'}
              onClick={() => setSelectedProgramId('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedProgramId === 'all'
                  ? 'bg-[#27364B] text-[#FFFDF7] shadow-2xs'
                  : 'text-[#27364B]/80 hover:bg-white/70'
              }`}
            >
              All 5 Programs
            </button>
            {PROGRAMS_DATA.map((prog) => (
              <button
                key={prog.id}
                type="button"
                role="tab"
                aria-selected={selectedProgramId === prog.id}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedProgramId === prog.id
                    ? 'bg-[#27364B] text-[#FFFDF7] shadow-2xs'
                    : 'text-[#27364B]/80 hover:bg-white/70'
                }`}
              >
                {prog.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Cards & Daily Schedules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPrograms.map((program) => (
          <article
            key={program.id}
            id={program.id}
            className="rounded-3xl border border-[#27364B]/12 overflow-hidden bg-white"
          >
            {/* Top Banner Band */}
            <div
              className="px-6 py-4 sm:px-10 border-b border-[#27364B]/10 flex flex-wrap items-center justify-between gap-4"
              style={{ backgroundColor: `${program.accentColor}70` }}
            >
              <div className="flex items-center gap-3 text-xs font-semibold text-[#27364B]">
                <span className="font-mono-num">Program {program.number}</span>
                <span aria-hidden="true">·</span>
                <span>Age Category: {program.ageGroup}</span>
                <span aria-hidden="true">·</span>
                <span>{program.ratio}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#27364B]/85 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{program.schedule}</span>
              </div>
            </div>

            {/* Main Content Split */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Image + Description + Learning Activities */}
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-2xl overflow-hidden border border-[#27364B]/10 aspect-[16/10]">
                  <SafeImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                    {program.title}
                  </h2>
                  <p className="text-base text-[#27364B]/80 leading-relaxed">{program.fullDesc}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-semibold text-[#27364B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#27364B]" />
                    <span>Core Learning Activities &amp; Milestones</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.learningActivities.map((act) => (
                      <li
                        key={act}
                        className="flex items-start gap-2.5 text-sm text-[#27364B]/80 bg-[#FFFDF7] p-3.5 rounded-2xl border border-[#27364B]/8"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Daily Care Schedule + Enroll CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div
                  className="rounded-3xl border border-[#27364B]/10 p-6 sm:p-7 space-y-5"
                  style={{ backgroundColor: `${program.accentColor}30` }}
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#27364B]/70">
                      DAILY RHYTHM &amp; CARE SCHEDULE
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[#27364B]">
                      A Typical Day in {program.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {program.dailyRoutine.map((slot) => (
                      <div
                        key={slot.time}
                        className="bg-white/95 rounded-2xl p-3.5 border border-[#27364B]/8 flex items-start gap-3.5"
                      >
                        <span className="font-mono-num text-xs font-semibold text-[#27364B] whitespace-nowrap pt-0.5">
                          {slot.time}
                        </span>
                        <span className="text-xs sm:text-sm text-[#27364B]/85 leading-snug">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#27364B]/10 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#27364B]/75">
                      <span>Tuition includes all organic meals &amp; supplies</span>
                      <span className="font-semibold text-[#27364B]">Spaces Available</span>
                    </div>
                    <Link
                      to={`/enroll?program=${encodeURIComponent(program.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap"
                    >
                      <span>Enroll Now in {program.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
