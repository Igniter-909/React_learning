import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from '../../hooks/usePokemonList'
import './PokemonList.css'

function PokemonList(){

    const [pokemonState,setPokemonState] = usePokemonList(false);

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