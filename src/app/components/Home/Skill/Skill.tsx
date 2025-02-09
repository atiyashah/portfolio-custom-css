












import React from 'react';
import Heading from '../Helper/Heading';
import SkillCard from './SkillCard';
import './Skill.css';

export const Skill = () => {
  return (
    <div className='skill-container'>
      <Heading headingPrimary='Explore My Skills' headingSub='My Skills' />

      <div className='skill-grid'>
        {[ 
          { image: '/images/html.svg', title: 'HTML' },
          { image: '/images/css.svg', title: 'CSS' },
          { image: '/images/js.svg', title: 'JavaScript' },
          { image: '/images/ts.svg', title: 'TypeScript' },
          { image: '/images/react.svg', title: 'React' },
          { image: '/images/next.webp', title: 'Next.js' }
        ].map((skill, index) => (
          <div 
            key={index} 
            className='skill-card-wrapper' 
            data-aos="flip-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay={`${index * 200}`}
          >
            <SkillCard image={skill.image} title={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

