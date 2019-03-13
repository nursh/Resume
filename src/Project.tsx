import React from 'react'


import project1 from './images/project 1.png';
import project2 from './images/Trouse Academy.png';
import project3 from './images/Lission project page.png';
import hotelapp from './images/Ruby Continental.png';
import quizzimo from './images/Quizzimo.png';
import toronto from './images/Toronto Waste.png';
import cauldrom from './images/Cauldrom.png';

export const Project: React.FC = () => {
  return (
    <div className="projects">
      <h2 className="section__title section__title--top">Projects</h2>
      <section className="project__info">
        <div>
          <h3>HTML &amp; CSS</h3>
          <p>These sites are reproductions of Dribbble designs. They do not contain JS interactions.
            I used the designs to practise, learn and experiment with only HTML and CSS.
          </p>
        </div>
        <div>
          <div className="project">
            <img src={project1} alt="Project 1 screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://dribbble.com/shots/3135121-Invision-theme-redesign-landing-page-mobile-web?utm_source=Clipboard_Shot&utm_campaign=divanraj&utm_content=Invision%20theme%20redesign%20-%20landing%20page%20%26%20mobile%20web&utm_medium=Social_Share" className="project__link--dribbble">View Dribbble Design</a>
              <a target="_blank" href="https://github.com/nursh/Dribble-Invision-Practise" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="https://nursh.github.io/Dribble-Invision-Practise/" className="project__link">View Project</a>
            </div>
          </div>
          <div className="project">
            <img src={project2} alt="Project 2 screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://dribbble.com/shots/5706019-Course-academy-Blue-version?utm_source=Clipboard_Shot&utm_campaign=divanraj&utm_content=Course%20academy%20-%20Blue%20version&utm_medium=Social_Share" className="project__link--dribbble">View Dribbble Design</a>
              <a target="_blank" href="https://github.com/nursh/Trouse-Acadamy" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="https://nursh.github.io/Trouse-Acadamy/" className="project__link">View Project</a>
            </div>
          </div>
          <div className="project">
            <img src={project3} alt="Project 3 screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://dribbble.com/shots/5017628-On-Mission-Itself?utm_source=Clipboard_Shot&utm_campaign=cadabra&utm_content=On%20Mission.%20Itself.&utm_medium=Social_Share" className="project__link--dribbble">View Dribbble Design</a>
              <a target="_blank" href="https://github.com/nursh/Lission" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="https://nursh.github.io/Lission/" className="project__link">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section className="project__info">
        <div>
          <h3>Ruby Continental | Restaurant</h3>
          <p>
            Ruby Continental is a web application for ordering from a restaurant.
            The customer chooses food items from the menu and pays for them at the end.
          </p>
        </div>
        <div>
          <div className="project">
            <img src={hotelapp} alt="Ruby Continental screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://github.com/nursh/Ruby-Continental" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="http://ruby-continental.us-east-2.elasticbeanstalk.com/" className="project__link">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section className="project__info">
        <div>
          <h3>Quizzimo</h3>
          <p>
            Quizzimo is a web application for answering trivia questions from several categories
          </p>
        </div>
        <div>
          <div className="project">
            <img src={quizzimo} alt="Quizzimo screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://github.com/nursh/Quizzimo" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="https://quizzimo.herokuapp.com/" className="project__link">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section className="project__info">
        <div>
          <h3>Toronto Waste Lookup</h3>
          <p>
            The application is a search application on JSON data gotten from Toronto Waste.
          </p>
        </div>
        <div>
          <div className="project">
            <img src={toronto} alt="Toronto waste screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://github.com/nursh/Toronto-Waste-Lookup" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="http://toronto-waste-lookup.us-east-2.elasticbeanstalk.com/" className="project__link">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section className="project__info">
        <div>
          <h3>Cauldrom - (Work in Progress)</h3>
          <p>
            Cauldrom is a project management application.
            Each project has members who can edit tasks and add notifications to help with finishing the project.
          </p>
        </div>
        <div>
          <div className="project">
            <img src={cauldrom} alt="Toronto waste screenshot" className="project__image" />
            <div className="project__details">
              <a target="_blank" href="https://github.com/nursh/Cauldrom" className="project__link project__link--github">View GitHub Code</a>
              <a target="_blank" href="" className="project__link">View Project</a>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
