

import React from 'react';
import './Heading.css'; 

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