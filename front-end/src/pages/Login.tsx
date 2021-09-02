import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/login.css";
import Button from "@material-ui/core/Button";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

function Login() {
  const classes = useStyles();

  return (
    <div className="login-page-container">
      <div className="top-login-page">
        <h1 className="login-page-header">Sign in to your account</h1>
        <h2 className="login-page-h2">
          Sign in to continue your therapy journey.
        </h2>
      </div>
      <div className="form-wrapper">
        <form className="login" noValidate autoComplete="off">
          <TextField
            id="userName"
            label="username"
            variant="outlined"
            placeholder="Username"
          />
          <TextField id="password" label="password" variant="outlined" />
          <button className="login-button">Log in</button>
          {/* <Button variant="contained" color="secondary">
            Log in
          </Button> */}
          <h3 className="logo-page-h3">
            Don't have an account?{" "}
            <Link to="/signup" className="logo-page-sign-up">
              Sign up
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
