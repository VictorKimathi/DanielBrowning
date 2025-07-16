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
              I'm Daniel Lee Browning, a tech writer and editorial consultant
              with over a decade of experience translating complex technical
              concepts into compelling narratives.
            </p>
            <p>
              My journey began at the intersection of journalism and technology,
              where I discovered my passion for making technical subjects
              accessible and engaging. Since then, I've worked with startups,
              enterprise companies, and leading publications to craft stories
              that inform, persuade, and inspire.
            </p>
            <p>
              I specialize in long-form tech features, thought leadership
              articles, product deep dives, and editorial strategy. My work has
              appeared in publications like Wired, TechCrunch, and The Verge, as
              well as on the blogs and content hubs of numerous tech companies.
            </p>
            <p>
              My approach combines journalistic rigor with a deep understanding
              of technology and business. I believe that even the most complex
              technical concepts can be explained clearly and engagingly when
              approached with creativity and empathy for the reader.
            </p>
            <p>
              When I'm not writing, you can find me exploring the latest tech
              trends, attending industry conferences, or hiking in the mountains
              near my home in Seattle.
            </p>
          </div>
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold uppercase mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Senior Tech Writer</h3>
                <p className="text-gray-600 mb-2">
                  TechInsights Magazine • 2019-Present
                </p>
                <p className="font-serif">
                  Leading the editorial strategy for the publication's tech
                  section, writing in-depth features and analysis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Content Strategist</h3>
                <p className="text-gray-600 mb-2">
                  CloudScale Solutions • 2016-2019
                </p>
                <p className="font-serif">
                  Developed and implemented content strategy for enterprise SaaS
                  company, focusing on thought leadership.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Technology Journalist</h3>
                <p className="text-gray-600 mb-2">
                  Digital Frontier • 2013-2016
                </p>
                <p className="font-serif">
                  Covered emerging technologies and startup ecosystems for
                  leading online tech publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};