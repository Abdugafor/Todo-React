import React, { useState } from "react";
import styles from './todoItem.module.css'

export function TodoItem({todo}) {
    
    return (
        <li className={styles.listItem} >
                <input type="checkbox" id={todo.id}/>
                <label for={todo.id} key={todo.id}>{todo.title}</label>
        </li>
    )
}