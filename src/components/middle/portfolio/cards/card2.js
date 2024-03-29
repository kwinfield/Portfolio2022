import React from 'react';
import projects from '../../../projects.js';
import './card.scss';

function Card() {
  return (
    <div className='row'>
        {projects.map(project => {
            return <div className="card col-12 col-xl-3 mb-2">
                        <img className="card-img-top img-fluid pt-2" src={project.imgURL} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{project.name}</h5>
                            <div className="text-center">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={project.modalIDbutton}>
                                Project Info
                                </button>
                            </div>
                        </div>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id={project.modalID} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">{project.name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                       <div>
                                            <div className="row">
                                                <div className='col-10 mx-auto mb-5'>
                                                    <img className="card-img-top img-fluid pt-2" src={project.beforeAfter} alt="Card image cap" />
                                                </div>
                                            </div>
                                            <p className="card-text text-dark">{project.description}</p>
                                            <h5>Work Done:</h5>
                                            <ul className="text-dark">
                                                <li>{project.highlights[0]}</li>
                                                <li>{project.highlights[1]}</li>
                                                <li>{project.highlights[2]}</li>
                                            </ul> 
                                            <a href={project.link} className="btn btn-light" target="_blank" rel="noreferrer">Live Project</a>
                                       </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        })}
    </div>
  );
}

export default Card;
