import { HiMiniVideoCamera } from "react-icons/hi2"
import { AiFillPicture } from "react-icons/ai"
import { FaRegFaceSmileWink } from "react-icons/fa6"
import NewsCard from "./NewsCard"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"
import { IoMdSend } from "react-icons/io"
import axios from "axios"
import { host } from "../utils"
import { useNavigate } from "react-router-dom"


function NewsFeed(personal=true) {
    const {User} = useAuth();
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    const [preview,setPreview] = useState(null);
    console.log(preview)

    async function sendPost(e) {
        e.preventDefault();
        const content = e.target.content.value?.trim();
        if(content) {

            try {
                await axios.post(`${host}/api/posts/create`, {captions:content, photoURL:preview});
                alert("Post created successfully!");
            } catch (error) {
                console.log(error)
            }
        }
    }
    function handleChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = ()=>{
        setPreview(reader.result);
      } 
      reader.readAsDataURL(file);
    }
    useEffect(()=>{
        async function fetchPosts(){
            const result = await axios.get(`${host}/api/posts`);
            if(result.data.posts) {
                setPosts(result.data.posts);
                // console.log(result.data.posts)
            }
        }
        fetchPosts()
    }, [])
    return (
        <div className="newsfeed">
           { personal? <form className="createPost" onSubmit={(e)=>sendPost(e)}>
                <input type="file" onChange={handleChange} name="file" hidden id="post_img"/>
                <div className="group1">
                    <div className="img" style={{cursor:"pointer"}} onClick={()=> navigate("/profile")}>
                        <img src={User?.photoURL} alt="" />
                    </div>
                    <input type="text" name="content" placeholder={`What's in your mind? ${User?.fullName}`} />
                </div>

                <div className="group2">
                        
                    <button><IoMdSend /></button>
                    <HiMiniVideoCamera />
                    <label htmlFor="post_img" onDoubleClick={(e)=> {e.target.files[0] = null; setPreview(null)} } className={`post-img-label ${preview && "file-selected"}`}>
                    <AiFillPicture />
                    </label>
                    <FaRegFaceSmileWink />
                </div>
            </form> : <></>}
            {
                posts.map(post=>{
                    return <NewsCard key={post._id} postData={post}/>
                })
            }
            
            
            {/* <NewsCard/>
            <NewsCard/>
            <NewsCard/> */}
        </div>
    )
}

export default NewsFeed