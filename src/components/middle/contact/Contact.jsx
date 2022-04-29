import React, { useRef } from 'react';
import "./contact.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wl4qzb', 'template_77lb77p', form.current, 'do-K33cbp_yXZbBRG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className='contact'>
        <h1>Contact Me</h1>
        <h5>Let's Talk</h5>
        <section className="mb-4">
            <div className="row">
                <div className="col-md-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-2">
                            <label>Name</label><br/>
                            <input type="text" name="user_name" className="form-control md-textarea"/>
                        </div>
                        <div className="mb-2">
                            <label>Email</label><br/>
                            <input type="email" name="user_email" className="form-control md-textarea"/>
                        </div>
                        <div className="mb-2">
                            <label>Subject</label><br/>
                            <input type="text" name="subject" className="form-control md-textarea"/>
                        </div>
                        <div className="mb-2">
                            <label>Message</label><br/>
                            <textarea name="message" className="form-control md-textarea"/>
                        </div>
                        <div>
                            <a className="btn btn-outline-light" type="submit" value="Send">Send</a>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <ul className="list-unstyled">
                        <li><i className="bi bi-geo-alt-fill"></i>
                            <p>Baltimore, MD</p>
                        </li>

                        <li><i className="bi bi-envelope"></i>
                            <p>keith.r.winfield@gmail.com</p>
                        </li>
                        <div className="row justify-content-center">
                            <div className="git col-4">
                                <a href="https://github.com/kwinfield" target="_blank"><i class="bi bi-github"></i></a> 
                            </div>
                            <div className="linked col-4">
                                <a href="https://www.linkedin.com/in/keith-winfield/" target="_blank"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Contact;