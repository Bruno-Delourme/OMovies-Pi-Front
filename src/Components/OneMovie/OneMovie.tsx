import React, { useState } from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 
import './OneMovie.scss';
import { Link } from 'react-router-dom';
import { addToFavorite, addToReview, deleteFromFavorite, deleteFromReview } from '../../store/action/action';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Button } from "@mui/material";
import axios from 'axios';

const LogoPlus = "../../../public/circle-plus.svg";
const LogoLike = "../../../public/thumbs-up.svg";
const LogoPlateform = "../../../public/presentation.svg";


function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {

  const dispatch = useAppDispatch();

  const [animate, setAnimate] = React.useState(false);
  const [liked, setLiked] = useState(false);// État pour contrôler si un film est liké

  const user = useAppSelector((state) => state.user); // access to redux user state
  const token = useAppSelector((state) => state.user.token);

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

  const containerClass = animate || liked ? "onemoviecontainer animate" : "onemoviecontainer";
  const likeButtonClass = liked ? "like-button liked" : "like-button";



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
    if (user.id && id) {
      dispatch(deleteFromFavorite({ userId: user.id, movieId: id, token }));
    }
  };

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


  return (
    <>
      <div className={containerClass} onPointerEnter={toggleAnimation} onPointerLeave={handlePointerLeave}>

        {poster_path && (
               <Link to={`/movie/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movie-poster max-w-xs rounded-md" />
               </Link>
        )}
        

        <div className="action-buttons">
            <Button className={likeButtonClass} onClick={toggleLike} >
              <img src={LogoLike} alt="Like" />
            </Button>
            <Button className="plus-button" onClick={handleAddToFavorite} >
              <img src={LogoPlus} alt="Plus" />
            </Button>
            <Button className="platform-button">
              <img src={LogoPlateform} alt="Platform" />
            </Button>
        </div>


      </div>


      <button onClick={handleDeleteFromFavorite}>Remove from Favorite</button>
      <button onClick={handleAddToReview}>Add to Review</button>
      <button onClick={handleDeleteFromReview}>Remove from To Review</button>
    </>
  );
}

export default OneMovie;