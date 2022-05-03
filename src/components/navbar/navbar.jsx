import React from "react";
import "./navbar.scss";

const menu = ["home", "about", "services", "portfolio", "contact"];



function Navbar (){
    return (
        <div>
            <div className="nav1">
                <nav className="navbar navbar-light mt-3">
                    <a className="navbar-brand text-light"><img src="/images/portfolio-logo.jpg" alt="" /></a>
                    <ul className="nav justify-content-end">
                        {menu.map((item)=> (<li className="nav-item"><a className="nav-link" href={`#${item}`}>{item}</a></li>))}
                    </ul>
                </nav>
            </div>
            <div className="nav2">
                <nav class="navbar">
                    <a class="navbar-brand" href="#"><img src="/images/portfolio-logo.jpg" alt="" /></a>
                    <button class="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav mr-auto">
                            {menu.map((item)=> (<li className="nav-item"><a className="nav-link" href={`#${item}`}>{item}</a></li>))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        
            
        )
}

export default Navbar;