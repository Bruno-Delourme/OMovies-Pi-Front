import "./SuggestionsForYou.scss";

import { fetchRecommendationWithRandomMovie } from "../../../store/action/action";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import OneMovie from "../../OneMovie/OneMovie";
import { MoviesResponse } from "../../../@types/movie";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


function SuggestionForYou() {

    const dispatch = useAppDispatch();

    const forYou = useAppSelector((state) => state.movies.forYou);
    const loading = useAppSelector((state) => state.movies.loading);

    const user = useAppSelector((state) => state.user);

 
    useEffect(() => {
        if (user && user.id && user.token) {
          dispatch(fetchRecommendationWithRandomMovie({ userId: user.id, token: user.token }));
        }
      }, [dispatch, user, user.id, user.token]);


    return (
        <div id="forYouMovies">
            <h1 className="titleSuggestionForYou">ForYou</h1>
            <div className="relative">
        {loading ? (
        <p>Chargement...</p>
        ) : forYou? (
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
            {forYou.map((movie) => (
              <div key={movie.id} className="movies-path-design">
                <OneMovie {...movie} 
                poster_path={movie.poster_path}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                vote_average={movie.vote_average} adult={false} original_title={""} original_language={""} cast_id={0} character={""} name={""}
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

export default SuggestionForYou;