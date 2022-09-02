import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import logo from './logo.svg';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Login from './login.component'
// import SignUp from './signup.component'

function Menu() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">   </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Главная</Nav.Link>
            <Nav.Link as={Link} to="/Table1">Логи</Nav.Link>
            <Nav.Link as={Link} to="/Table2">Берлоги</Nav.Link>
            <NavDropdown title="Настройки" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Настройки</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#program">Программа</Nav.Link>
            <Nav.Link eventKey={2} href="#firmware">
              Прошивка
            </Nav.Link>
          </Nav>
          <Nav>
          <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
