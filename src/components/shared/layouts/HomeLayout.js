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
          p: 0,
          m: 0,
        }}
      >
        <NavBar />
      </Box>
      <Box p={{ xs: 1, sm: 2, md: 4 }}>
        <Outlet />
      </Box>
    </>
  );
}
