import React from "react";
import { Route, Routes } from "react-router-dom";

//set right to left direction
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

//mui theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

//componenets
import ProtectedRoute from "./ProtectedRout";
import HomeLayout from "./components/shared/layouts/HomeLayout";
import RegularLayout from "./components/shared/layouts/RegularLayout";
import SnackBar from "components/shared/SnackBar";

//pages
import Home from "./pages/home";
import AboutHasbaya from "./pages/about-hasbaya";
import AboutMunicipality from "./pages/about-municipality";
import CitizenServices from "./pages/citizen-services";
import MunicipalityServices from "./pages/municipality-services";
import ContactUs from "./pages/contact-us";
import UserBills from "./pages/user-bills";
import UserProfile from "./pages/user-profile";
import UserServices from "./pages/user-services";
import Login from "./pages/auth/Login";
import Register from "pages/auth/Register";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <SnackBar />
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<RegularLayout />}>
            <Route path="/about-hasbaya" element={<AboutHasbaya />} />
            <Route path="/about-municipality" element={<AboutMunicipality />} />
            <Route path="/citizen-services" element={<CitizenServices />} />
            <Route
              path="/municipality-services"
              element={<MunicipalityServices />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            element={
              <ProtectedRoute>
                <RegularLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/user-bills" element={<UserBills />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-services" element={<UserServices />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}
