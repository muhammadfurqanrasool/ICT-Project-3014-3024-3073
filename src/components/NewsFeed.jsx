import { HiMiniVideoCamera } from "react-icons/hi2"
import IMG from "/assets/user-male-circle.jpg"
import { AiFillPicture } from "react-icons/ai"
import { FaRegFaceSmileWink } from "react-icons/fa6"
import NewsCard from "./NewsCard"


function NewsFeed() {
    return (
        <div className="newsfeed">
            <div className="createPost">
                <div className="group1">
                    <div className="img">
                        <img src={IMG} alt="" />
                    </div>
                    <input type="text" placeholder="What's in your mind? Marium Jamshed" />
                </div>

                <div className="group2">
                    <HiMiniVideoCamera />
                    <AiFillPicture />
                    <FaRegFaceSmileWink />
                </div>
            </div>

            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    )
}

export default NewsFeed