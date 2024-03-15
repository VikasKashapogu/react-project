import React, { useState } from 'react'
import { userLoginContext } from './LoginContext'
import axios from 'axios'
import { compareSync } from 'bcryptjs';


function LoginContextStore({children}) {
    let [currentUser,setCurrentUser]=useState({})
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    
    
    async function onSubmit(data){
        let res=await axios.get(`http://localhost:5000/users?username=${data.username}`)
        
        let usersList=res.data
        
        if(usersList.length===0){
          alert("Invalid username")
          
        }
        else{
          let result=compareSync(data.password,usersList[0].password)
          
          if(result===false){
            alert("Invalid password")
          }
          else{
            setCurrentUser(usersList[0])
            setUserLoginStatus(true)
            
            
          }
        }
        
    }
  return (
    <userLoginContext.Provider value={[currentUser,setCurrentUser,userLoginStatus,setUserLoginStatus,onSubmit]}>{children}</userLoginContext.Provider>
  )
}

export default LoginContextStore