import React, { useEffect, useState } from "react";
import './todoItem.css'

export function TodoItem({todo , func}) {

    // const handleClick = () => {
    //     setChecked(!checked)
    // }

    return (
        <li className="listItem" >
                <input 
                    type="checkbox" 
                    id={todo.id} 
                    checked={todo.done} 
                    onClick={func} 
                />
                <label 
                    for={todo.id} 
                    key={todo.id} 
                    className={todo.done ? "done" : ''}
                    id={todo.id} 
                    
                 >{todo.title}</label>
        </li>
    )
}
