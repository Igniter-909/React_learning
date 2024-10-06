import './Search.css'

function Search(){
    return (
        <div className="search-wrapper">
            <input
                id="search-box" 
                type="text"
                placeholder="Pokemon name...."
            />
        </div>
    )
}
export default Search;