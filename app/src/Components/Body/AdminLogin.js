import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
function AdminLogin(){
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')
  let [loggedIn,setloggedIn]=useState(false);
  let navigate=useNavigate()
function handleLogin(){
    let defaultusername='admin';
    let defaultPassword='password';

  if(username===defaultusername && password===defaultPassword){
    setloggedIn(true);
  }
  else{
    alert('Invalid Credentials. Please try again');
  }
  }

  return(
    <div>
      {loggedIn?(
        
        navigate('/adminpage')
      ):(
        <div className='adminlogbg' style={{minHeight:"100vh"}}>
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
        <div className='row justify-content-center'>
            <div className='card p-4'>
                <h2 className='text-center mb-4'>Admin Login</h2>
        <div className='mb-3'>
          <label className='text-primary'>Username:</label>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <br/>

          <div className='mb-3'>
          <label className='text-primary'>Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <br/>
          <button onClick={handleLogin} className="bg-success">Login</button>
          <p className='text-start text-danger'>Only admin can Login</p>
          </div>
          </div>
          </div>
          </div>
        )}
    </div>
  )
}
export default AdminLogin