import React from 'react';
import { FileText, Lightbulb, PenTool, BookOpen, Code, BarChart } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Technical Documentation',
      description: 'Clear, user-focused SaaS product guides, feature briefs, and release notes that simplify complex platforms.'
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'UX Writing & Onboarding',
      description: 'Concise interface copy and onboarding docs that improve user experience and reduce support tickets.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'SEO & Tech Content',
      description: 'High-visibility product comparisons, buyer’s guides, and tutorials crafted with strong SEO practices.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'API & Developer Docs',
      description: 'Detailed API documentation and examples that empower developers to integrate and build faster.'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Content Strategy',
      description: 'Content planning for B2B tech companies that aligns with agile workflows and business goals.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Internal Help Docs',
      description: 'Operational documentation and tech literacy resources that streamline support and training.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            Services
          </h2>
          <p className="font-serif text-lg text-gray-700">
            I help tech companies translate complex products into clear, compelling content —
            from technical documentation to SEO-driven articles — backed by 12+ years of experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <div className="mr-6 text-[#446DFF]">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="font-serif text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center text-sm uppercase tracking-wider font-medium border-b-2 border-black pb-1 hover:text-[#446DFF] hover:border-[#446DFF] transition-colors"
          >
            Learn more about my services
          </a>
        </div>
      </div>
    </section>
  );
};
