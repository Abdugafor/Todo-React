import React from "react"
import styles from './createTodo.module.css'

// const  MyInput = React.forwardRef((props, ref,  func , isDark) => {
//     return (
//         <div className={styles.relative}>
//              <input 
//                 className={isDark ? styles.createTodoInputDark : styles.createTodoInputLight}
//                 {...props}
//             />
//             <div className={styles.circle} onClick={func}></div>
//         </div>
       
//     )
// })

function MyInput({props, ref,  func , isDark}) {
    return (
        <div className={styles.relative}>
             <input 
                className={isDark ? styles.createTodoInputDark : styles.createTodoInputLight}
                {...props}
                onKeyDown={func}
                placeholder="Create a new todo..."
            />
            <div className={styles.circle} ></div>
        </div>
       
    )
}

export  { MyInput }