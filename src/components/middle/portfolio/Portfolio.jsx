import React from "react";
import "./portfolio.scss";
import Card from './cards/card2';
import './cards/card.scss';
import PromotionEmail from "./cards/email";

function Portfolio(){

  return(
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <h5>Examples of website builds and updates showcasing WordPress, PHP, SEO implementation, and day-to-day website management.</h5>
      <div className="col-12 mt-5 text-center p-0">
        <Card />
      </div>
    </div>
  )
}
export default Portfolio;
