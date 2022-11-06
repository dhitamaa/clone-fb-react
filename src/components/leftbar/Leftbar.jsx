import Friends from '../../img/friend.png'
import Groups from '../../img/discussion.png'
import Marketplace from '../../img/marketplace.png'
import Watch from '../../img/watching.png'
import Memories from '../../img/memory.png'
import Events from '../../img/events.png'
import Gaming from '../../img/gaming.png'
import Gallery from '../../img/gallery.png'
import Videos from '../../img/video-camera.png'
import Message from '../../img/message.png'
import Fundraiser from '../../img/fundraise.png'
import Tutorial from '../../img/tutorial.png'
import Courses from '../../img/online-course.png'

import './leftbar.scss'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Teman</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Grup</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Pasar</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Menonton</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Kenangan</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Pintasan</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Acara</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Bermain</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Galeri</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Video</span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span>Pesan</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Lainnya</span>
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Galang dana</span>
          </div>
          <div className="item">
            <img src={Tutorial} alt="" />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Kursus</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar