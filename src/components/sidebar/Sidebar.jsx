import React from 'react';
import "./sidebar.scss";
import { RxCross1 } from "react-icons/rx";
import {motion} from "framer-motion"
const Sidebar = ({openSidebar ,setOpenSidebar}) => {
  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        delay:0.3,
        type:"spring",
        stiffness:20,
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:2,
        type:"spring",
        stiffness:400,
        damping:40
      }
    },
  }

  const itemVariants = {
    open:{
      y:0,
      opacity:1
    },
    closed:{
      y:50,
      opacity:0,
    }
  }



  return (
    <motion.div className='sidebar' animate={openSidebar? "open" : "closed"} >
      <motion.div variants={variants} className="sidebar-links">
        <div className="sidebar-group">
          <motion.a href="#skills" variants={itemVariants}  >Skills</motion.a>
        </div>
        <div className="sidebar-group">
          <motion.a href="#projects" variants={itemVariants}   >Projects</motion.a>
        </div>
        <div className="sidebar-group">
          <motion.a href="#achievement" variants={itemVariants}>Achievement</motion.a>
        </div>
        <div className="sidebar-group">
          <motion.a href="#blogs" variants={itemVariants}  >Blogs</motion.a>
        </div>
        <div className="sidebar-group">
          <motion.a href="#contact" variants={itemVariants} >Contact Me</motion.a>
        </div>
      </motion.div>
      <motion.div className="cross" animate={openSidebar? "open" : "closed"}>
        <button onClick={()=> setOpenSidebar((prev)=> !prev)} ><RxCross1/></button>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar
