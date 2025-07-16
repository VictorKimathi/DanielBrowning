import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-wider uppercase">
          Daniel Browning
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Mobile navigation */}
        {isMenuOpen && <div className="absolute top-16 left-0 right-0 bg-white z-50 border-b border-gray-200 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>}
      </div>
    </header>;
};
const NavLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => <Link to={to} className="text-sm uppercase tracking-wide font-medium hover:text-[#446DFF] transition-colors">
    {children}
  </Link>;
const MobileNavLink = ({
  to,
  children,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => <Link to={to} className="text-base uppercase tracking-wide font-medium py-2 hover:text-[#446DFF] transition-colors" onClick={onClick}>
    {children}
  </Link>;