import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Clock, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { TEAM_DATA } from '../data/siteData';

export const TeamPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="EDUCATORS & PEDIATRIC SPECIALISTS · SAMPLE DEMONSTRATION PROFILES"
        title="Meet the Loving Caregivers Behind Every Smile"
        subtitle="Our low classroom ratios are led by degree-holding Montessori and Reggio Emilia educators, a full-time Registered Pediatric Nurse, and dedicated atelieristas."
        breadcrumbCurrent="Our Team"
        accentColor="#E8DDFB"
      />

      {/* Notice Banner Clarifying Fictional Sample Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#FFF0B3]/45 border border-[#27364B]/12 px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#27364B]">
          <span>
            <strong>Demonstration Notice:</strong> The caregiver profiles below are fictional sample
            profiles illustrating the qualifications and structure of our caregiving team.
          </span>
          <span className="font-semibold">100% Pediatric CPR &amp; Background Checked</span>
        </div>
      </section>

      {/* Caregiver Profile Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <article
              key={member.id}
              className="rounded-3xl border border-[#27364B]/12 bg-white overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Top Photo Container */}
                <div
                  className="p-4 pb-0"
                  style={{ backgroundColor: `${member.accentColor}45` }}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#27364B]/10 bg-white">
                    <SafeImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#27364B]/70">{member.role}</p>
                    <h2 className="font-display text-2xl font-semibold text-[#27364B]">
                      {member.name}
                    </h2>
                  </div>

                  <p className="text-sm text-[#27364B]/80 leading-relaxed">{member.bio}</p>

                  {/* Experience & Qualifications Fields */}
                  <div className="pt-3 border-t border-[#27364B]/10 space-y-2.5 text-xs text-[#27364B]/85">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#27364B]">Experience: </span>
                        <span>{member.experience}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#27364B]">Qualifications: </span>
                        <span>{member.qualifications}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Heart className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#27364B]">Specialty: </span>
                        <span>{member.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite Story Footer */}
              <div
                className="px-6 py-3.5 border-t border-[#27364B]/10 flex items-center gap-2 text-xs text-[#27364B]/80"
                style={{ backgroundColor: `${member.accentColor}35` }}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#27364B] shrink-0" />
                <span className="truncate">
                  <strong>Favorite Circle Book:</strong> {member.favoriteBook}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Educator Standards & Training Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#D8F1FF]/40 border border-[#27364B]/12 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B]">
              <ShieldCheck className="w-4 h-4" />
              <span>OUR EDUCATOR HIRING &amp; MENTORSHIP PROMISE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
              Every Caregiver Completes 80+ Hours of Annual Attachment &amp; Safety Training
            </h2>
            <p className="text-sm sm:text-base text-[#27364B]/80 leading-relaxed">
              We invest deeply in our educators with competitive salaries, small group ratios, and
              paid research sabbaticals—resulting in a 98% annual staff retention rate so your child
              experiences consistent, loving bonds.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Meet Our Team on a Campus Tour</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
