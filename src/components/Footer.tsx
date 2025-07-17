import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <Link to="/" className="text-xl font-bold tracking-wider uppercase mb-6 md:mb-0">
            Daniel Browning
          </Link>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Daniel Lee Browning. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>;
};
const FooterLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => <Link to={to} className="text-sm uppercase tracking-wide font-medium text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>;