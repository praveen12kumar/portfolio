
import "./greeting.css";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

const textVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-200%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:15,
      staggerChildren:0.1,
    }
  }
}



const Greeting = () => {

  return (
    <div className="content greeting">
      <div className="greeting-main">
        <div className="textContainer">
          <div className="hello">
            <p>{greeting.title}</p>
            <motion.div
              className="handSign"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <p>👋</p>
            </motion.div>
          </div>
          <div className="myself">
            <p>{greeting.subTitle}</p>
          </div>
          <div className="socialMedia">
            <SocialMedia />
          </div>
          <div className="greeting-button-div">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <Button
                text="Check my resume"
                newTab={true}
                href={greeting.resumeLink}
              />
            )}
          </div>
        </div>
        <div className="greeting-imageContainer">
          <img className="greeting-profile" src="/hero.png" alt="profile" />
        </div>
      </div>
      <motion.div className="slidingTextContainer" variants={textVariants}
        initial="initial" animate="animate"
      >
        Web Developer
      </motion.div>
    </div>
  );
};

export default Greeting;
