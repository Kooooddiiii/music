import React from 'react'

import './sidebar.css'
import homeIcon from '../../assets/Home.svg'
import playlist from '../../assets/playlist.svg'
// import playlistGlow from '../../assets/playlistGlow.svg'
import radio from '../../assets/radio.svg'
import videos from '../../assets/videos.svg'
import profile from '../../assets/profile.svg'
import logout from '../../assets/Logout.svg'

import {Link} from 'react-router-dom'




const Sidebar = () => {


  return (
   
<div>
    
      
      <div className="sidebar-menu">
        <div className='sidebar'>
            <ul className="sidebar-icons">
              <li>
                <Link to={'/'}>
                  <img className='single-icon' src={homeIcon} alt=""/>
                </Link>
              </li>

              <li>
                <Link to={'/collection'}>
                  <img className='single-icon' src={playlist} alt=""/>
                </Link>
              </li>

              <li>
                <img className='single-icon' src={radio} alt="" />
              </li>

              <li>
                <img className='single-icon' src={videos} alt="" />
              </li>
      </ul>
    </div>
    <div className='sidebar sidebar-user'>
      <ul className="sidebar-icons">

        <li>
          <img className='single-icon' src={profile} alt="" />
        </li>

        <li>
          <img className='single-icon' src={logout} alt="" />
        </li>    
      </ul>
    </div>

    </div>


     </div>
  )
}

export default Sidebar