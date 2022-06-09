import React from "react";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">Works</a>
                    </li>
                    <li>
                      <a href="#">Blogs</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="#">
                        <FontAwesomeIcon
                        icon={faInstagram} size="3x" 
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#">
                        <FontAwesomeIcon 
                        icon={faYoutube} size="3x"  
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#">
                        <FontAwesomeIcon 
                        icon={faTwitter} size="3x" 
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#">
                        <FontAwesomeIcon 
                        icon={faFacebookF} size="3x" 
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
