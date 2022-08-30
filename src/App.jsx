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
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
// import Grid1 from "./components/Grid_";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/Table1" element={<Table1/>}  />
        <Route exact path="/Table2" element={<Table2/>}  />
        {/* <Route exact path="/Settings" component={Settings} /> */}
        {/* <Route exact path="/Contact" component={Contact} /> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    </>
    );
  }

export default App;
