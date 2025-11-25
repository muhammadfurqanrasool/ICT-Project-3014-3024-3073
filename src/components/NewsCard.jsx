import React, { useState } from 'react'
import IMG from "/assets/user-male-circle.jpg"
import IMG2 from "/assets/windows11.png"
import { user } from '../utils'
import { SlOptions } from 'react-icons/sl'
import { RxCross2 } from 'react-icons/rx'
import { FaRegComment, FaRegHeart } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa6'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'


const NewsCard = () => {
    const [liked,setLiked] = useState(false);

    function clicked() {
        setLiked(prev => !prev);
    }
  return (
    <div className='newscard'>
        <div className="head">
            <div className="user">
                <div className="img">
                    <img src={IMG} alt="" />
                </div>
                        <span>{user.fullName}</span>
            </div>
            <div className="options">
                <SlOptions />
                <RxCross2 />
            </div>
        </div>
        <div className="postContent">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iste eius similique labore voluptatem. Vitae nulla perspiciatis earum cupiditate obcaecati!
        </div>
        <div onDoubleClick={clicked} className="postImg">
           {liked && <FaHeart  className='filled'/>}
            <img src={IMG2} alt="img" />
        </div>
        <div className="reactions">
            
               <abbr title="Like">
            <button onClick={clicked}>
                 {
                     liked? <FaHeart size={22}  className='filled'/> : <FaRegHeart size={22}/>
                    }
            </button>
                    </abbr>
            <abbr title="Comment">

            <button>
                <FaRegComment size={22}/>
            </button>
            </abbr>
            <abbr title="Share">

            <button>
                <PiPaperPlaneTiltBold size={22} />
            </button>
            </abbr>
        </div>

    </div>
  )
}

export default NewsCard