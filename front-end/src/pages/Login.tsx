import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../styles/login.css"
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function Login() {

    const classes = useStyles();

    return (
        <div className="form-wrapper">
            <form className="login" noValidate autoComplete="off">
                <TextField id="username" label="username" variant="outlined" />
                <TextField id="password" label="password" variant="outlined" />
                <Button variant="contained" color="secondary">Submit</Button>
            </form>
        </div>
   );
  }

export default Login