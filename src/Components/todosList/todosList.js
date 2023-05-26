import styles from './todos.module.css'

export function TodosList({children, list, isDark}) {
    return (
        <ul className={isDark ? styles.listDark : styles.listLight}>
            
            {children}
        </ul>
    )
}