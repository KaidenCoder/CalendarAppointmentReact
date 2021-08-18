import React from 'react'

const Todo = ({ list, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div className="todoitem">
            <div
                id={list.id}
                key={list.id + list.title}
                value={list.id}
                onClick={handleClick}
                className={list.complete ? "todo strike" : "todo"}>
                <p><span className="meeting-item">Title:</span> {list.title}</p>
                <p><span className="meeting-item">Description:</span> {list.desc}</p>
                <p><span className="meeting-item">Date:</span> {list.date}</p>
                <p><span className="meeting-item">Time:</span> {list.rtime} hrs</p>
            </div >
        </div >
    )
}

export default Todo