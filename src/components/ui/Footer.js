import React from "react";
import { makeStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.red,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container justify="center">
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="subtitle1" gutterBottom>
              Copyright &copy; Bookshop {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
