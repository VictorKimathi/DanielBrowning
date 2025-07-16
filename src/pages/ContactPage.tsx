import React from 'react';
import { Mail, Linkedin, Twitter, MapPin, Clock, Phone } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">
            Contact
          </h1>
          <p className="font-serif text-lg text-gray-700 mb-12 max-w-2xl">
            I'm always interested in new projects and collaborations. Whether
            you have a specific project in mind or just want to discuss ideas,
            I'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div> */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 font-serif">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:danielnair861@gmail.com"
                      className="hover:text-[#446DFF] transition-colors"
                    >
                      danielnair861@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>(206) 712-2884</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      className="hover:text-[#446DFF] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Twitter className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Twitter</h3>
                    <a
                      href="https://twitter.com"
                      className="hover:text-[#446DFF] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourhandle
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p>4859 Foxhall Dr Apt 6, Memphis, TN 38118</p>
                    <p className="text-gray-600">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Response Time</h3>
                    <p>
                      I typically respond to inquiries within 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-50 p-8 text-center">
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <p className="font-serif mb-6 max-w-lg mx-auto">
              Subscribe to my newsletter for insights on technical writing,
              content strategy, and the latest in tech documentation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};
