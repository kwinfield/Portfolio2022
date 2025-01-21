import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projects from '../../../projects.js';
import './card.scss';

function Card() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>

        {projects.map(project => {
          return <Carousel.Item>
                  <div className="card">
                      <img className="card-img-top img-fluid" src="/images/test_site_gif.gif" alt="Card image cap" style={{ height: '12.5rem', width: '12.5rem'}} />
                      <div className="card-body">
                          <h5 className="card-title">{project.name}</h5>
                          <p className="card-text">{project.description}</p>
                          <h5>Highlights</h5>
                          <ul className="text-light">
                              <li>{project.highlights[0]}</li>
                              <li>{project.highlights[1]}</li>
                              <li>{project.highlights[2]}</li>
                          </ul>
                          <a href={project.link} className="btn btn-light" target="_blank">Live Project</a>
                      </div>
                  </div>
                </Carousel.Item>
        })}

    </Carousel>
  );
}

export default Card;
