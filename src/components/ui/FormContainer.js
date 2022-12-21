import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item sm={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormContainer;
