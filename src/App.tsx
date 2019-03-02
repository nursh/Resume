import React from 'react';


import { Hero } from './Hero';
import { About } from './About';

const App: React.FC = () => (
  <div className="container">
    <Hero />
    <About />
  </div>
);

export { App }