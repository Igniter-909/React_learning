import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(type){
    const [pokemonState,setPokemonState] = useState({
        isLoading:true,
        pokemonList:[],
        pokedexUrl:"https://pokeapi.co/api/v2/pokemon",
        nextUrl:'',
        prevUrl:''
    })


    async function downloadPokemons(){
    
            setPokemonState((state)=>({...state,isLoading:true}))
            const response = await axios.get(pokemonState.pokedexUrl);
            const pokemonResults = response.data.results
            setPokemonState((state)=>({
                ...state,
                nextUrl:response.data.next,
                prevUrl:response.data.previous
            }));
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
        [pokemonState,setPokemonState]
    )

}
export default usePokemonList;