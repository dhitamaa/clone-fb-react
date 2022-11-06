import Post from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import WritePost from '../../components/write-post/WritePost'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <WritePost/>
      <Post/>
    </div>
  )
}

export default Home