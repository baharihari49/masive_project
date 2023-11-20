

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function CustomNavbar() {
  return (
    <Navbar bg="grey" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
      <Navbar.Brand href="#HomePage" style={{ marginLeft: '25px' }}>Brews Treatment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/AboutPage" style={{ marginRight: '13px' }}>Tentang</Nav.Link>
          <Nav.Link as={Link} to="/layanan" style={{ marginRight: '13px' }}>Layanan</Nav.Link>
          <Nav.Link as={Link} to="/galeri" style={{ marginRight: '13px' }}>Galeri</Nav.Link>
          <Nav.Link as={Link} to="/invoice" style={{ marginRight: '13px' }}>Invoice</Nav.Link>
          <Nav.Link as={Link} to="/kontak" style={{ marginRight: '16px' }}>Kontak</Nav.Link>
       </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
