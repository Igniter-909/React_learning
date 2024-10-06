import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }

  return (
    <div className="container">
      <h1 className='heading'>{count}</h1>
      <br/>
      <div className="btn">
        <button id='inc' onClick={increment}>Increment</button>
        <button id='dec' onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default App
