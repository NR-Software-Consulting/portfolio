"use client";
import { Box } from "@mui/material";
import MainBanner from "./components/mainBanner/page";
import AboutMe from "./components/about/aboutMe";
import ContactMe from "./components/contact/contactMe";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white" }}>
      <MainBanner />
      <AboutMe />
      <ContactMe />
    </Box>
  );
}
