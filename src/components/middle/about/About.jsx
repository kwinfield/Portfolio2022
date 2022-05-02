import React from "react";
import "./about.scss";

const About = () => (
    <div className="about" id="about">
        <h1>About Me</h1>
        <h5>My Story</h5>
        <div className="row pt-5">
            <div className="col-md-6">
                <p>I am a Web Developer out of Baltimore, Maryland. I deliver both strategic insight, hands-on design and frontend development using modern frontend web technologies. Working as Web Manager for a nationwide wholesale supplier has also provided me with extensive experience in running digital marketing campains using technologies like Google Analytics, Google Adsense, and Mailchimp.</p>
            </div>
            <div className="col-md-6">
                <p>My background in digital, direct and customer relationship marketing, goes back as far as the early 2000's when I was a young creator for small start ups interested in creating a web presence. It has always been a hobbie of mind to take things apart just to build them again. That inquisitiveness has helped me learn and continue to learn technologies that interest me. ​</p>
            </div>
        </div>
    </div>
)
export default About;