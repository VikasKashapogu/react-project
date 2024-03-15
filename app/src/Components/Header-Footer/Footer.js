import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        
      <ul className='nav bg-dark justify-content-around p-2 active'>
        <li className='nav-item'>
          <p className='nav-link' style={{color:"#ffcc00"}} to="">
            Contact : 12345678
          </p>
        </li>

        <li className='nav-item'>
          <p className='nav-link' style={{color:"#ffcc00"}} to="">
            email : showroom@gmail.com
          </p>
        </li>

        <li className='nav-item'>
          <NavLink className='nav-link' style={{color:"#ffcc00"}} to="aboutus">
            About Us
          </NavLink>
        </li>

        </ul>
    
    </div>
  )
}

export default Footer