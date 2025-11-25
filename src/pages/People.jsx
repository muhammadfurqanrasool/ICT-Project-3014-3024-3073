import { Sidebar, Friends } from "../components"
import React, { useEffect, useState } from 'react'
import "../css/people.css"
import axios from "axios";
import { host } from "../utils";
import { HiUserAdd } from "react-icons/hi";
const People = () => {
    const [users,setUsers] = useState([]);
    const handleAddFriend = async(e)=> {
        e.preventDefault();
        const id = e.target.id;

        if(id) {
            await axios.post(`${host}/api/profile/people/add`, {person_id: id});
            alert("Friend Added!");
        }
        // console.log(id)
    }

    useEffect(()=>{
        console.log('Hello  ')
        async function fetchUsers() {
            try {
                
                const result = await axios.get(`${host}/api/profile/people`);
                console.log(result.data)
                if(result.data) {
                    setUsers(result.data);
                }
                else {
                    console.log("failed")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])
  return (
    <div className="people">
    <Sidebar/>
        <div className="people-list">
            <h2>People You may know: </h2>
            <ul>
                {users.map((usr)=>{
                    return  <li key={usr._id} className={`person ${usr.status && "active"}`}><div className="img"><img src={usr?.photoURL} alt="" /></div> <span>{usr?.fullName}</span> <button className="addme" id={usr?._id} onClick={handleAddFriend}><HiUserAdd /></button></li>
                })}
            </ul>
        </div>
    <Friends/>
    </div>
  )
}

export default People