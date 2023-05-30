import React from "react";
import styles from  './filters.module.css'

export function Filters({isActive, clickFunc}) {

    return (
        <div className={styles.filter}>
            <button 
                type="button" 
                className={isActive === 'All' ? styles.active : ''}
                onClick={clickFunc}
            >All</button>

            <button 
                type="button" 
                className={isActive === 'Active' ? styles.active : ''}
                onClick={clickFunc}
            >Active</button>

            <button 
                type="button"
                className={isActive === 'Completed' ? styles.active : ''}
                onClick={clickFunc}
            >Completed</button>
        </div>
    )
}