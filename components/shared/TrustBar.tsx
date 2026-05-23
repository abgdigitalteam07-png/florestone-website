const items = [
  { label: 'Made in the USA' },
  { label: 'ADA & ANSI A117.1 Compliant' },
  { label: 'Residential & Commercial' },
  { label: 'CAD & Spec Sheets Available' },
  { label: 'Nationwide Distributor Network' },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--color-sand)] border-y border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-0 overflow-x-auto">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 whitespace-nowrap text-xs font-body text-[var(--color-slate)] px-6 first:pl-0 ${
              i !== items.length - 1 ? 'border-r border-[var(--color-line)]' : ''
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
            <span className="uppercase tracking-wide font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
