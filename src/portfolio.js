import { FaHtml5, FaNpm, FaCss3, FaReact, FaNode, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";



const greeting = {
    username: "Praveen Kumar",
    title: "Hi all, I'm Praveen",
    subTitle:  "A web developer, learning and applying the latest technologies and best practices in web development, such as ReactJS, NodeJS, Redux.js, and Back-End Web Development. Aim to become a leader in the tech industry who can create innovative and impactful solutions for society.",
    resumeLink:"https://github.com/"
};

const socialMediaLinks = {
    github: "https://github.com/praveen12kumar",
    linkedin: "https://www.linkedin.com/in/praveen-kumar-88644bbb",
    twitter: "https://twitter.com/praveenshakya20",
    gmail:"praveenshakya1@gmail.com",
    facebook: "https://www.facebook.com/praveen.shakya.792",
    instagram:"https://www.instagram.com/kumarpraveen1/",
    display:true,
}

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [],
  
    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
    softwareSkills: [
      {
        label: "html-5",
        icon: FaHtml5
      },
      { 
        label: "css3",
        icon: FaCss3
      },
      {
        label: "JavaScript",
        icon:SiJavascript
      },
      {
        label: "reactjs",
        icon: FaReact,
      },
      {
        label: "Node",
        icon:FaNode
      },
      {
        label: "Npm",
        icon:FaNpm
      },
      {
        label: "Mongo-database",
        icon:FaDatabase
      },
      {
        label: "Github",
        icon:FaGithub
      },
     
      
    ],
    display: true // Set false to hide this section, defaults to true
  };

  const eductionInfo = {
    display: true,
    college:[
      {
        collegeName:"Maulana Azad National Institute of Technology, Bhopal",
        logo: "https://i.ibb.co/5GgFL9G/manit.jpg",
        subTitle: "Master in Technology in Computer Networking",
        duration:"July-2019 - August-2021",
      },
      {
        collegeName:"ABES Engineering College, Ghaziabad",
        logo: "https://i.ibb.co/tHqw3wR/abes.jpg",
        subTitle:"Bachelor of Technology in Information Technology",
        duration: "July-2013 - July-2017"
      }
    ]
  };

  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experiences: [
      {
        role: "Web Development Student",
        company: "neoG Camp",
        companylogo: "https://i.ibb.co/T0dk7nJ/neog.png",
        date: "Feb 2023 – Present",
        desc: "A part of web development (MERN stack) bootcamp",
        descBullets: [
          "Made major projects like e-commerce, social media using ReactJS.",
          "Learnt various technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJS, TypeScript and Redux."
        ]
      },
    ]
  };


  const myProjects = {
    title: "What i did",
    display: true, // Set false to hide this section, defaults to true
    projects: [
      {
        image: "https://i.ibb.co/tMCgjNP/social-media.png",
        projectName: "Socially",
        projectDesc:
          "A social media website where you can connect with your friends!",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://socially-media.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/socially"
          }
          //  you can add extra buttons here.
        ]
      },
      {
        image: "https://i.ibb.co/7KGn5Bb/apna-pustakalaya.png",
        projectName: "Apna Pustakalaya",
        projectDesc: "A books e-commerce website for all book lovers!",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://apna-pustakalaya.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/apna-pustkalaya"
          }
        ]
      },
      {
        image: "https://i.ibb.co/k1DVgpg/component.png",
        projectName: "CSS Component Library",
        projectDesc:
          "A small app containing different components with their documentation in React JS.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://ui-component-css.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/component-lib"
          }
        ]
      },
    ]
  }






  const contactInfo = {
    title: "Contact Me ☎️",
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-8130221540",
    email_address: "praveenshakya1@gmail.com"
  };




export {
    greeting,
    socialMediaLinks,
    skillsSection,
    eductionInfo,
    workExperiences,
    contactInfo,
    myProjects,
}