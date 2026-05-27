'use client';

import { useState } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  projectType: string;
  message: string;
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  role: '',
  projectType: '',
  message: '',
};

const inputClass =
  'w-full px-4 py-3 border border-[var(--color-line)] rounded-md bg-[var(--color-offwhite)] text-[var(--color-text)] text-sm font-light focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors';

const labelClass =
  'block text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--color-text-muted)] mb-1.5';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary-light)] p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{ fontFamily: 'var(--font-heading)' }}
          className="font-semibold text-[var(--color-secondary)] text-lg mb-2"
        >
          Message received!
        </h3>
        <p className="text-[var(--color-text-muted)] font-light text-sm leading-relaxed">
          A Florestone sales representative will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* First + Last Name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            First Name <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Jane"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            Last Name <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="ABC Construction"
          className={inputClass}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            Email <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Role */}
      <div>
        <label
          htmlFor="role"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          I am a&hellip;
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select your role</option>
          <option value="Contractor">Contractor / Builder</option>
          <option value="Architect">Architect / Designer</option>
          <option value="Facility">Facility Manager</option>
          <option value="Distributor">Distributor / Dealer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select project type</option>
          <option value="New Construction">New Construction</option>
          <option value="Renovation">Renovation / Remodel</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Multifamily">Multifamily</option>
          <option value="Hospitality">Hospitality</option>
          <option value="School">School / Institution</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, volume, or timeline..."
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-[var(--color-coral-light)] rounded-md text-[var(--color-coral)] text-sm font-light border border-[var(--color-coral)]/20">
          Something went wrong. Please try again or call (800) 446-2647.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-primary)' }}
        className="w-full py-4 text-white text-[13px] font-semibold tracking-[0.06em] uppercase rounded transition-opacity hover:opacity-85 disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
