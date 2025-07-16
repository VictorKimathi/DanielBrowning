import React from 'react';
export const PortfolioPage = () => {
  const portfolioItems = [{
    title: 'The Future of AI in Enterprise',
    category: 'Thought Leadership',
    client: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    description: 'An in-depth analysis of how artificial intelligence is transforming enterprise operations and strategy.'
  }, {
    title: 'Cloud Migration Strategy Guide',
    category: 'Technical Guide',
    client: 'AWS Blog',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A comprehensive guide to planning and executing a successful cloud migration for enterprise companies.'
  }, {
    title: 'The Ethics of Data Collection',
    category: 'Feature Article',
    client: 'Wired Magazine',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
    description: 'Exploring the ethical implications of large-scale data collection in the age of AI and machine learning.'
  }, {
    title: 'Blockchain Beyond Cryptocurrency',
    category: 'Feature Article',
    client: 'The Verge',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'An exploration of practical applications for blockchain technology beyond cryptocurrency.'
  }, {
    title: 'The State of DevOps in 2023',
    category: 'Industry Report',
    client: 'GitLab Blog',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A comprehensive analysis of current trends, challenges, and best practices in DevOps.'
  }, {
    title: 'Cybersecurity for Small Businesses',
    category: 'Guide',
    client: 'Microsoft SMB Blog',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A practical guide to implementing effective cybersecurity measures for small and medium businesses.'
  }];
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Portfolio
          </h1>
          <p className="font-serif text-lg text-gray-700 mb-12 max-w-2xl">
            A selection of my published work across various publications and
            clients. Each piece represents my commitment to clarity, depth, and
            engaging storytelling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => <div key={index} className="bg-white border border-gray-100 overflow-hidden">
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
                    Read article
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};