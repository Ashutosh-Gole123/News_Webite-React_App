import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  // Navbar with responsive design
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
              NewsApp
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link current" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link current" href="/service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <NavLink to="/SignUp">
                  <button
                    className="btn btn-style "
                    type="submit"
                  >
                    Sign up
                  </button>
                </NavLink > 
                <NavLink to="/LogIn">
                  <button
                    className="btn btn-style btn-style-border"
                    type="submit"
                  >
                    Log in
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
