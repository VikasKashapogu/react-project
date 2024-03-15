import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AvailabilityChild.css'


function AvailabilityChild(props) {
  
  let navigate=useNavigate()
  let productObj=props.productObj
  function reserveit(){
    navigate("/reservation", {state:{productObj}})
  }
 
  return (
    <div className='avail'>
      
          <div className='card border border-primary background' style={{width:"300px",height:"350px"}}>
            <p className=' text-center border border-primary bg-success' style={{marginLeft:'20px',}}>{props.productObj.name}</p>
            <img src={props.productObj.image} alt=""/>
            <p className='btn btn-start border border-dark  reserve' onClick={reserveit}>{props.productObj.reserve}</p>
            <p className='btn btn-end border border-dark bg-warning'>RS: {props.productObj.price}</p>
            
        </div>
        </div>
      )
}

export default AvailabilityChild
