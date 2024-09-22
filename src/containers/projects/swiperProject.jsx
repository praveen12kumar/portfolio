
import { Link } from "react-router-dom";
function SwiperProject({project}){
    console.log("Project", project)
    return(
        <>
        <div className="w-full border flex flex-col gap-4 rounded-lg p-4">
            <div className="w-full">
                <img className="w-full h-[180px] rounded-md" src={project.image} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
            <p className='text-xl text-gray-200 font-medium text-center'>{project.projectName}</p>
            <p className='text-sm text-left '>{project.projectDesc}</p>
            <div className="flex flex-col p-2 min-[360px]:flex-row gap-2 sm:gap-8">
                {
                    project.footerLink?.map((button, index)=>(
                        <div className="bg-gray-700 text-white text-[12px] min-[360px]:text-[14px] text-center px-2 py-1 rounded cursor-pointer hover:bg-gray-600 transition-all duration-500" key={index}>
                            <Link to={button.url} target='_blank'  >{button.name}</Link>
                        </div>
                    ))
                }
            </div>
      </div>
        </div>
        </>
    )
}

export default SwiperProject;