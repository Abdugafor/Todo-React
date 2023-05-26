import React from "react";
import styles from './todoBottom.module.css'
import { Filters } from "./filter/filters";
import TodoItem from "../todoItem";

export function TodoBottom({list, children}) {
    const TodosLeft = list.filter(item => !item.done).length

    return (
        <div className={styles.todoBottom}>
            <span className={styles.listLength}>{TodosLeft === 0 ? "No todo's yet" : TodosLeft + ' ' + "todo's left"}</span>

            {children}
        </div>
      
    )
}
