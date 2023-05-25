import React, { useEffect, useState } from "react";
import './todoItem.css'

export function TodoItem({todo , func}) {
   
    return (
        <li className="listItem" >
                <input 
                    type="checkbox" 
                    id={todo.id} 
                    onClick={func}
                    checked={todo.done}
                />
                <label 
                    for={todo.id} 
                    key={todo.id} 
                    id={todo.id} 
                    
                 >{todo.title}</label>
        </li>
    )
}
