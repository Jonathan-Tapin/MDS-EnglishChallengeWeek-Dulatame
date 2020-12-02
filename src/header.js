import React from "react";
import {
  NavDropdown,
  Button,
  FormControl,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./header.css";
import Artisant from "./myEvents";

function Header() {
  return (
    <div>
      <Navbar bg="light transparent" expand="lg">
        <Navbar.Brand href="/">Santa Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link className="active" href="/">
              Home
            </Nav.Link>
              <NavDropdown title="Artisan" id="basic-nav-dropdown">
            {Artisant.map((dat) => (
                <NavDropdown.Item href={"/catalog?id="+ dat.id}>
                  {dat.title}
                </NavDropdown.Item>
            ))}
              </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
