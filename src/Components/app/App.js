import React, {  useEffect, useState } from "react";
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


const TODOLIST = [].map(item => ({...item, id: generateRandomString()}))

const buttons = ['All', 'Active', 'Completed']

const listCopy = TODOLIST



function App() {
  const [list, setList] = useState(TODOLIST)
  const [isDark, setIsDark] = useState(true)
  const [InputInfo, setInputInfo] = useState('')
  const [isActive, setIsActive] = useState(buttons[0])


  const inputChange = (e) => {
    setInputInfo(e.currentTarget.value)  
  } 

  const addTodo = (e) => {
    if (e.key === 'Enter' && InputInfo !== '') {
        setList(list.concat({title: InputInfo, done: false, id: generateRandomString()}))
        setInputInfo('')
    }
  }

  const addTodoCLick = (e) => {
      setList(list.concat({title: InputInfo, done: false, id: generateRandomString()}))
      setInputInfo('')
      e.currentTarget.value = ''
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

  useEffect(() => {

    if (isActive === 'Active') {
      setList(list.filter(item => !item.done))
    }else if (isActive === 'Completed') {
      setList(list.filter(item => item.done))
    }else {
      setList(listCopy)
    }
  }, [isActive])


  const crossClick = (e) => {
    const TodoId = e.currentTarget.id    
    setList(oldArr => oldArr.filter(item => item.id !== TodoId))
  }

  return (
    <div className={isDark ? "bg-dark" : "bg-light"}>
      <BackgroundImage img={isDark} />
      <Container>

        <Header changeDarkMode={changeBgImage}/>

        <MyInput
          placeholder="Create a new todo..."
          func={{addTodo, addTodoCLick, inputChange}}
          isDark={isDark}
          info={InputInfo}
        />
        <TodosList 
        list={list} 
        isDark={isDark}
        >
          {list.map((todo, index) => 
            <TodoItem 
              todo={todo} 
              func={changeDone} 
              crossClick={crossClick
            }/>
          )}

          <TodoBottom list={list}>

              <Filters 
                isActive={isActive}
                clickFunc={filtersClick}
              />

              <button 
                type="button" 
                className="clearBtn"
                onClick={clearDoneTodos}
              >Clear Completed</button>

          </TodoBottom>
        </TodosList>
      </Container>
  
    </div>
  )
}

export default App
