import React from "react";
import "./intro.scss";
import 'animate.css';

const Intro = () => (
    <div className="intro" id="home">
        
        <div className="opening">
        <h1 className="initials animate__animated animate__fadeIn">Keith<br></br> Winfield</h1>
            <div className="message">
                <h1 className="animate__animated animate__bounceInDown animate__delay-1s">Web Developer</h1>
                <h4 className="animate__animated animate__bounceInRight animate__delay-2s">Front End Web Developer specializing in Content Management, Website Optimization, Email Marketing and Social Media Marketing.</h4>
            </div>
            <a href="#contact" className="btn btn-lg btn-outline-light mt-5 animate__animated animate__bounceInUp animate__delay-3s">Contact Me </a>
        </div>
        
    </div>
)

export default Intro;