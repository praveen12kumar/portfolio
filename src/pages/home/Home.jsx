import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Greeting from "../../components/greeting/Greeting";
import Skills from '../../components/skills/Skills';
import Education from '../../components/education/Education';
import Experience from "../../components/experience/Experience"
import Projects from "../../components/projects/Projects";
import Blogs from '../../components/blogs/Blogs';
import Contact from '../../components/contact/Contact';

import "./home.css";
const Home = () => {
  return (
    <div className='home'>
      <>
        <Navbar/>
        <Greeting/>
        <Skills/>
        <Education/>
        <Experience/>
        <Projects/>
        <Blogs/>
        <Contact/>
        </> 
    </div>
  )
}

export default Home
