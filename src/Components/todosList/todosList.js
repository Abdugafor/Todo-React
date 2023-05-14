import styles from './todos.module.css'

export function TodosList({children, list}) {
    return (
        <ul className={styles.list}>
            
            {children}
        </ul>
    )
}