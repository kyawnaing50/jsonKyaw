import React from 'react'
 import {FaGithub} from "react-icons/fa";//

const ProjectCard = ({ date, title, image, link}) => {
    return (
      <div className=' w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-zinc-800'>
        <div className='h-full mb-3 overflow-hidden relative cursor-pointer group' >
            <img className=' w-40 h-20 rounded-md object-cover' src={image} alt="cardImage" />
            <div className=' w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20'></div>
        </div>     
        <h3 className='w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm]'>{date}</h3>  
        <p className=' font-titlefont text-base text-gray-400 mt-1 text-center'>{title}</p>
        {/* button */}
        <div className='flex h-6 w-full py-4 justify-center items-center'>
            <a className=' text-gray-400 w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300'
                href= {link}
                target="_blank"
                rel='noreferrer'>
            <button className='w-full h-full flex justify-center borderRight items-center gap-2 '>Source Code<FaGithub/></button>
            </a>
            
        </div>
    </div>
    
      
  )
}

export default ProjectCard