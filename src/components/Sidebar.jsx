import React from 'react'
import Picture from "/assets/astronaut.jpg"
import { FaBookmark, FaUser, FaUsers } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const {User} = useAuth();
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
      <ul>
        <li className="user" onClick={()=> navigate("/profile")}>
          <div className="img">
            <img src={User?.photoURL} alt="" />
          </div>
          <span>{User?.fullName}</span>
        </li>
        <hr />
        <li>
        <FaUsers/>
        Friends
        </li>

        <li>
          <FaBookmark />
          Saved
        </li>
      </ul>
      {/* <hr /> */}
    </div>
  )
}

export default Sidebar