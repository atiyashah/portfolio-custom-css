
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