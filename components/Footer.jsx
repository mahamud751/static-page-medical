import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styles from "../styles/Header.module.css";
function Footer() {
  return (
    <Box className={`${styles.footer} pb-2`} style={{ background: "#082644" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <a
              className="navbar-brand"
              href="#"
              style={{
                color: "#2D89FF",
                borderRadius: "0px",
                fontSize: 30,
              }}
            >
              Doc<span style={{ color: "#642DFF", fontSize: 30 }}>mic</span>
            </a>
            <Typography className="py-4" style={{ fontSize: 14, width: 200 }}>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has bee
            </Typography>

            <Box className="d-flex mb-3" style={{ marginLeft: -10 }}>
              <Box>
                <img src="https://i.ibb.co/RQjnj6p/Ellipse-16.png" alt="" />
                <img
                  src="https://i.ibb.co/nw7SVsj/Vector-2.png"
                  alt=""
                  style={{ marginLeft: -43 }}
                />
              </Box>
              <Box className="ms-3">
                <img src="https://i.ibb.co/RQjnj6p/Ellipse-16.png" alt="" />
                <img
                  src="https://i.ibb.co/WkgfVw5/Vector-3.png"
                  alt=""
                  style={{ marginLeft: -43 }}
                />
              </Box>
              <Box className="ms-3">
                <img src="https://i.ibb.co/RQjnj6p/Ellipse-16.png" alt="" />
                <img
                  src="https://i.ibb.co/41BMSW1/Vector-4.png"
                  alt=""
                  style={{ marginLeft: -43 }}
                />
              </Box>
              <Box className="ms-3">
                <img src="https://i.ibb.co/RQjnj6p/Ellipse-16.png" alt="" />
                <img
                  src="
        https://i.ibb.co/rcF87vm/Vector-5.png"
                  alt=""
                  style={{ marginLeft: -43 }}
                />
              </Box>
              <Box className="ms-3">
                <img src="https://i.ibb.co/RQjnj6p/Ellipse-16.png" alt="" />
                <img
                  src="https://i.ibb.co/bd3RW45/Vector-6.png"
                  alt=""
                  style={{ marginLeft: -43 }}
                />
              </Box>
            </Box>
            <Typography style={{ fontSize: 12 }}>
              Copyright @222 Medicom All Rights Reserved
            </Typography>
          </Grid>
          <Grid item md={2}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#642DFF" }}
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  Quick Linls
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#">
                  Our Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }} href="#">
                  Our Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>
                  Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={4} md={2}>
            <ul className="nav flex-column ">
              <li className="nav-item" style={{ marginTop: 40 }}>
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#">
                  Our Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }} href="#">
                  Our Latest News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={4}>
            <Box className="d-flex">
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#642DFF" }}
                    aria-current="page"
                    href="#"
                  >
                    Opening Hours
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "#2D89FF" }}
                    aria-current="page"
                    href="#"
                  >
                    Mon- Tue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "#2D89FF" }} href="#">
                    Wed- Thu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "#2D89FF" }} href="#">
                    Fri- Sat
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "#2D89FF" }}>
                    Sunday
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " style={{ color: "#2D89FF" }}>
                    Personal
                  </a>
                </li>
              </ul>
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white", marginTop: 40 }}
                    aria-current="page"
                    href="#"
                  >
                    08:00 AM- 05:00 PM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">
                    09:00 AM- 06:00 PM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">
                    10:00 AM- 07:00 PM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }}>
                    Emergency Only
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " style={{ color: "white" }}>
                    Mon- 05:00 PM
                  </a>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
