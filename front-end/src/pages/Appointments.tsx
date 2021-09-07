import React from 'react'
import { useState } from "react"
import { useParams } from "react-router-dom"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
// import { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
=======
<<<<<<< Updated upstream
// import { Fragment, useState } from "react";
// import { DatePicker } from "@material-ui/pickers";
=======
import { useParams } from "react-router-dom"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import { DatePicker } from "@material-ui/pickers";
import "../styles/appointments.css"
>>>>>>> Stashed changes
>>>>>>> Stashed changes

function Appointments() {
    const [selectedDate, handleDateChange] = useState(new Date());

    const {id}: {id:string} = useParams();

    return (
        <main className="appointments">
            <h2>Make an appointment</h2>
<<<<<<< Updated upstream
            <form>
<<<<<<< Updated upstream
            <MuiPickersUtilsProvider utils={LuxonUtils}>
=======
            {/* <Fragment>
                <DatePicker
                    label="Basic example"
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling
                />
            </Fragment> */}
=======
            <form className="appointments">
                <MuiPickersUtilsProvider utils={LuxonUtils}>
>>>>>>> Stashed changes
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        animateYearScrolling
                    />
<<<<<<< Updated upstream

           </MuiPickersUtilsProvider>
=======
                </MuiPickersUtilsProvider>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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