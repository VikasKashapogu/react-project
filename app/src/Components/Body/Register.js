import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import {hashSync} from 'bcryptjs'
import "./Register.css"

function Register() {

  let { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate()
  let [error, setError] = useState('')

  async function onSubmit(data) {
    try {
      let res1 = await axios.get(`http://localhost:5000/users?username=${data.username}`);
      //console.log(res1)
      let usersList = res1.data;
      //console.log(usersList)
      if (usersList.length === 0) {
        
        let hashedPassword=hashSync(data.password,5)
        data.password=hashedPassword
        let res = await axios.post('http://localhost:5000/users', data);
        //console.log(res)
        if (res.status === 201) {
          navigate("/login")
        }
      }
      else{
        setError("Username Already Exist")
      }
    }
    catch (err) {
      setError(err.message)
    }
  }

  function directLogin() {
    navigate("/")
  }
  return (
    <div className='bg'>
    <div className='wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            {error.length!==0 && <p className='fs-3 text-danger text-center'>{error}</p>}
             <div className='input-box'>
                  <input type="text" placeholder='Enter Username' className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="username" {...register('username', { required: 'Username is required',minLength:{value:5,message:'username minimum 5 characters'} })}/>
                  
                  {errors.username && <div className='invalid-feedback'>{errors.username.message}</div>}
              </div>

                <div className='input-box'>
                  <input type="tel" placeholder='Enter Phone Number' className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone" {...register('phone', { required: 'Phone number is required' })}/>
                  {errors.phone && <div className='invalid-feedback'>{errors.phone.message}</div>}
            </div>
            
            <div className='input-box'>
                  <input type="password" placeholder='Enter Password' className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password" {...register('password',{required:'Password is required'})}/>
                  {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
            </div>
            <button type='submit'>Register</button>
            <div className='register-link'>
            <p className='p' style={{color:"black"}}>
                Already Registered !{" "}
                <Link className="nav-link" onClick={directLogin}>Login</Link>
            </p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register


{/* <div className='bg' style={{minHeight:"100vh"}}>
    <div className='container '>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card mt-5'>
            <div className='card-body'>
              <h2 className='card-title text-center'>Registration</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                  {error.length!==0 && <p className='fs-3 text-danger text-center'>{error}</p>}
                  <label htmlFor='username' className='form-label'>Username:</label>
                  <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username" {...register('username', { required: 'Username is required',minLength:{value:5,message:'username minimum 5 characters'} })} />
                  {errors.username && <div className='invalid-feedback'>{errors.username.message}</div>}
                </div>

                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>Phone:</label>
                  <input type="tel" className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="phone" {...register('phone', { required: 'Phone number is required' })} />
                  {errors.phone && <div className='invalid-feedback'>{errors.phone.message}</div>}
                </div>

                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>Password:</label>
                  <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password" {...register('password', { required: 'Password is required' })} />
                  {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
                </div>
                <button type="submit" className='btn btn-primary w-100'>Login</button>
                <p className='text-end'>Already Registered?<Link onClick={directLogin}>Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> */}