import React from "react";
import styles from  './container.module.css'
export function Container({children}) {

   return (
        <div className={styles.container}>
            {children}
        </div>
    )
}