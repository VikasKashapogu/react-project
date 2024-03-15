import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { userLoginContext } from '../LoginContext/LoginContext'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import './Reservation.css'


function Reservation() {

  let {state}=useLocation()
  let [currentUser] = useContext(userLoginContext);
  // let [fromDate, setFromDate] = useState(null)

  //let currentDate=new Date();

  let[reserveDate,setReserveDate]=useState('');
  let navigate=useNavigate()

  async function toReserve(dates){
            dates.preventDefault();

            //let selectedDate = new Date(dates.reserveDate)
            
            let payload = {
              name : currentUser.username,
              date : reserveDate,
              bikeName : state.productObj.name
            }

            // try{
            //   if(selectedDate >= currentDate){
        //bikeName = currentUser?.productObj.name
        let result=await axios.post('http://localhost:4000/dates',payload)
        alert("Successfully registered")
        navigate("/availability")
         
        
  }
  
  
  return (
    <div className='bgimg' style={{minHeight:"100vh"}}>
    <div className='text-center'>
      <h1 className=' text-center'>Reservation</h1>
      <p>Username:{currentUser.username}</p>
      
      <p>Bike Name:{state.productObj.name}</p>
      <form onSubmit={toReserve}>
      <label>Date:</label>
      <input type="date" name='reservedate' value={reserveDate} onChange={(e)=>setReserveDate(e.target.value)} required></input><br/><br/>
      <button className='bg-success'>Conform Reservation</button>
      
      </form>
      
    </div>
    </div>
  )
}

export default Reservation