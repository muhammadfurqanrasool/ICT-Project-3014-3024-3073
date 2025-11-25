import { Routes, Route, Navigate } from 'react-router-dom';
import {Home, Chats, Login, Register, Profile} from "./pages";
import {Layout, AuthLayout} from "./layouts"
import "./css/style.css";
import { useAuth } from './context/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';

function ProtectedRoute({children}) {
  console.log(user);
  // if(user != null) {
    //   return children;
    // }else {
      //   return <Navigate to="/auth/login"/>
      // }
    } 
    
const App = () => {
  const {user, GetUser} = useAuth();

  useEffect(()=>{
        GetUser();
    },[])
  // axios.defaults.baseURL = host;
  axios.defaults.withCredentials = true;
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='chats' element={<Chats/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='/' element={<AuthLayout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>

        <Route path='/*' element={<h1>Error 404, Page Not Found!</h1>}></Route>
      </Routes>

  )
}

export default App