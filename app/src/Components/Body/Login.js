
import React from 'react'
import {useForm} from 'react-hook-form'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userLoginContext } from '../LoginContext/LoginContext';
import "./Login.css"


function Login() {

  
  let [currentUser,setCurrentUser,userLoginStatus,setUserLoginStatus,onSubmit]=useContext(userLoginContext)
  let {register,handleSubmit,formState:{errors}}=useForm();
  let navigate=useNavigate()
  
  useEffect(()=>{
    
    if(userLoginStatus===true){
      navigate("/availability")
    }
  },[userLoginStatus])
  
  
  function directRegister(){
    navigate("/register")
  }
  return (
  
    <div className='wrapper bg-dark'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
             {/* {error.length!==0 && <p className='fs-3 text-center text-danger'>{error}</p>}  */}
             <div className='input-box'>
                  <input type="text" placeholder='Enter Username' className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="username" {...register('username',{required:'Username is required'})}/>
                  {errors.username && <div className='invalid-feedback'>{errors.username.message}</div>}
              </div>
            
            <div className='input-box'>
            
                  <input type="password" placeholder='Enter Password' className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password" {...register('password',{required:'Password is required'})}/>
                  {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
                
            </div>
           
            <button type='submit'>Login</button>
            <div className='register-link'>
            <p className='p'>
                Don't have an account?{" "}
                <NavLink className="nav-link" onClick={directRegister}>Register</NavLink>
            </p>
            </div>
        </form>
    </div>
  
    
  )
}

export default Login


