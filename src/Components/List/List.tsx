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
  const [showFavoriteList, setShowFavoriteList] = useState(true);

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
    setShowFavoriteList(false);
  };

  const handleShowFavoriteList = () => {
    setShowReviewList(false);
    setShowFavoriteList(true);
  };

  const buttonText = showReviewList ? "Afficher ma liste de films favoris" : "Afficher ma liste de films à revoir";

  return (
    <div className="">
      <HeaderList />

      <div className="pl-10 text-white text-3xl pt-10 pb-10">
      <h1>{user.pseudo.charAt(0).toUpperCase() + user.pseudo.slice(1)}, Bienvenue dans ton espace liste</h1>
      </div>
      <div className="pl-10 pb-10">
        <button className="btn pl-10" onClick={showReviewList ? handleShowFavoriteList : handleShowReviewList}>{buttonText}</button>
      </div>
      <div className="max-w-full max-h-full inline-block">
        <div className="pl-10">
        {showFavoriteList && (
          <ul className="inline-flex flex-wrap max-w-auto">
            {favoriteMovies.map((movie) => (
              <li className="p-1 max-w-72">
                <OneMovie {...movie} 
                key={movie.id}
                />
              </li>
            ))}
          </ul>
        )}
        </div>
        <div className="pl-10">-
        {showReviewList && (
          <ul className="inline-flex flex-wrap max-w-auto">
            {moviesToReview.map((movie) => (
              <li className="p-1 max-w-72">
              <OneMovie {...movie} 
              key={movie.id}
              />
            </li>
            ))}
          </ul>
        )}
        </div>
      </div>
    </div>
  );
}

export default List;