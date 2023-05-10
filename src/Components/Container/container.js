import React, { useRef, useState } from "react";
import Header from "../header";
import MyInput from "../createTodo/createTodo.js"
import TodosList from "../todosList";
import styles from './container.module.css'


const TODOLIST = [
    {title: 'Wash the dishes', done: false},
    {title: 'Go for a walk', done: true},
    {title: 'Programming assignment', done: false},
]

// .map(item => ({...item, id: generateRandomString()}))

export function Container() {
    const [list, setList] = useState(TODOLIST)
    const inputRef = useRef()

    const handleClick = (e) => {
        const inputValue = e.currentTarget.value
        if (e.key === 'Enter' && inputValue !== '') {
            setList(list.concat({title: inputValue, id: 4}))
            e.currentTarget.value = ''
        }
    }
   return (
       <div className={styles.container}>
            <Header/>

            <MyInput 
            ref={inputRef}
                placeholder="Create a new todo..."
                onKeyDown={handleClick}
            />

            <TodosList list={list}/>
            
       </div>
    )
}