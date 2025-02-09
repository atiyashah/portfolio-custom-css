import React from 'react'
import Heading from '../Helper/Heading'
import ReviweSlider from './ReviweSlider'

const Reviews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <Heading  headingPrimary='Our Client Reviews' headingSub='Reviews'/>
      <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
        <ReviweSlider />

      </div>
    </div>
  )
}

export default Reviews
