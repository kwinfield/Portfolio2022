import React from "react";
import "./portfolio.scss";
import Card from './cards/card2';
import projects from '../../projects.js';
import './cards/card.scss';

function Portfolio(){

  return(
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h5>Latest Works</h5>
      <div className="container col-12 mt-5">
        <Card />
      </div>
    </div>
  )
}
export default Portfolio;
