import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { userLoginContext } from "../LoginContext/LoginContext";
import "./Header.css";

function Header() {
  let [, setCurrentUser, userLoginStatus, setUserLoginStatus] =
    useContext(userLoginContext);

  function toLogout() {
    setCurrentUser({});
    setUserLoginStatus(false);
    console.log(setUserLoginStatus);
  }
  let [collapse,setCollapse]=useState(true)
const toggleNavbar=()=>{
  setCollapse(!collapse)
}
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <span style={{color:"orange"}}>DREAM</span><span style={{color:"blue"}}>100%</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse ${collapse ? "":"show"}`} id="navbarNav">
            <ul class="navbar-nav ml-auto ">
              {userLoginStatus === true ? (
                <>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="availability">
                      Availability
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link " to="new">
                      New
                    </NavLink>
                  </li>

                  <li className="nav-item" onClick={toLogout}>
                    <NavLink className="nav-link " to="">
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link regb text-dark" style={{fontWeight:"bolder", backgroundColor:"#ffcc00",border:"1px",borderRadius:"5px"}} to="register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
