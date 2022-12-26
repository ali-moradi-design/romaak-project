import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const loader = () => {
  return (
    <Grid container justify="center">
      <Grid item style={{ padding: "5rem", marginBottom: "19rem" }}>
        <CircularProgress size="5rem" sx={{ color: "#325123" }} />
      </Grid>
    </Grid>
  );
};

export default loader;
