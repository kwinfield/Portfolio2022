import React from "react";
import "./intro.scss";
import 'animate.css';

const Intro = () => (
    <div className="intro" id="home">

        <div className="opening">
        <h1 className="initials animate__animated animate__fadeIn">Keith<br></br> Winfield</h1>
            <div className="message">
                <h1 className="animate__animated animate__bounceInDown animate__delay-1s">Web Developer</h1>
                <p className="animate__animated animate__bounceInRight animate__delay-2s">WordPress, PHP, and Content Management specialist focused on website updates, SEO implementation, and maintaining production websites.</p>
                <p className="animate__animated animate__bounceInLeft animate__delay-2s">This portfolio is built using React and dynamically renders content through API integration.</p>
            </div>
            <a href="#contact" className="btn btn-lg btn-outline-light mt-5 animate__animated animate__bounceInUp animate__delay-3s big-btn">Contact Me </a>
            <a href="#contact" className="btn btn-lg btn-outline-light mt-5 sm-btn">Contact Me </a>
        </div>

    </div>
)

export default Intro;
