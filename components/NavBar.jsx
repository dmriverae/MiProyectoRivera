import React from "react";
import { NavBar as Danilo, Container, Nav, NavDropdown } from 'react-bootstrap';


export default function NavBar() {

    return (
        <>
<Danilo bg="light" expand="lg">
  <Container>
    <Danilo.Brand href="#home">React-Bootstrap</Danilo.Brand>
    <Danilo.Toggle aria-controls="basic-navbar-nav" />
    <Danilo.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Danilo.Collapse>
  </Container>
</Danilo>
        </>

    );
}
