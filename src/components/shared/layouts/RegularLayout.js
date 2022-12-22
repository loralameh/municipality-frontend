import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";

export default function FullScreenLayout() {
  return (
    <>
      <NavBar />
      <Box p={{ xs: 1, sm: 2, md: 4 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
