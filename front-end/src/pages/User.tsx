import React from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";

function User() {
  return (
    <section className="user-section">
      <h1>Hello, user! how are you?</h1>
      <div className="user-img-and-username-div">
        <div className="frame-img-user-page">
          <img
            src="https://images.pexels.com/photos/1142069/pexels-photo-1142069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="img"
          />
        </div>
        <h2 className="usernameuUserPage">catPerson77</h2>
      </div>
      <div className="appointments-grid">
        <h3>Next appointment: </h3>
        <ul className="appointmentsList">
          <li>Date</li>
          <li>Time</li>
          <li>Counsellor name</li>
        </ul>
      </div>
      <div className="userPageLinks">
        <Link to="/add-review" className="post-review">
          Add a review
        </Link>
        <Link to="/reviews" className="message-counsellor">
          Message counsellor
        </Link>
      </div>
    </section>
  );
}

export default User;
