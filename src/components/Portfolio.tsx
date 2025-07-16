import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Portfolio = () => {
  const portfolioItems = [{
    title: 'The Future of AI in Enterprise',
    category: 'Thought Leadership',
    client: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    link: '/portfolio/ai-enterprise'
  }, {
    title: 'Cloud Migration Strategy Guide',
    category: 'Technical Guide',
    client: 'AWS Blog',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/portfolio/cloud-migration'
  }, {
    title: 'The Ethics of Data Collection',
    category: 'Feature Article',
    client: 'Wired Magazine',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
    link: '/portfolio/data-ethics'
  }];
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Selected Work
            </h2>
            <p className="font-serif text-lg text-gray-700 max-w-2xl">
              A curated collection of my recent articles, thought leadership
              pieces, and technical content.
            </p>
          </div>
          <Link to="/portfolio" className="mt-6 md:mt-0 inline-flex items-center text-sm uppercase tracking-wider font-medium group">
            View all work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => <Link to={item.link} key={index} className="group">
              <div className="bg-white overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                    {item.category} • {item.client}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <span className="text-sm uppercase tracking-wider font-medium border-b border-black pb-1 group-hover:text-[#446DFF] group-hover:border-[#446DFF] transition-colors">
                    Read case study
                  </span>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};