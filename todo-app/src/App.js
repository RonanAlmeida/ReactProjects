import "./App.css";
import TodoList from "./TodoList";
import React, { useState,useRef,useEffect } from "react";
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'todoApp.toods'

function App() {


  const [todos, setTodos] = useState([{
    id: 1,
    name: "Todo 1",
    complete: false,
  }]);
  const todoNameRef =useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e){
    const name= todoNameRef.current.value
    if (name === '') {
      return null
    }
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuid(),name:name,complete:false}]
    })
    todoNameRef.current.value=null
  }
  function handleClearTodos(){
    const newTodos =  todos.filter(todo => !todo.complete )
    setTodos(newTodos)
  }
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete =!todo.complete
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"></input>
      <button onClick ={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed </button>
  <div>{todos.filter(todo => !todo.complete).length}</div>
    </div>
  );
}

export default App;
