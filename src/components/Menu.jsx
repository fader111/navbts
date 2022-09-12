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
import TimeShow from './time'
import DateShow from './date'
// import SignUp from './signup.component'

function Menu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* // <Navbar collapseOnSelect expand="lg" bg="light" variant="light"> */}
        <Container>
          <Navbar.Brand href="/">Дорожный контроллер</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Главная</Nav.Link>
              <Nav.Link as={Link} to="/Logs">Логи</Nav.Link>
              <Nav.Link as={Link} to="/GroupsCurr">Токи групп</Nav.Link>
              <NavDropdown title="Настройки" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Настройки</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="Prob">Доступ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ручное управление</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4">Сеть</NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.5">Детекторы</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.6">Входы</NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#action/3.7">Язык</NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#action/3.8">Оформление</NavDropdown.Item> */}
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            {/* <Nav> это справа будет
            <Nav.Link href="#program">Программа</Nav.Link>
            <Nav.Link eventKey={2} href="#firmware">
              Прошивка
            </Nav.Link>
          </Nav> */}
            <Nav>
              <Nav.Link as={Link} to="/"><DateShow /></Nav.Link>
              <Nav.Link as={Link} to="/"><TimeShow /></Nav.Link>
              {/* <TimeHeader /> */}
            </Nav>
            <Nav>
              <Login />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
