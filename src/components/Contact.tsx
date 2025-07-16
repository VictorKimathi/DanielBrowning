import React from 'react';
import { Mail, Linkedin, Twitter, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 text-center">
            Get in Touch
          </h2>
          <p className="font-serif text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Interested in working together? I'm currently available for new
            projects, technical writing, and consulting opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 font-serif">
                <a
                  href="mailto:danielnair861@gmail.com"
                  className="flex items-center hover:text-[#446DFF] transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  danielnair861@gmail.com
                </a>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(206) 712-2884</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Memphis, TN 38118</span>
                </div>
                <a
                  href="https://linkedin.com"
                  className="flex items-center hover:text-[#446DFF] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  linkedin.com/in/yourprofile
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center hover:text-[#446DFF] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5 mr-3" />
                  @yourhandle
                </a>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </section>
  );
};
