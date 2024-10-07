import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'

function PokemonList(){

    // const [isLoading,setIsLoading] = useState([true]);
    // const [pokemonList,setPokemonList] = useState([]);
    // const [pokedexUrl,setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    // const [nextUrl,setNextUrl] = useState('');
    // const [prevUrl,setprevUrl] = useState('');

    const [pokemonState,setPokemonState] = useState({
        isLoading:true,
        pokemonList:[],
        pokedexUrl:"https://pokeapi.co/api/v2/pokemon",
        nextUrl:'',
        prevUrl:''
    })


    async function downloadPokemons(){
        // setIsLoading(true)
        setPokemonState((state)=>({...state,isLoading:true}))
        const response = await axios.get(pokemonState.pokedexUrl);
        const pokemonResults = response.data.results
        // setNextUrl(response.data.next)
        // setprevUrl(response.data.previous)
        setPokemonState((state)=>({
            ...state,
            nextUrl:response.data.next,
            prevUrl:response.data.previous
        }))

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
    // setPokemonList(res)
    // setIsLoading(false)
    setPokemonState((state) => ({
        ...state,
        pokemonList:res,
        isLoading:false
    }))

    }
    
    useEffect(() => {
        downloadPokemons()
    },[pokemonState.pokedexUrl]);


    return(
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div>
            <div className="pokemon-wrapper">
                 {pokemonState.isLoading? "Data Loading...": pokemonState.pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="buttons">
                <button disabled={pokemonState.prevUrl==null} onClick={() => setPokemonState((state)=>({...state,pokedexUrl:pokemonState.prevUrl}))}>Prev</button>
                <button disabled={pokemonState.nextUrl==null}  onClick={() => setPokemonState((state)=>({...state,pokedexUrl:pokemonState.nextUrl}))}>Next</button>
            </div>
            
        </div>
    )
}
export default PokemonList;