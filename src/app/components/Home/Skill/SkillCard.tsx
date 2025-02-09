








import React from 'react';
import Image from 'next/image';
import './SkillCard.css';

interface Props {
    image: string;
   title: string;
}

const SkillCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className='skill-card'>
        {/* Image */}
        <Image src={image} width={80} height={80} alt="Skill" className='skill-image' />

        {/* Title */}
        <h1 className='skill-title'>{title}</h1>
    </div>
  );
};

export default SkillCard;
