import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import "./stories.scss"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    // DATA SEMENTARA
    const stories = [
        {
            id: 1,
            name: "Nilou",
            img: "https://static.zerochan.net/Nilou.full.3796030.jpg"
        },
        {
            id: 2,
            name: "Hutao",
            img: "https://static.zerochan.net/Hu.Tao.full.3237179.jpg"
        },
        {
            id: 3,
            name: "Nahida",
            img: "https://static.zerochan.net/Nahida.full.3795253.jpg"
        },
        {
            id: 4,
            name: "Ayaka",
            img: "https://static.zerochan.net/Kamisato.Ayaka.full.3795213.jpg"
        },

    ]

    return (
        <div className="stories">
            <div className="story">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories