
import {eductionInfo} from "../../portfolio";
import EducationCard from '../../components/educationCard/EducationCard';
import {motion} from "framer-motion";
import "./education.scss";

const eduVariants = {
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



const Education = () => {
  if(!eductionInfo.display) return null;
  return (
   <div className="content education">
    <motion.div className="education-main"
    variants={eduVariants} initial="initial" whileInView="animate"
    >
    <h1 className='edu-heading' >
      Education
    </h1>
    <div className="horizontal"></div>
    <div className="edu-card-container">
      {
        eductionInfo.college.map((college, index)=>(
          <EducationCard college={college} key={index} />
        ))
      }  
    </div>
    
    </motion.div>
   </div>
  )
}

export default Education
