import React from 'react'
import { useState } from "react"
// import { Fragment, useState } from "react";
// import { DatePicker } from "@material-ui/pickers";

function Appointments() {
    // const [selectedDate, handleDateChange] = useState(new Date());



    return (
        <main className="appointments">
            <h2>Make an appointment</h2>
            <form>
            {/* <Fragment>
                <DatePicker
                    label="Basic example"
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling
                />
            </Fragment> */}
                    <div className="available-appointments">
                    <div className="appointment-time">9:00</div>
                    <div className="appointment-time">11:00</div>
                    <div className="appointment-time">13:00</div>
                    <div className="appointment-time">15:00</div>
                    <div className="appointment-time">16:00</div>
                    <div className="appointment-time">17:00</div>
                    <div className="appointment-time">18:00</div>
                </div>
            </form>
        </main>
    )
}

export default Appointments