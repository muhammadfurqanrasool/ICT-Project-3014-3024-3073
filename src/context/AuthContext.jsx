import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'
import {host, user , users} from "../utils";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [User,setUser] = useState(null);
    const [error,setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate()
    const KEY = "authToken";

    async function GetUser() {
        const {data} = await axios.get(`${host}/api/profile`);
        console.log(data);
        setUser(data);
    }

    function showError(message) {
        setError({status:true, message});
    }
    function Login(data) {
        setUser(data);
        navigate("/", {replace:true})

    }
    async function LogOut() {
        await axios.get(`${host}/api/auth/logout`);
        localStorage.removeItem(KEY);
        setUser(null);
        navigate("/login", {replace:true})
    }
    
  return (
    <AuthContext.Provider value={{User, Login, LogOut,GetUser, error, selectedUser,setSelectedUser}}>
        {children}
    </AuthContext.Provider>
  )
}



export default AuthContextProvider;

export function useAuth() {
    const data =  useContext(AuthContext)
    return data;
}