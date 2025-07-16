import React from 'react';
import { FileText, Lightbulb, PenTool, BookOpen, BarChart, MessageSquare } from 'lucide-react';
export const ServicesPage = () => {
  const services = [{
    icon: <FileText className="h-10 w-10" />,
    title: 'Long-form Features',
    description: 'In-depth articles that explore complex tech topics with clarity and narrative flair. I specialize in creating engaging, informative content that keeps readers invested from start to finish.'
  }, {
    icon: <Lightbulb className="h-10 w-10" />,
    title: 'Thought Leadership',
    description: 'Strategic content that positions you or your company as an authority in your industry. I help craft compelling viewpoints that showcase your expertise and unique perspective.'
  }, {
    icon: <PenTool className="h-10 w-10" />,
    title: 'Product Deep Dives',
    description: 'Detailed explorations of your product that highlight its unique value and technical innovations. I translate complex features into clear benefits that resonate with your target audience.'
  }, {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Editorial Strategy',
    description: 'Comprehensive content planning that aligns with your business goals and audience needs. I help create roadmaps for content that drives engagement and supports your marketing objectives.'
  }, {
    icon: <BarChart className="h-10 w-10" />,
    title: 'Technical White Papers',
    description: "Authoritative, in-depth documents that demonstrate your company's expertise and approach to solving industry challenges. I create white papers that serve as valuable lead generation tools."
  }, {
    icon: <MessageSquare className="h-10 w-10" />,
    title: 'Content Workshops',
    description: "Collaborative sessions to develop your team's content creation skills. I provide guidance on storytelling, structure, and editorial best practices tailored to your industry."
  }];
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Services
          </h1>
          <p className="font-serif text-lg text-gray-700 mb-12 max-w-3xl">
            I offer a range of writing and editorial services tailored to tech
            companies looking to elevate their content and connect with their
            audience. Each service can be customized to meet your specific needs
            and objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
                    We begin with a thorough consultation to understand your
                    goals, audience, and unique value proposition. This lays the
                    foundation for all content creation.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Research & Planning
                  </h3>
                  <p className="font-serif text-gray-700">
                    I conduct in-depth research on your topic, industry trends,
                    and competitive landscape to ensure content that is
                    accurate, relevant, and valuable.
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
                    I craft compelling content that balances technical accuracy
                    with engaging storytelling, tailored to your specific
                    audience and objectives.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-6 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refinement</h3>
                  <p className="font-serif text-gray-700">
                    I collaborate with you through a structured review process,
                    incorporating your feedback to ensure the final content
                    perfectly matches your vision.
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
              Let's discuss how I can help elevate your content and connect with
              your audience.
            </p>
            <a href="/contact" className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>;
};