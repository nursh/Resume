import React from 'react';


import { Hero } from './Hero';
import { About } from './About';
import { Background } from './Background';

const App: React.FC = () => (
  <div className="container">
    <Hero />
    <About />
    <Background />
  </div>
);

export { App }