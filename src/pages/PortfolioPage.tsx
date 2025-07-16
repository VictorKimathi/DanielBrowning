import React from 'react';

export const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: 'Technical Content Strategist at Bytewise Software',
      category: 'SaaS Documentation',
      client: 'Bytewise Software',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80',
      description: 'Developed long-form product guides, onboarding docs, and scalable release note templates for a SaaS platform. Collaborated with developers and UX teams to simplify language, boosting engagement by 40% with structured how-to content.'
    },
    {
      title: 'Freelance Tech Writer',
      category: 'Consumer Tech & SEO',
      client: 'TechRadar, MUO, Digital Trends',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Wrote product comparisons, buyer’s guides, and tech explainers. Specialized in electronics, app walkthroughs, and privacy tools, consistently building strong SEO practices for higher visibility.'
    },
    {
      title: 'IT Support Specialist at MidSouth Logistics',
      category: 'Technical Support & Docs',
      client: 'MidSouth Logistics',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80',
      description: 'Provided tech support across departments, created internal documentation to streamline onboarding, led tech literacy workshops, and digitized manuals into searchable formats.'
    },
    {
      title: 'B.A. in Communications',
      category: 'Education',
      client: 'Northeast State Community College',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Graduated in 2006 with a strong foundation in clear communication, media writing, and audience engagement—skills that underpin my technical writing today.'
    },
    {
      title: 'Certified Technical Writer',
      category: 'Certifications & Memberships',
      client: 'STC, ASJA',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Certified by the Society for Technical Communication, member of the American Society of Journalists and Authors, and volunteer contributor to open source docs projects.'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Portfolio
          </h1>
          <p className="font-serif text-lg text-gray-700 mb-12 max-w-2xl">
            A selection of my professional journey and credentials. Each reflects my commitment to translating complex concepts into user-focused content that informs and engages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                    {item.category} • {item.client}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="font-serif text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <a href="#" className="text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-[#446DFF] hover:border-[#446DFF] transition-colors">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
