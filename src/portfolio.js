
const greeting = {
    username: "Praveen Kumar",
    title: "Hi all, I'm Praveen",
    subTitle:  "A web developer, learning and applying the latest technologies and best practices in web development, such as ReactJS, NodeJS, Redux.js, and Back-End Web Development. Aim to become a leader in the tech industry who can create innovative and impactful solutions for society.",
    resumeLink:""
};

const socialMediaLinks = {
    github: "https://github.com/praveen12kumar",
    linkedin: "https://www.linkedin.com/in/praveen-kumar-88644bbb",
    twitter: "https://twitter.com/praveenshakya20",
    gmail:"praveenshakya1@gmail.com",
    facebook: "https://www.facebook.com/praveen.shakya.792",
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
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "reactjs",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "mongo-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "java",
        fontAwesomeClassname: "fab fa-java"
      },
      {
        skillName: "github",
        fontAwesomeClassname: "fab fa-github"
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };




export {
    greeting,
    socialMediaLinks,
    skillsSection,
}