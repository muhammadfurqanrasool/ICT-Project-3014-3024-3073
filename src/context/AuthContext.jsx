import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'
import {host, user , users} from "../utils";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [User,setUser] = useState({});
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate()
    const KEY = "authToken";
    const STORAGE_KEY = "fb-token";



    async function GetUser(isReload=false) {
        if (isReload) {
            const storedUser = localStorage.getItem(STORAGE_KEY);
            if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setIsLoading(false); 
            console.log('User data loaded instantly from localStorage.');
            } 
            else {
            setIsLoading(true);
            }
        }

        try {
            const {data} = await axios.get(`${host}/api/profile`);
            if(data) {
                setUser(data);
            }else {
                await LogOut();
            }
            
        } catch (error) {
            console.error('Profile fetch failed:', error);
        if (!localStorage.getItem(STORAGE_KEY)) {
                await LogOut(); 
        }
        }
        finally {
            setIsLoading(false);
        }
    }

    function showError(message) {
        setError({status:true, message});
    }
    function Login(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setUser(data);
        navigate("/", {replace:true})

    }
    async function LogOut() {
        await axios.get(`${host}/api/auth/logout`);
        localStorage.removeItem(STORAGE_KEY);
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