import React from "react";
// import {Route, Routes, Navigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import logo from './logo.svg';
// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Logs from "./components/Logs";
import Table2 from "./components/Table2";
// import Grid1 from "./components/Grid_";
import Login from './components/login.component'
import SignUp from './components/signup.component'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Menu />
      {/* <Login /> */}
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
