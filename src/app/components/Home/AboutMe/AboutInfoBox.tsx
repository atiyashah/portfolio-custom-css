



import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import './AboutInfoBox.css'; // CSS file import karein

interface Props {
  text1: string;
  text2: string;
}

export const AboutInfoBox = ({ text1, text2 }: Props) => {
  return (
    <div className='about-info-box'>
      <div className='info-item'>
        <BiCheckCircle className='icon' />
        <span className='text'>{text1}</span>
      </div>

      <div className='info-item'>
        <BiCheckCircle className='icon' />
        <span className='text'>{text2}</span>
      </div>
    </div>
  );
};

export default AboutInfoBox;




