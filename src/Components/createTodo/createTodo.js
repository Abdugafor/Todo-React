import React from "react"
import styles from './createTodo.module.css'


function MyInput({props, ref,  func , isDark, info}) {
    return (
        <div className={styles.relative}>
             <input 
                className={isDark ? styles.createTodoInputDark : styles.createTodoInputLight}
                {...props}
                onKeyDown={func.addTodo}
                placeholder="Create a new todo..."
                onChange={func.inputChange}
                value={info}
            />
            <div  className={styles.circle} onClick={func.addTodoCLick}>
            </div>
        </div>
       
    )
}

export  { MyInput }