import React from "react";
import './todoItem.css'

export function TodoItem({todo , func, crossClick}) {
    return (
        <li className="listItem" >
            <div className="todo">
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
            </div>

            <div className="crossBLock" id={todo.id} onClick={crossClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg> 
            </div>
          
            
        </li>
    )
}
