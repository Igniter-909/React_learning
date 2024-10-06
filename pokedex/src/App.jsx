import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/search/search'
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pokemon-wrapper'>
      <h1 className="pokemon-heading">
        POKEDEX
      </h1>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default App
