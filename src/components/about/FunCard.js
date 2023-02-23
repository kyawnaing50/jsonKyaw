import React from 'react'

const FunCard = ({icons, des }) => {
  return (
      <div className='full'>
          <div className=' w-full flex flex-col items-center gap-2 py-3 borderRight borderBottom'>
              <span className='text-3xl text-designColor'>{icons}</span>
              <p className=' text-sm w-32 h-10 text-center text-gray-300 hover:text-white duration-200'>{ des}</p>
          </div>
    </div>
  )
}

export default FunCard