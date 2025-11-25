import { Sidebar, Friends } from "../components"
import React, { useEffect, useState } from 'react'
import "../css/people.css"
import axios from "axios";
import { host } from "../utils";
import { HiUserAdd } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import UserCard from "../components/UserCard";
const People = () => {
    const [users,setUsers] = useState([]);
    const {User} = useAuth();
    

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
                    return  <UserCard key={usr?._id} user={usr}/>
                })}
            </ul>
        </div>
    <Friends/>
    </div>
  )
}

export default People