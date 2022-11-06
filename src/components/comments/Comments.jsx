import { useContext } from "react";
import {AuthContext} from '../../context/authContext'
import "./comments.scss"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    // DATA SEMENTARA
    const comments = [
        {
            id: 1,
            name: "Hutao",
            userId: 2,
            profilPic: "https://static.zerochan.net/Hu.Tao.full.3237179.jpg",
            desc: "So bijak lo bocil"
        },
        {
            id: 2,
            name: "Nilou",
            userId: 3,
            profilPic: "https://static.zerochan.net/Nilou.full.3796030.jpg",
            desc: "Hai adik bentar lagi kita separty"
        },
    ];

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text"  placeholder="tulis komenmu didieu"/>
                <button>Kirim</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilPic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 jam lalu</span>
                </div>
            ))}
        </div>
    )
}

export default Comments