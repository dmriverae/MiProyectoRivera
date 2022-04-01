import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'

export default class NavBarComp extends Component {
  render() {
    return (
      <div>
          
          <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Mi Tienda: Curso de React</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Acerca de</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Esquemas de Precios</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Contáctanos
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Salir
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Búsqueda</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
