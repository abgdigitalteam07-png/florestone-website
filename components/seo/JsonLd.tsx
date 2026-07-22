export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Florestone',
  alternateName: 'Florestone Products',
  url: 'https://www.florestone.com',
  logo: 'https://www.florestone.com/images/florestone-logo.png',
  description:
    'Florestone is an American manufacturer of shower bases, ADA barrier-free units, terrazzo mop sinks and complete bath solutions. Founded in 1947, manufactured in Madera, CA and Denison, TX.',
  foundingDate: '1947',
  founder: { '@type': 'Person', name: 'Ray Flores' },
  parentOrganization: { '@type': 'Organization', name: 'American Bath Group' },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Madera',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Denison',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-446-2647',
    contactType: 'sales',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Fr 07:00-17:00',
  },
  sameAs: ['https://www.florestone.com'],
  knowsAbout: [
    'Shower bases',
    'ADA barrier-free shower units',
    'Cast terrazzo',
    'Closed mold fiberglass',
    'AcrylX acrylic surface',
    'S Series recess shower receptors',
    'Mop sinks',
    'Plumbing trade products',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Florestone',
  url: 'https://www.florestone.com',
  description: 'Made for the Trade — shower bases, ADA units, and bath solutions manufactured in the USA since 1947.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.florestone.com/products?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function productGroupSchema({
  name,
  description,
  brand = 'Florestone',
  url,
  image,
  category,
}: {
  name: string;
  description: string;
  brand?: string;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    name,
    description,
    brand: { '@type': 'Brand', name: brand },
    url,
    ...(image ? { image } : {}),
    ...(category ? { category } : {}),
    manufacturer: {
      '@type': 'Organization',
      name: 'Florestone',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madera',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
  };
}
