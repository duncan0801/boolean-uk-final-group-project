import React from 'react'
import { useState } from "react"
import { useParams } from "react-router-dom"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
// import { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function Appointments() {
    const [selectedDate, handleDateChange] = useState(new Date());

    const {id}: {id:string} = useParams();

    return (
        <main className="appointments">
            <h2>Make an appointment</h2>
            <form>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        animateYearScrolling
                    />

           </MuiPickersUtilsProvider>
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