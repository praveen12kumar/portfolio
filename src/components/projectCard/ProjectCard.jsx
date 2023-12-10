import React from 'react'
import Button from "../button/Button";
import "./projectCard.scss";

const ProjectCard = ({project}) => {
    console.log("Project", project)
  return (
    <div className='project-card'>
      <div className="project-image-div">
        <img src={project.image} alt="" />
      </div>
      <div className="project-info-div">
            <p className='project-name'>{project.projectName}</p>
            <p className='project-desc'>{project.projectDesc}</p>
            <div className="project-btn-div">
                {
                    project.footerLink?.map((button)=>(
                        <div className="project-btn">
                            <a href={button.url} target='_blank'  >{button.name}</a>
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default ProjectCard
