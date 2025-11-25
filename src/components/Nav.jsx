import { BiSolidHome } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { FaFacebook, FaFacebookMessenger, FaRegUserCircle } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { PiVideoBold } from "react-icons/pi"
import { Link, useLocation } from "react-router-dom"
import {useAuth} from "../context/AuthContext";
import { LogOutIcon } from "lucide-react"
import "../css/style.css"
const Nav = () => {
  const location = useLocation();
  const {User, LogOut} = useAuth();
  // console.log(User)
  return (
    <nav>
        <div className="logo">
            <FaFacebook />
            <div className="input">
                <div className="searchIcon"><CiSearch /></div>
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="navElements">
            <Link to="/" className={`${location.pathname == "/" && "active"}`}><BiSolidHome /></Link>
            <Link to="/"><HiUsers /></Link>
            <Link to="/"><PiVideoBold /></Link>
            <Link to="/profile"  className={`${location.pathname == "/profile" && "active"}`}><FaRegUserCircle /></Link>
        </div>
        <div className="userElements">
           <Link to="/chats" className={`${location.pathname == "/chats" && "active"}`}> <FaFacebookMessenger /></Link>
                <div className="user">
                    <div className="img">
                      <img src={User?.photoURL} alt="" />
                    </div>
                </div>
                <span className=".logout-btn" onClick={()=>LogOut()}><LogOutIcon/></span>
        </div>
    </nav>
  )
}

export default Nav