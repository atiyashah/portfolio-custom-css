// import React from 'react'
// import Heading from '../Helper/Heading'
// import AboutInfoBox from './AboutInfoBox'
// import  Image from "next/image"
// export const AboutMe = () => {
//   return (
//     <div className='mt-[5rem] mb-[3rem]'>
//         <Heading headingPrimary="I Can Build Your Dream website" headingSub="About Me" />
      
//       <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center
//       gap-[4rem]'>

//         {/* Personal  Info*/}
//         <div>
//              <h1 className='md-[1.4rem] text-[27px] font-semibold text-orange-500'>Personal Infos :</h1>
             
//            <AboutInfoBox 
//            text1="First Name : Atiya" 
//            text2='Last Name : shah' />
          
//           <AboutInfoBox 
//            text1="Adress : Karachi" 
//            text2='Email : atiyashah890@gmail.com' />
          
//           <AboutInfoBox 
//            text1="Country : Pakistan" 
//            text2='Role : Developer' />
          
//         </div>
//         {/*Image*/}
//  <Image
//   data-aos="zoom-in" 
//   data-aos-anchor-placement="top-center"     src="/images/about2.svg" alt="about" width={300} height={300} className='mx-auto' />
//       </div>
//     </div>
//   )
// }

// export default AboutMe




import React from 'react';
import Heading from '../Helper/Heading';
import AboutInfoBox from './AboutInfoBox';
import Image from "next/image";
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <Heading headingPrimary="I Can Build Your Dream website" headingSub="About Me" />
      
      <div className='about-me-content'>
        {/* Personal Info */}
        <div>
          <h1 className='personal-info-heading'>Personal Infos :</h1>
          <AboutInfoBox text1="First Name : Atiya" text2='Last Name : shah' />
          <AboutInfoBox text1="Adress : Karachi" text2='Email : atiyashah890@gmail.com' />
          <AboutInfoBox text1="Country : Pakistan" text2='Role : Developer' />
        </div>

        {/* Image */}
        <Image
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          src="/images/about2.svg"
          alt="about"
          width={300}
          height={300}
          className='about-image'
        />
      </div>
     
    </div>
  );
};

export default AboutMe;