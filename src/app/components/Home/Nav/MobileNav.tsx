// import React from 'react'
// import Link from 'next/link'
// import { ImCross } from 'react-icons/im'

// interface Props {

//     showNav:boolean;
//     closeNav:()=>void
// }

// const MobileNav = ({closeNav,showNav}:Props) => {

//     const navOpenStyle = showNav ? 'translate-x-0': 'translate-x-[-100%]'


//   return (
//     <div>
//         {/* owerLay*/}
//     <div className={`fixed ${navOpenStyle}  top-0 transform transition-all duration-500 z-[10000] left-0 right-0
//     bottom-0 bg-black opacity-70 w-full h-[100vh]`}> </div>
//     {/* naV link*/}
//     <ul className={`text-white  ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh]
//     transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-blue-500 space-y-10 z-[10006]`}>
// <li className='navlink text-[25px] sm:text-[30px]'>
//     <Link href="#">Home</Link>
// </li>

// <li className='navlink text-[25px] sm:text-[30px]'>
//     <Link href="/about">About</Link>
// </li>

// <li className='navlink text-[25px] sm:text-[30px]'>
//     <Link href="/project">Project</Link>
// </li>

// <li className='navlink text-[25px] sm:text-[30px]'>
//     <Link href="/skills">Skills</Link>

// </li>
// <li className='navlink text-[25px] sm:text-[30px]'>
//     <Link href="/contact">Contact</Link>
// </li>

//  {/* Cross icon for the navbar*/}
//  <ImCross
//  onClick={closeNav}
//  className="absolute top-[1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white"/>
//     </ul>

   
//     </div>
//   )
// }

// export default MobileNav


















import React from 'react';
import Link from 'next/link';
import { ImCross } from 'react-icons/im';
import './MobileNav.css';

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    return (
        <div>
            {/* Overlay */}
            <div className={`overlay ${showNav ? 'show' : ''}`} onClick={closeNav}></div>
            
            {/* Nav Links */}
            <ul className={`mobile-nav ${showNav ? 'show' : ''}`}>
                <li className='navlink'><Link href="#">Home</Link></li>
                <li className='navlink'><Link href="/about">About</Link></li>
                <li className='navlink'><Link href="/project">Project</Link></li>
                <li className='navlink'><Link href="/skills">Skills</Link></li>
                <li className='navlink'><Link href="/contact">Contact</Link></li>
                
                {/* Close Icon */}
                <ImCross onClick={closeNav} className="close-icon" />
            </ul>
        </div>
    );
}

export default MobileNav;
