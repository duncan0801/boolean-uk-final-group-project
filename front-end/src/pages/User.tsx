import { keys } from "@material-ui/core/styles/createBreakpoints";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore, { Appointment, loggedinUser } from "../store";
import "../styles/user.css";

function User() {
  const loggedinUser = useStore((state) => state.loggedinUser);
  const user = useStore((state) => state.user);
  let counsellors = useStore((state) => state.counsellors);
  const fetchUser = useStore((state) => state.fetchUser);

  useEffect(() => {
    if (loggedinUser) {
      fetchUser(loggedinUser as loggedinUser);
    }
  }, []);

  if (!user) {
    return <>Loading..</>;
  }

  let foundCounsellor = counsellors?.find(
    (counsellor) => counsellor.id === user.counsellor_ID
  );

  function onDelete(appointment: Appointment) {
    fetch(`http://localhost:4000/appointments/${appointment.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className="user-section">
      <h1>
        Hello, {user.firstName} {user.lastName}!
      </h1>
      <div className="user-img-and-username-div">
        <div className="frame-img-user-page">
          <img src={user.avatar} alt="img" />
        </div>
        <h2 className="usernameuUserPage">{user.username}</h2>
      </div>
      <div className="appointments-grid">
        <h3 className="next-appointment">Next appointment: </h3>

        {user.appointments?.length ? (
          user.appointments?.map((appointment: Appointment) => (
            <>
              <ul className="appointmentsList">
                <li>{appointment.date}</li>
                <li>{appointment.time}</li>
                <Link to={`/counsellors/${foundCounsellor?.id}`}>
                  <li>
                    {foundCounsellor?.firstName} {foundCounsellor?.lastName}
                  </li>
                </Link>
                <button
                  onClick={(e) => onDelete(appointment)}
                  className="remove-user-page-button"
                >
                  remove
                </button>
              </ul>
            </>
          ))
        ) : (
          <>
            <ul className="appointmentsList">
              <li>No</li>
              <li>Bookings</li>
              <li>Avalible</li>
            </ul>
          </>
        )}
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
