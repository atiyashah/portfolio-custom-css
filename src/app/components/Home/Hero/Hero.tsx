

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-[87vh] flex justify-center flex-col '>
        
       <div className='w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-5 items-center gap-[5rem]'>
      <div className='col-span-2 hidden sm:block'>

        {/* Image*/}
         <div data-aos="zoom-in" className='mx-auto w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]
        xl:w-[400px] xl:h-[400px]'>
            <Image src="/images/pic5.webp" alt="Hero" 
            width={400} height={400} 
            className="w-[100%] h-[100%] pr-6 mt-[60px] rounded-[100%]" />
        </div>

        {/* complete order number*/} 
        <div >
         {/* className='bg-red-800 flex p-4 rounded-lg justify-between items-center'> */}
            {/* <BiCheckCircle className='w-[2.5rem] h-[2.5rem] lg;h-[3rem] xl:w-[3rem]
             text-white' />  */}
     {/* <h1 className='text-[20px] xl:text-[30px] text-yellow-400 font-bold'>1956k+{""}</h1> */}

{/* <p className='text-[20px] md:text-[18px] lg:text-[16px] xl:text-[20px] font-medium text-white'>Complete Projects</p> */}
    </div>
    </div>
    <div data-aos="fade-left" data-aos-delay="600" className='col-span-3'>

        <h1 className='text-[20px] xl:text-[26px] uppercase text-orange-500 font-semibold'> Hello i&apos;m</h1> {/* Escape apostrophe here */}

        <h1 data-aos="fade-right" data-aos-delay="600" className='text-[35px] lg:text-[45px] xl:text-[60px] font-bold text-white'>
            Atiya <span className='text-red-600'>Shah!</span>
        </h1>
        <h1 data-aos="fade-left" data-aos-delay="800" className='text-[24px] lg:text-[28px] xl:text[35px] text-white text-opacity-80'>
            Web Developer
        </h1>
        <p data-aos="fade-right" data-aos-delay="1000" className='text-[16px] xl:text-[18px] text-white text-opacity-60 mt-[1.5rem]'>
            I am a passionate web developer currently learning cloud computing and generative AI engineering. I have experience in HTML, CSS, TypeScript, JavaScript, and frameworks like React, Tailwind CSS, ShadecnUI, and Next.js. My focus is on creating user-friendly and dynamic web applications that balance functionality and creative design. Currently, I am exploring and learning more about cloud computing and generative AI, and I am excited to expand my knowledge in these fields.
        </p>
        <button data-aos="zoom-in" data-aos-delay="1000" className="group mt-[2rem] relative h-12 w-48 owerflow-hidden rounded-full bg-red-600 text:lg shadow">
            <span className="absolute inset-0 w-3 bg-amber-400 rounded-full transition-all duration-300 ease-out group-hover:w-full block"></span>
            <span className="relative flex items-center justify-center space-x-3 text-white">
                <span>
                    <Link href={'/about'}>About Me</Link> {/* Apostrophe in "I'm" was escaped */}
                </span>
            </span>
        </button>
    </div>
    </div> 
    </div>
  )
}

export default Hero
