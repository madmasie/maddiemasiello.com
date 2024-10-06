import * as React from "react";
import Container from "@mui/material/Container";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          my: 4,
        }}
      >
        <MainContent />
      </Container>
      <Footer />
    </>
  );
}
