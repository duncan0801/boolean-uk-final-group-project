import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import useStore from "../store";
import "../styles/addReview.css";

type Review = {
  id: number;
  date: string;
  content: string;
  user_ID: number;
  counsellor_ID: number;
};

function AddReview() {
  return (
    <section className="add-review-container">
      <div className="top-addRevie-page">
        <h1 className="addReview-page-header">Post a review</h1>
        <h2 className="addReview-page-h2">
          We would like to hear your opinion.
        </h2>
      </div>
      <div className="addReview-form-wrapper">
        <form
          // onSubmit={(e) => onLogin(e)}
          className="add-review-form"
          noValidate
          autoComplete="off"
        >
          <TextField
            // onChange={(e) => setuserName(e.target.value)}
            id="date"
            label="date"
            variant="outlined"
            placeholder="Date"
            fullWidth
            multiline
            rows="1"
          />
          <TextField
            // onChange={(e) => setPassword(e.target.value)}
            id="content"
            label="Content"
            variant="outlined"
            placeholder="What did you think?"
            fullWidth
            multiline
            rows="9"
          />
          <div className="post-review-wrapper">
            <button className="post-review-button">Post</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
