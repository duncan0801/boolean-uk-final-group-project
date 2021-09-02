import React from "react";
import "../styles/header.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <header>
      {/* <img
        className="logo"
        src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart"
        alt="counselling service logo (smiley face)"
      ></img> */}
      {/* <h1>online counselling</h1>
      <nav>
        <ul>
          <Link to="/services">
            <h3 className="main-nav-heading">Services</h3>
          </Link>
          <Link to="/counsellors">
            <h3 className="main-nav-heading">Counsellors</h3>
          </Link>
          <Link to="/reviews">
            <h3 className="main-nav-heading">Reviews</h3>
          </Link>
          <Link to="/faq">
            <h3 className="main-nav-heading">FAQs</h3>
          </Link>
        </ul>
      </nav>
      <div className={classes.root}>
        <Link to="/login">
          <Button variant="contained" color="primary" href="#contained-buttons">
            Log in
          </Button>
        </Link>

        <Link to="/signup">
          <Button variant="contained" color="primary" href="#contained-buttons">
            Create account
          </Button>
        </Link>
      </div>
    </header> */}
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        fill="#175c62"
      >
        <title>x</title>
        <path
          className="cls-1"
          d="M80.56771,76.53471a35.16242,35.16242,0,0,0-69.8603-4.1322c-.23936,1.49942-6.31448,33.85312-8.32073,44.518a1.75586,1.75586,0,0,0,2.47088,1.91473L27.546,108.19855A35.1674,35.1674,0,0,0,80.56771,76.53471ZM27.06728,82.55354a4.6285,4.6285,0,1,1,4.632-4.625A4.62965,4.62965,0,0,1,27.06728,82.55354Zm18.43653,0a4.6285,4.6285,0,1,1,4.632-4.625A4.62363,4.62363,0,0,1,45.50381,82.55354Zm18.43653,0a4.6285,4.6285,0,1,1,4.632-4.625A4.62363,4.62363,0,0,1,63.94034,82.55354Z"
        />
        <path
          className="cls-2"
          d="M125.30392,84.73578,106.86034,59.47794A39.46624,39.46624,0,1,0,30.756,38.57052a41.8317,41.8317,0,0,1,9.91167-2.38637,30.845,30.845,0,0,1,57.35809,22.611l-.76028,2.147,13.178,18.05637c-6.39191.03523-15.22651.09856-23.01928.15489a41.04513,41.04513,0,0,1-1.14745,8.63047c7.90538-.06337,29.25629-.19713,37.61926-.25341A1.75721,1.75721,0,0,0,125.30392,84.73578Z"
        />
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47.56 47.2"
        fill="#175c62"
      >
        <defs></defs>
        <title>Asset 6</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path
              className="cls-1"
              d="M5.54,17.7h7.6a1.56,1.56,0,0,1,1.56,1.56v4.65a0,0,0,0,1,0,0H4a0,0,0,0,1,0,0V19.26A1.56,1.56,0,0,1,5.54,17.7Z"
              transform="translate(17.45 -0.51) rotate(45)"
            />
            <path className="cls-1" d="M3.35,19.21s-7.83,6.63,5.09,19.55" />
            <path className="cls-1" d="M10.94,26.79s-3.95,2.65,1.43,8" />
            <path
              className="cls-1"
              d="M21,34.76H31.76a0,0,0,0,1,0,0v4.65A1.56,1.56,0,0,1,30.2,41h-7.6A1.56,1.56,0,0,1,21,39.41V34.76A0,0,0,0,1,21,34.76Z"
              transform="translate(18.29 83.3) rotate(-135)"
            />
            <path className="cls-1" d="M28,43.85s-6.63,7.83-19.55-5.09" />
            <path className="cls-1" d="M20.41,36.27s-2.65,3.94-8-1.44" />
            <path
              className="cls-1"
              d="M30.81,1C22.15,1,15.57,6.76,15.57,13.87a9.55,9.55,0,0,0,4,8.2h0a11.62,11.62,0,0,1-.29,6.05,1,1,0,0,0,1.3,1.24l7.89-2.8a17.56,17.56,0,0,0,2.42.19c8.67,0,15.64-5.77,15.64-12.88S39.48,1,30.81,1Z"
            />
            <path
              className="cls-1"
              d="M28.34,26.56a17.61,17.61,0,0,1-5.06-1.82"
            />
            <circle cx="24.39" cy="14.32" r="1.76" />
            <circle cx="31.3" cy="14.32" r="1.76" />
            <circle cx="38.22" cy="14.32" r="1.76" />
          </g>
        </g>
      </svg> */}
      <h1 className="logo">online counselling</h1>
      <div></div>
      <nav>
        <ul className="header-ul">
          <Link to="/services" className="header-links">
            <h3 className="main-nav-heading">Services</h3>
          </Link>
          <Link to="/counsellors" className="header-links">
            <h3 className="main-nav-heading">Counsellors</h3>
          </Link>
          <Link to="/reviews" className="header-links">
            <h3 className="main-nav-heading">Reviews</h3>
          </Link>
          <Link to="/faq" className="header-links">
            <h3 className="main-nav-heading">FAQs</h3>
          </Link>
          <Link to="/login" className="header-links">
            <h3 className="main-nav-heading">Log in</h3>
          </Link>
        </ul>
      </nav>
      <div>
        <Link to="/signup" className="header-links log-out">
          Create acount
        </Link>
      </div>
    </header>
  );
}

export default Header;
