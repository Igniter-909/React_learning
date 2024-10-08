import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import Search from "../search/search";
import './Pokedex.css'
import {useState} from 'react'



function Pokedex(){

    const [searchTerm,setSearchTerm] = useState('');

    return(
        <div className="pokemon-wrapper">
            <Search updateSearchTerm={setSearchTerm}/>
            {(!searchTerm)? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}
export default Pokedex;