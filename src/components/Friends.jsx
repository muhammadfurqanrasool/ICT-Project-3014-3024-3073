import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import { friends, users } from '../utils'
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
        {friends.map((user, key)=>{
          return <li key={key} className={`${user.status && "active"}`}><div className="img"><img src={IMG} alt="" /></div> <span>{user.fullName}</span></li>
        })}
      </ul>
      <hr />
    </div>
  )
}

export default Friends