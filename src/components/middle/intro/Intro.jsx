import React from "react";
import "./intro.scss";

const Intro = () => (
    <div className="intro" id="home">
        
        <div className="opening">
        <h1 className="initials">Keith<br></br> Winfield</h1>
            <div className="message">
                <h1>Web Developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dui quis dui luctus ultricies. Vestibulum lacinia nunc ligula, non tempus neque scelerisque a. Nulla id lacinia felis. Duis at nisi et orci mattis mattis et at velit. Vestibulum tempus ante sit amet augue condimentum dignissim. </p>
            </div>
            <a href="#contact" className="btn btn-lg btn-outline-light">Contact Me </a>
        </div>
        
    </div>
)

export default Intro;