import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  X,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { SafeImage } from '../components/SafeImage';
import { EVENTS_DATA, EventItem } from '../data/siteData';

export const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past Activity'>('All');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpSubmittedId, setRsvpSubmittedId] = useState<string | null>(null);

  const upcomingEvents = EVENTS_DATA.filter((e) => e.category === 'Upcoming');
  const pastEvents = EVENTS_DATA.filter((e) => e.category === 'Past Activity');

  const showUpcoming = filter === 'All' || filter === 'Upcoming';
  const showPast = filter === 'All' || filter === 'Past Activity';

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="COMMUNITY GATHERINGS · OPEN HOUSES & WORKSHOPS"
        title="Seasonal Celebrations, Parent Workshops & Campus Open Houses"
        subtitle="We bring families, grandparents, and educators together throughout the year for garden harvests, acoustic concerts, and Montessori parenting evenings."
        breadcrumbCurrent="Events"
        accentColor="#FFDCE5"
      />

      {/* Interactive Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#27364B]/10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#27364B]">
              Community Calendar (Sample Events)
            </h2>
            <p className="text-xs text-[#27364B]/70 mt-0.5">
              Click &ldquo;View Details&rdquo; on any event to inspect the full schedule and
              highlights
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Events filter"
            className="flex items-center gap-1.5 p-1.5 bg-[#FFDCE5]/45 rounded-2xl border border-[#27364B]/10 self-start sm:self-auto"
          >
            {(['All', 'Upcoming', 'Past Activity'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === tab
                    ? 'bg-[#27364B] text-[#FFFDF7] shadow-2xs'
                    : 'text-[#27364B]/80 hover:bg-white/80'
                }`}
              >
                {tab === 'All'
                  ? 'All Events (5)'
                  : tab === 'Upcoming'
                  ? `Upcoming Events (${upcomingEvents.length})`
                  : `Past Activities (${pastEvents.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* UPCOMING EVENTS SECTION */}
        {showUpcoming && (
          <div className="space-y-8">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                01 · MARK YOUR CALENDAR
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                Upcoming Events &amp; Family Open Houses
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="rounded-3xl border border-[#27364B]/12 bg-white overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden border-b border-[#27364B]/10">
                      <SafeImage
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="text-xs text-[#27364B]/75 space-y-1">
                        <div className="flex items-center gap-2 font-semibold text-[#27364B]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <h4 className="font-display text-xl font-semibold text-[#27364B]">
                        {event.title}
                      </h4>

                      <p className="text-sm text-[#27364B]/80 leading-relaxed">{event.summary}</p>
                    </div>
                  </div>

                  <div
                    className="p-6 pt-4 border-t border-[#27364B]/10 flex items-center justify-between gap-3"
                    style={{ backgroundColor: `${event.accentColor}40` }}
                  >
                    <span className="text-xs font-medium text-[#27364B]/80 truncate">
                      {event.audience}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* PAST ACTIVITIES SECTION */}
        {showPast && (
          <div className="space-y-8 pt-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                02 · ARCHIVE &amp; HIGHLIGHTS
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                Past Campus Activities &amp; Celebrations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <article
                  key={event.id}
                  className="rounded-3xl border border-[#27364B]/12 bg-white overflow-hidden flex flex-col justify-between"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                    <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <SafeImage
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-[#27364B]/65">
                          Past Activity · {event.date}
                        </p>
                        <h4 className="font-display text-xl font-semibold text-[#27364B]">
                          {event.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#27364B]/80 leading-relaxed">
                          {event.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#27364B]/10 flex items-center justify-between">
                        <span className="text-xs text-[#27364B]/70">{event.location}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#27364B]/20 text-xs font-semibold text-[#27364B] hover:bg-[#D8F4E5]/60 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Functional Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#27364B]/75 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="bg-[#FFFDF7] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#27364B]/15 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9]">
                <SafeImage
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Close event details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 text-[#27364B] flex items-center justify-center hover:bg-[#FFDCE5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#27364B]/75 font-medium">
                  <span className="font-semibold text-[#27364B]">{selectedEvent.category}</span>
                  <span>·</span>
                  <span>{selectedEvent.date}</span>
                  <span>·</span>
                  <span>{selectedEvent.time}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                  {selectedEvent.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#27364B]/80 bg-[#D8F1FF]/40 p-3.5 rounded-2xl">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#27364B]" />
                    <strong>Location:</strong> {selectedEvent.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#27364B]" />
                    <strong>Audience:</strong> {selectedEvent.audience}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#27364B]/85 leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                    EVENT SCHEDULE &amp; HIGHLIGHTS
                  </h4>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#27364B]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {rsvpSubmittedId === selectedEvent.id && (
                  <div className="rounded-2xl bg-[#D8F4E5] border border-[#27364B]/15 p-4 text-xs sm:text-sm text-[#27364B]">
                    <strong>Demo Reservation Recorded:</strong> In this interactive demonstration,
                    your interest in <em>{selectedEvent.title}</em> has been noted locally. You can
                    also reach our front desk via the Contact Us page.
                  </div>
                )}

                <div className="pt-3 border-t border-[#27364B]/10 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2.5 rounded-xl border border-[#27364B]/20 text-xs font-semibold text-[#27364B] hover:bg-neutral-100 cursor-pointer"
                  >
                    Close Window
                  </button>
                  {selectedEvent.category === 'Upcoming' ? (
                    <button
                      type="button"
                      onClick={() => setRsvpSubmittedId(selectedEvent.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {rsvpSubmittedId === selectedEvent.id
                          ? 'Demo RSVP Saved'
                          : 'Reserve Family Spot (Demo)'}
                      </span>
                    </button>
                  ) : (
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90"
                    >
                      <span>View Event Photos in Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
