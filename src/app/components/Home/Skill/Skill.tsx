// import React from 'react'
// import Heading from '../Helper/Heading'
// import SkillCard from './SkillCard'

// export const Skill = () => {
//   return (
//     <div className='pt-[5rem] pb-[3rem]'>

//         <Heading  headingPrimary='Explor My skills' headingSub='My Skills'/>

//         <div className='grid w-[80%] mt-[5rem] mx-auto  grid-cols-2 lg:grid-cols-3
//         xl:grid-cols-3 gap-[1rem] items-center'>
//       {/*Skills Card*/}

//       <div 
//        data-aos="flip-left" 
//        data-aos-anchor-placement="top-center" 
       
      
//       >
//      <SkillCard image="/images/html.svg"  title="HTML" />
//      </div>

//      <div 
//      data-aos="flip-left" 
//      data-aos-anchor-placement="top-center" 
//      data-aos-delay="200"
     
//      >
//      <SkillCard image="/images/css.svg"  title="CSS" />
//      </div>

//      <div 
//      data-aos="flip-left" 
//      data-aos-anchor-placement="top-center" 
//      data-aos-delay="400"
     
     
//      >
//      <SkillCard image="/images/js.svg"  title="javaScript" />
//      </div>


//      <div  
     
//      data-aos="flip-left" 
//      data-aos-anchor-placement="top-center" 
//      data-aos-delay="600"
     
     
//      >
//      <SkillCard image="/images/ts.svg"  title="typeScript"  />
//      </div>


//      <div 
//      data-aos="flip-left" 
//      data-aos-anchor-placement="top-center" 
//      data-aos-delay="800"
     
     
//      >
//      <SkillCard image="/images/react.svg" title="React" />
//      </div>

//      <div 
//      data-aos="flip-left" 
//      data-aos-anchor-placement="top-center" 
//      data-aos-delay="1000"
     
     
     
//      >
//      <SkillCard image="/images/next.webp"  title="next.js" />
//      </div>

     
     


//      </div>
//       </div>
    
//   )
// }

// export default Skill












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

