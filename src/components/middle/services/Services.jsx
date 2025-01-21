import React from "react";
import "./services.scss";

const Services = () => (
    <div className="services" id="services">
        <h1>Services</h1>
        <h5>What I Do</h5>
        <div className="row">
            <div className="col">
                <div className="mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#659797" className="bi bi-code-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    <h4 className="mt-3 font-weight-bold">Web Development</h4>
                    <p>I specialize in developing and maintaining a wide range of web-based applications, focusing on both front-end and back-end functionality. By writing clean, efficient code and optimizing user interfaces, I ensure each product delivers a seamless and engaging experience for every visitor.</p>
                </div>
            </div>
            <div className="col">
                <div className="mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#659797" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <h4 className="mt-3 font-weight-bold">Email Developer</h4>
                    <p>I design, build, and optimize email marketing campaigns that effectively showcase products or services, leveraging modern coding standards and marketing automation platforms to maximize reach and engagement.</p>
                </div>
            </div>
            <div className="col">
                <div className="mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#659797" className="bi bi-graph-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                    </svg>
                    <h4 className="mt-3 font-weight-bold">Social Media Manager</h4>
                    <p>I oversee brand presence across platforms, create content strategies, plan editorial calendars, track engagement metrics, run campaigns, coordinate with teams, and nurture online communities. Use analytics to optimize results and ensure brand consistency.</p>
                </div>
            </div>
        </div>
    </div>
)
export default Services;