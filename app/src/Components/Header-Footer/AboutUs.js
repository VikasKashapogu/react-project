import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
      <h1 className='text-primary text-center'>AboutUs</h1>
      <p>We have started in the year of 2001.</p>
      <p>We started this app reservation system in the year of 2011</p>
      <p>As many people aren't getting their dream bike on their dream day because of high competation. This helps to pre-book.</p>

        <Link className='text-end text-warning' to="adminlogin">Admin Login</Link>
    </div>
  )
}

export default AboutUs