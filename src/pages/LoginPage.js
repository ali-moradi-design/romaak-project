import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Loader from "../components/ui/Loader";
import Snack from "../components/ui/Snack";
import FormContainer from "../components/ui/FormContainer";
import { login } from "../actions/userAction";
import { Box } from "@mui/material";

const s = {
  smallImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    boxShadow: 4
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "1rem"
  },
  submit: {
    margin: "1rem",
    backgroundColor: "#000",
    color: "#fff"
  },
  link: {
    color: "#000",
    textDecoration: "none"
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
    <FormContainer>
      <Typography variant="h1" align="center">
        Sign In
      </Typography>
      {error && <Snack error={error} />}
      {loading && <Loader />}
      <Box component="form" sx={s.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={onChange}
        />
        <TextField
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
        />
        <Button
          type="submit"
          onClick={submitHandler}
          fullWidth
          variant="contained"
          sx={s.submit}
          disabled={username.length === 0 || password.length === 0}>
          Sign In
        </Button>
        <Grid container justify="center">
          <Grid item>
            <Typography sx={s.link} component={Link} to="/register" variant="body2">
              "Don't have an account? Sign Up"
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </FormContainer>
  );
};

export default LoginScreen;
