import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteMovies, fetchMoviesToReview } from "../../store/action/action";
import HeaderList from "./HeaderList/HeaderList";
import OneMovie from "../OneMovie/OneMovie";

function List() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const favoriteMovies = useAppSelector((state) => state.movies.favoriteMovies);
  const moviesToReview = useAppSelector((state) => state.movies.moviesToReview);

  const [showReviewList, setShowReviewList] = useState(false);

  useEffect(() => {
    if (user.id && user.token) {
      dispatch(fetchFavoriteMovies({ userId: user.id, token: user.token }));
    }
  }, [dispatch, user.id, user.token]);

  useEffect(() => {
    if (showReviewList && user.id && user.token) {
      dispatch(fetchMoviesToReview({ userId: user.id, token: user.token }));
    }
  }, [dispatch, showReviewList, user.id, user.token]);

  const handleShowReviewList = () => {
    setShowReviewList(true);
  };

  return (
    <>
      <HeaderList />
      <h1>{user.pseudo}, Bienvenue dans ton espace liste</h1>

      <button onClick={handleShowReviewList}>Afficher ma liste de films à revoir</button>

      {/* Afficher la liste des films favoris */}
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            <OneMovie {...movie} />
          </li>
        ))}
      </ul>

      {showReviewList && (
        <ul>
          {moviesToReview.map((movie) => (
            <li key={movie.id}>
              <OneMovie {...movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;