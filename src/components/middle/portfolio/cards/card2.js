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
                    <h5 className='text-center'>R.E. Michel Company</h5>
                    <p className='text-center container'>R.E. Michel’s B2B e-commerce site is a PCI-compliant powerhouse, serving HVAC professionals nationwide with thousands of daily visitors. This web application provides secure transactions, real-time inventory, and streamlined ordering—ensuring efficiency and reliability.</p>
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
                                    <p className="card-text text-dark">"Founded in 1935, R.E. Michel is a family business that has more than 290 sales locations coast to coast."</p>
                                    <h5>Work Done:</h5>
                                    <ul className="text-dark">
                                        <li>"Upgraded Ecommerce App to fully responsive"</li>
                                        <li>"SEO Improvements and Management"</li>
                                        <li>"Ongoing Theme Maintenance & Support"</li>
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
                    <h5 className="text-center">Airtemp</h5>
                    <p className='text-center container'>Airtemp indoor comfort systems offers a user-friendly interface for homeowners and businesses to search, research, and connect with certified dealers for HVAC installations. Thousands of visitors daily rely on the web application to find the perfect indoor comfort solution.</p>
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
                                    <p className="card-text text-dark">"Airtemp indoor comfort systems are designed, assembled and repeatedly and thoroughly tested in North America."</p>
                                    <h5>Work Done:</h5>
                                    <ul className="text-dark">
                                        <li>"Upgraded App to fully responsive"</li>
                                        <li>"SEO Improvements and Management"</li>
                                        <li>"Ongoing Theme Maintenance & Support"</li>
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
            <div className="row col-12 mb-5">
                <div className="col-12 col-md-6 col-lg-12">
                    <img className="card-img-top img-fluid pt-2" onMouseEnter={() => setThirdImageIsHovering(true)} onMouseLeave={() => setThirdImageIsHovering(false)} src={thirdImageisHovering ? '/images/pg_site_gif.gif': '/images/pb_cover.png'} alt="Card image cap" style={{ height: '20rem', width: '22.5rem'}}/>
                </div>
                <div className="col-12 col-md-6 col-lg-12 py-4 text-center">
                    <h5 className="text-center">The Photo Booth Lady</h5>
                    <p className="text-center container">This web application provides prices of photo booth rentals for parties, weddings, and more. Read real reviews, see testimonials, and easily connect with the application manager to book a booth for your next unforgettable event!</p>
                    <div className="text-center">
                        <button type="button" class="btn btn-light" data-toggle="modal" data-target='#pbl'>
                        Project Info
                        </button>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id='pbl' tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">"The Photo Booth Lady"</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <div className="row">
                                        <div className='col-10 mx-auto mb-5'>
                                            <img className="card-img-top img-fluid pt-2" src="/images/pbl_before_after.jpg" alt="Card image cap" />
                                        </div>
                                    </div>
                                    <p className="card-text text-dark">"The Photo Booth Lady is a family owned business, based in the Carolinas, that supply photo booths to parties, weddings and other functions."</p>
                                    <h5>Work Done:</h5>
                                    <ul className="text-dark">
                                        <li>"Full stack app coded completely in PHP and MySql using the Laravel framework from scratch"</li>
                                        <li>"SEO Setup and Management"</li>
                                        <li>"Ongoing Theme Maintenance & Support"</li>
                                    </ul> 
                                    <a href="http://www.thephotoboothlady.com/" className="btn btn-light" target="_blank" rel="noreferrer">Live Project</a>
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
