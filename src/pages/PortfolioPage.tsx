import React from 'react';

export const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: 'AI Haircare: Smart Styling Tools Are Revolutionizing Your Home Salon',
      category: 'Home Tech & Personal Care',
      date: 'November 12 2024',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80',
      description: 'Personal grooming has long been a mix of science and style, but the latest generation of AI-powered hair tools is taking that relationship to a new level. No longer limited to salon appointments or manual trial and error, today’s smart styling devices promise professional-quality results right from your bathroom counter.',
      href: 'AI_Haircare_Smart_Styling_Tools_Are_Revolutionizing_Your_Home_Salon.pdf'
    },
    {
      title: 'Foldables Showdown: Galaxy Z Fold 7 Vs. China’s Best  –  Who’s Really Winning?',
      category: 'Mobile & Consumer Electronics',
      date: 'January 23 2025',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Foldables aren’t new anymore – they’re evolving. As the Galaxy Z Fold 7 makes its debut with refined hardware and more productivity-focused features, a different kind of competition is heating up. Chinese manufacturers like Honor, Oppo and Xiaomi are no longer just catching up; in some cases, they’re outpacing Samsung in design, innovation and value.',
      href: 'Foldables_Showdown_Galaxy_Z_Fold_7_Vs_China’s Best_Who’s_Really_Winning.pdf'
    },
    {
      title: 'How Quantum Radar Might Upend Global Military Strategy',
      category: 'Defense & Emerging Technology',
      date: 'February 9 2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80',
      description: 'Invisible aircraft may not stay invisible for long. A revolutionary sensor called quantum radar is pushing the boundaries of detection, and stealth warfare may never be the same. For decades, stealth technology has given militaries a powerful advantage. Aircraft, ships, and drones have operated deep within enemy territory with minimal risk of detection. From radar-absorbing coatings to heat-masking exhaust systems, entire doctrines have been built around the idea that what cannot be seen cannot be stopped.',
      href: 'How_Quantum_Radar_Might_Upend_Global_Military_Strategy.pdf'
    },
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
                    {item.category} 
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="font-serif text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <a href={item.href} className="text-sm uppercase tracking-wider font-medium border-b border-black pb-1 hover:text-[#446DFF] hover:border-[#446DFF] transition-colors">
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
