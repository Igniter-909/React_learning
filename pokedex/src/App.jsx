import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRoutes from './CustomRoutes/CustomRoutes'
import Search from './components/search/search'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="main">
        <h1 id="pokemon-heading"><Link to='/'> Pokedex</Link></h1>
        <CustomRoutes/>
      </div>
  )
}

export default App
