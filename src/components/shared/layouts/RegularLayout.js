import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navigation/NavBar";

export default function FullScreenLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
