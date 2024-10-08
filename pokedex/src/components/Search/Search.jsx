import useDebounce from '../../hooks/useDebounce';
import './Search.css'

function Search({updateSearchTerm}){
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <div className="search-wrapper">
            <input
                id="search-box" 
                type="text"
                placeholder="Pokemon name...."
                onChange={debouncedCallback}
            />
        </div>
    )
}
export default Search;