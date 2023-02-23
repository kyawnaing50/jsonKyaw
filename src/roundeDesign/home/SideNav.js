import React from 'react'
import SideNavTile from './SideNavTile'

const SideNav = () => {
  return (
      <div className=' px-7 py-4'>
          <SideNavTile title="M" subTitle="enu" />
          <ul>
              <li className='sideNavLi'>Blog Page</li>
              <li className='sideNavLi'>My Portfolio Page</li>
          </ul>
          <SideNavTile title="P" subTitle="rojects" />
          <ul>
              <li className='sideNavLi'>My Portfolio Website</li>
              <li className='sideNavLi'>Like Mobile Android App</li>
              <li className='sideNavLi'>Like Mobile Dashboard Desktop App</li>
              <li className='sideNavLi'>Like Mobile Delivery Android App</li>
              <li className='sideNavLi'>MoneLarr Myanmar User Android App</li>
              <li className='sideNavLi'>MonLarr Myanmar Dashboard Android App</li>
          </ul>
          <SideNavTile title="L" subTitle="atest Posts" />
          <ul>
              <li className='sideNavLi'>C++ Assignment</li>
              <li className='sideNavLi'>Bliockchain & Cryptocurrency</li>
          </ul>
          <SideNavTile title="R" subTitle="each Me" />
          <ul>
              <li className='sideNavLi'>+95 9693919888</li>
              <li className='sideNavLi'>zayyarzawye@gmail.com</li>
          </ul>
    </div>
  )
}

export default SideNav