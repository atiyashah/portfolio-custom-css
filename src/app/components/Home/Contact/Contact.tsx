
import React from 'react';
import Heading from '../Helper/Heading';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './contact.css'; // CSS file import karein

const Contact = () => {
  return (
    <div className='contact-container'>
      <Heading headingPrimary='Get In touch with us' headingSub='Contact Us' />
      <div className='contact-content'>
        {/* Info Content */}
        <div>
          <p className='info-text'>Get In Touch</p>
          <h1 className='heading-text'>
            Lets Make your <span className='highlight-text'>Brand</span>{" "}
            Brilliant!
          </h1>
          <p className='description-text'>
          Transforming ideas into powerful brands.
          Let's build something remarkable together!
          </p>

          {/* Social Media Icons */}
          <div className='social-icons'>
            <a
              href="https://github.com/your-github-atiyashah"
              target="_blank"
              rel="noopener noreferrer"
              className='social-icon'>
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className='social-icon'>
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Form Content */}
        <div>
          <div className='form-grid'>
            <input type="text" placeholder='Name' className='input-field' />
            <input type="email" placeholder='Email' className='input-field' />
          </div>
          <input type="text" placeholder='Subject' className='input-field mt-[1.5rem]' />
          <textarea rows={4} placeholder='Message' className='textarea-field mt-[1.5rem]' />
          <button className='submit-button '>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;