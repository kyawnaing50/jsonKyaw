import React from 'react'

const ResumeCard = ({ badge, title,subTitle,des}) => {
  return (
      <div className=' w-full py-6 flex flex-col gap-2.5 borderBottom'>
          {
              badge === "" ? (<h6 className='w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm'>2016-Present</h6>) : (<h6 className='w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm'>{ badge}</h6>
              )
          }
          <h2 className=' text-lg font-titlefont text-gray-200 font-medium'>{ title}</h2>
          <p className=' text-sm text-[#999] -mt-1'>{ subTitle}</p>
          <p className=' text-sm text-[#999] mt-2 font-medium pr-10'>{des}</p>
    </div>
  )
}

export default ResumeCard