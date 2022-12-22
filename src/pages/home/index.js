import React from "react";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)`
  background-image: url(https://example.com/image.jpg);
  background-size: cover;
  background-position: center;
  padding: 16px;
`;

export default function Hero() {
  return (
    <StyledPaper>
      <h3>This is a hero section</h3>
      <p>
        You can use this component to create a hero section for your website or
        app.
      </p>
    </StyledPaper>
  );
}
