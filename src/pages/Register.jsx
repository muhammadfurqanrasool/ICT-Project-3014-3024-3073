import React, { useEffect, useState } from 'react'
import { appName, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET, host } from '../utils'
import IMG from "/assets/user-male-circle.jpg"
import "../css/register.css"
import { replace, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate()
  const [img,setImg] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null); // 'success', 'error', 'loading'
  const [responseMessage, setResponseMessage] = useState('');
  const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

  const [preview,setPreview] = useState(null);
  const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
  function handleAvatarChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = ()=>{
        setImg(file);
        setPreview(reader.result);
      } 
      reader.readAsDataURL(file);
  }
  const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseStatus('loading');
        setResponseMessage('Processing registration...');
        try {
        // RESERVED
        const result = await axios.post(`${host}/api/auth/register`, {
          fullName:form.fullName, email:form.email, password:form.password, photoURL :preview
        });
        console.log(result);
        navigate("/", {replace:true})
        window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
  return (
     <div className="container register">
            <div className="text">
                <h1>{appName}</h1>
                <p>{appName} helps you connect and share with the people in your life.</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="avatar">
                      <input type="file" accept='image/*' onChange={handleAvatarChange} name="file" id="file" hidden/>
                      <label htmlFor="file">
                        <div className="img">
                        <img src={preview || IMG} alt="" />
                        <div className="add">
                        <FaPlus/>
                        </div>
                        </div>
                      </label>
                    </div>
                    <input type="text" name='fullName' onChange={handleChange} placeholder="Full name" required />
                    <input type="text" name='email' onChange={handleChange} placeholder="Email address" required />
                    <input type="password" name='password' onChange={handleChange} placeholder="Password"/>
                    <input type="password" name='confirmPassword' onChange={handleChange} placeholder="Confirm Password"/>
                    <button>Sign up</button>
                    <hr />
                </form>
                    <button onClick={()=>navigate("/login")} className="lime">Already have an account?</button>
            </div>
        </div>
  )
}

export default Register