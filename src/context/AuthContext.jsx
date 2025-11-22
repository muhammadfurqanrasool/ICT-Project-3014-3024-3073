import { createContext, useContext, useLayoutEffect, useState } from 'react'
import {users} from "../utils/users";
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(users[0]);
    const [error,setError] = useState(null);
    const KEY = "authToken";
    useLayoutEffect(()=>{
        GetUser();
    },[])

    function showError(message) {
        setError({status:true, message});
    }
    function Login({email, password}) {
        users.forEach(usr=>{
            if(usr.email == email) {
                if(usr.password == password) {
                    localStorage.setItem(KEY, JSON.stringify(usr));
                    setUser(usr);
                }
            }
            else {
                showError("Invalid credentials!");
            }
        })
    }
    function LogOut() {
        localStorage.removeItem(KEY);
        setUser(null);
    }
    function GetUser() {
        const data = JSON.parse(localStorage.getItem(KEY));

        if(Object.length > 0) {
            setUser(data);
        }
        else setUser(null);
    }
  return (
    <AuthContext.Provider value={{user, Login, LogOut, error}}>
        {children}
    </AuthContext.Provider>
  )
}



export default AuthContextProvider;

export function useAuth() {
    const data =  useContext(AuthContext)
    return data;
}