"use client"
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Skill from './Skill/Skill'
import Project from './Project/Project'
import Reviews from './Reviews/Reviews'
import Contact from './Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react'


const HomePage = () => {

useEffect(()=>{

  const initAOS = async ()=>{
    await import('aos')
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom"
    })
  };

  initAOS()


},[])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Reviews />
      <Contact />
      
    </div>
  )
}

export default HomePage

