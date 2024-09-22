
import Lottie from "lottie-react";
import coder from "../../assets/lottie/coder.json";
import { skillsSection } from "../../portfolio";
import {motion} from "framer-motion"

const iconVariants = {
  initial:{
    x:-200,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}



const imageVariants = {
  initial:{
    x:-200,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}

import "./skills.scss";
const Skills = () => {


  return (
    <div className="content" id="skills">
      <div className="skill-main">
        <motion.div className="skill-develeper" variants={imageVariants} initial="initial" whileInView="animate">
          <Lottie animationData={coder} />
        </motion.div>
        <div className="skill-icons">
          <p className="skill-heading">{skillsSection.title}</p>
          <p className="skill-subheading">{skillsSection.subTitle}</p>
          <motion.div 
            className="skill-section" 
            variants={iconVariants} 
            initial="initial" 
            //animate="animate"
            whileInView="animate"
            >
            <ul variants={iconVariants}>
              {skillsSection.softwareSkills.map((skill, i) => {
                return (
                  <li
                    key={i}
                    className="software-skill-inline"
                    name={skill.label}
                  >
                    <p className="skill-icon">{<skill.icon />}</p>
                    <p className="skill-label">{skill.label}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
