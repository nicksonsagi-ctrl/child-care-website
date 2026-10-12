import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowRight } from 'lucide-react';
import { FloatingClouds, DecorativeSun } from '../components/SafeImage';

export const NotFoundPage: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          'linear-gradient(135deg, #D8F1FF66 0%, #FFFDF7 50%, #FFDCE555 100%)',
      }}
    >
      <FloatingClouds className="w-48 text-white/80 absolute top-10 left-10 animate-float-slow" />
      <DecorativeSun className="w-28 h-28 absolute top-12 right-16 opacity-70 animate-float-gentle" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-[#FFF0B3] border border-[#27364B]/15 text-[#27364B] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <p className="font-mono-num text-sm font-semibold text-[#27364B]/70">
          404 · PAGE NOT FOUND
        </p>

        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#27364B] tracking-tight">
          Oops! This Little Path wandered Off the Playground
        </h1>

        <p className="text-base sm:text-lg text-[#27364B]/80 max-w-xl mx-auto leading-relaxed">
          We couldn&apos;t find the page you were looking for. Let&apos;s guide you back to our
          classrooms, programs, or homepage.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#27364B]/20 text-[#27364B] text-sm font-semibold hover:bg-[#FFF0B3]/50 transition-colors"
          >
            <span>Explore Our Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
