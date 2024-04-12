import "./Suggestions.scss";

import { fetchSuggestionMovies } from "../../../store/action/action";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function Suggestion() {

    const dispatch = useAppDispatch();

    const suggestionMovies = useAppSelector((state) => state.movies.suggestionMovies) as unknown as MoviesResponse;
  /*
useAppSelector((state) => state.movies.marvelMovies) : to access the global state of the app.
The function passed as a parameter (state) allows accessing a specific part of the state suggestionMovies ..

as unknown : TypeScript cannot directly convert one type to another without an intermediate step. 
Here, as unknown is used to tell TypeScript to temporarily consider the type as unknown.

as MoviesResponse : the unknown type is converted to MoviesResponse, which is the expected interface for the movies data.
  */
const loading = useAppSelector((state) => state.movies.loading);

useEffect(() => {
    dispatch(fetchSuggestionMovies());
  }, [dispatch]);

  return (
    <div className="suggestionMovies">
        <h1 className="title-configuration">Suggestion : films populaire </h1>
        <div className="relative">
      {loading ? (
        <p>Chargement...</p>
      ) : suggestionMovies.movies ? (
        <div className="">
          <div className="scroll-container carousel-item carousel overflow-x-auto">
          {<button className="p-2 absolute top-1/2 transform -translate-y-1/2 left-0 "
            onClick={() => {
              const scrollContainer = document.querySelector('.scroll-container');
              if (scrollContainer) {
                scrollContainer.scrollLeft -= 1200;
              }
            }}
            >
              <ChevronLeftIcon className="h-96 w-12 bg-gray-100 bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 rounded-full"/>
            </button>}
            <span className="flex gap-8 m-8 rounded-full">
          {suggestionMovies.movies.map((movie) => (
            <OneMovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0}            />
          ))}
          </span>
          <button className="p-2 absolute top-1/2 transform -translate-y-1/2 right-0"
            onClick={() => {
              const scrollContainerSuggestion = document.querySelector('.scroll-container');
              if (scrollContainerSuggestion) {
                scrollContainerSuggestion.scrollLeft += 1200;
              }
            }}
            >
              <ChevronRightIcon className="h-96 w-12 bg-gray-100 bg-opacity-10 hover:bg-gray-300 hover:bg-opacity-20 rounded-full"/>
            </button>
          </div>
        </div>
      ) : (
        <p>Aucun film trouvé</p>
      )}
      </div>
    </div>
  ); 
}

export default Suggestion;

 



