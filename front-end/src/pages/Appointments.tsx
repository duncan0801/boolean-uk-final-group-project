import React from 'react'
import { useState } from "react"
import { useParams } from "react-router-dom"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
<<<<<<< HEAD
// import { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
=======
import { DatePicker } from "@material-ui/pickers";
import "../styles/appointments.css"

>>>>>>> 18d15cf21be3bb5043a7dc86cf8a5e0e380313a6

function Appointments() {
    const [selectedDate, handleDateChange] = useState(new Date());

    const {id}: {id:string} = useParams();

    return (
        <main className="appointments">
<<<<<<< HEAD
            <h2>Make an appointment</h2>    
            <form className="appointments">
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
=======
            <h2>Make an appointment</h2>
            <form className="select-appointment">
                <div className="date-picker">
                    <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <DatePicker
                            value={selectedDate}
                            onChange={handleDateChange}
                            animateYearScrolling
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="available-appointments">
                    <button className="appointment-time">9:00</button>
                    <button className="appointment-time">11:00</button>
                    <button className="appointment-time">15:00</button>
                    <button className="appointment-time">16:00</button>
                    <button className="appointment-time">17:00</button>
                    <button className="appointment-time">18:00</button>

           
>>>>>>> 18d15cf21be3bb5043a7dc86cf8a5e0e380313a6
                </div>
            </form>
        </main>
    )
}

export default Appointments