
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteMovies, fetchMoviesToReview } from "../../store/action/action";
import HeaderList from "./HeaderList/HeaderList";

function List() {

    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.user);

    const favoriteMovies = useAppSelector((state) => state.movies.favoriteMovies);
    const moviesToReview = useAppSelector((state) => state.movies.moviesToReview);
    
    const [showReviewList, setShowReviewList] = useState(false);

  
    useEffect(() => {
        if (user.id) {
          dispatch(fetchFavoriteMovies(user.id));
          dispatch(fetchMoviesToReview(user.id));
        }
      }, [dispatch, user.id]);
    
      const handleShowReviewList = () => {
        setShowReviewList(!showReviewList);
      };
  
      return (
        <>
          <HeaderList />
          <h1>  {user.pseudo}, Bienvenue dans ton espace liste</h1>
    
          <label>
            Filtrer par genre :
            <input type="text" name="filterByGenre"  />
          </label>
          <label>
            Filtrer par acteur :
            <input type="text" name="filterByActor"  />
          </label>
          <button onClick={handleShowReviewList}>Afficher ma liste de films à revoir</button>
    
          {showReviewList && (
            <ul>
              {moviesToReview.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          )}
        </>
      );
  }
  
  export default List;