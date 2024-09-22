
import { useState } from "react";
import "./projectCard.scss";
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
   const [show, setShow] = useState(false);

  return (
    <div className='project-card' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <div className="image-container">
          <img src={project.image} alt={project.projectName || 'Project image'} />
       </div>
      {show && <div className="project-info-div">
            <p className='project-name'>{project.projectName}</p>
            <p className='project-desc'>{project.projectDesc}</p>
            <div className="project-btn-div">
                {
                    project.footerLink?.map((button, index)=>(
                        <div className="project-btn" key={index}>
                            <Link to={button.url} target='_blank'  >{button.name}</Link>
                        </div>
                    ))
                }
            </div>
      </div>}
    </div>
  )
}

export default ProjectCard
