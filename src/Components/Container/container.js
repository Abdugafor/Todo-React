import React, { useRef, useState } from "react";
import Header from "../header";
import { MyInput } from "../createTodo/createTodo";
import TodosList from "../todosList";
import styles from './container.module.css'
import generateRandomString from "../../utils/generateRandomIndex";


const TODOLIST = [
    {title: 'Wash the dishes'},
    {title: 'Wash the dishes'},
    {title: 'Wash the dishes'},
].map(item => ({...item, id: generateRandomString()}))

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