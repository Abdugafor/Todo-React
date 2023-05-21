import React, { useEffect, useRef, useState } from "react";
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
  {title: 'Wash the dishes', done: false ,id: 1},
  {title: 'Go for a walk', done: true ,id: 2},
  {title: 'Programming assignment', done: false ,id: 3},
].map(item => ({...item, id: generateRandomString()}))

function App() {
  const [list, setList] = useState(TODOLIST)
  const [isDark, setIsDark] = useState(true)
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

  const addDoneClass = (e) => {
    if (e.target.type === 'checkbox') {
      const currentTodo = list.filter(item => item.id === e.target.id)[0]
      setList((props) => ({...props, }))
    }
  }

  return (
    <>
      <BackgroundImage img={isDark} />
      <Container>

        <Header changeDarkMode={changeBgImage}/>

        <MyInput
          ref={inputRef}
          placeholder="Create a new todo..."
          onKeyDown={addTodo}
        />

        <TodosList list={list}>
          {list.map((todo, index) => 
                  <TodoItem todo={todo} addClassDoneFunc={addDoneClass}/>
              )}

          <TodoBottom list={list}>
              <Filters />
              <button type="button" className="clearBtn" onClick={clearDoneTodos}>Clear Completed</button>
          </TodoBottom>
        </TodosList>
      </Container>
  
    </>
  )
}

export default App;
