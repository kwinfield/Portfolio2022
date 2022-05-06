import React from "react";
import "./app.scss"
import LeftSide from "./left-side/Left-Side";
import Navbar from "./navbar/navbar";
import Intro from "./middle/intro/Intro";
import About from "./middle/about/About";
import Services from "./middle/services/Services";
import Portfolio from "./middle/portfolio/Portfolio";
import Contact from "./middle/contact/Contact";


function App(){
    return (
        <div className="wrapper" id="home">
            <Navbar />
            <div className="row">
                <div className="col-lg-6">
                    <LeftSide />
                </div>

                <div className="col-lg-6 middle">
                    <Intro />
                    <About />
                    <Services />
                    <Portfolio />
                    <Contact />
                </div>
            </div>

        </div>

        )
}

export default App;
