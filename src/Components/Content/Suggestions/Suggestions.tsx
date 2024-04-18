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
    <div id="suggestionMovies">
        <h1 className="title-configuration">Suggestion : films populaire </h1>
      <div className="relative">
        {loading ? (
        <p>Chargement...</p>
        ) : suggestionMovies.movies ? (
        <div className="suggestionContainer">
          <div className="suggestionScroll carousel-item carousel overflow-x-auto">
            {<button className="scroll-left-configuration"
              onClick={() => {
                const scrollContainerSuggestion = document.querySelector('.suggestionScroll');
                if (scrollContainerSuggestion) {
                  scrollContainerSuggestion.scrollLeft -= 1200;
                }
              }}
              >
              <ChevronLeftIcon className="chevron-design"/>
            </button>}
            <div className="movies-container-design">
            {suggestionMovies.movies.map((movie) => (
              <div key={movie.id} className="movies-path-design">
                <OneMovie {...movie} 
                poster_path={movie.poster_path}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""} genre_ids={0}
                />   
              </div>  
            ))}
            </div>
            <button className="scroll-right-configuration"
              onClick={() => {
                const scrollContainerSuggestion = document.querySelector('.suggestionScroll');
                if (scrollContainerSuggestion) {
                  scrollContainerSuggestion.scrollLeft += 1200;
                }
              }}
              >
              <ChevronRightIcon className="chevron-design"/>
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

 



