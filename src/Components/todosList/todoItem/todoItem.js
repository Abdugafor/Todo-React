import React, { useState } from "react";
import styles from './todoItem.module.css'

export function TodoItem({listTodo}) {
    const [todo, setTodo] = useState({
        title: listTodo.title,
        done: listTodo.done,
        id: listTodo.id,
        classDone: listTodo.done ? 'done' : 'noDone'
    })

    

    return (
        <li className={styles.listItem} >
                <input type="checkbox" id={todo.id} />
                <label for={todo.id} key={todo.id}>{todo.title}</label>
        </li>
    )
}