import './profile.scss'
import { useContext } from "react";
import { AuthContext } from '../../context/authContext'
import { FacebookTwoTone } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Place } from '@mui/icons-material'
import { Language } from '@mui/icons-material'
import { MoreOutlined } from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material'
import Posts from "../../components/posts/Posts"

const Profile = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='profile'>


      <div className="images">
        <img className='cover' src="https://static.zerochan.net/Keqing.full.3766465.jpg" alt="cover" />
        <img className="profilePic" src={currentUser.profilePic} alt="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoTone fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <Instagram fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <Twitter fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <LinkedIn fontSize='large' />
            </a>
            <a href="https://facebook.com">
              <Pinterest fontSize='large' />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>Liyue</span>
              </div>
              <div className="item">
                <Language />
                <span>dhitama.dev</span>
              </div>
            </div>
            <button>ikuti</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreOutlined />
          </div>
        </div>
        <Posts />
      </div>
    </div>

  )
}

export default Profile