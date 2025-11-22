import { Routes, Route, Navigate } from 'react-router-dom';
import {Home, Chats, Login, Register} from "./pages";
import {Layout, AuthLayout} from "./layouts"
import "./css/style.css";
import { useAuth } from './context/AuthContext';

function ProtectedRoute({children}) {
      const {user} = useAuth();
      console.log(user);
      // if(user) {
        return children;
      // }else {
        // return <Navigate to="/login"/>
      // }
} 

const App = () => {
  return (
      <Routes location="/">
        <Route element={<Layout/>}>
        <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='chats' element={<ProtectedRoute><Chats/></ProtectedRoute>}/>
        </Route>
        <Route path='auth' element={<AuthLayout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>

  )
}

export default App