import React from "react";
import Lottie from "lottie-react";
import projects from "../../assets/lottie/projects.json";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { myProjects } from "../../portfolio";
import "./project.scss";
import {motion} from "framer-motion";


const projectVariants = {
  initial:{
    x:-300,
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



const Projects = () => {
  console.log("Projects", myProjects);
  if (!myProjects.display) return null;

  return (
    <div className="content" id="projects">
      <motion.div className="project-main"
        variants={projectVariants} initial="initial" whileInView="animate"
      
      >
        <p className="project-title">{myProjects.title}</p>
        <div className="project-container">
          <div className="project-left-div">
            <Lottie animationData={projects} className="project-icon" />
          </div>
          <div className="project-right-div">
            {myProjects.projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
