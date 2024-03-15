import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminPage(props) {
      let [text,setText]=useState('');
      let navigate=useNavigate()
       
      let date ={};
      async function onUpdates(updates){
        updates.preventDefault();
        
        date.text =text;
        let result=await axios.post('http://localhost:4000/updates',date)
        console.log(result);

      }

      let [resdate,setresDate] =useState([])
      console.log(resdate,"data")
      let userDate=[]

      const getData = async()=>{
        let res=await axios.get('http://localhost:4000/dates');
        userDate=res.data
        setresDate(userDate);
        
      }
      useEffect(()=>{
        getData();
      },[])

      function toLogout(){
          navigate("/aboutus")
      }

      function conformUpdate(){
        
        alert("update successfully updated")
      }
        
  return (
    <div>
      
      <form onSubmit={onUpdates}>
      <label className='text-warning  fs-1'>Updates</label><br></br>
      <textarea name="textupdate" value={text} onChange={(e) => setText(e.target.value)}></textarea><br></br>
      <button className='text-success' onClick={conformUpdate}>Update Updates</button>
      <br></br>
      <br/>
      </form>
      <Link className='text-danger text-end bg-dark' onClick={toLogout}>Admin Logout</Link>
      <h1 className='text-center text-warning bg-primary'>RESERVATIONS</h1>
     
      <div>{
        resdate.map((ele,index)=>
        <h3>{`${index+1} ${ele?.name} Reserved ${ele?.bikeName} on ${ele?.date}.`}</h3>
        )
      }
      </div>
    </div>
  )
}

export default AdminPage

