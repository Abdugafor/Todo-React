import React from "react";
import styles from './todoBottom.module.css'
import { Filters } from "./filter/filters";

export function TodoBottom({list}) {
    return (
        <div className={styles.todoBottom}>
            <span className={styles.listLength}>{list.length} todo's left</span>

            <Filters />

            <button type="button" className="clearBtn">Clear Completed</button>
        </div>
    )
}
