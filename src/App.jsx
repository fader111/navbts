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
import Menu from "./components/Menu";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Grid1 from "./components/Grid_";

const App = () => {
  return (
    <>
    <Menu />
    <Table1 />
    <Table2 />
    <Grid1/>
    {/* <Routes> */}
          {/* <Route path="/" component={table1}></Route> */}
          {/* <Route path="about" element={<About />}></Route> */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        {/* </Routes> */}
    </>
    );
  }

export default App;
