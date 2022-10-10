import React from "react";
import Grid from "@mui/material/Grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";

import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div style={{ background: "#082644" }}>
      <Navbar />
      <div className={styles.header}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Box>
                <Typography variant="h2">
                  Your <span style={{ color: "#2D89FF" }}>Health</span>{" "}
                  <span>Is Our</span>
                </Typography>
                <Typography variant="h2">
                  Health <span style={{ color: "#642DFF" }}>Priority</span>
                </Typography>
                <Typography variant="h6" sx={{ marginY: "20px " }}>
                  There are many variations of passages of lpsum <br />{" "}
                  <span>available, but the majority hae suffered.</span>
                </Typography>
                <Button
                  className="btn p-3"
                  type="submit"
                  style={{
                    background: "#2D89FF",
                    color: "white",
                    width: "50px",
                    width: "270px",
                  }}
                >
                  Meet Our Specialist
                </Button>
                <Box className="my-5 d-flex justify-content-space-between">
                  <Box>
                    <Typography variant="h4" style={{ color: "#8F68FD" }}>
                      262k+
                    </Typography>
                    <Typography variant="h6">Recovered Patients</Typography>
                  </Box>
                  <Box className="mx-5">
                    <Typography variant="h4" style={{ color: "#8F68FD" }}>
                      96%
                    </Typography>
                    <Typography variant="h6">Satisfaction Rate</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" style={{ color: "#8F68FD" }}>
                      86+
                    </Typography>
                    <Typography variant="h6">Expert Doctors</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ marginTop: 10 }}>
            <Box className="p-4">
              <img
                src="https://q7u4e7x8.stackpathcdn.com/medinik-one/wp-content/uploads/sites/2/2022/08/image-1.png"
                alt="ellipse"
                className="img-fluid"
              />
            </Box>

            <Card
              className={styles.card}
              sx={{
                minWidth: 275,
                marginTop: -90,
                position: "relative",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                  Meet Our Doctors
                </Typography>
                <Box className="d-flex">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <AddCircleIcon
                    fontSize="large"
                    sx={{ color: "#2D89FF", marginLeft: 3, marginTop: "5px" }}
                  />
                </Box>
              </CardContent>

              <Box className="p-2">
                <img src="https://i.ibb.co/T8xnzqw/Rectangle-5.png" alt="" />

                <img src="https://i.ibb.co/dPs2Whx/Rectangle-4.png" alt="" />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
