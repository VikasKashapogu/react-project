import React from "react";
import KTM390 from "../Images/vikas.jpg"
import "./Home.css";
import Login from "./Login";

function Home() {
  return (
    <div className="homed">
      <h1 className="homeh">
        Welcome,We help to make your plans happen at the right time.
      </h1>
      <img className="homei" src={KTM390} alt="Error in Loading" />
      <div className="homel">
      <Login></Login>
      </div>
    </div>
  );
}

export default Home;






{/* <div className="r">
        <div className="r1">
          <h1>R</h1>
          <h1>RESERVE</h1>
        </div>
        <div className="r1">
          <h1>R</h1>
          <h1>RELAX</h1>
        </div>
        <div className="r1">
          <h1>R</h1>
          <h1>RIDE</h1>
        </div>
      </div> */}