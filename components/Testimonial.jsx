import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Testimonial() {
  return (
    <Container style={{ marginTop: "96px", paddingBottom: "100px" }}>
      <Typography
        className="text-center"
        sx={{ fontSize: 16, color: "#2D89FF" }}
      >
        Testimonial
      </Typography>
      <Typography className="text-center" sx={{ fontSize: 32 }}>
        What they say?
      </Typography>
      <Box sx={{ marginTop: "56px" }}>
        <section
          className="w-100 float-left portfolio-con padding-top h-100"
          id="Portfolio"
        >
          <div className="container" style={{ marginBottom: "120px" }}>
            <>
              <Splide
                options={{
                  type: "loop",
                  drag: "free",
                  focus: "center",
                  gap: "2rem",
                  perPage: 2,
                  height: "22rem",
                  breakpoints: {
                    1200: { arrows: false, perPage: 1 },
                    800: { perPage: 1 },
                    640: { perPage: 1 },
                  },
                  autoScroll: {
                    speed: 2,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                <SplideSlide>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      style={{
                        marginBottom: 10,
                        marginLeft: 40,
                        width: "400px",
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={4}>
                          <Grid item xs={12} md={8}>
                            <Box>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                David Jeams
                              </Typography>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                Pratient
                              </Typography>

                              <Typography
                                sx={{
                                  marginY: 1,
                                  fontSize: 14,
                                  color: "#575757",
                                }}
                              >
                                simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it is a long established fact
                                that a reader will be distracted by the readable
                                content
                              </Typography>

                              <img
                                src="https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                                style={{ marginTop: 20 }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box style={{ marginTop: -12, marginLeft: 50 }}>
                              <img
                                src="https://i.ibb.co/T188hTg/Ornament-24.jpg
   https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                              />
                            </Box>
                            <img
                              src="https://i.ibb.co/P1Qkn3B/Ikbal-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                </SplideSlide>
                <SplideSlide>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      style={{
                        marginBottom: 10,
                        marginLeft: 40,
                        width: "400px",
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={4}>
                          <Grid item xs={12} md={8}>
                            <Box>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                David Jeams
                              </Typography>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                Pratient
                              </Typography>

                              <Typography
                                sx={{
                                  marginY: 1,
                                  fontSize: 14,
                                  color: "#575757",
                                }}
                              >
                                simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it is a long established fact
                                that a reader will be distracted by the readable
                                content
                              </Typography>

                              <img
                                src="https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                                style={{ marginTop: 20 }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box style={{ marginTop: -12, marginLeft: 50 }}>
                              <img
                                src="https://i.ibb.co/T188hTg/Ornament-24.jpg
   https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                              />
                            </Box>
                            <img
                              src="https://i.ibb.co/P1Qkn3B/Ikbal-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                </SplideSlide>
                <SplideSlide>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Card
                      style={{
                        marginBottom: 10,
                        marginLeft: 40,
                        width: "400px",
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={4}>
                          <Grid item xs={12} md={8}>
                            <Box>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                David Jeams
                              </Typography>
                              <Typography
                                sx={{ fontSize: 14, color: "#000000" }}
                                gutterBottom
                              >
                                Pratient
                              </Typography>

                              <Typography
                                sx={{
                                  marginY: 1,
                                  fontSize: 14,
                                  color: "#575757",
                                }}
                              >
                                simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it is a long established fact
                                that a reader will be distracted by the readable
                                content
                              </Typography>

                              <img
                                src="https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                                style={{ marginTop: 20 }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box style={{ marginTop: -12, marginLeft: 50 }}>
                              <img
                                src="https://i.ibb.co/T188hTg/Ornament-24.jpg
   https://i.ibb.co/T1qnJN7/Ornament-57.jpg"
                                alt=""
                              />
                            </Box>
                            <img
                              src="https://i.ibb.co/P1Qkn3B/Ikbal-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Box>
                </SplideSlide>
              </Splide>
            </>
          </div>

          {/** */}
        </section>
      </Box>
    </Container>
  );
}

export default Testimonial;
