import { BiSolidHome } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { FaFacebook, FaFacebookMessenger, FaRegUserCircle } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { PiVideoBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import {useAuth} from "../context/AuthContext";

const Nav = () => {
  const {user} = useAuth();
  return (
    <nav>
        <div className="logo">
            <FaFacebook />
            <div className="input">
                <CiSearch />
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="navElements">
            <Link to="/"><BiSolidHome /></Link>
            <Link to="/"><HiUsers /></Link>
            <Link to="/"><PiVideoBold /></Link>
            <Link to="/"><FaRegUserCircle /></Link>
        </div>
        <div className="userElements">
           <Link to="/chats"> <FaFacebookMessenger /></Link>
                <div className="user">
                    <div className="img">
                      <img src="/assets/astronaut.jpg" alt="" />
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Nav