/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

function Faq() {
  return (
    <Container style={{ marginTop: "56px" }}>
      <Typography style={{ fontSize: 16, color: "#642DFF" }}>
        FAQ Questions
      </Typography>
      <Typography style={{ fontSize: 32, color: "#1E1E1E" }}>
        Get Your General Answer{" "}
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "16px" }}>
        <Grid item xs={12} md={6}>
          <Accordion
            style={{
              backgroundColor: "unset",
              boxShadow: "unset",
              position: "unset",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#5DA4FC" }}></AddIcon>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Get Your General Answer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "unset",
              boxShadow: "unset",
              position: "unset",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#5DA4FC" }}></AddIcon>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Will I always see my own doctor? +</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "unset",
              boxShadow: "unset",
              position: "unset",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#5DA4FC" }}></AddIcon>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is one Medical’s care? +</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "unset",
              boxShadow: "unset",
              position: "unset",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#5DA4FC" }}></AddIcon>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is evidence based medicine? +</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "unset",
              boxShadow: "unset",
              position: "unset",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#5DA4FC" }}></AddIcon>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is an academic medical center?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ marginLeft: 20 }}>
              <img src="https://i.ibb.co/9tf7VkX/Group-26.png" alt="" />
              <img
                src="https://i.ibb.co/QDYdZXb/Blood-Pressure.png"
                alt=""
                style={{ marginTop: -370, marginLeft: -20 }}
              />

              <img
                src="https://i.ibb.co/xMGqQrN/pose-8.png"
                alt=""
                style={{ marginTop: -420, marginLeft: 20 }}
              />
              <img
                src="https://i.ibb.co/v18S47S/Gloves.png"
                alt=""
                style={{ marginTop: -320, marginLeft: -80 }}
              />
              <img
                src="https://i.ibb.co/hCZyMBn/Defibrillator.png"
                alt=""
                style={{ marginTop: -420, marginLeft: -300 }}
              />
              <Box
                style={{
                  marginLeft: -170,
                  marginTop: -160,
                  backgroundColor: "white",
                  width: "290px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <img src="https://i.ibb.co/txh83s9/Ellipse-13.png" alt="" />
                    <img
                      src="https://i.ibb.co/c8bTGDQ/image-5.png"
                      alt=""
                      style={{ marginLeft: -35 }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginY: 2,
                      fontSize: 14,
                      color: "#575757",
                      paddingX: 3,
                    }}
                  >
                    Get Solutions From Our Experts
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faq;
