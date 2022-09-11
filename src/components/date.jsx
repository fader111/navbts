import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '../App.css';

const DateShow = () => {
    // let time = new Date().toLocaleTimeString();  // 17:10:31
    let newDate = new Date() // Mon Sep 05 2022 17:54:58 GMT+0300 (Москва, стандартное время)
    // let time = newDate.getDate(); //17:57:32
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // let fullDate = day + "/" + month + "/" + year + "    " + time;
    let fullDate = day + "." + month + "." + year;

    const [cdate, setDate] = useState(fullDate);
  
    setInterval(() => {
      // time = new Date().toLocaleTimeString();
      day = newDate.getDate();
      month = newDate.getMonth() + 1;
      year = newDate.getFullYear();
      // fullDate = time;// + " " + month + " " + year;
      // fullDate = day + "/" + month + "/" + year + "    " + time;
      fullDate = day + "." + month + "." + year;
      setDate(fullDate);
      // console.log(newDate);
    }, 10000);
  
    return (
      <>
        <div className="date">
        {/* <div> будет сереньким как все меню */}
          {/* <h2><span className="clock">🕗 </span>Live Digital clock<span className="clock"> 🕗</span></h2> */}
          {/* <h3>{ctime}</h3> */}
          {/* <h1>{ctime}</h1> */}
          {cdate}
        </div>
      </>
    );
  };
  
export default DateShow;