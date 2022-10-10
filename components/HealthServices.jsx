/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/Header.module.css";
function HealthServices() {
  return (
    <Container className={`${styles.service}`} sx={{ marginTop: "56px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "600px",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 66, color: "#6C39FE" }}>
                    16+ Years Experiences
                  </Typography>
                  <Typography sx={{ fontSize: 42, marginY: 5, color: "black" }}>
                    We Are Always ensure Best Medical Treatment For Your Health
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "black" }}>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here',
                    making it look lik
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://i.ibb.co/QPVm9xF/Personal-details-removebg-preview.png"
                alt=""
                style={{ marginTop: 100, width: "100%" }}
                className="img-fuild"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default HealthServices;
