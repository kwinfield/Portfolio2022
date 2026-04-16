import React, { useState } from 'react';
import './card.scss';

function Card() {
    const [firstImageisHovering, setFirstImageIsHovering] = useState(false);
    const [secondImageisHovering, setSecondImageIsHovering] = useState(false);
    const [thirdImageisHovering, setThirdImageIsHovering] = useState(false);
  return (
        <div>
            <div className="row col-12 mb-5">
                <div className="col-12 col-md-6 col-lg-12">
                    <img className="card-img-top img-fluid pt-2" onMouseEnter={() => setFirstImageIsHovering(true)} onMouseLeave={() => setFirstImageIsHovering(false)} src={firstImageisHovering ? '/images/remichel_site_gif.gif': '/images/static.png'} alt="Card image cap" style={{ height: '20rem', width: '22.5rem'}}/>
                </div>
                <div className="col-12 col-md-6 col-lg-12 py-4 text-center">
                    <h5 className='text-center'>R.E. Michel Company – B2B E-Commerce Website</h5>
                    <p className='text-center container'>Maintained and enhanced a high-traffic B2B e-commerce platform serving HVAC professionals nationwide. Focused on website updates, SEO improvements, and ongoing support to ensure performance, usability, and reliability.</p>
                    <div className="text-center">
                        <button type="button" class="btn btn-light" data-toggle="modal" data-target='#remichel'>
                        Project Info
                        </button>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id='remichel' tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">"R.E. Michel Company"</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <div>
                                    <div className="row">
                                        <div className='col-10 mx-auto mb-5'>
                                            <img className="card-img-top img-fluid pt-2" src="/images/re_before_after.jpg" alt="Card image cap" />
                                        </div>
                                    </div>
                                    <h5>Overview:</h5>
                                    <p className="card-text text-dark">R.E. Michel is a nationwide HVAC distributor with a large-scale e-commerce platform supporting daily transactions, real-time inventory, and customer ordering.</p>
                                    <h5>Work Performed:</h5>
                                    <ul className="text-dark">
                                        <li>mproved site responsiveness to ensure consistent performance across desktop and mobile devices</li>
                                        <li>Implemented SEO updates including page structure, metadata, and content optimization</li>
                                        <li>Provided ongoing website maintenance, theme updates, and support in a live production environment</li>
                                        <li>Assisted with content updates and front-end adjustments using HTML, CSS, and PHP</li>
                                    </ul> 
                                    <a href="https://www.remichel.com/Webservices" className="btn btn-light" target="_blank" rel="noreferrer">Live Project</a>
                            </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row col-12 mb-5">
                <div className="col-12 col-md-6 col-lg-12">
                    <img className="card-img-top img-fluid pt-2" onMouseEnter={() => setSecondImageIsHovering(true)} onMouseLeave={() => setSecondImageIsHovering(false)} src={secondImageisHovering ? '/images/airtemp_site_gif.gif': '/images/airtemp_cover.png'} alt="Card image cap" style={{ height: '20rem', width: '22.5rem'}}/>
                </div>
                <div className="col-12 col-md-6 col-lg-12 py-4 text-center">
                    <h5 className="text-center">Airtemp – HVAC Website & SEO Support</h5>
                    <p className='text-center container'>Maintained and improved a high-traffic HVAC website focused on helping users research products and connect with certified dealers. Contributed to website updates, SEO enhancements, and ongoing support to improve usability and performance.</p>
                    <div className="text-center">
                        <button type="button" class="btn btn-light" data-toggle="modal" data-target='#airtemp'>
                        Project Info
                        </button>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id='airtemp' tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">"Airtemp"</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <div>
                                    <div className="row">
                                        <div className='col-10 mx-auto mb-5'>
                                            <img className="card-img-top img-fluid pt-2" src="/images/at_before_after.jpg" alt="Card image cap" />
                                        </div>
                                    </div>
                                    <h5>Overview:</h5>
                                    <p className="card-text text-dark">Airtemp provides indoor comfort solutions through a web platform that connects homeowners and businesses with HVAC products and certified dealers.</p>
                                    <h5>Work Performed:</h5>
                                    <ul className="text-dark">
                                        <li>Updated website layout to ensure responsive design across desktop and mobile devices</li>
                                        <li>Implemented SEO improvements including page structure, metadata, and content optimization</li>
                                        <li>Performed ongoing theme maintenance and front-end updates in a live production environment</li>
                                        <li>Assisted with content updates and formatting using HTML, CSS, and CMS tools</li>
                                    </ul> 
                                    <a href="https://airtemp.com/" className="btn btn-light" target="_blank" rel="noreferrer">Live Project</a>
                            </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Card;
