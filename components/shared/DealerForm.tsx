'use client';

import { useState } from 'react';

export default function DealerForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    postalCode: '',
    role: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', phone: '', postalCode: '', role: '', interest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-[var(--color-line)] rounded-md bg-[var(--color-offwhite)] font-body text-[var(--color-charcoal)] text-sm focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors';
  const labelClass =
    'block text-[11px] font-body font-medium uppercase tracking-[0.14em] text-[var(--color-slate)] mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="ABC Construction"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Zip / Postal Code *</label>
          <input
            type="text"
            required
            value={form.postalCode}
            onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
            placeholder="90210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>I am a&hellip;</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className={inputClass}
          >
            <option value="">Select your role</option>
            <option value="Contractor">Contractor / Builder</option>
            <option value="Architect">Architect / Designer</option>
            <option value="Facility">Facility Manager</option>
            <option value="Distributor">Distributor / Dealer</option>
            <option value="Homeowner">Homeowner</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Product line of interest</label>
        <select
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a Florestone line</option>
          <option value="Saflor S Series">S Series — Compression-Molded Recess Shower Bases</option>
          <option value="F Series AcrylX">F Series — AcrylX™ Closed Mold Fiberglass</option>
          <option value="T Series Terrazzo">T Series — Cast Terrazzo (Models 100–500)</option>
          <option value="Barrier-Free">Barrier-Free / ADA-Compliant</option>
          <option value="Mop Sinks">Terrazzo Mop Sinks (Models 5–99)</option>
          <option value="Bathtubs">F Series Bathtubs (Reyna, Diana, Pegasus, etc.)</option>
          <option value="Tub-Showers">Tub-Showers (6032TS / 6034TS / 6036TS / 6042TS)</option>
          <option value="Stalls Walls">Shower Stalls & 3-Piece Walls</option>
          <option value="Utility Sinks">Utility Sinks (Wall-Mount / Freestanding / Service)</option>
          <option value="Unsure">Not sure — need spec guidance</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          placeholder="Tell us about your project, volume, or timeline..."
          className={inputClass}
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-[var(--color-accent-light)] rounded-md text-[var(--color-accent-dark)] font-body font-medium text-sm border border-[var(--color-accent)]/20">
          Thank you — your inquiry has been received. A Florestone sales rep will be in touch shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-[#FDEAEA] rounded-md text-[var(--color-warning)] font-body font-medium text-sm border border-[var(--color-warning)]/20">
          Something went wrong. Please try again or email sales@florestone.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-body font-medium text-sm rounded-md transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Inquiry →'}
      </button>
    </form>
  );
}
