import React from 'react'

import "./experienceCard.scss";

const ExperienceCard = ({experience}) => {
  console.log(experience)
  return (
    <div className='exp-card'>
      <div className="exp-card-header">
       <p>{experience.company}</p>
       <div className="exp-header-img">
        <img src={experience.companylogo} alt="" />
       </div>
      </div>
      <div className="exp-card-container">
        <p className='exp-role'>{experience.role}</p>
        <p className='exp-date'>{experience.date}</p>
        <p className='exp-desc'>{experience.desc}</p>
        <div className="">
          {experience.descBullets.map((point)=>(
            <li>{point}</li>
          ) )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
