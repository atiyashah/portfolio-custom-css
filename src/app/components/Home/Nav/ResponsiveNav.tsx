"use client"
import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { useState } from 'react'

const ResponsiveNav = () => {

  const [showNav,setShowNav] = useState(false)
  const showNavHandler =()=>setShowNav(true)
  const closeNavHandler =()=>setShowNav(false)


  return (
    <div>
      <Nav openNav={showNavHandler}  />
      <MobileNav closeNav={closeNavHandler} showNav={showNav}/>
    </div>
  )
}

export default ResponsiveNav
