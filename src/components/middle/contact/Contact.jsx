import React, { useRef, useState } from 'react';
import "./contact.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm(
        'service_1wl4qzb', 
        'template_77lb77p', 
        e.target, 
        'do-K33cbp_yXZbBRG' 
      )
        .then((result) => {
          alert('Message sent successfully!', result.text);
          // Reset the form
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    }
  };

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_1wl4qzb', 'template_77lb77p', form.current, 'do-K33cbp_yXZbBRG')
//       .then((result) => {
//           console.log('Success!');
//       }, (error) => {
//           console.log('Failed!');
//       });
//   };

  return (
    <div id='contact' className='contact'>
        
        <h1>Contact Me</h1>
        <h5>Let's Talk</h5>
        <section className="mb-4">
            <div className="row">
                <div className="col-md-6">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="field mb-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control md-textarea"/>
                            {errors.name && <span className="error text-danger">{errors.name}</span>}
                        </div>
                        <div className="field mb-2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control md-textarea"/>
                            {errors.email && <span className="error text-danger">{errors.email}</span>}
                        </div>
                        <div className="field mb-2">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control md-textarea"/>
                            {errors.message && <span className="error text-danger">{errors.message}</span>}
                        </div>
                        <div>
                            <button className="btn btn-outline-light" type="submit" id="button" value="Send Email" >Send</button>
                        </div>
                    </form>
                    {/* <form ref={form} onSubmit={sendEmail}>
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
                            <button className="btn btn-outline-light" type="submit" value="Send">Send</button>
                        </div>
                    </form> */}
                </div>
                <div className="col-md-6 text-center">
                    <ul className="list-unstyled">
                        <li><i className="bi bi-geo-alt-fill"></i>
                            <p>Baltimore, MD</p>
                        </li>

                        <li><a href = 'mailto:keith.r.winfield@gmail.com' ><i className="bi bi-envelope"></i></a>
                            <p>keith.r.winfield@gmail.com</p>
                        </li>
                        <div className="row justify-content-center">
                            <div className="git col-4">
                                <a href="https://github.com/kwinfield" target="_blank"><i class="bi bi-github"></i></a> 
                            </div>
                            <div className="linked col-4">
                                <a href="https://www.linkedin.com/in/keith-winfield-jr/" target="_blank"><i class="bi bi-linkedin"></i></a>
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