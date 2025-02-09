





import React from 'react';
import Heading from '../Helper/Heading';
import Image from 'next/image';
import './Project.css';

export const Project = () => {
  return (
    <div className='project-container'>
        <Heading headingPrimary='Explore My Project' headingSub='Project'/>
      
      <div className='project-grid'>
        {[1, 2, 3, 4, 5, 2].map((item, index) => (
          <div key={index} className='project-item' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${index * 200}`}> 
            <div className='project-image'>
              <Image src={`/images/p${item}.jpg`} alt='portfolio' width={300} height={300} className='image'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
