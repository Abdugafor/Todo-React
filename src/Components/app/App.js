import React, {  useEffect, useRef, useState } from "react";
import BackgroundImage from '../backgroundImage';
import Container from '../Container';
import './App.css'
import Header from "../header";
import { MyInput } from "../createTodo/createTodo";
import { TodosList } from "../todosList/todosList";
import generateRandomString from "../../utils/generateRandomIndex";
import { TodoBottom } from "../todosList/todoBottom/todoBottom";
import { Filters } from "../todosList/todoBottom/filter/filters";
import TodoItem from "../todosList/todoItem";


const TODOLIST = [
  {title: 'Wash the dishes', done: false },
  {title: 'Go for a walk', done: false },
  {title: 'Programming assignment', done: false},
].map(item => ({...item, id: generateRandomString()}))

const buttons = ['All', 'Active', 'Compleated']


function App() {
  const [list, setList] = useState(TODOLIST)
  const [isDark, setIsDark] = useState(true)
  const [isActive, setIsActive] = useState(buttons[1])

  const inputRef = useRef()


  const addTodo = (e) => {
    const inputValue = e.currentTarget.value
    if (e.key === 'Enter' && inputValue !== '') {
        setList(list.concat({title: inputValue, id: generateRandomString()}))
        e.currentTarget.value = ''
    }
  }


  const changeBgImage = () => {
      setIsDark(!isDark)
  }
  
  const clearDoneTodos = () => {
    setList(list.filter(item => !item.done))
  }

  const changeDone = (e) => {

    const TodoId = e.currentTarget.id
    setList(prev => prev.map(item => item.id === TodoId ? {...item, done: !item.done} : item))

  }

  const filtersClick = (e) => {
      setIsActive(e.currentTarget.textContent)
  }

  return (
    <div className={isDark ? "bg-dark" : "bg-light"}>
      <BackgroundImage img={isDark} />
      <Container>

        <Header changeDarkMode={changeBgImage}/>

        <MyInput
          placeholder="Create a new todo..."
          func={addTodo}
          isDark={isDark}
        />
        <TodosList list={list} isDark={isDark}>
          {list.map((todo, index) => 
                  <TodoItem todo={todo} func={changeDone}/>
              )}

          <TodoBottom list={list}>
              <Filters isActive={isActive} clickFunc={filtersClick}/>
              <button type="button" className="clearBtn" onClick={clearDoneTodos}>Clear Completed</button>
          </TodoBottom>
        </TodosList>
      </Container>
  
    </div>
  )
}

export default App
