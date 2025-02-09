//  import Link from 'next/link'
//  import React from 'react'
//   import { FaDownload } from 'react-icons/fa6'
// import { HiBars3BottomRight } from 'react-icons/hi2'

//  interface Props{

//      openNav:()=>void
//  }


//  const Nav = ({openNav}:Props) => {
//    return (
//     <div className='h-[13vh] bg-[#181a1d]'>
//       <div className='flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto'>

//         {/* Logo*/}
// <div className='text-[35px] font-semibold text-white'>
// At<span className='text-red-600'>i</span>ya
// </div>

//      {/* Nav links*/}
// <ul className='lg:flex hidden text-white items-center space-x-6 xl:space-x-10'>
//     <li className='navlink'>
//         <Link href="/" >Home</Link>
//     </li>

//     <li className='navlink'>
//         <Link href="/about" >About</Link>
//     </li>

//     <li className='navlink'>
//         <Link href="/project" >Project</Link>
//     </li>

//     <li className='navlink'>
//         <Link href="/skills" >Skills</Link>
//     </li>


//     <li className='navlink'>
//         <Link href="/contact" >Contact</Link>
//     </li>

// </ul>

// {/*Download and menu*/}
// <div className="flex items-center space-x-6">
// <Link href="/images">


// {/*Download CV button*/}
// <button className="group relative h-12 w-48 owerflow-hidden rounded-full bg-red-600 text:lg shadow">
//     <span className="absolute inset-0 w-3 bg-amber-400 rounded-full transition-all duration-300
//      ease-out group-hover:w-full block"></span>
//      <span className="relative flex items-center justify-center space-x-3 text-white">
//         <FaDownload />
//         <span>Download CV</span>
//      </span>
// </button>

// </Link>

// {/*Burger Menu*/}
// <HiBars3BottomRight 
// onClick={openNav} 
// className="w-[2rem] text-white h-[2rem] lg:hidden "/>
// </div>

//       </div>
//     </div>
//   )
// }

// export default Nav












import Link from 'next/link';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { HiBars3BottomRight } from 'react-icons/hi2';
import './Nav.css'; // CSS file import karein

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        {/* Logo */}
        <div className="logo">
          At<span className="logo-highlight">i</span>ya
        </div>

        {/* Nav links */}
        <ul className="nav-links">
          <li className="navlink">
            <Link href="/">Home</Link>
          </li>
          <li className="navlink">
            <Link href="/about">About</Link>
          </li>
          <li className="navlink">
            <Link href="/project">Project</Link>
          </li>
          <li className="navlink">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="navlink">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Download and menu */}
        <div className="actions">
          <Link href="/images">
            {/* Download CV button */}
            <button className="download-button">
              <span className="download-button-span"></span>
              <span className="download-button-text">
                <FaDownload />
                <span>Download CV</span>
              </span>
            </button>
          </Link>

          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav} className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;