import React from 'react'
import FunCard from './FunCard'
import { FcReading,FcMusic } from 'react-icons/fc';
import { TfiWrite } from 'react-icons/tfi';//BiCameraMovie
import { BiCameraMovie } from 'react-icons/bi';//IoLogoNoSmoking
import { IoLogoNoSmoking } from 'react-icons/io5';//MdNoDrinks
import { MdNoDrinks } from 'react-icons/md';//GiAntiAircraftGun
import { GiAntiAircraftGun } from 'react-icons/gi';//GiAntiAircraftGun
import { BiCodeAlt } from 'react-icons/bi'

const FunFact = () => {
  return (
      <div className='px-0 py-0 grid grid-cols-4 pb-10'>
          <FunCard icons={<BiCodeAlt />} des="Coding ရေး" />
          <FunCard icons={<FcReading />} des="စာဖတ်" />
          <FunCard icons={<TfiWrite />} des="စာရေး/ကဗျာရေး" />
          <FunCard icons={<FcMusic />} des="သီချင်းနားထောင်" />
          <FunCard icons={<BiCameraMovie />} des="ရုပ်ရှင်ကြည့်" />
          <FunCard icons={<IoLogoNoSmoking />} des="No Smoke" /> 
          <FunCard icons={<MdNoDrinks />} des="No Alcohol" />
          <FunCard icons={<GiAntiAircraftGun />} des="အာဆင်နယ်ဖန်" />
      </div>
  )
}

export default FunFact