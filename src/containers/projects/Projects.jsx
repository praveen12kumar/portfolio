
import Lottie from "lottie-react";
import projects from "../../assets/lottie/projects.json";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { myProjects } from "../../portfolio";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperProject from "./swiperProject";
import "./project.scss";
import "swiper/css";

const Projects = () => {
 console.log(myProjects);
 
  if (!myProjects.display) return null;

  return (
    <div className="w-screen h-[90vh]">
      <div className="w-full h-full">
        <p className="project-title py-8 text-center text-4xl font-medium text-gray-400">{myProjects?.title}</p>
        <div className="w-full project-container hidden mx-auto md:flex flex-row items-center justify-between">
          <div className="project-left-div w-1/4 hidden md:block px-4">
            <Lottie animationData={projects} className="project-icon" />
          </div>
          <div className="project-right-div w-3/4 flex items-center justify-evenly ">
            {myProjects.projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>

        <div className="w-full px-4 h-auto md:hidden flex items-center justify-center overflow-hidden">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {myProjects.projects.map((project, index) => (
          <SwiperSlide key={index}>
           <SwiperProject project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
        <p className="text-right p-4 cursor-pointer underline underline-offset-2">{myProjects?.seemore}</p>
      </div>
      
    </div>
  );
};

export default Projects;
