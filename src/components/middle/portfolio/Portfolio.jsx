import React from "react";
import "./portfolio.scss";
import Card from './cards/card2';
import './cards/card.scss';

function Portfolio(){

  return(
    <div className="portfolio" id="portfolio">
      <h1>Professional Projects</h1>
      <h5>I contributed to a variety of cross-functional initiatives, leveraging teamwork and communication skills to develop, refine, and successfully deliver each project on time and to specification.</h5>
      <div className="col-12 mt-5 text-center p-0">
        <Card />
      </div>
    </div>
  )
}
export default Portfolio;
