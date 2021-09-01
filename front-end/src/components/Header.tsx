import React from "react"
import "../styles/header.css"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


function Header() {

    
    
    const classes = useStyles();

    return (
        <header>
            <img className="logo" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart"
            alt="counselling service logo (smiley face)"></img>
            <h1>Counselling Service</h1>
            <nav>
                <ul>
                    <li><h3 className="main-nav-heading">Services</h3></li>
                    <li><h3 className="main-nav-heading">Counsellors</h3></li>
                    <li><h3 className="main-nav-heading">Reviews</h3></li>
                    <li><h3 className="main-nav-heading">FAQs</h3></li>
                </ul>
            </nav>
            <div className={classes.root}>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Log in
              </Button>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Create account
              </Button>
            </div>
        </header>
    )

}

export default Header