import React from 'react';
export const About = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
            About Daniel
          </h2>
          <div className="font-serif text-lg space-y-6">
            <p>
              I'm Daniel Lee Browning, a tech writer and editorial consultant
              with over a decade of experience translating complex technical
              concepts into compelling narratives.
            </p>
            <p>
              My work spans long-form features, thought leadership articles,
              product deep dives, and editorial strategy for innovative tech
              startups and established enterprise SaaS companies.
            </p>
            <p>
              With a background in both journalism and technology, I bring a
              unique perspective that bridges the gap between technical
              expertise and engaging storytelling.
            </p>
          </div>
          <div className="mt-10">
            <a href="/about" className="text-sm uppercase tracking-wider font-medium border-b-2 border-black pb-1 hover:text-[#446DFF] hover:border-[#446DFF] transition-colors">
              Read full bio
            </a>
          </div>
        </div>
      </div>
    </section>;
};