import React from 'react';
import { FileText, Lightbulb, PenTool, BookOpen } from 'lucide-react';
export const Services = () => {
  const services = [{
    icon: <FileText className="h-8 w-8" />,
    title: 'Long-form Features',
    description: 'In-depth articles that explore complex tech topics with clarity and narrative flair.'
  }, {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Thought Leadership',
    description: 'Strategic content that positions you or your company as an authority in your industry.'
  }, {
    icon: <PenTool className="h-8 w-8" />,
    title: 'Product Deep Dives',
    description: 'Detailed explorations of your product that highlight its unique value and technical innovations.'
  }, {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Editorial Strategy',
    description: 'Comprehensive content planning that aligns with your business goals and audience needs.'
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            Services
          </h2>
          <p className="font-serif text-lg text-gray-700">
            I offer a range of writing and editorial services tailored to tech
            companies looking to elevate their content and connect with their
            audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {services.map((service, index) => <div key={index} className="flex">
              <div className="mr-6 text-[#446DFF]">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="font-serif text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="/services" className="inline-flex items-center text-sm uppercase tracking-wider font-medium border-b-2 border-black pb-1 hover:text-[#446DFF] hover:border-[#446DFF] transition-colors">
            Learn more about my services
          </a>
        </div>
      </div>
    </section>;
};