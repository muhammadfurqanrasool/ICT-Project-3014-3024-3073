import { Sidebar } from '../components'
import Friends from '../components/Friends'
import NewsFeed from '../components/NewsFeed'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <NewsFeed/>
      <Friends/>
    </div>
  )
}

export default Home