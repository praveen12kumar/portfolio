import React from 'react'
import { workExperiences } from '../../portfolio';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import {motion} from "framer-motion";
import "./experience.scss";


const expVariants = {
  initial:{
    x:-300,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }
  }
}


const Experience = () => {

  if(!workExperiences.display) return null;
  return (
    <div className='content experience'>
      <motion.div className="exp-main" variants={expVariants} initial="initial"
        whileInView="animate"
      >
        <h1>Experience</h1>
        <div className="horizontal"></div>
        <div className="exp-container">
        {
          workExperiences.experiences.map((experience, index) =>(
            <ExperienceCard experience={experience} key={index}/>
          ))
        }
      </div>
      </motion.div>
    </div>
  )
}

export default Experience
