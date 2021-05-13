import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo, handleToggle, handleFilter }) => {
    return (
        <div className="allitems" >
            {
                todo.map(list => {
                    return (
                        <Todo key={list.id} list={list} handleToggle={handleToggle} />
                    )
                })
            }
            <button className="btn" onClick={handleFilter}>Trash</button>
        </div>
    )
}

export default TodoList