import React from 'react';

export const AboutPage = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">About</h1>

          {/* ✅ Image block: Ensures full display without cropping top */}
          <div className="mb-12">
            <div className="w-full flex justify-center">
              <img
                src="/danielbrowning.jpg"
                alt="Daniel Lee Browning"
                className="max-w-full h-auto rounded-xl shadow-md object-contain"
              />
            </div>
          </div>

          <div className="font-serif text-lg space-y-6">
            <p>
              I’m a tech writer with over 12 years of experience helping users navigate complex digital products. My
              journey began in IT support, where I learned firsthand the frustrations users face when technology isn’t
              clear. This sparked my passion for translating technical concepts into language that’s not just
              accurate—but genuinely helpful.
            </p>
            <p>
              Since then, I’ve written everything from product guides and API documentation to hardware reviews and
              software tutorials. Whether it’s building scalable knowledge bases for SaaS platforms or crafting
              SEO-driven tech explainers for sites like TechRadar and Digital Trends, I bring a blend of technical
              fluency and storytelling that keeps users engaged and informed.
            </p>
            <p>
              Today, as a Certified Technical Writer and member of the American Society of Journalists and Authors, I
              continue to explore better ways to connect people with technology—one clear sentence at a time.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold uppercase mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Technical Content Strategist</h3>
                <p className="text-gray-600 mb-2"> Apex Digital Solutions • Remote • 2020 – Present</p>
                <p className="font-serif">
                   Write and optimize SEO-driven blog posts, white papers, and landing pages across B2B and SaaS industries,Adapt brand tone and style guides to meet diverse client requirements in technology and education sectors,Collaborate with developers, designers, and project managers to ensure content accuracy and effectiveness, Increased organic search traffic by 45% through strategic keyword integration and metadata optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Freelance Tech Writer</h3>
                <p className="text-gray-600 mb-2"> Independent  • Memphis, TN • 2016 – 2020</p>
                <p className="font-serif">
                   Produced 800–1000 word SEO blog posts, product guides, and email campaigns for small and mid-sized businesses., Specialized in B2B, technology, and e-commerce writing, tailoring content for varying industries., Consistently met tight deadlines while incorporating editorial feedback to improve clarity and structure., Built lasting client relationships through professionalism, adaptability, and content quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">IT Support Specialist</h3>
                <p className="text-gray-600 mb-2"> Delta Regional Logistics  • Memphis, TN • 2010 – 2016</p>
                <p className="font-serif">
                  Created internal training manuals and step-by-step guides that simplified technical onboarding., Documented IT processes and troubleshooting workflows for efficiency and accuracy. ,Delivered staff workshops to improve digital literacy, fostering smoother workflows and fewer support tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
