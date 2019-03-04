import React from 'react';


import { Hero } from './Hero';
import { About } from './About';
import { Background } from './Background';
import { Project } from './Project';
import { Contact } from './Contact';

const App: React.FC = () => (
  <div className="container">
    <Hero />
    <About />
    <Background />
    <Project />
    <Contact />
  </div>
);

export { App }