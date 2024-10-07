import PokemonList from "../PokemonList/PokemonList";
import Search from "../search/search";
import './Pokedex.css'



function Pokedex(){
    return(
        <div className="pokemon-wrapper">
            <PokemonList/>
        </div>
    )
}
export default Pokedex;