import React from 'react'
import ResumeTitle from './ResumeTitle';
import {BiCodeAlt} from 'react-icons/bi';//
import { SiArtstation } from 'react-icons/si'; 
import { FaFlag } from 'react-icons/fa';

const Skills = () => {
  return (
        <div className=' w-full grid grid-cols-9 px-6'>
          <div className=' col-span-4'>
              
              {/* ===========Developments Part==================*/}
              <ResumeTitle title="Development fields" icon={<SiArtstation />} />
              <div className=' py-4'>
                  {/* Web Development */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Web Development </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Mobile Application */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Mobile Development</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                   {/* Backend Development */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Backend API</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Desktop Application */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Desktop Application </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[95%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                </div>


                  
              {/*=========Languages=========*/}
             <ResumeTitle title="Languages" icon={<FaFlag />} />
              <div className=' py-4'>
                  {/* English */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>English </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[55%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Russia */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Russia </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[4%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Burma */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Burma </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Rakhine */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Rakhine </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Khami */}
                   <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'>Khami </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
              </div> 
          </div>
          
          <div className=' w-full h-full flex justify-center items-center'>
              <span></span>
          </div>


          {/* ===========Development Tools Part=============== */}
          <div className=' col-span-4'>
            <ResumeTitle title="Development Tools" icon={<BiCodeAlt />} />
              <div className=' py-4'>
                  {/* Web Development */}
                  {/*======Flutter====== */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Flutter </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* React JS */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> React JS</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* React Native */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> React Native</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[65%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* Laravel */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Laravel</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[60%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* TailwindCSS */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Tailwind CSS</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* C++ */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> C++ </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                  {/* C# */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> C# </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                   {/* MySQL */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> MySQl </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                   {/* Firebase */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Firebase </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[45%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                   {/* Github */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Github</p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
                   {/* Qt */}
                  <div className='py-3 border-b-[1px] border-zinc-800'>
                      <p className=' text-base text-textColor -mb-1.5'> Qt </p>
                      <span className=' w-full bg-zinc-600 h-1 inline-flex relative'>
                          <span className=' w-[40%] h-full absolute top-0 left-0 bg-designColor'></span>
                      </span>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default Skills