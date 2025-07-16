import React from 'react';
import { FileText, Code, Layers, Search, GitBranch, Users } from 'lucide-react';

export const ServicesPage = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Technical Documentation',
      description: 'Clear, structured product guides, feature briefs, and onboarding docs that help users understand your software or hardware with ease.'
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'API & Developer Docs',
      description: 'Precise, developer-friendly documentation for APIs and technical systems, ensuring smooth adoption by engineering teams.'
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: 'UX & Interface Copy',
      description: 'Collaborative work with UX teams to simplify language across interfaces, tooltips, and help copy, improving user experience.'
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: 'SEO for Tech Content',
      description: 'SEO-driven articles, buyer’s guides, and product comparisons that increase visibility and resonate with technical audiences.'
    },
    {
      icon: <GitBranch className="h-10 w-10" />,
      title: 'Agile Content Support',
      description: 'Documentation and content workflows built for Agile environments, integrating seamlessly with Jira, Confluence, and version control systems.'
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Internal Knowledge Systems',
      description: 'Creation of internal docs, tech literacy workshops, and searchable digital manuals to streamline onboarding and support teams.'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Services
          </h1>
          <p className="font-serif text-lg text-gray-700 mb-12 max-w-3xl">
            I offer specialized writing and documentation services for tech companies, grounded in over a decade of translating complex systems into user-focused content. Each service can be tailored to your product and team needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
          <div className="mt-20 bg-gray-50 p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase mb-6">Work Process</h2>
            <ol className="space-y-12">
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery</h3>
                  <p className="font-serif text-gray-700">
                    We start by understanding your product, audience, and goals, laying the foundation for content that supports your vision.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Research & Planning</h3>
                  <p className="font-serif text-gray-700">
                    I dive deep into your technology, industry benchmarks, and competitors to build a solid, informed content plan.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                  <p className="font-serif text-gray-700">
                    Whether it’s technical docs or UX copy, I deliver content that’s accurate, clear, and aligned with your brand voice.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Review & Refinement</h3>
                  <p className="font-serif text-gray-700">
                    Through collaborative feedback loops, we polish the content to ensure it meets your exact needs before final delivery.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold uppercase mb-6">
              Ready to work together?
            </h2>
            <p className="font-serif text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let’s talk about how I can help you create documentation and content that empower your users and elevate your product.
            </p>
            <a href="/contact" className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
