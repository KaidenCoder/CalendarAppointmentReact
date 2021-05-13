import React, { useState } from 'react'

const TodoForm = ({ addAppointment, d, t }) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addAppointment(userInput, d, t)
        setUserInput("")
    }

    return (
        <form className="forminput" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Meeting Name" />
            <button className="btn-imp">Make Appointment</button>
        </form>
    )
}

export default TodoForm