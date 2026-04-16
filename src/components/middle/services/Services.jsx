import React from "react";
import "./services.scss";

const Services = () => (
    <div className="services" id="services">
        <h1>Services</h1>
        <h5>What I Do</h5>
        <div className="row">
            <div className="col-12">
                <div className="mt-5">
                    <h4 className="mt-3 font-weight-bold">WordPress & Website Management</h4>
                    <p>I build, update, and maintain WordPress websites, including creating pages, posting blog content, adding images, and ensuring consistent formatting across the site.</p>
                </div>
            </div>
            <div className="col-12">
                <div className="mt-5">
                    <h4 className="mt-3 font-weight-bold">Website Updates & Front-End Support</h4>
                    <p>I handle day-to-day website changes using HTML and CSS, including layout adjustments, content updates, and troubleshooting display issues to keep sites running smoothly.</p>
                </div>
            </div>
            <div className="col-12">
                <div className="mt-5">
                    <h4 className="mt-3 font-weight-bold">SEO Implementation & Content Optimization</h4>
                    <p>I implement on-page SEO best practices such as title tags, meta descriptions, heading structure (H1–H2), and internal linking to improve search visibility and content organization.</p>
                </div>
            </div>
            <div className="col-12">
                <div className="mt-5">
                    <h4 className="mt-3 font-weight-bold">Content Publishing & CMS Workflows</h4>
                    <p>I manage content workflows by publishing blog posts, updating pages, proofreading content, and ensuring accuracy and consistency across multiple projects.</p>
                </div>
            </div>
            <div className="col-12">
                <div className="mt-5">
                    <h4 className="mt-3 font-weight-bold">PHP & Website Functionality</h4>
                    <p>I support backend functionality using PHP, including maintaining existing features, integrating basic functionality, and assisting with dynamic content updates.</p>
                </div>
            </div>
        </div>
    </div>
)
export default Services;