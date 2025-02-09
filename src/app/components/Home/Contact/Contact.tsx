



import React from 'react'
import Heading from '../Helper/Heading'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary='Get In touch with us' headingSub='Contact Us'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center w-[80%] m-auto'>

            {/* info content */}
            <div>
                <p className='text-[17px] text-white opacity-75'>Get In Touch</p>
                <h1 className='mt-[0.6rem] text-white p-2 sm:p-0 leading-[3.5rem] md:text-[30px] lg:text-[38px] text-[27px] xl:text-[45px]'>
                    Lets Make your <span className='text-yellow-400'>Brand</span>{" "} 
                    Brilliant!
                </h1>
                <p className='text-[15px] text-white mt-[1rem] opacity-75'>
                Transforming ideas into powerful brands.
                Let&apos;s build something remarkable together! {/* escape the apostrophe here */}
                </p>

                {/* Social Media Icons */}
                <div className='mt-4 flex space-x-4'>
                  <a 
                    href="https://github.com/your-github-atiyashah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-white hover:text-yellow-400 text-3xl'>
                    <FaGithub />
                  </a>
                  <a 
                    href="https://linkedin.com/in/your-linkedin-username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-white hover:text-yellow-400 text-3xl'>
                    <FaLinkedin />
                  </a>
                </div>
            </div>

            {/* Form content */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                    <input type="text" placeholder='Name' className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' />

                    <input type="email" placeholder='Email' className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' /> 
                </div>

                <input type="text" placeholder='Subject' className='py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4'/>

                <textarea rows={4} placeholder='Message' className='py-[0.7rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4' /> 
                  
                <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-900 rounded-md px-4'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
