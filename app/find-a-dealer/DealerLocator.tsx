'use client';

import { useState } from 'react';

interface Dealer {
  name: string;
  address: string;
  phone: string;
  tags: string[];
  tab: 'all' | 'ferguson' | 'distributor';
}

const dealers: Dealer[] = [
  {
    name: 'Ferguson — Los Angeles',
    address: '1240 Industrial Blvd, Los Angeles, CA 90021',
    phone: '(213) 555-0148',
    tags: ['Ferguson', 'Authorized Dealer'],
    tab: 'ferguson',
  },
  {
    name: 'Pacific Plumbing Supply',
    address: '2100 Harbor Blvd, Anaheim, CA 92805',
    phone: '(714) 555-0210',
    tags: ['Authorized Dealer'],
    tab: 'distributor',
  },
  {
    name: 'VAMAC — Northern VA',
    address: '8350 Terminal Rd, Lorton, VA 22079',
    phone: '(703) 555-0330',
    tags: ['VAMAC', 'Volume Orders'],
    tab: 'distributor',
  },
  {
    name: 'Eastern Industrial Supply',
    address: '400 Commerce Dr, Charlotte, NC 28273',
    phone: '(704) 555-0445',
    tags: ['Distributor', 'ADA Specialist'],
    tab: 'distributor',
  },
  {
    name: 'Western Plumbing Distributors',
    address: '889 Commerce Way, San Diego, CA 92101',
    phone: '(619) 555-0515',
    tags: ['Authorized Dealer'],
    tab: 'distributor',
  },
];

type ActiveTab = 'all' | 'ferguson' | 'distributor';

const tabs: { id: ActiveTab; label: string }[] = [
  { id: 'all', label: 'All Dealers' },
  { id: 'ferguson', label: 'Ferguson' },
  { id: 'distributor', label: 'Distributors' },
];

export function DealerSearch() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
      <input
        type="text"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        placeholder="Enter ZIP code or city..."
        className="flex-1 px-5 py-3.5 border border-[var(--color-line)] rounded-md bg-white text-[var(--color-text)] text-sm font-light focus:outline-none focus:border-[var(--color-primary)] transition-colors"
        aria-label="Search for dealers by ZIP code or city"
      />
      <button
        type="button"
        style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-primary)' }}
        className="px-8 py-3.5 text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded-md transition-opacity hover:opacity-85 cursor-pointer whitespace-nowrap"
      >
        Search
      </button>
    </div>
  );
}

export function DealerList() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');

  const filteredDealers = dealers.filter((d) => {
    if (activeTab === 'all') return true;
    return d.tab === activeTab;
  });

  return (
    <div>
      {/* Tab Bar */}
      <div className="flex gap-1 mb-6 border-b border-[var(--color-line)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{ fontFamily: 'var(--font-heading)' }}
            className={`px-4 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dealer Cards */}
      <div className="space-y-4">
        {filteredDealers.map((dealer, i) => (
          <div
            key={dealer.name}
            className={`bg-white rounded-lg border p-5 transition-all ${
              i === 0 && activeTab === 'all'
                ? 'border-[var(--color-primary)] shadow-sm'
                : 'border-[var(--color-line)] hover:border-[var(--color-primary)] hover:shadow-sm'
            }`}
          >
            <h3
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-[var(--color-secondary)] text-base mb-1"
            >
              {dealer.name}
            </h3>
            <p className="text-[var(--color-text-muted)] font-light text-sm mb-1">{dealer.address}</p>
            <p className="text-[var(--color-text-muted)] font-light text-sm mb-3">
              <a
                href={`tel:${dealer.phone.replace(/[^0-9]/g, '')}`}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {dealer.phone}
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              {dealer.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] uppercase rounded bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface BecomeFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const initialBecomeForm: BecomeFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

const inputClass =
  'w-full px-4 py-3 border border-[var(--color-line)] rounded-md bg-white text-[var(--color-text)] text-sm font-light focus:outline-none focus:border-[var(--color-primary)] transition-colors';

const labelClass =
  'block text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--color-text-muted)] mb-1.5';

export function BecomeADealerForm() {
  const [form, setForm] = useState<BecomeFormState>(initialBecomeForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setForm(initialBecomeForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-[var(--color-primary-light)] border border-[var(--color-primary)]/30 p-6 text-center">
        <p
          style={{ fontFamily: 'var(--font-heading)' }}
          className="font-semibold text-[var(--color-secondary)] mb-2"
        >
          Enquiry received!
        </p>
        <p className="text-[var(--color-text-muted)] font-light text-sm">
          Our sales team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="become-name"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Name <span className="text-[var(--color-coral)]">*</span>
        </label>
        <input
          id="become-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="become-company"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Company <span className="text-[var(--color-coral)]">*</span>
        </label>
        <input
          id="become-company"
          name="company"
          type="text"
          required
          value={form.company}
          onChange={handleChange}
          placeholder="Plumbing Supply Co."
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="become-email"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            Email <span className="text-[var(--color-coral)]">*</span>
          </label>
          <input
            id="become-email"
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
            htmlFor="become-phone"
            style={{ fontFamily: 'var(--font-heading)' }}
            className={labelClass}
          >
            Phone
          </label>
          <input
            id="become-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="become-message"
          style={{ fontFamily: 'var(--font-heading)' }}
          className={labelClass}
        >
          Message
        </label>
        <textarea
          id="become-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business, coverage area, and customer base..."
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-[var(--color-coral-light)] rounded text-[var(--color-coral)] text-sm font-light border border-[var(--color-coral)]/20">
          Something went wrong. Please try again or call (800) 446-2647.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-primary)' }}
        className="w-full py-3.5 text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded-md transition-opacity hover:opacity-85 disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
