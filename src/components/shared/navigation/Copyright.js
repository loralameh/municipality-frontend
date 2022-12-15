import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Hasbaya Municipality
      </Link>
      {new Date().getFullYear()}
      {"."}
      developed by:
      <Link color="inherit" href="https://linkedin.com/in/lora-lameh">
        Lora Lameh
      </Link>
    </Typography>
  );
};

export default Copyright;
