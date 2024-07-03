import React, { useState,useEffect } from "react";
import "../SignUp/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [fullName,setFullName]=useState();
    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errors,setErrors]=useState({fullName:'',phoneNumber:'',email:'',password:''});

    const validateEmail=(email)=>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const signupHandler=(e)=>{
        console.log(phoneNumber.length)
        let valid=true;
        let errors={fullName:'',phoneNumber:'',email:'',password:''};

        if (!fullName){
            errors.fullName='Full Name is required';
            valid=false;
        }
        if(!phoneNumber){
            errors.phoneNumber='Phone Number is required';
            valid=false;
        }
        if(!email){
            errors.email='E-mail is required';
            valid=false;
        }
        if(!password){
            errors.password='Password is required';
            valid=false;
        }

        if(!validateEmail(email)){
            errors.email='Invalid E-mail format';
            valid=false;
        }
        if(phoneNumber.length!==10){
            console.log('it is wrong')
            errors.phoneNumber='Invalid Phone Number';
            valid=false;
        }

        setErrors(errors);
        if (!valid){
            e.preventDefault();
        }

    };








  useEffect(() => {
    document.title = "E-Adda ~SignUp";
  });
  return (
    <div>
      <form className="form-control signupForm">
        <input
          className="form-control w-50"
          type="text"
          placeholder="Enter your Full Name"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
        />
        {errors.fullName && <p className='error'>{errors.fullName}</p>}
        <input
          className="form-control w-50"
          type="number"
          placeholder="Enter your Phone Number"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
        />
        {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
        <input
          className="form-control w-50"
          type="email"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <input
          className="form-control w-50"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {errors.password && <p className='error'>{errors.password}</p>} 
        <Link onClick={signupHandler}  to="/pageNotFound" className="text-decoration-none signupBtn">SignUp</Link>
      </form>
      <div className="login">
        <p>Already created..?</p>
        <Link className="text-decoration-none" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;




