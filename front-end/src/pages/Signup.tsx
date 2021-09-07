import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/signup.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useStore from "../store";

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

  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);

  function signUp(e: any) {
    e.preventDefault();

    const signUpDetails = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      avatar: avatar,
    };

    fetch("http://localhost:4000/user", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDetails),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Failed to add new user");
        }
      })
      .then((newUser) => console.log(newUser))
      .catch((error) => console.error(error));
  }

  return (
    <div className="sighn-up-container">
      <h1 className="sign-up-page-header">Create your account</h1>

      <div className="sign-up-form-wrapper">
        <form
          onSubmit={(e) => signUp(e)}
          className="sign-up-form"
          noValidate
          autoComplete="off"
        >
          <div className="first-last-names-form ">
            <TextField id="firstname" label="Name" variant="outlined" />
            <TextField id="lastname" label="Surname" variant="outlined" />
          </div>
          <TextField
            id="username"
            label="username"
            variant="outlined"
            placeholder="Username"
          />
          <TextField id="password" label="password" variant="outlined" />
          <TextField id="avatar" label="avatar" variant="outlined" />
          <div className="sign-up-button-wrapper">
            <button className="sign-up-button">
              <Link to="/login" className="get-started-link">
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
