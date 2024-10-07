import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import './PokemonDetails.css'

function PokemonDetails(){

    const {id} = useParams();
    const [pokemon,setPokemon] = useState({});

    async function downloadPokemons(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height,
            weight:response.data.weight,
            types:response.data.types.map((t)=>t.type.name)
        })
    }

    useEffect(() => {
        downloadPokemons();
    },[])

    return(
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">{pokemon.name}</div>
            <img src={pokemon.image} className="pokemon-image"/>
            <div className="height details">Height:<span>{pokemon.height}</span></div>
            <div className="weight details">Weight:<span>{pokemon.weight}</span></div>
            <ul className="pokemon-types">
                {pokemon.types && pokemon.types.map((p)=><li key={p}>{p}</li>)}
            </ul>
        </div>
    )

}
export default PokemonDetails;