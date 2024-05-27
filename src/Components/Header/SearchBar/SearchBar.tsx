

import { useEffect, useRef, useState } from "react";
import { fetchMovieById, searchMovies } from "../../../store/action/action";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { Movie } from "../../../@types/movie";

import { useAppDispatch } from "../../../hooks/redux";
import { useNavigate } from 'react-router-dom';

import './SearchBar.scss';
import { SearchMoviesResponse } from "../../../@types/searchMovies";

const clapperboard = "../../../public/assets/clapperboard.png";


function SearchBar({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchMoviesResponse | null>(null);

  // Creates a new reference object in the DOM using the hook useRef with event onClick (inside my useEffect)
  // Reference object will refer to a div element ( div inside my return of compnent ref={searchBarRef} )
  const searchBarRef = useRef<HTMLDivElement>(null);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // handle submit search 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await dispatch(searchMovies(searchTerm));
    setSearchResults(results.payload as SearchMoviesResponse);
  };

//handle click events outside the search bar
  const handleClickOutside = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setSearchTerm('');
      setSearchResults(null);
    }
  };

  const handleMovieClick = (movieId: number) => {
    
    navigate(`/movie/searchbar/${movieId}`);
    dispatch(fetchMovieById({ movieId }));
  };
  


  // Use the useEffect hook to add an event listener for click events on the document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleMovieClick]); // Specify an empty dependency array to only run the effect once on mount and unmount

  
  const renderDropdownItems = () => {
    if (!searchResults) return null;
    return (
      <ul className="suggestions-list">
        {searchResults.moviesByTitle.map((movie) => (
          <li key={movie.id} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"  onClick={() => handleMovieClick(movie.id)} >
            <div className="flex items-center">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-16 h-auto mr-2" />
              <span className="text-black">{movie.title}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="div-search-bar">
        <div className="flex items-center relative w-2/4" ref={searchBarRef}>
          <form onSubmit={handleSubmit} className="form-search-bar">

            <input
              className="search-bar"
              type="text"
              placeholder="Rechercher un titre de film..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="button-searchBar">
              <img src={clapperboard} alt="Search" />
            </button>

          </form>
          {renderDropdownItems()}
        </div>
    </div>
  );
}

export default SearchBar;




