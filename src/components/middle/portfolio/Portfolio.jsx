import React from "react";
import "./portfolio.scss";

const Portfolio = () => (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <h5>Latest Works</h5>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top img-fluid" src="/images/remlogo.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">R.E. Michel</h5>
                        <p className="card-text">Founded in 1935, R.E. Michel is a family business that has more than 290 sales locations coast to coast.</p>
                        <h5>Highlights</h5>
                        <ul className="text-light">
                            <li>Upgraded to fully responsive</li>
                            <li>SEO Improvements and Management</li>
                            <li>Ongoing Theme Maintenance & Support</li>
                        </ul>
                        <a href="https://www.remichel.com" className="btn btn-primary" target="_blank">Live Project</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top img-fluid" src="/images/airtemp.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Airtemp</h5>
                        <p className="card-text">Airtemp indoor comfort systems are designed, assembled and repeatedly and thoroughly tested in North America. </p>
                        <h5>Highlights</h5>
                        <ul className="text-light">
                            <li>Upgraded to fully responsive</li>
                            <li>SEO Improvements and Management</li>
                            <li>Ongoing Theme Maintenance & Support</li>
                        </ul>
                        <a href="https://airtemp.com/" className="btn btn-primary" target='_blank'>Live Project</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
export default Portfolio;