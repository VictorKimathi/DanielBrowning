import React from 'react';
import { Button } from './common/Button';
export const Hero = () => {
  return <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left column - Image */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh]">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Abstract digital technology visualization" className="w-full h-full object-cover" />
        </div>
        {/* Right column - Text content */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="p-8 md:p-16 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-tight mb-6">
              Tech Writer & Editorial Consultant
            </h1>
            <p className="text-lg md:text-xl font-serif mb-8 text-gray-700">
            Tech writer with over 12 years of experience translating complex topics into clear, user-focused content. Skilled in product documentation, software guides, SaaS content strategy, and hardware reviews. Background in IT support and journalism provides a unique blend of technical fluency and storytelling ability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/portfolio" variant="primary">
                View Portfolio
              </Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};