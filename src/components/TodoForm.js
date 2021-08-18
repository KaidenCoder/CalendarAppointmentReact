import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const TodoForm = ({ addAppointment, d, t, datetext }) => {
    const [meetingTitle, setMeetingTitle] = useState('')
    const [meetingDesc, setMeetingDesc] = useState('')
    const [yourmail, setYourMail] = useState('')

    const handleTitle = (e) => {
        setMeetingTitle(e.currentTarget.value)
    }

    const handleDesc = (e) => {
        setMeetingDesc(e.currentTarget.value)
    }

    const handleMail = (e) => {
        setYourMail(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
            }, (error) => {
            });
        addAppointment(meetingTitle, meetingDesc, d, t)
        setMeetingTitle("")
        setMeetingDesc("")
        setYourMail("")
        alert("Mail has been sent to the email-id")
    }

    return (
        <form className="forminput" onSubmit={handleSubmit}>
            <input value={meetingTitle} type="text" onChange={handleTitle} placeholder="Enter Meeting Name" name="title" />
            <input value={meetingDesc} type="text" onChange={handleDesc} placeholder="Enter Description" name="desc" />
            <input value={yourmail} type="text" onChange={handleMail} placeholder="Enter mailid" name="mail" />
            <input value={datetext + ", " + t + " hrs"} type="text" placeholder="Enter Description" name="time" />
            <button className="btn-imp">Make Appointment</button>
        </form>
    )
}

export default TodoForm