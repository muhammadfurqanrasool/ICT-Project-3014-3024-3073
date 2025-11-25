import { FaSearch } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
// import { friends } from '../utils'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { host } from '../utils';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const {User} = useAuth();
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
    <div className='friends'>
      <div className="options">
        <h2>Friends</h2>
        <div className="search">
          <FaSearch/>
          <SlOptions />
        </div>
      </div>

      <ul>
        {friends.map((user, key)=>{
          return <li key={key} className={`${user.status && "active"}`}><div className="img"><img src={user.photoURL} alt="" /></div> <span>{user.fullName}</span></li>
        })}
      </ul>
      {
        friends.length? (<hr />): <center><span style={{color:"gray"}}>No friends...</span></center>
      }
    </div>
  )
}

export default Friends