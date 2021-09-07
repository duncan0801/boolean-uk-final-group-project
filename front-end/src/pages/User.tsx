import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore, { loggedinUser } from "../store";
import "../styles/user.css";

function User() {
  const loggedinUser = useStore((state) => state.loggedinUser);
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);

  useEffect(() => {
    if (loggedinUser) {
      fetchUser(loggedinUser as loggedinUser);
    }
  }, []);

  if (!user) {
    return <>Loading..</>;
  }

  return (
    <section className="user-section">
      <h1>
        Hello, {user.firstName} {user.lastName}! how are you?
      </h1>
      <div className="user-img-and-username-div">
        <div className="frame-img-user-page">
          <img src={user.avatar} alt="img" />
        </div>
        <h2 className="usernameuUserPage">{user.username}</h2>
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
