import React, {  useRef, useState } from "react";
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

  const changeDone = (e) => {
    const currentTodo = list.filter(item => item.id === e.currentTarget.id).map(item => ({...item, done: !item.done}))[0]
    // setList((todos) => ({...todos, currentTodo}))
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
                  <TodoItem todo={todo} func={changeDone}/>
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

export default App
