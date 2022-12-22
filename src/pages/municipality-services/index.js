import React from "react";
import ServiceCard from "./sections/ServiceCard";
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const index = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant="h5">الخدمات الإعمارية</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard />
      </Grid>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant="h5">الخدمات الإعمارية</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ServiceCard />
      </Grid>
    </Grid>
  );
};

export default index;
