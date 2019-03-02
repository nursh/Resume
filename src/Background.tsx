import React from 'react'

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
        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3 / Sass</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Java</li>
          <li>SpringMVC</li>
          <li>Node</li>
          <li>GraphQL</li>
          <li>Docker</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Version Control (Git) &amp; Github</li>
        </ul>
      </div>
    </div>
  </section>
);
 