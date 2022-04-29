import React from "react";
import "./portfolio.scss";

const Portfolio = () => (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <h5>Latest Works</h5>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top img-fluid" src="/images/remlogo.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">R.E. Michel</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">More Info</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <img className="card-img-top img-fluid" src="/images/airtemp.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Airtemp</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">More Info</a>
                    </div>
                    {/* modal 1 */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* modal 2 */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
export default Portfolio;