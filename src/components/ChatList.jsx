import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import IMG from "/assets/user-male-circle.jpg";
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { host } from '../utils';

const ChatList = () => {
    const {selectedUser,setSelectedUser} = useAuth();
      const [friends, setFriends] = useState([]);
    useEffect(()=>{
          async function getFriends() {
              const result = await axios.get(`${host}/api/profile/friends`);
              if(result.data) {
                setFriends(result.data);
              }
          }
          getFriends();
      }, [])
  return (
    <div className='chatlist'>
        <div className="top">
            <span className="icon"><FaBars/></span>
            <p>Chats</p>
        </div>
        <ul>
            {friends.map((user)=>{
                return <li key={user._id} className={`${selectedUser?._id == user._id && "selected-chat"}`} onClick={()=>setSelectedUser(user)}>
                <div className="img">
                    <img src={user?.photoURL} alt="img" />
                </div>
                <span>{user?.fullName}</span>
            </li>
            })}
        </ul>
    </div>
  )
}

export default ChatList