import React from "react";
import './todoItem.css'

export function TodoItem({todo, addClassDoneFunc}) {
    return (
        <li className="listItem" onClick={addClassDoneFunc}>
                <input type="checkbox" id={todo.id}/>
                <label for={todo.id} key={todo.id} className={todo.done ? "done" : ''}>{todo.title}</label>
        </li>
    )
}