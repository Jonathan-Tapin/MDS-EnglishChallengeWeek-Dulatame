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
            <Nav.Link activeClassName="active" to="/MDS-EnglishChallengeWeek-Dulatame/" exact href="/MDS-EnglishChallengeWeek-Dulatame/">
              Home
            </Nav.Link>
            <Nav.Link activeClassName="active">
              About us
            </Nav.Link>
            <Nav.Link activeClassName="active" to="/MDS-EnglishChallengeWeek-Dulatame/market" exact href="/MDS-EnglishChallengeWeek-Dulatame/market">
              Catalog
            </Nav.Link>
              <NavDropdown title="Caftsmen" id="basic-nav-dropdown">
            {Artisant.map((dat) => (
              <NavDropdown.Item activeClassName="active" to={"/MDS-EnglishChallengeWeek-Dulatame/catalog?id="+ dat.id} exact href={"/MDS-EnglishChallengeWeek-Dulatame/catalog?id="+ dat.id}>
                  {dat.title}
                </NavDropdown.Item>
            ))}
              </NavDropdown>
          </Nav>
            <Navbar.Brand href="/MDS-EnglishChallengeWeek-Dulatame/"><Image className="logo" src="logo192.png"/></Navbar.Brand>
              <Nav.Link activeClassName="active">
                Delivery
              </Nav.Link>
              <Nav.Link activeClassName="active">
                Terms and Conditions
              </Nav.Link>
          <Nav>
            <Nav.Link activeClassName="active" className="cart" to="/MDS-EnglishChallengeWeek-Dulatame/cart" exact href="/MDS-EnglishChallengeWeek-Dulatame/cart"><span><FontAwesomeIcon icon={ faGift}/></span><span>Cart</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
