
import { selectFavoriteMovies, selectMoviesToReview } from '../../store/reducers/movies';
import { UserFormData } from '../../@types/user';

import React, { useState } from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 
import './OneMovie.scss';
import { Link, Outlet, Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import { addToFavorite, addToReview, deleteFromFavorite, deleteFromReview } from '../../store/action/action';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Button } from "@mui/material";
import axios from 'axios';
import MemberSpace from '../MemberSpace/MemberSpace';
import movieDetailsModal from '../MovieDetails/MovieDetailsModal'

const LogoPlus = "../../../public/circle-plus.svg";
const LogoMinus = "../../../public/circle-minus.svg";
const LogoLike = "../../../public/thumbs-up.svg";
const LogoPlateform = "../../../public/presentation.svg";
const repeat = "../../../public/repeat.svg";
const repeat1 = "../../../public/repeat1.svg";
const group = "../../../public/group.svg";
const ungroup = "../../../public/ungroup.svg";

function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user); // access to redux user state
  const token = useAppSelector((state) => state.user.token);

  const favoriteMovies = useAppSelector(selectFavoriteMovies);
  const moviesToReview = useAppSelector(selectMoviesToReview);

  const [animate, setAnimate] = React.useState(false);
  const [liked, setLiked] = useState(false);// État pour contrôler si un film est liké

  const isFavorite = favoriteMovies.find((movie) => movie.id === id) !== undefined;
  const isToReview = moviesToReview.find((movie) => movie.id === id) !== undefined;



  const [plusActivated, setPlusActivated] = useState(false);
  const [plusAnimation, setPlusAnimation] = useState(false);




  // Gère l'activation de l'animation lors du survol de la souris
  const toggleAnimation = () => {
    setAnimate(true);
  };


    // Gère la désactivation de l'animation lorsque la souris est hors de l'élément
    const handlePointerLeave = () => {
      if (!liked) {// Si le film n'est pas liké, désactive l'animation
        // Conserve l'animation si liké
        setAnimate(false);
      }
    };

      // Gère le clic sur le bouton like, alternant l'état liké et déclenchant les actions
  const toggleLike = async () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    setAnimate(true);
  };


  //Favoris 
  const handleAddToFavorite = () => {
    if (user.id) {
      dispatch(addToFavorite({ userId: user.id, movie: {
        id: id as number,
        title: title as string,
        poster_path: poster_path as string,
        overview: overview as string,
      }, token }));

    }
  };
  
  const handleDeleteFromFavorite = () => {
    if (user.id && id && token) {
      dispatch(deleteFromFavorite({ userId: user.id, movieId: id, token }));
  
    }
  };


// To review
  const handleAddToReview = () => {
    if (user.id) {
      dispatch(addToReview({ userId: user.id, movie: {
        id, title, poster_path, overview, name, genre_ids, release_date, vote_average,
        adult: false,
        original_language: '',
        key: 0
      }, token }));
 
    }
  };

  const handleDeleteFromReview = () => {
    if (user.id && id) {
      dispatch(deleteFromReview({ userId: user.id, movieId: id, token }));

    }
  };

  const containerClass = animate || liked ? "onemoviecontainer animate" : "onemoviecontainer";
  const likeButtonClass = liked ? "like-button liked" : "like-button";
  const plusButtonClass = plusAnimation ? "plus-button animated" : "plus-button";
  
  return (
    <div className="">
      <div className={containerClass} onPointerEnter={toggleAnimation} onPointerLeave={handlePointerLeave}>
      
        <div className="">
          {poster_path && (
               <Link to={`/movie/${id}`} htmlFor="movieDetails_modal" className="">
               {poster_path && (
                 <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movie-poster rounded-xl" />
               )}
             </Link>
        )}
          {/* <div className="">
          <label htmlFor="movieDetails_modal" className="">
            {poster_path && ( 
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movie-poster rounded-xl" />
            )}   
          </label>
            <input type="checkbox" id="movieDetails_modal" className="modal-toggle" />
              <div id="movieDetails_modal" className="modal" role="dialog">       
                  <div className="modal-box bg-black">
                      <div className="">
                        <Routes>
                        <Route path="/" element={<MovieDetails/>} />
                      </Routes>
                      </div>
                    </div>
                    <label className="modal-backdrop" htmlFor="movieDetails_modal">Close</label>
                  </div>  

          </div> */}
          <div className="action-buttons min-full">
            {/*
              <Button className={likeButtonClass} onClick={toggleLike} >
                <img src={LogoLike} alt="Like" />
              </Button>
             */ }

            {isFavorite ? (
              <Button className="minus-button" onClick={handleDeleteFromFavorite}>
                <img src={LogoMinus} alt="minus" />
              </Button>
            ) : (
              <Button className="plus-button" onClick={handleAddToFavorite} >
                <img src={LogoPlus} alt="Plus" />
              </Button>
            )}

            {isToReview? (
            <Button className="repeat-button" onClick={handleDeleteFromReview}>
            <img src={repeat} alt="repeat" />
          </Button>
            ) : (
              <Button className="repeat1-button" onClick={handleAddToReview}>
              <img src={repeat1} alt="repeat1" />
            </Button>
            )}

            {/*            
            <Button className="platform-button">
              <img src={LogoPlateform} alt="Platform" />
            </Button> 
            */}

            <Button className="group-button">
              <img src={group} alt="group" />
            </Button> 
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default OneMovie;