import { Container } from "@mui/material";
import React from "react";
import Faq from "../components/Faq";
import Header from "../components/Header";
import HealthServices from "../components/HealthServices";
import HospitalFeatures from "../components/HospitalFeatures";
import Services from "../components/Services";

function index() {
  return (
    <>
      <Header />

      <HealthServices />
      <Services />
      <HospitalFeatures />
    </>
  );
}

export default index;
