import React, { useState } from "react";
import styles from  './filters.module.css'

export function Filters({list}) {
    const [filteredList, setFilteredlist] = useState(list)
    
    const showActiveTodos = () => {
        setFilteredlist(filteredList.filter(item => item.done === true))
    }

    return (
        <div className={styles.filter}>
            <button type="button" className={styles.active}>All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
        </div>
    )
}