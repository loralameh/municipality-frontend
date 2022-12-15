import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navigation/NavBar";
import Image from "assets/images/mountain.jpg";
import { Box } from "@mui/material";
export default function FullScreenLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
      </Box>
      <Outlet />
    </>
  );
}
