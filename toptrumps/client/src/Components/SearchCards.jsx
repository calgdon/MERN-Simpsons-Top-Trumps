import React, {useState} from "react";
import "../css/Master.css"

const SearchCards = ({setSearch}) => {
    

    const handleSearchBarChange = (event) => {
        setSearch(event.target.value)
    }


    return (
        <div className="search-box">
        <input className="search-bar" 
        type="text"
        placeholder="Search for your favourite card here..."
        onChange={handleSearchBarChange}
        />
        </div>
    )
}

export default SearchCards