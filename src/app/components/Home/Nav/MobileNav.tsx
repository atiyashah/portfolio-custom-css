

















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
