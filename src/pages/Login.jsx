import { useNavigate } from "react-router-dom"
import "../css/login.css"
import { appName, host } from "../utils"
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {Login} = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const {data} = await axios.post(`${host}/api/auth/login`, {email,password});
      
      console.log(data);
      Login(data);
      
    } catch (error) {
      
    }
  }
  const navigate = useNavigate();
  return (
    <div className="container login">
        <div className="text">
            <h1>{appName}</h1>
            <p>{appName} helps you connect and share with the people in your life.</p>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email address or phone number" required />
                <input type="password" name="password" placeholder="Password"/>
                <button>Log in</button>
                <span>Forgotten password?</span>
                <hr />
            </form>
                <button onClick={()=>navigate("/register")} className="lime">Create new account</button>
        </div>
    </div>
  )
}

export default Login