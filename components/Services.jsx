/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import styles from "../styles/Header.module.css";
function Services() {
  return (
    <Container className={styles.service} sx={{ marginY: "112px" }}>
      <Typography
        className="text-center"
        variant="h3"
        style={{ color: "#A991FA" }}
      >
        Our Services
      </Typography>
      <Typography className="text-center" variant="h2" sx={{ color: "black" }}>
        Services For Your Health
      </Typography>

      <Box className="d-lg-flex" sx={{ marginY: "128px" }}>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12, color: "#6C39FE" }} gutterBottom>
                Cardiology
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14, color: "black" }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2, color: "black" }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/kJhcj7y/Vector.png"
              alt=""
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12, color: "#6C39FE" }} gutterBottom>
                Monthly Check Up
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14, color: "black" }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2, color: "black" }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/80L7Tm0/Vector-2.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12, color: "#6C39FE" }} gutterBottom>
                Dental Care
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14, color: "black" }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2, color: "black" }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/0Gjvt4s/Vector-1.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
        <Card style={{ marginLeft: 20, marginBottom: 10 }}>
          <CardContent className="d-flex">
            <Box>
              <Typography sx={{ fontSize: 12, color: "#6C39FE" }} gutterBottom>
                Opthalmology
              </Typography>

              <Typography sx={{ marginY: 1, fontSize: 14, color: "black" }}>
                Seduahag perspiciati under omnised atused error.
              </Typography>
              <Typography sx={{ fontSize: 16, marginTop: 2, color: "black" }}>
                Explore Now
              </Typography>
            </Box>
            <img
              src="https://i.ibb.co/MfrqBtf/Vector-3.png"
              alt=""
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Services;
