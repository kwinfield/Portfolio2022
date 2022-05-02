import React from "react";
import "./intro.scss";

const Intro = () => (
    <div className="intro" id="home">
        
        <div className="opening">
        <h1 className="initials">Keith<br></br> Winfield</h1>
            <div className="message">
                <h1>Web Developer</h1>
                <p>Front End Web Developer specializing in ReactJS, Website Optimization and Email Marketing.</p>
            </div>
            <a href="#contact" className="btn btn-lg btn-outline-light">Contact Me </a>
        </div>
        
    </div>
)

export default Intro;