import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import validation from '../helper/validation';
import axios from 'axios';
import base_url from '../apis/baseUrls';
import { toast } from 'react-toastify';
import bcrypt from "bcryptjs";

const SignUp = () => {
    const[user,setUser] = useState({
        username:"",
        email:"",
        pass:"",
        confirmPass:"",
        mobNo:"",
        address:"",
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
        setErrors(await validation(user));
        let isErrorLess = Object.values(errors).every(error => error === "");
        if(isErrorLess){
            //hashing password....
            const hashPass =await bcrypt.hash(user.pass, 10);
            let newUser={
                name:user.username,
                email:user.email,
                password:hashPass,
                mobileNo:user.mobNo,
                image:"default.png",
                address:user.address
            }
            await axios.post(`${base_url}/createUser`,newUser)
                       .then((response)=>toast.success(response.data))
                       .catch(error=>console.log(error));
        }
    }
  return (
    <div className='container' style={{minHeight:"93vh"}}>
        <div className="header pt-5">
                <h1>Registration Form</h1>
            </div>
            <div className="form-input">
                <form onSubmit={handleSubmit} style={{ boxShadow: "10px 10px 8px #888888" }}>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className="floating-label">User Name*</label>
                        {errors.username && <p style={{ color: "red" ,textAlign:"left"}}>{errors.username}</p>}
                    </div>
                    <div className="floating-label-content">
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
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type={visible ? "text" : "password"}
                            name='confirmPass'
                            value={user.confirmPass}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className='floating-label'>Confirm Password*</label>
                        {errors.confirmPass && <p style={{ color: "red" ,textAlign:"left"}}>{errors.confirmPass}</p>}
                    </div>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            type="number"
                            name='mobNo'
                            value={user.mobNo}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className='floating-label'>Phone Number*</label>
                        {errors.mobNo && <p style={{ color: "red" ,textAlign:"left"}}>{errors.mobNo}</p>}
                    </div>
                    <div className="floating-label-content">
                        <input className='floating-input'
                            name='address'
                            type="text" value={user.address}
                            onChange={handleInputs}
                            placeholder='' />
                        <label className='floating-label'>Address</label>
                        {errors.address && <p style={{ color: "red" ,textAlign:"left"}}>{errors.address}</p>}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type='reset' className='btn btn-warning p-2'>Clear</button>
                        <button type='submit' className='btn btn-success p-2 ms-2'>SignUp</button>
                        <div style={{ marginTop: "45px",paddingBottom:"10px"}}>Already Registered?<Link to="/login" tag="a" className='text-decoration-none' action><span style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}>Click here to Login</span></Link></div>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default SignUp