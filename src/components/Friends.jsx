import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import { friends, users } from '../utils/users'
import IMG from "/assets/user-male-circle.jpg"

const Friends = () => {
  
  return (
    <div className='friends'>
      <div className="options">
        <h2>Contacts</h2>
        <div className="search">
          <FaSearch/>
          <SlOptions />
        </div>
      </div>

      <ul>
        {friends.map(user=>{
          return <li><div className="img"><img src={IMG} alt="" /></div> <span>{user.fullName}</span></li>
        })}
      </ul>
    </div>
  )
}

export default Friends