import React from 'react';
import Title from '../../roundeDesign/home/Title'
import monelar from '../../assets/work/monelarr.jpg'
import likemobile from '../../assets/work/likemobile.jpg'
import deliApp from '../../assets/work/DeliApp.png'
import yangon from '../../assets/work/yangonsport.jpeg'
import admin from '../../assets/work/admin.jpg'
import laravel from '../../assets/work/laravel.png'
import cplusimage from '../../assets/work/c++.png'
import reactImg from '../../assets/work/react.png'
import qt from '../../assets/work/qt.png'
import like from '../../assets/work/like.jpg'
import csharp from '../../assets/work/csharp.png'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
      <div>
          <Title title="Recent" subtitle="Projects" />
          <div className=' w-full grid grid-cols-2 gap-10'>
              <div className=' px-6'>
                  <ProjectCard
                      date="1-4-2022"
                      title="MoneLarr Cigratte Admin App"
                      image={admin}
                      link="https://github.com/kyawnaing50/cigratte_app"
                  />
                    <ProjectCard
                      date="10-4-2022"
                      title="MoneLarr Cigratte User App"
                      image={monelar}
                      link="https://github.com/kyawnaing50/cigratte_app"
                  />
                   <ProjectCard
                      date="1-1-2023"
                      title="Like Mobile Admin App"
                      image={likemobile}
                      link="https://github.com/kyawnaing50/user_app"
                  />
                  <ProjectCard
                      date="12-1-2023"
                      title="Like Mobile User App"
                      image={like}
                      link="https://github.com/kyawnaing50/user_app"
                  />
                  <ProjectCard
                      date="4-12-2023"
                      title="C++ Assignments"
                      image={cplusimage}
                      link="https://github.com/kyawnaing50/assignment"
                  />

                 
                   <ProjectCard
                      date="Sept 5, 2022"
                      title="React Todo App"
                      image={reactImg}
                      link="https://github.com/kyawnaing50/todoReactJs"
                  />
                   <ProjectCard
                      date="Sept 5, 2022"
                      title="SMO Admin"
                      image={csharp}
                      link=" https://github.com/kyawnaing50/smo_admin"
                  />
              </div>

              <div className='px-6'>
                  <ProjectCard
                      date="Sept 21, 2022"
                      title="Like Mobile Delivery App"
                      image={deliApp}
                      link="https://github.com/kyawnaing50/lm_deliapp"
                  />
                  <ProjectCard
                      date="10-1-2023"
                      title="C++ Pointer"
                      image={cplusimage}
                      link="https://github.com/kyawnaing50/pointerc"
                  />
                   <ProjectCard
                      date="May 31, 2022"
                      title="YangonSport Android App"
                      image={ yangon}
                  />
                   <ProjectCard
                      date="12-1-2023"
                      title="C++ String"
                      image={cplusimage}
                      link="https://github.com/kyawnaing50/c_string"
                  />
                   <ProjectCard
                      date="10-12-2022"
                      title="Laravel API"
                      image={laravel}
                      link="https://github.com/kyawnaing50/laravel_api"
                  />
                 
                  <ProjectCard
                      date="June 10,2022"
                      title="Geo Coordinate Class"
                      image={csharp}
                      link="https://github.com/kyawnaing50/geoCord"
                  />
                  <ProjectCard
                      date="Nov 16,2022"
                      title="Qt Location"
                      image={qt}
                      link=" https://github.com/kyawnaing50/QtLocation_QMLmap"
                  />
              </div>
          </div>
    </div>
  )
}

export default Projects