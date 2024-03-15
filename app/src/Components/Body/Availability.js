import React from 'react'
import AvailabilityChild from './AvailabilityChild';
import Avenger160 from '../Images/Avenger160.png'
import Avenger220 from '../Images/Avenger220.png'
import Chetak100 from '../Images/Chetak100.png'
import Ct110 from '../Images/Ct110.png'
import Discover100 from '../Images/Discover100.png'
import Dominar400 from '../Images/Dominar400.png'
import N160 from '../Images/N160.png'
import N250 from '../Images/N250.png'
import NS125 from '../Images/NS125.png'
import NS200 from '../Images/NS200.png'
import Platina100 from '../Images/Platina100.png'
import Platina110 from '../Images/Platina110.png'
import Pulsar125 from '../Images/Pulsar125.png'
import Pulsar150 from '../Images/Pulsar150.png'
import Pulsar180 from '../Images/Pulsar180.png'
import Pulsar220 from '../Images/Pulsar220.png'
import RS200 from '../Images/RS200.png'
import V12 from '../Images/V12.png'
import { useContext } from 'react'
import { userLoginContext } from '../LoginContext/LoginContext'
import './Availability.css'




function Availability() {
  let [currentUser,setCurrentUser,userLoginStatus,setUserLoginStatus,onSubmit]=useContext(userLoginContext)
 
  let productDetails = [
    {
      name: "Avenger160",
      image: Avenger160,
      reserve: "Reserve",
      price: "1,52,000",
    },
    {
      name: "Avenger220",
      image: Avenger220,
      reserve: "Reserve",
      price: "1,99,000",
    },
    {
      name: "Chetak100",
      image: Chetak100,
      reserve: "Reserve",
      price: "1,10,000",
    },
    {
      name: "Ct110",
      image: Ct110,
      reserve: "Reserve",
      price: "1,05,000",
    },

    {
      name: "Discover100",
      image: Discover100,
      reserve: "Reserve",
      price: "99,000",
    },
    {
      name: "Dominar400",
      image: Dominar400,
      reserve: "Reserve",
      price: "3,15,000",
    },
    {
      name: "N160",
      image: N160,
      reserve: "Reserve",
      price: "1,66,000",
    },
    {
      name: "N250",
      image: N250,
      reserve: "Reserve",
      price: "2,42,000",
    },
    {
      name: "NS125",
      image: NS125,
      reserve: "Reserve",
      price: "1,42,000",
    },
    {
      name: "Platina110",
      image: Platina110,
      reserve: "Reserve",
      price: "1,02,000",
    },
    {
      name: "Platina100",
      image: Platina100,
      reserve: "Reserve",
      price: "97,000",
    },
    {
      name: "NS200",
      image: NS200,
      reserve: "Reserve",
      price: "2,42,000",
    },
    {
      name: "Pulsar125",
      image: Pulsar125,
      reserve: "Reserve",
      price: "1,22,000",
    },
    {
      name: "Pulsar150",
      image: Pulsar150,
      reserve: "Reserve",
      price: "1,42,000",
    },
    {
      name: "Pulsar180",
      image: Pulsar180,
      reserve: "Reserve",
      price: "1,67,000",
    },
    {
      name: "Pulsar220",
      image: Pulsar220,
      reserve: "Reserve",
      price: "2,21,000",
    },
    {
      name: "RS200",
      image: RS200,
      reserve: "Reserve",
      price: "2,25,000",
    },
    {
      name: "V12",
      image: V12,
      reserve: "Reserve",
      price: "1,21,000",
    },

  ];
  return (
    
        <div className='bgscreen'>
          
          <h1 className='text-end text-danger' style={{ paddingRight: "50px" }}> Hi, {currentUser.username}</h1>
          {
            productDetails.map((productObj,) => (
              <AvailabilityChild productObj={productObj} key={productObj.name} />
            ))
          }
         

        </div>
      
      )
}

      export default Availability