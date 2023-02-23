import React from 'react';

const ServiceCard = ({ icons, title, subtitle }) => {
  return (
      <div className='mt-5 py-2 px-6 flex flex-col items-center gap-2 borderRight borderBottom'> 
          <span className=' text-4xl text-designColor mb-1'>
        { icons}
          </span>
      <h2 className=' font-titlefont text-lg font-semibold'>{title}</h2>
      <p className=' text-sm text-center text-zinc-400 px-6'>{ subtitle}</p>
    </div>
  )
}

export default ServiceCard