

import React from 'react';
import Image from 'next/image';
import './Hero.css'; 
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="image-container hidden sm:block">
          <div data-aos="zoom-in">
            <Image
              src="/images/pic5.webp"
              alt="Hero"
              width={400}
              height={400}
              className="image"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="text-container"
        >
          <h1 className="hello-text">Hello, I'm</h1>
          <h1 data-aos="fade-right" data-aos-delay="600" className="name-text">
            Atiya <span className="name-highlight">Shah!</span>
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-delay="800"
            className="designation-text"
          >
            Web Developer
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            className="description-text"
          >
           I am a passionate web developer currently learning cloud computing and generative AI engineering. I have experience in HTML, CSS, TypeScript, JavaScript, and frameworks like React, Tailwind CSS, ShadecnUI, and Next.js. My focus is on creating user-friendly and dynamic web applications that balance functionality and creative design. Currently, I am exploring and learning more about cloud computing and generative AI, and I am excited to expand my knowledge in these fields.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="button"
          >
            <span className="button-span"></span>
            <span className="button-text">
              <span> <Link href="/about" >About Me
              </Link></span>
             
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;