import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
export const Contact = () => {
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 text-center">
            Get in Touch
          </h2>
          <p className="font-serif text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Interested in working together? I'm currently available for new
            projects and consulting opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 font-serif">
                <a href="mailto:daniel@danielbrowning.com" className="flex items-center hover:text-[#446DFF] transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  daniel@danielbrowning.com
                </a>
                <a href="https://linkedin.com" className="flex items-center hover:text-[#446DFF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-3" />
                  linkedin.com/in/danielbrowning
                </a>
                <a href="https://twitter.com" className="flex items-center hover:text-[#446DFF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 mr-3" />
                  @danielleebrowning
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};