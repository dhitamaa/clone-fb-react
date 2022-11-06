import "./post.scss"
import { Link } from "react-router-dom"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Comments from "../comments/Comments"
import { useState } from "react"

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)

    // SEMENTARA
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilPic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 mnt lalu</span>
                        </div>
                    </div>
                    <MoreHorizTwoToneIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
                        9 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        9 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post