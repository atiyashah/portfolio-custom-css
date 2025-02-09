



import Link from 'next/link';
import React from 'react';
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // CSS file import karein

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        {/* First Part */}
        <div>
          <div className='brand-name'>
            At<span className='brand-name-highlight'>i</span>ya
          </div>
          <h1 className='brand-description'>
       Full-Stack Developer | Problem Solver
       Building innovative solutions with code.
          </h1>

          {/* Social Media Icons */}
          <div className='social-icons'>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='social-icon' />
            </a>
            <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='social-icon' />
            </a>
          </div>
        </div>

        {/* Second Part */}
        <div className='quick-links'>
          <h1 className='quick-links-heading'>Quick Links</h1>
          <Link href={'/about'}>
            <p className='quick-link'>About</p>
          </Link>
          <Link href={'/project'}>
            <p className='quick-link'>Project</p>
          </Link>
          <Link href={'/skills'}>
            <p className='quick-link'>Skills</p>
          </Link>
          <Link href={'/contact'}>
            <p className='quick-link'>Contact</p>
          </Link>
        </div>

        {/* Third Part */}
        <div className='address-section'>
          <h1 className='address-heading'>Address</h1>
          <div className='address-item'>
            <BiMapPin className='address-icon' />
            <p className='address-text'>Karachi, Pakistan</p>
          </div>
          <div className='address-item'>
            <BiEnvelope className='address-icon' />
            <p className='address-text'>atiyashah890@gmail.com</p>
          </div>
          <div className='address-item'>
            <BiPhone className='address-icon' />
            <p className='address-text'>031 43 456789</p>
          </div>
        </div>
      </div>
      <div className='copyright-text'>
        &#169; copyright Atiya Shah 2024
      </div>
    </div>
  );
};

export default Footer;