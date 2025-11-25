import React from 'react'
import { FaBars } from 'react-icons/fa'
import IMG from "/assets/user-male-circle.jpg";
import { friends } from '../utils';
import { useAuth } from '../context/AuthContext';

const ChatList = () => {
    const {selectedUser,setSelectedUser} = useAuth();
    
  return (
    <div className='chatlist'>
        <div className="top">
            <span className="icon"><FaBars/></span>
            <p>Chats</p>
        </div>
        <ul>
            {friends.map((e,k)=>{
                return <li key={k} className={`${selectedUser?._id == e._id && "selected-chat"}`} onClick={()=>setSelectedUser(e)}>
                <div className="img">
                    <img src={IMG} alt="img" />
                </div>
                <span>{e.fullName}</span>
            </li>
            })}
        </ul>
    </div>
  )
}

export default ChatList