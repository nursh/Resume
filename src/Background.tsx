import React from 'react'


import sprite from './images/sprite.svg';

export const Background: React.FC = () => (
  <section className="background">
    <div className="background__items">
      <div className="background__item">
        <h3>Education</h3>
        <div className="education">
          <span className="education__degree">Bachelor of Software Engineering</span>   
          <span>Carleton University Sept. 2012 - June 2017</span>    
        </div>
      </div>
      <div className="background__item">
        <h3>Technologies</h3>
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3 / Sass</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Java</li>
          <li>SpringMVC</li>
          <li>Node.js</li>
          <li>GraphQL</li>
          <li>Docker</li>
          <li>SQL database</li>
          <li>MongoDB</li>
          <li>Version Control (Git) &amp; Github</li>
          <li>REST API design</li>
          <li>Stripe</li>
          <li>TravisCI</li>
        </ul>
      </div>
      <div className="background__item">
        <h3>GitHub</h3>
        <a href="https://github.com/nursh" target="_blank">
          Nur-sh GitHub
        </a>
      </div>
    </div>
  </section>
);
 