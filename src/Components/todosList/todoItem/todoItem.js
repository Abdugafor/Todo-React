import React, { useEffect, useState } from "react";
import './todoItem.css'

export function TodoItem({todo , func}) {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked)
    }

    return (
        <li className="listItem" >
                <input 
                    type="checkbox" 
                    id={todo.id} 
                    checked={checked} 
                    onClick={handleClick} 
                />
                <label 
                    for={todo.id} 
                    key={todo.id} 
                    className={checked ? "done" : ''}
                    id={todo.id} 
                    
                 >{todo.title}</label>
        </li>
    )
}
