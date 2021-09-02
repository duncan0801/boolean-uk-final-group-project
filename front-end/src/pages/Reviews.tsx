import React from "react";
import { Link } from "react-router-dom";
import "../styles/review.css";

function Reviews() {
  return (
    <section className="reviews">
      <div className="review-banner">
        <img
          className="review-banner-img"
          src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        ></img>
        <h1 className="banner-title">REVIEWS</h1>
      </div>

      <h2 className="review-hero">WHAT OUR CUSTOMERS SAY</h2>

      <div className="reviews-wrapper">
        <div className="review-card">
          <div className="user-details">
            <span className="name-surname">Review written by Jane Doe</span>
            <span className="city">Date 12/10/21</span>
          </div>

          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ducimus labore, eius aut exercitationem commodi nesciunt nemo, a
            natus neque recusandae, soluta amet accusamus voluptates nihil
            placeat aliquid quam at.
          </blockquote>
          <div className="bottom-review-card">
            <div className="frame-img-review">
              <img
                src="https://images.pexels.com/photos/1142069/pexels-photo-1142069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"
              />
            </div>
            <div className="counsellor-reviews-wrapper">
              <h3 className="counsellor-reviews-name">
                Counsellor name -(More reviews)
              </h3>
              <h4 className="counsellor-reviews-speciality">Speciality</h4>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="user-details">
            <span className="name-surname">Review written by Jane Doe</span>
            <span className="city">Date 12/10/21</span>
          </div>

          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ducimus labore, eius aut exercitationem commodi nesciunt nemo, a
            natus neque recusandae, soluta amet accusamus voluptates nihil
            placeat aliquid quam at.
          </blockquote>
          <div className="bottom-review-card">
            <div className="frame-img-review">
              <img
                src="https://images.pexels.com/photos/1142069/pexels-photo-1142069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"
              />
            </div>
            <div className="counsellor-reviews-wrapper">
              <h3 className="counsellor-reviews-name">
                Counsellor name -(More reviews)
              </h3>
              <h4 className="counsellor-reviews-speciality">Speciality</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="add-review-wrapper">
        <Link to="/AddReview">
          <button className="review-button">ADD REVIEW</button>
        </Link>
      </div>
    </section>
  );
}

export default Reviews;
