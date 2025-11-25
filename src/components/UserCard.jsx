import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiUserAdd } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import { FaUserCheck } from 'react-icons/fa6';

const UserCard = ({user}) => {
    const [isMyFriend, setIsMyFriend] = useState(false);
    const {User} = useAuth();
    const handleAddFriend = async(e)=> {
        e.preventDefault();
        const id = e.target.id;
        if(id) {
            await axios.post(`${host}/api/profile/people/add`, {person_id: id});
            alert("Friend Added!");
            window.location.reload();
        }
    }
    useEffect(()=>{
        if(User.friends.includes(user._id)) setIsMyFriend(true)
    },[])
  return (
    <li key={user._id} className={`person ${user.status && "active"}`}>
        <div className="grp">

        <div className="img"><img src={user?.photoURL} alt="" /></div> 
        <span>
            {user?.fullName}</span>
        </div>
         <button disabled={isMyFriend} className={`addme ${isMyFriend && "friended"}`} id={user?._id} onClick={handleAddFriend}>
                {!isMyFriend?
                    <HiUserAdd />: <FaUserCheck />}
        </button>
    </li>
  )
}

export default UserCard