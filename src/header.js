import React from "react";
import {
  NavDropdown,
  Nav,
  Navbar,
  Image
} from "react-bootstrap";
import "./header.css";
import Artisant from "./myEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";



function Header() {
  return (
    <div>
      <Navbar bg="light transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link activeClassName="active" to="/" exact href="/">
              Home
            </Nav.Link>
            <Nav.Link activeClassName="active">
              About us
            </Nav.Link>
            <Nav.Link activeClassName="active" to="/market" exact href="/market">
              Catalog
            </Nav.Link>
              <NavDropdown title="Caftsmen" id="basic-nav-dropdown">
            {Artisant.map((dat) => (
              <NavDropdown.Item activeClassName="active" to={"/catalog?id="+ dat.id} exact href={"/catalog?id="+ dat.id}>
                  {dat.title}
                </NavDropdown.Item>
            ))}
              </NavDropdown>
          </Nav>
            <Navbar.Brand href="/"><Image className="logo" src="logo192.png"/></Navbar.Brand>
              <Nav.Link activeClassName="active">
                Delivery
              </Nav.Link>
              <Nav.Link activeClassName="active">
                Terms and Conditions
              </Nav.Link>
          <Nav>
            <Nav.Link activeClassName="active" className="cart" to="/cart" exact href="/cart"><span><FontAwesomeIcon icon={ faGift}/></span><span>Cart</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
