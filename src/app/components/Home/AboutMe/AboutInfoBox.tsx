// import React from 'react'
// import { BiCheckCircle } from 'react-icons/bi';


//  interface Props {
//   text1: string;
//    text2: string

//  }

//  export const AboutInfoBox = ({text1,text2}:Props)=>{
//   return(
//     <div className='block sm:flex items-center mb-[2rem] justify-between'>
//    <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
// <BiCheckCircle className='w-[2rem] h-[2rem] text-yellow-300' />
// <span className='text-[17px] text-white'>{text1}</span>
//    </div>

//    <div className='flex mb-4 sm:mb-0 items-center space-x-3'>
// <BiCheckCircle className='w-[2rem] h-[2rem] text-yellow-300' />
// <span className='text-[17px] text-white'>{text2}</span>
//    </div>
//     </div>
//   )
// }
// export default AboutInfoBox



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




