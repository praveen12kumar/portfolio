import React from "react";
import Lottie from "lottie-react";
import projects from "../../assets/lottie/projects.json";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { myProjects } from "../../portfolio";
import "./project.scss";

const Projects = () => {
  console.log("Projects", myProjects);
  if (!myProjects.display) return null;

  return (
    <div className="content" id="projects">
      <div className="project-main">
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
      </div>
    </div>
  );
};

export default Projects;
