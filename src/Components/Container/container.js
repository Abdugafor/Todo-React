import React, { useRef, useState } from "react";
import Header from "../header";
import MyInput from "../createTodo"
import TodosList from "../todosList";
import styles from './container.module.css'


const TODOLIST = [
    {title: 'Wash the dishes', id: 1},
    {title: 'Wash the dishes', id: 2},
    {title: 'Wash the dishes', id: 2},
]

export function Container() {
    const [list, setList] = useState(TODOLIST)
    const inputRef = useRef()


   return (
       <div className={styles.container}>
            <Header/>
            <MyInput 
            ref={inputRef}
                placeholder="Create a new todo..."
            />
            <TodosList list={list}/>
       </div>
    )
}