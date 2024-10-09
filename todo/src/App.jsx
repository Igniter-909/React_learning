import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import TodoList from './components/TodoList/TodoList'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './components/context/TodoContext'
import todoReducer from './reducers/todoReducer'
import TodoDispatchContext from './components/context/TodoDispatchContext'

function App() {
  // const [list, setList] = useState([
  //   {id:1 , todoData: 'todo 1',finished:false},
  //   {id:2 , todoData: 'todo 2',finished:false}
  // ]);

  const [list,dispatch] = useReducer(todoReducer,[]);

  return (
    <TodoContext.Provider value = {{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
