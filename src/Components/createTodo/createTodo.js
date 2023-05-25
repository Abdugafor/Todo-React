import React from "react"
import styles from './createTodo.module.css'

const  MyInput = React.forwardRef((props, ref, isDark, func) => {
    return (
        <div className={styles.relative}>
             <input 
             ref={ref}
                className={styles.createTodoInput}
                {...props}
            />
            <div className={styles.circle} onClick={func}></div>
        </div>
       
    )
})

export  { MyInput }