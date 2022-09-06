import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Logs from "./components/Logs";
import Table2 from "./components/Table2";
import Login from './components/login.component'
import SignUp from './components/signup.component'
// import Addr from './components/Address'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Menu />
      {/* <Addr /> */}
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/Logs" element={<Logs />}  />
        <Route exact path="/Table2" element={<Table2/>}  />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
    </>
    );
  }

export default App;
