import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  Info,
  Instagram,
  Facebook,
  Youtube,
  RotateCcw,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^[0-9+\-()\s]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (7–20 digits).';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select or enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setDemoSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setDemoSubmitted(false);
  };

  return (
    <div className="space-y-20 pb-12">
      {/* Page Hero */}
      <PageHero
        kicker="GET IN TOUCH · SCHEDULE A PRIVATE TOUR"
        title="We Would Love to Welcome Your Family"
        subtitle="Have questions about our programs, tuition, or morning tour availability? Reach out to our admissions desk or send us an inquiry below."
        breadcrumbCurrent="Contact Us"
        accentColor="#D8F1FF"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information, Opening Hours, Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#27364B]/12 bg-white p-7 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  CAMPUS DIRECTORY
                </p>
                <h2 className="font-display text-2xl font-semibold text-[#27364B]">
                  Contact Information &amp; Hours
                </h2>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFDCE5] text-[#27364B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#27364B]">Campus Address (Placeholder)</h3>
                    <p className="text-[#27364B]/80 mt-0.5">
                      420 Willow Creek Lane, Meadowbrook Gardens, CA 94301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#D8F1FF] text-[#27364B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#27364B]">Direct Phone Lines</h3>
                    <p className="font-mono-num text-[#27364B]/80 mt-0.5">
                      Front Desk: (555) 234-8910
                    </p>
                    <p className="font-mono-num text-[#27364B]/80">
                      Nurse Station: (555) 234-8914
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0B3] text-[#27364B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#27364B]">Email Addresses</h3>
                    <p className="text-[#27364B]/80 mt-0.5">hello@littleheartscare.org</p>
                    <p className="text-[#27364B]/80">admissions@littleheartscare.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#D8F4E5] text-[#27364B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#27364B]">Opening Hours</h3>
                    <p className="text-[#27364B]/80 mt-0.5">
                      Monday – Friday: 7:30 AM – 6:00 PM
                    </p>
                    <p className="text-[#27364B]/80">
                      Private Family Tours: Tue–Thu at 9:30 AM &amp; 10:30 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-5 border-t border-[#27364B]/10 space-y-3">
                <h3 className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  CONNECT ON SOCIAL MEDIA
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFDCE5]/60 text-[#27364B] text-xs font-semibold hover:bg-[#FFDCE5] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#D8F1FF]/60 text-[#27364B] text-xs font-semibold hover:bg-[#D8F1FF] transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF0B3]/60 text-[#27364B] text-xs font-semibold hover:bg-[#FFF0B3] transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Campus Map Placeholder Card */}
            <div className="rounded-3xl border border-[#27364B]/12 bg-[#D8F4E5]/40 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-[#27364B]">
                  Campus Location Map Placeholder
                </h3>
                <span className="text-xs font-medium text-[#27364B]/70">Meadowbrook District</span>
              </div>

              {/* Illustrated SVG Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden border border-[#27364B]/15 bg-[#FFFDF7] h-52 flex flex-col items-center justify-center p-6 text-center">
                <svg
                  className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
                  viewBox="0 0 400 200"
                  fill="none"
                >
                  <path d="M0 40 H400 M0 100 H400 M0 160 H400" stroke="#27364B" strokeWidth="1.5" />
                  <path d="M80 0 V200 M200 0 V200 M320 0 V200" stroke="#27364B" strokeWidth="1.5" />
                  <circle cx="200" cy="100" r="38" fill="#D8F4E5" />
                </svg>
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-11 h-11 rounded-2xl bg-[#27364B] text-[#FFFDF7] flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-display text-sm font-semibold text-[#27364B]">
                    Little Hearts Children&apos;s Care Home
                  </p>
                  <p className="text-xs text-[#27364B]/75 max-w-xs">
                    420 Willow Creek Lane · Dedicated Visitor Parking in South Courtyard
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Honest Demo State */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#27364B]/12 bg-white p-7 sm:p-10 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider text-[#27364B]/70">
                  SEND US A MESSAGE (DEMO FORM)
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#27364B]">
                  Ask a Question or Request a Morning Tour
                </h2>
                <p className="text-sm text-[#27364B]/75">
                  Fill out the fields below. Because this website runs in a client-side preview
                  environment without a live mail backend, submitting this form demonstrates
                  client-side validation without transmitting personal data.
                </p>
              </div>

              {demoSubmitted && (
                <div
                  role="status"
                  className="rounded-2xl bg-[#FFF0B3]/65 border border-[#27364B]/20 p-5 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#27364B] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#27364B]">
                        Demonstration Form Mode — No Backend Configured
                      </h3>
                      <p className="text-xs sm:text-sm text-[#27364B]/85 leading-relaxed">
                        All fields passed validation for <strong>{formData.fullName}</strong> (
                        {formData.email}). Since no live backend server is configured for this demo,
                        your message was validated locally in your browser and was not transmitted
                        externally.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1 flex justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#27364B] text-[#FFFDF7] text-xs font-semibold hover:bg-[#27364B]/90 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Demo Form</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Clara & Julian Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
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

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-[#27364B]"
                    >
                      Subject <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                    >
                      <option value="">Select a topic...</option>
                      <option value="Schedule a Private Morning Tour">
                        Schedule a Private Morning Tour
                      </option>
                      <option value="Tuition & Program Availability">
                        Tuition &amp; Program Availability
                      </option>
                      <option value="Infant & Toddler Care Inquiry">
                        Infant &amp; Toddler Care Inquiry
                      </option>
                      <option value="Allergy & Wellness Questions">
                        Allergy &amp; Wellness Questions
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    {errors.subject && (
                      <p className="text-xs text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#27364B]"
                  >
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about your child's age, preferred schedule, or questions for our educators..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#27364B]/20 text-sm text-[#27364B] focus:outline-none focus:border-[#27364B]"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[#27364B]/65">
                    Demo Notice: Form inputs stay in your browser and are not transmitted.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#27364B] text-[#FFFDF7] text-sm font-semibold hover:bg-[#27364B]/90 transition-transform active:scale-98 cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
