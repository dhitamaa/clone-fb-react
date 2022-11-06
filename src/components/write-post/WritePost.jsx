import "./writePost.scss"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const WritePost = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className="writePost">
            <div className="content">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Apa yang kamu pikirkan hari ini?" />
            </div>
            <hr />
            <div className="info">
                <div className="item">
                    <VideoCallIcon /> Live video
                </div>
                <div className="item">
                    <InsertPhotoIcon /> Photo/Video
                </div>
                <div className="item">
                    <InsertEmoticonIcon />   Feeling/Activity
                </div>
            </div>
        </div>
    )
}

export default WritePost