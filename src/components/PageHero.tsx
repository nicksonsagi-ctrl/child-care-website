import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { FloatingClouds, DecorativeSun } from './SafeImage';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbCurrent: string;
  accentColor?: string;
  kicker?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbCurrent,
  accentColor = '#D8F1FF',
  kicker,
  children,
}) => {
  return (
    <section
      className="relative overflow-hidden border-b border-[#27364B]/10 pt-10 pb-14 md:pt-14 md:pb-20"
      style={{
        background: `linear-gradient(135deg, ${accentColor}55 0%, #FFFDF7 60%, #FFDCE533 100%)`,
      }}
    >
      {/* Decorative Floating Shapes */}
      <FloatingClouds className="w-40 text-white/80 absolute -top-4 left-8 animate-float-slow hidden sm:block" />
      <FloatingClouds className="w-52 text-white/70 absolute bottom-2 right-12 animate-float-gentle hidden md:block" />
      <DecorativeSun className="w-28 h-28 absolute top-6 right-1/4 opacity-60 animate-float-slow hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-xs font-medium text-[#27364B]/70">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 hover:text-[#27364B] transition-colors whitespace-nowrap shrink-0"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-[#27364B]/40" />
            </li>
            <li className="text-[#27364B] font-semibold whitespace-nowrap shrink-0" aria-current="page">
              {breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          {kicker && (
            <p className="text-xs font-semibold tracking-wider text-[#27364B]/70 mb-2">
              {kicker}
            </p>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#27364B] tracking-tight leading-[1.15] mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#27364B]/80 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
};
