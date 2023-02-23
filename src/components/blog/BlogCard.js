import React from 'react'


const BlogCard = ({image, title,subTitle,category,link }) => {
  return (
      <div className='py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group '>
          <div className='h-full mb-3 overflow-hidden relative cursor-pointer group'>
              <img src={image} alt="blogImage" />
               <div className='w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-10'></div>
          </div> 

          <div className=' flex flex-col items-center gap-2'>
              <span className='text-sm text-designColor border-[1px] border-designColor px-2'>{title}</span>
              <h2 className=' text-base text-center font-normal font-titlefont text-[#ccc] '>{subTitle}</h2>
          </div>
          {/* button */}
        <div className='flex h-6 w-full py-4 justify-center items-center'>
            <a className=' text-gray-400 w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2'
                href= {link}
                target="_blank"
                rel='noreferrer'>
            <button className=' mt-4 w-full h-full flex justify-center borderRight items-center gap-2 hover:text-designColor duration-300 '>READ..</button>
            </a>
            
        </div>
      </div>
  )
}

export default BlogCard