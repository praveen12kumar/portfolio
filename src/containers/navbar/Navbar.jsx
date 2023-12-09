import React, {useState} from 'react'
import "./navbar.css";
import { greeting } from '../../portfolio';
import { IoMdMenu } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import {motion} from "framer-motion";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  

  return (
    <header className='navbar content'>
      <div className="logo">
        <motion.a 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.8}}
        href="/" className='title'>{greeting.username}</motion.a>

        <button className='menu-btn menu-icon' onClick={()=> setOpenSidebar((prev)=> !prev)} ><IoMdMenu/></button>
        {openSidebar && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />}
      </div>
      <ul className='page-links'>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievement</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
