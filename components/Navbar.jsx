import { Box, Container } from "@mui/material";
import React from "react";
import styles from "../styles/Header.module.css";
function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              className={styles.header}
              href="#"
              style={{
                color: "#2D89FF",
                borderRadius: "0px",
              }}
            >
              Doc<span style={{ color: "#642DFF" }}>mic</span>
            </a>
            <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0  w-100">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "#529DFE" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Departments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  Contracts
                </a>
              </li>
            </ul>
            <button
              className="btn p-3"
              type="submit"
              style={{
                background: "#2D89FF",
                color: "white",
                width: "50px",
                width: "270px",
              }}
            >
              Free Consulation
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
