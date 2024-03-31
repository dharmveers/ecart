import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validation from '../helper/validation';
import axios from 'axios';
import base_url from '../apis/baseUrls'
import { toast } from 'react-toastify';
import bcrypt from "bcryptjs";

export const Login = () => {
    const navigate=useNavigate();
    const[user,setUser] = useState({
        username:"",
        email:"",
        pass:"",
        confirmPass:"",
        mobNo:"",
        address:""
    });
    const[errors,setErrors] = useState({
        username:"",
        email:"",
        pass:"",
        confirmPass:"",
        mobNo:"",
        address:""
    });
    
    const[visible, setVisible] = useState(false);
    //handleInput
    const handleInputs=(e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value});
        setErrors({...errors,[e.target.name]:""});
    }
    //handleSubmit
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setErrors(validation(user));
        if(errors.email==="" && errors.pass===""){
            let dummyUser =await axios.get(`${base_url}/getUser/${user.email}`);
            let dbUser=await dummyUser.data;
            if(!dbUser){
                toast.error("User doesn't Exist!!");
                navigate("/login");
            }
            let isMatched=await bcrypt.compare(user.pass,dbUser.password);
            if(isMatched){
                toast.success("User Loggin SuccessFully..");
                navigate("/");
            }else{
                toast.error("email or password is incorrect");
                return Response.json({
                    message:"Incorrect password "
                });
            }
        }
    }
  return (
        <div className='container' style={{minHeight:"93vh"}}>
            <div className="header pt-5"><h1>Login Here</h1></div>
            <div className="form-input">
                <form onSubmit={handleSubmit} style={{ boxShadow: "10px 10px 8px #888888" }}>
                <div className="floating-label-content mt-5">
                        <input className='floating-input'
                            type="text"
                            name='email'
                            value={user.email}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className='floating-label'>Email*</label>
                        {errors.email && <p style={{ color: "red" ,textAlign:"left"}}>{errors.email}</p>}
                    </div>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type={visible ? "text" : "password"}
                            name='pass'
                            value={user.pass}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className='floating-label'>Password*</label>
                        <span className='password-toggle-icon'>
                            {
                                visible ? <EyeOutlined onClick={() => setVisible(!visible)} />
                                    : <EyeInvisibleOutlined onClick={() => setVisible(!visible)} />
                            }
                        </span>
                        {errors.pass && <p style={{ color: "red" ,textAlign:"left"}}>{errors.pass}</p>}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type='reset' className='btn btn-danger p-2'>Reset</button>
                        <button type='submit' className='btn btn-primary p-2 m-2'>Login</button>
                        <div style={{ marginTop: "45px",paddingBottom:"10px"}}>Not a member?<Link to="/signup" tag="a" className='text-decoration-none' action><span style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}>SignUp here</span></Link></div>
                    </div>
                </form>
            </div>
        </div>
  )
}
