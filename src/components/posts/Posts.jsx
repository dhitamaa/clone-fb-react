import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

  // DATA SEMENTARA
  const posts = [
    {
      id: 1,
      name: "Nahida",
      userId: 1,
      profilPic: "https://static.zerochan.net/Nahida.full.3795253.jpg",
      img: "https://static.zerochan.net/Nahida.full.3717843.jpg",
      desc: "alone in the dark forest"
    },
    {
      id: 2,
      name: "Hutao",
      userId: 2,
      profilPic: "https://static.zerochan.net/Hu.Tao.full.3237179.jpg",
      desc: "Kesel banget liat si nahida kesenengan banget bannernya ditungu2in para wibu huh"
    },
    {
      id: 3,
      name: "Nilou",
      userId: 3,
      profilPic: "https://static.zerochan.net/Nilou.full.3796030.jpg",
      img: "https://static.zerochan.net/Nilou.full.3748808.jpg",
      desc: "siang hari ini sangat terik sekali, mari berenang bersamaku"
    },
  ];


  return (
      <div className="posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
  )
}

export default Posts