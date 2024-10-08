import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import usePokemonList from "../../hooks/usePokemonList";
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails(){

    const {id} = useParams();
   const [pokemon]= usePokemonDetails(id);

    return(
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">{pokemon.name}</div>
            <img src={pokemon.image} className="pokemon-image"/>
            <div className="height details">Height:<span>{pokemon.height}</span></div>
            <div className="weight details">Weight:<span>{pokemon.weight}</span></div>
            <ul className="pokemon-types">
                {pokemon.types && pokemon.types.map((p)=><li key={p}>{p}</li>)}
            </ul>
            
            {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    more {pokemon.types[0]} type pokemons
                    <ul>
                    {pokemon.similarPokemons.map((p) => <li key={p.pokemon.id}>{p.pokemon.name}</li>)}
                    </ul>
                </div>
            }

        </div>
    )

}
export default PokemonDetails;