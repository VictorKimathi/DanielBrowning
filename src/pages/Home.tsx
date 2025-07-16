import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
export const Home = () => {
  return <div className="w-full">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>;
};