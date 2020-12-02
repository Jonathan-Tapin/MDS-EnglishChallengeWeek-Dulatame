import React from "react";
import { Image } from "react-bootstrap";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
      <div >
          
          <div className="newsletter">
              
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
