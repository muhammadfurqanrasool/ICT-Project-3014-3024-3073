import React from 'react'
import Picture from "/assets/astronaut.jpg"
import { FaBookmark, FaUser, FaUsers } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li className="user">
          <div className="img">
            <img src={Picture} alt="" />
          </div>
          <span>Classmate</span>
        </li>

        <li>
        <FaUsers/>
        Friends
        </li>

        <li>
          <FaBookmark />
          Saved
        </li>
      </ul>
    </div>
  )
}

export default Sidebar