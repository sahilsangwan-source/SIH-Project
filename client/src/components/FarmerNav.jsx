// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bell } from 'react-bootstrap-icons'; // Ensure you've installed this package

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Farmer's Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#list-crop">List Crop</Nav.Link>
            <Nav.Link href="#listed-crop">Listed Crop</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#register-crop" className="me-4">Register Crop</Nav.Link>
            <Nav.Link href="#notifications">
              <Bell color="white" size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}