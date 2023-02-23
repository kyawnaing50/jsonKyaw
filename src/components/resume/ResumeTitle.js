import React from 'react'

const ResumeTitle = ({ title,icon}) => {
  return (
      <div>
        <h1 className=' text-sm text-gray-300 uppercase font-medium flex items-center gap-2 py-3 borderBottom'>
            <span className='text-designColor text-2xl' >{icon}</span>{ title}
        </h1>
    </div>
  )
}

export default ResumeTitle