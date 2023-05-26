import React, { useEffect, useState } from "react";
import './todoItem.css'

export function TodoItem({todo , func}) {
    const [checked, setChecked] = useState(false)
   
    return (
        <li className="listItem" >
                <input 
                    type="checkbox" 
                    id={todo.id} 
                    checked={checked} 
                    onClick={func} 
                />
                <label 
                    for={todo.id} 
                    key={todo.id} 
                    id={todo.id} 
                    
                 >{todo.title}</label>
        </li>
    )
}
