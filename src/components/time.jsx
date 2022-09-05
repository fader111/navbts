import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '../App.css';

const Time = () => {
    let time = new Date().toLocaleTimeString();  // 17:10:31
    let date = new Date().getDate(); // toLocaleTimeString();// .toLocaleTimeString();
    // let time = new Date('2018-05-18T04:00:00Z').toUTCString();
    // let time = new Date().toString();// toLocaleTimeString();// .toLocaleTimeString();
  
    const [ctime, setTime] = useState(time);
  
    setInterval(() => {
      time = new Date().toLocaleTimeString();
      setTime(time);
    //    console.log(date);
    }, 1000);
  
    return (
      <>
        <div className="watch">
          {/* <h2><span className="clock">🕗 </span>Live Digital clock<span className="clock"> 🕗</span></h2> */}
          {/* <h3>{ctime}</h3> */}
          {/* <h1>{ctime}</h1> */}
          {ctime}
        </div>
      </>
    );
  };
  
export default Time;