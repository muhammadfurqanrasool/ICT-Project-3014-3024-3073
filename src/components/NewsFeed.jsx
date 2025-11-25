import { HiMiniVideoCamera } from "react-icons/hi2"
import IMG from "/assets/user-male-circle.jpg"
import { AiFillPicture } from "react-icons/ai"
import { FaRegFaceSmileWink } from "react-icons/fa6"
import NewsCard from "./NewsCard"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"


function NewsFeed(personal=true) {
    const {User} = useAuth();
    const [posts,setPosts] = useState([]);

    useEffect(()=>{

    }, [])
    return (
        <div className="newsfeed">
           { personal? <form className="createPost">
                <div className="group1">
                    <div className="img">
                        <img src={User?.photoURL} alt="" />
                    </div>
                    <input type="text" placeholder={`What's in your mind? ${User?.fullName}`} />
                </div>

                <div className="group2">
                    <HiMiniVideoCamera />
                    <AiFillPicture />
                    <FaRegFaceSmileWink />
                </div>
            </form> : <></>}
            {
                posts.map(post=>{
                    return <NewsCard key={post._id} postData={post}/>
                })
            }
            
            
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    )
}

export default NewsFeed