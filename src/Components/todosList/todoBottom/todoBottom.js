import React from "react";
import styles from './todoBottom.module.css'
import { Filters } from "./filter/filters";

export function TodoBottom({list, children}) {
    return (
        <div className={styles.todoBottom}>
            <span className={styles.listLength}>{list.length} todo's left</span>

            {children}
        </div>
      
    )
}
