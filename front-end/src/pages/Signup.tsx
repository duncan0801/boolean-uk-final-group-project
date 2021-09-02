import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/signup.css";
import Button from "@material-ui/core/Button";
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

function Signup() {
  const classes = useStyles();
  return (
    <div className="sighn-up-container">
      <h1 className="sign-up-page-header">Create your account</h1>

      <div className="sign-up-form-wrapper">
        <form className="sign-up-form" noValidate autoComplete="off">
          <div className="first-last-names-form ">
            <TextField id="firstName" label="Name" variant="outlined" />
            <TextField id="lastName" label="Surname" variant="outlined" />
          </div>
          <TextField
            id="userName"
            label="username"
            variant="outlined"
            placeholder="Username"
          />
          <TextField id="password" label="password" variant="outlined" />
          <TextField id="avatar" label="avatar" variant="outlined" />
          <div className="sign-up-button-wrapper">
            <button className="sign-up-button">
              <Link to="/services" className="get-started-link">
                Get started
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
