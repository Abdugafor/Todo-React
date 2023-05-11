import { TodoBottom } from './todoBottom/todoBottom'
import { TodoItem } from './todoItem/todoItem'
import styles from './todos.module.css'

export function TodosList({list, func}) {
    return (
        <ul className={styles.list}>
            {list.map((todo, index) => 
                <TodoItem todo={todo}/>
            )}

            <TodoBottom list={list}/>
        </ul>
    )
}