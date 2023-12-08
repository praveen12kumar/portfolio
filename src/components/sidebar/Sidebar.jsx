import React from 'react';
import "./sidebar.css";
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
    close:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:1,
        type:"spring",
        stiffness:400,
        damping:40
      }
    },
  }

  return (
    <motion.div className='sidebar' animate={openSidebar? "open" : "close"} >
      <motion.div variants={variants} className="sidebar-links">
        <div className="sidebar-group">
          <a href="#skills">Skills</a>
        </div>
        <div className="sidebar-group">
          <a href="#projects">Projects</a>
        </div>
        <div className="sidebar-group">
          <a href="#achievement">Achievement</a>
        </div>
        <div className="sidebar-group">
          <a href="#blogs">Blogs</a>
        </div>
        <div className="sidebar-group">
          <a href="#contact">Contact Me</a>
        </div>
      </motion.div>
      <div className="cross">
        <button onClick={()=> setOpenSidebar((prev)=> !prev)} ><RxCross1/></button>
      </div>
    </motion.div>
  )
}

export default Sidebar
