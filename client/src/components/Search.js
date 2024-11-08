import React from "react";

function Search({ setSearchOrg }) {
    return (
        <div className="searchbar">
            <label className="searchlabel" htmlFor="search">Search by Organization:</label>
            <input 
                className="searchinput"
                type="text"
                id="search"
                placeholder="Search for an organization... "
                onChange={(e) => setSearchOrg(e.target.value)}
            />
        </div>
    );
}

export default Search;
