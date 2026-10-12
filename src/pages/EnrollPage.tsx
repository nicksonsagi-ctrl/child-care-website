import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  AlertCircle,
  Info,
  CheckCircle2,
  RotateCcw,
  FileCheck,
  Lock,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { PROGRAMS_DATA } from '../data/siteData';

interface EnrollmentFormState {
  childName: string;
  dateOfBirth: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  selectedProgram: string;
  preferredStartDate: string;
  additionalNotes: string;
  privacyAccepted: boolean;
}

interface EnrollmentErrors {
  childName?: string;
  dateOfBirth?: string;
  parentName?: string;
  email?: string;
  phone?: string;
  address?: string;
  selectedProgram?: string;
  preferredStartDate?: string;
  privacyAccepted?: string;
}

export const EnrollPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProgram = searchParams.get('program') || '';

  const [form, setForm] = useState<EnrollmentFormState>({
    childName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    selectedProgram: preselectedProgram,
    preferredStartDate: '',
    additionalNotes: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<EnrollmentErrors>({});
  const [demoPreviewActive, setDemoPreviewActive] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setForm((prev) => ({ ...prev, selectedProgram: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const validateForm = (): boolean => {
    const nextErrors: EnrollmentErrors = {};
    if (!form.childName.trim() || form.childName.trim().length < 2) {
      nextErrors.childName = "Please enter the child's full name.";
    }
    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth = "Please select the child's date of birth.";
    }
    if (!form.parentName.trim() || form.parentName.trim().length < 2) {
      nextErrors.parentName = "Please enter the parent or guardian's full name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid parent/guardian email address.';
    }
    const phoneRegex = /^[0-9+\-()\s]{7,20}$/;
    if (!form.phone.trim() || !phoneRegex.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!form.address.trim() || form.address.trim().length < 5) {
      nextErrors.address = 'Please enter your residential address.';
    }
    if (!form.selectedProgram) {
      nextErrors.selectedProgram = 'Please choose one of our five care programs.';
    }
    if (!form.preferredStartDate) {
      nextErrors.preferredStartDate = 'Please select a preferred start date.';
    }
    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted = 'Please acknowledge the demonstration privacy notice.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setDemoPreviewActive(true);
    }
  };

  const handleReset = () => {
    setForm({
      childName: '',
      dateOfBirth: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      selectedProgram: '',
      preferredStartDate: '',
      additionalNotes: '',
      privacyAccepted: false,
    });
    setErrors({});
    setDemoPreviewActive(false);
  };

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="ADMISSIONS APPLICATION · 2026 / 2027 ENROLLMENT"
        title="Begin Your Child’s Journey at Little Hearts"
        subtitle="Complete our online enrollment application below. We review applications weekly and invite every family for a warm, unhurried morning visit."
        breadcrumbCurrent="Enroll Now"
        accentColor="#FFDCE5"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Enrollment Application Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-[#27364B]/12 bg-white p-7 sm:p-10 space-y-8">
              <div className="space-y-2 border-b border-[#27364B]/10 pb-6">
                <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  CHILD &amp; FAMILY ENROLLMENT FORM (DEMO MODE)
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                  Student Application Details
                </h2>
                <p className="text-sm text-[#27364B]/75">
                  Please complete all required fields marked with an asterisk (*).
                </p>
              </div>

              {demoPreviewActive && (
                <div
                  role="status"
                  className="rounded-2xl bg-[#D8F4E5]/70 border border-[#27364B]/20 p-6 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#27364B] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#27364B]">
                        Demonstration Application Validated (Zero Data Transmitted)
                      </h3>
                      <p className="text-xs sm:text-sm text-[#27364B]/85 leading-relaxed">
                        Your enrollment form for <strong>{form.childName}</strong> in the{' '}
                        <strong>{form.selectedProgram}</strong> program (Preferred Start:{' '}
                        <span className="font-mono-num">{form.preferredStartDate}</span>) passed all
                        validation checks. In accordance with our privacy safeguards, this
                        demonstration form does not collect, store, or transmit personal data to any
                        external server.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Clear Demo Application</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Child's Name & Date of Birth */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-childName"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Child&apos;s Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-childName"
                      type="text"
                      value={form.childName}
                      onChange={(e) => {
                        setForm({ ...form, childName: e.target.value });
                        if (errors.childName) setErrors({ ...errors, childName: undefined });
                      }}
                      placeholder="e.g. Oliver James Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.childName && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.childName}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-dob"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Child&apos;s Date of Birth <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-dob"
                      type="date"
                      value={form.dateOfBirth}
                      onChange={(e) => {
                        setForm({ ...form, dateOfBirth: e.target.value });
                        if (errors.dateOfBirth) setErrors({ ...errors, dateOfBirth: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.dateOfBirth && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.dateOfBirth}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Parent/Guardian Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-parentName"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Parent / Guardian Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-parentName"
                      type="text"
                      value={form.parentName}
                      onChange={(e) => {
                        setForm({ ...form, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      placeholder="e.g. Clara Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.parentName}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-email"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Residential Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-phone"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(555) 234-5678"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-address"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Residential Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-address"
                      type="text"
                      value={form.address}
                      onChange={(e) => {
                        setForm({ ...form, address: e.target.value });
                        if (errors.address) setErrors({ ...errors, address: undefined });
                      }}
                      placeholder="Street, City, State, ZIP"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.address && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.address}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Selected Program & Preferred Start Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-program"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Selected Program <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="enroll-program"
                      value={form.selectedProgram}
                      onChange={(e) => {
                        setForm({ ...form, selectedProgram: e.target.value });
                        if (errors.selectedProgram)
                          setErrors({ ...errors, selectedProgram: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    >
                      <option value="">Choose a Care Program...</option>
                      {PROGRAMS_DATA.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} ({p.ageGroup})
                        </option>
                      ))}
                    </select>
                    {errors.selectedProgram && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.selectedProgram}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enroll-startDate"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Preferred Start Date <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="enroll-startDate"
                      type="date"
                      value={form.preferredStartDate}
                      onChange={(e) => {
                        setForm({ ...form, preferredStartDate: e.target.value });
                        if (errors.preferredStartDate)
                          setErrors({ ...errors, preferredStartDate: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.preferredStartDate && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredStartDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enroll-notes"
                    className="block text-xs font-semibold text-[#27364B]"
                  >
                    Additional Notes (Allergies, Sleep Rhythms, Sibling Info)
                  </label>
                  <textarea
                    id="enroll-notes"
                    rows={3}
                    value={form.additionalNotes}
                    onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                    placeholder="Share any helpful details about your child's temperament, dietary needs, or preferred schedule..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                  />
                </div>

                {/* Privacy Notice & Checkbox */}
                <div className="rounded-2xl bg-[#D8F1FF]/35 border border-[#27364B]/12 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#27364B]">
                    <Lock className="w-4 h-4" />
                    <span>FAMILY PRIVACY &amp; ZERO-TRANSMISSION NOTICE</span>
                  </div>
                  <p className="text-xs text-[#27364B]/80 leading-relaxed">
                    This enrollment application is an interactive demonstration. We do not collect,
                    persist, or transmit any personal or child information entered on this page to
                    any external server or third party.
                  </p>
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={form.privacyAccepted}
                      onChange={(e) => {
                        setForm({ ...form, privacyAccepted: e.target.checked });
                        if (errors.privacyAccepted)
                          setErrors({ ...errors, privacyAccepted: undefined });
                      }}
                      className="mt-0.5 rounded border-[#27364B]/30"
                    />
                    <span className="text-xs font-medium text-[#27364B]">
                      I understand this is a client-side demonstration form and that no personal
                      information is collected or transmitted. <span className="text-rose-600">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="text-xs text-rose-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.privacyAccepted}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-3.5 rounded-2xl border border-[#27364B]/20 text-xs sm:text-sm font-semibold text-[#27364B] hover:bg-neutral-100 cursor-pointer"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-transform active:scale-98 cursor-pointer whitespace-nowrap"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Enrollment Steps & Tuition Inclusions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-[#27364B]/12 bg-[#FFF0B3]/40 p-7 space-y-5">
              <h3 className="font-display text-2xl font-semibold text-[#27364B]">
                Our 3-Step Gentle Admission Process
              </h3>
              <ol className="space-y-4 text-sm text-[#27364B]/85">
                <li className="flex items-start gap-3">
                  <span className="font-mono-num w-6 h-6 rounded-lg bg-[#27364B] text-[#FFFDF7] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="block text-[#27364B]">Online Inquiry</strong>
                    <span>
                      Submit your preferred program and start date so we can check studio space for
                      your child&apos;s age group.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono-num w-6 h-6 rounded-lg bg-[#27364B] text-[#FFFDF7] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="block text-[#27364B]">Morning Family Visit</strong>
                    <span>
                      Meet our Director and your child&apos;s lead educator while exploring our
                      indoor studios and outdoor garden.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono-num w-6 h-6 rounded-lg bg-[#27364B] text-[#FFFDF7] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="block text-[#27364B]">3-Day Warm Transition</strong>
                    <span>
                      Every new child begins with three gentle, accompanied morning visits to build
                      trust before full-day care.
                    </span>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-3xl border border-[#27364B]/12 bg-white p-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#27364B]">
                <ShieldCheck className="w-4 h-4" />
                <span>ALL-INCLUSIVE CARE</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#27364B]">
                What Every Enrollment Includes
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#27364B]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                  <span>Chef-prepared organic breakfast, warm lunch &amp; afternoon snacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                  <span>Organic cotton crib/cot sheets laundered daily on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                  <span>All non-toxic art supplies, clay, and Montessori materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27364B] shrink-0 mt-0.5" />
                  <span>Daily parent photo journals &amp; biannual developmental portfolios</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/faq"
                  className="text-xs font-semibold text-[#27364B] underline hover:opacity-80"
                >
                  Read Admission &amp; Tuition FAQs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
