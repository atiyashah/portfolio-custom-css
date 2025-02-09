// import React from 'react'

// interface Props{
//     headingPrimary:string;
//     headingSub:string
// }



// const Heading = ({headingPrimary,headingSub}:Props) => {
//   return (
//     <div className='text-center p-2'>
//       <h1 className='font-samibold text-[22px] md:text-[28px] text-yellow-300'>{headingSub}</h1>
//       <h1 className='font-bold text-[25px] sm:text-[30px] md:text-[38px] text-white'>{headingPrimary}</h1>
//     </div>
//   )
// }

// export default Heading
















import React from 'react';
import './Heading.css'; // CSS file import karein

interface Props {
  headingPrimary: string;
  headingSub: string;
}

const Heading = ({ headingPrimary, headingSub }: Props) => {
  return (
    <div className='heading-container'>
      <h1 className='heading-sub'>{headingSub}</h1>
      <h1 className='heading-primary'>{headingPrimary}</h1>
    </div>
  );
};

export default Heading;