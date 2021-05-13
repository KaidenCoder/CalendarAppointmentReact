import React from 'react'

const Todo = ({ list, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
        console.log(list.time.props.children)
    }

    return (
        <div className="todoitem">
            <div
                id={list.id}
                key={list.id + list.task}
                value={list.id}
                onClick={handleClick}
                className={list.complete ? "todo strike" : "todo"}>
                <p>Title: {list.task}</p>

                <p>Date: {list.time}</p>
                <p>Time: {list.rtime} hrs</p>
            </div>
        </div>
    )
}

export default Todo