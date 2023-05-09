// import { TODOLIST } from "../createTodo/createTodo";
import { TodoItem } from './todoItem/todoItem'
import styles from './todos.module.css'

export function TodosList({list}) {

    return (
        <ul className={styles.list}>
            {list.map((todo, index) => 
                <TodoItem todo={todo}/>
            )}
        </ul>
    )
}