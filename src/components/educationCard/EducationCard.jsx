import React from 'react'
import "./educationCard.scss";



const EducationCard = ({college}) => {
  return (
    <div className='education-card'>
      <div className="college-logo">
        <img src={college.logo} alt="college-logo"/>
      </div>
      <div className="college-about">
        <p className='clg-name'>{college.collegeName}</p>
        <p className='clg-degree'>{college.subTitle}</p>
        <p className='clg-duration'>{college.duration}</p>
        
      </div>
     
    </div>
  )
}


export default EducationCard
