import React from "react";
import "./intro.scss";
import 'animate.css';

const Intro = () => (
    <div className="intro" id="home">

        <div className="opening">
        <h1 className="initials animate__animated animate__fadeIn">Keith<br></br> Winfield</h1>
            <div className="message">
                <h1 className="animate__animated animate__bounceInDown animate__delay-1s">Web Developer</h1>
                <h4 className="animate__animated animate__bounceInRight animate__delay-2s">Full Stack Web Developer specializing in the LAMP Stack, Content Management, Website Optimization, Dynamic Emails and Social Media Marketing.</h4>
            </div>
            <a href="#contact" className="btn btn-lg btn-outline-light mt-5 animate__animated animate__bounceInUp animate__delay-3s big-btn">Contact Me </a>
            <a href="#contact" className="btn btn-lg btn-outline-light mt-5 sm-btn">Contact Me </a>
        </div>

    </div>
)

export default Intro;
