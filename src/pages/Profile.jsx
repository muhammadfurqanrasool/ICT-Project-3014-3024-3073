import IMG from "/assets/user-male-circle.jpg"
import {useAuth} from "../context/AuthContext"
import "../css/profile.css"
import { appName, friends } from "../utils";
import NewsFeed from "../components/NewsFeed";


const Profile = () => {
    const {User} = useAuth();
    console.log(User.posts)
  return (
    <div className='profile'>
        <div className="cover">
            <div className="content">
                <div className="user">
                    <div className="img">
                        <img src={User?.photoURL} alt="" />
                    </div>
                    <span className="name">{User?.fullName}</span>
                </div>
                <p>Hey There! I'm using {appName}</p>
                <div className="info">
                    <span className="fnds">Friends: {User.friends?.length}</span>
                    <span className="posts">Posts: {User.posts?.length}</span>
                </div>
            </div>
        </div>
        {/* <NewsFeed personal={false}/> */}
    </div>
  )
}

export default Profile