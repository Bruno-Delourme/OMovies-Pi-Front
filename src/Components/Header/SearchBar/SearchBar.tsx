import "./SearchBar.scss";
import clapperboardIcon from "../../../assets/clapperboard.png";
import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    // Implémenter la logique pour le call API
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Titre du film, genre, cast ..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />

        <button className="search-button" onClick={handleSearch}>
          <img src={clapperboardIcon} alt="Search" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
