import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'

function PokemonList(){

    const [isLoading,setIsLoading] = useState([true]);
    const [pokemonList,setPokemonList] = useState([]);
    const [pokedexUrl,setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const [nextUrl,setNextUrl] = useState('');
    const [prevUrl,setprevUrl] = useState('');


    async function downloadPokemons(){
        setIsLoading(true)
        const response = await axios.get(pokedexUrl);
        const pokemonResults = response.data.results
        setNextUrl(response.data.next)
        setprevUrl(response.data.previous)

        const pokemonResultPromises = pokemonResults.map((pokemon)=> axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultPromises);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return{
                id:pokemon.id,
                name:pokemon.name,
                image : (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_default,
                types : pokemon.types
            }
        })
    setPokemonList(res)
    setIsLoading(false)

    }
    
    useEffect(() => {
        downloadPokemons()
    },[pokedexUrl]);


    return(
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div>
            <div className="pokemon-wrapper">
                 {isLoading? "Data Loading...": pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="buttons">
                <button disabled={prevUrl==null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl==null}  onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>
            
        </div>
    )
}
export default PokemonList;