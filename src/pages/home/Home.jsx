import React from 'react';
import Navbar from '../../containers/navbar/Navbar';
import Greeting from "../../containers/greeting/Greeting";
import Skills from '../../containers/skills/Skills';
import Education from '../../containers/education/Education';
import Experience from "../../containers/experience/Experience";
import Projects from "../../containers/projects/Projects";
import Blogs from '../../containers/blogs/Blogs';
import Contact from '../../containers/contact/Contact';

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
        {/* <Blogs/> */}
        <Contact/>
        </> 
    </div>
  )
}

export default Home
