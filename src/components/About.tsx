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
            I’m a tech writer with over 12 years of experience helping users navigate complex digital products. My journey began in IT support, where I learned firsthand the frustrations users face when technology isn’t clear. This sparked my passion for translating technical concepts into language that’s not just accurate—but genuinely helpful.
            </p>
            <p>
            Since then, I’ve written everything from product guides and API documentation to hardware reviews and software tutorials. Whether it’s building scalable knowledge bases for SaaS platforms or crafting SEO-driven tech explainers for sites like TechRadar and Digital Trends, I bring a blend of technical fluency and storytelling that keeps users engaged and informed.
            </p>
            <p>
            Today, as a Certified Technical Writer and member of the American Society of Journalists and Authors, I continue to explore better ways to connect people with technology—one clear sentence at a time..
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