import React from 'react';
export const AboutPage = () => {
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            About
          </h1>
          <div className="mb-12">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Daniel Lee Browning" className="w-full h-[400px] object-cover object-center mb-8" />
          </div>
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
          <div className="mt-12 pt-12 border-t border-gray-200">
  <h2 className="text-2xl font-bold uppercase mb-6">Experience</h2>
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-bold">Technical Content Strategist</h3>
      <p className="text-gray-600 mb-2">
        Bytewise Software • Remote • 2020 – Present
      </p>
      <p className="font-serif">
        Developed and maintained product guides, feature briefs, and onboarding documentation for a SaaS platform. 
        Collaborated with developers and UX teams to simplify language, built scalable templates for release notes, 
        and boosted engagement by 40% through structured how-to series and interactive support content.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-bold">Freelance Tech Writer</h3>
      <p className="text-gray-600 mb-2">
        Self-Employed • Memphis, TN • 2016 – 2020
      </p>
      <p className="font-serif">
        Created product comparisons, buyer’s guides, and tech explainers for outlets like TechRadar, MUO, and Digital Trends. 
        Specialized in consumer electronics, app walkthroughs, and privacy tools, consistently meeting tight deadlines while 
        enhancing content visibility through strong SEO practices.
      </p>
    </div>
    <div>
      <h3 className="text-xl font-bold">IT Support Specialist</h3>
      <p className="text-gray-600 mb-2">
        MidSouth Logistics • Memphis, TN • 2010 – 2016
      </p>
      <p className="font-serif">
        Provided technical support across multiple departments, created internal documentation to streamline onboarding 
        and help desk processes, and led tech literacy workshops for non-technical staff. 
        Sparked an interest in tech writing by transforming outdated manuals into searchable digital formats.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>;
};