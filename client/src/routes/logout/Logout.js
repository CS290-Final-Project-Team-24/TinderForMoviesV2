import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

function Logout() {

  const seconds = 5;
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft){
      navigate("/");
    } else if (!timeLeft&&window.location.pathname !== "/logout"){ 
      return;
    }
    
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h1 style={{ color: "lightyellow" }}>You have logged out of MovieMatchMaker.</h1>
      <h1 style={{ color: "lightyellow" }}>If you'd like to see your matches again, log back in!</h1>
      <h1 style={{ color: "lightyellow" }}>This page will be redirected in {timeLeft} seconds....</h1>
      <br></br>
      <br></br>
      <Link to="/login">
        <button className="bn29" style={{ "font-size": "1.5rem" }}>
          Log Back In
        </button>
      </Link>
    </div>
  );
}

export default Logout;
