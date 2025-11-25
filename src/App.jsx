import { Routes, Route, Navigate } from 'react-router-dom';
import {Home, Chats, Login, Register, Profile, People} from "./pages";
import {Layout, AuthLayout} from "./layouts"
import "./css/style.css";
import { useAuth } from './context/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';

function ProtectedRoute({children, auth=true}) {
  const {User} = useAuth();

  if(auth) {

    if(User && auth) {
      return children;
    }
    else return <Navigate to="/login" replace/>
  }else {
    if(!User && !auth) {
        return children;
      }
    else return <Navigate to="/" replace/>
      
    } 
  } 
    

    
const App = () => {
  const { GetUser } = useAuth();
  useEffect(()=>{
        GetUser(true);
    },[]);
  // axios.defaults.baseURL = host;
  axios.defaults.withCredentials = true;
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='chats' element={<ProtectedRoute><Chats/></ProtectedRoute>} />
          <Route path='profile' element={<ProtectedRoute ><Profile/></ProtectedRoute>} />
          <Route path='people' element={<ProtectedRoute ><People/></ProtectedRoute>} />
        </Route>
        <Route path='/' element={<AuthLayout/>}>
          <Route path='login' element={<ProtectedRoute auth={false}><Login/></ProtectedRoute>}/>
          <Route path='register' element={<ProtectedRoute auth={false}><Register/></ProtectedRoute>}/>
        </Route>

        <Route path='/*' element={<h1>Error 404, Page Not Found!</h1>}></Route>
      </Routes>

  )
}

export default App