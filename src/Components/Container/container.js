import React, { useRef, useState } from "react";
import Header from "../header";
import TodosList from "../todosList";
import styles from './container.module.css'
import MyInput from "../createTodo";
import generateRandomString from "../../utils/generateRandomIndex";


const TODOLIST = [
    {title: 'Wash the dishes', done: false ,id: 1},
    {title: 'Go for a walk', done: true ,id: 2},
    {title: 'Programming assignment', done: false ,id: 3},
].map(item => ({...item, id: generateRandomString()}))

export function Container() {
    const [list, setList] = useState(TODOLIST)
    const inputRef = useRef()

    const handleClick = (e) => {
        const inputValue = e.currentTarget.value
        if (e.key === 'Enter' && inputValue !== '') {
            setList(list.concat({title: inputValue, id: generateRandomString()}))
            e.currentTarget.value = ''
        }
    }

    const changeDone = (todo) => {
        console.log('true')
    }

   return (
       <div className={styles.container}>
            <Header/>

            <MyInput 
            ref={inputRef}
                placeholder="Create a new todo..."
                onKeyDown={handleClick}
            />

            <TodosList list={list} func={changeDone}/>
            
       </div>
    )
}