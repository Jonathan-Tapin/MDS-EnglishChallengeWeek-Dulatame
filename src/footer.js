import React from "react";
import { Image } from "react-bootstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col, Form } from "react-bootstrap";


function Footer() {
  return (
    <div>
      <div className="newsletter">
        <Container>
          <Row>
            <Col className="email-col">
              <h2>Santa's letter</h2>
              <p>Please enter your email adress to receive news about products, caftsmen's news and inspiration gift's list</p>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Col sm={10}>
                  <Form.Control type="email" placeholder="your.email@mail.com" />
                </Col>
              </Form.Group>
            </Col>
            <Col className="icon">
              <FontAwesomeIcon className="newsletter-icon" icon={ faEnvelopeOpenText } size="9x"/>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer">
        <div className="logo-footer">
          <span>
            <FontAwesomeIcon
              className="social-logo"
              icon={faFacebookSquare}
              size="lg"
            />
          </span>
          <span>
            <FontAwesomeIcon
              className="social-logo"
              icon={faInstagram}
              size="lg"
            />{" "}
          </span>
          <span>
            <FontAwesomeIcon
              className="social-logo"
              icon={faTwitter}
              size="lg"
            />{" "}
          </span>
          <Image className="social-logo" src="favicon.ico" />
        </div>
        <div className="credit">
          <p>Create by Dutalame Agency</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
