import React from "react";
import { Navbar, Button, Nav, NavDropdown, FormControl } from "react-bootstrap";

function ANavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Items-List</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Learn More</Nav.Link>
         
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
export default ANavbar;
