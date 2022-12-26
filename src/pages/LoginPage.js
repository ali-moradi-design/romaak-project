import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Loader from "../components/ui/Loader";
import Snack from "../components/ui/Snack";
import { login } from "../actions/userAction";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const s = {
  smallImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    boxShadow: 4
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "1rem",
    background: "#fff",
    p: "2rem",
    boxShadow: 20,
    borderRadius: "1.2rem",
    overflow: "hidden"
  },
  submit: {
    my: "1rem",
    backgroundColor: "#8f941b",
    color: "#fff",
    ":hover": {
      backgroundColor: "#113b21"
    }
  },
  link: {
    color: "#000",
    textDecoration: "none"
  },
  label: {
    fontSize: "1.6rem",
    color: "#000",
    fontWeight: "bold",
    display: "block",
    mb: "0.7rem"
  },
  inputStyle: {
    fontFamily: "IRANYekan",
    width: "100%",
    p: { xs: "0.8rem 1rem 1rem", sm: "0.6rem 1rem 0.8rem" },

    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.4rem"
    },
    borderRadius: "1rem",
    border: "none",
    outline: "none",
    color: "#000",
    mb: "1.5rem",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
    "&:focus": {
      outline: "0"
    }
  }
};

const LoginScreen = () => {
  const navigete = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigete("homepage");
    }
  }, [userInfo]);

  const onChange = (event) => {
    switch (event.target.id) {
      case "username":
        setUsername(event.target.value);

        break;
      case "password":
        setPassword(event.target.value);

        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #9b9d1b 0%, #325123 100%)",
        minHeight: "100vh"
      }}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Box>
            <Typography variant="h1" align="center" sx={{ mt: "10rem" }}>
              Sign In
            </Typography>
            {error && <Snack error={error} />}
            {loading && (
              <Grid container justifyContent="center">
                <Grid item>
                  <Loader />{" "}
                </Grid>
              </Grid>
            )}
            <Box component="form" sx={s.form} noValidate>
              <Typography component="label" sx={s.label}>
                Username
              </Typography>
              <Box
                component="input"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
                sx={s.inputStyle}
              />
              <Typography component="label" sx={s.label}>
                Password
              </Typography>
              <Box
                component="input"
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                sx={s.inputStyle}
              />

              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onChange}
              /> */}
              <Button
                type="submit"
                onClick={submitHandler}
                fullWidth
                variant="contained"
                sx={s.submit}
                disabled={username.length === 0 || password.length === 0}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginScreen;
