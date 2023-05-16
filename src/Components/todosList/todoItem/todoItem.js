import React, { useState } from "react";
import './todoItem.css'

export function TodoItem({todo, addClassDoneFunc}) {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }
    return (
        <li className="listItem" onClick={addClassDoneFunc}>
                <input type="checkbox" id={todo.id} checked={checked} onClick={handleClick}/>
                <label for={todo.id} key={todo.id} className={todo.done ? "done" : ''}>{todo.title}</label>
        </li>
    )
}