import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonDetails(id,pokemonName){
    const [pokemon,setPokemon] = useState({});
    let pokemonHookResponse = [];
    async function downloadPokemons(){

        try {
            let response ='';
            if(pokemonName){
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            }else{
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
            const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`)
            setPokemon({
                name:response.data.name,
                image:response.data.sprites.other.dream_world.front_default,
                height:response.data.height,
                weight:response.data.weight,
                types:response.data.types.map((t)=>t.type.name),
                similarPokemons : pokemonOfSameTypes.data.pokemon.slice(10,20)
            });
            
            setPokemonListState({...pokemonListState,type:response.data.types? response.data.types[0].type.name:""})
        } catch (error) {
            console.log("something went Wrong")
        }
    }
    const [pokemonListState,setPokemonListState] = useState({});


    useEffect(()=>{
        downloadPokemons()
    },[]);

    return [pokemon]

}
export default usePokemonDetails