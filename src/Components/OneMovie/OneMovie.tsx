import React, { useState } from "react";
import {  useAppSelector } from '../../hooks/redux';
import { UserFormData } from '../../@types/user';
import axios from "axios";
import { Movie } from "../../../src/@types/movie";
import "../../index.css";
import "./OneMovie.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const LogoPlus = "../../../public/circle-plus.svg";
const LogoMinus = "../../../public/circle-minus.svg";
const LogoLike = "../../../public/thumbs-up.svg";
const LogoPlateform = "../../../public/presentation.svg";

function OneMovie({
  id,
  title,
  poster_path,
  overview,
  name,
  genre_ids,
  release_date,
  vote_average,
}: Partial<Movie>) {// utilise partiellement les propriéts de OneMovie pour éviter les bugs
  const [animate, setAnimate] = useState(false);// État pour contrôler l'animation au survol de l'élément
  const [liked, setLiked] = useState(false);// État pour contrôler si un film est liké
  const [plusActivated, setPlusActivated] = useState(false);
  const [plusAnimation, setPlusAnimation] = useState(false);
  // Récupération de l'ID utilisateur depuis l'état Redux
  const user = useAppSelector((state) => state.user);

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

  const handlePlusClick = () => {
    if (plusActivated) {
      setPlusActivated(false);
      setPlusAnimation(true);
      setTimeout(() => setPlusAnimation(false), 900); // Animation dure 300ms
    } else {
      setPlusActivated(true);
      setPlusAnimation(true);
      setTimeout(() => setPlusAnimation(false), 900);
    }
  };

  const containerClass = animate || liked ? "onemoviecontainer animate" : "onemoviecontainer";
  const likeButtonClass = liked ? "like-button liked" : "like-button";
  const plusButtonClass = plusAnimation ? "plus-button animated" : "plus-button";
  // Rendu du composant avec la logique conditionnelle pour afficher les boutons et les images
  return (
    <div
      className={containerClass}
      onPointerEnter={toggleAnimation}
      onPointerLeave={handlePointerLeave}
    >
      {poster_path && (
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="movie-poster max-w-xs rounded-md"
          />
        </Link>
      )}
      {/*<h2 className="movie-title">{title}</h2>NE PASSE PAS*/}
      <div className="action-buttons">
        <Button className={likeButtonClass} onClick={toggleLike}>
          <img src={LogoLike} alt="Like" />
        </Button>
        <Button className={plusButtonClass} onClick={handlePlusClick}>
          <img src={plusActivated ? LogoMinus : LogoPlus} alt={plusActivated ? "Minus" : "Plus"} />
        </Button>
        <Button className="platform-button">
          <img src={LogoPlateform} alt="Platform" />
        </Button>
      </div>
    </div>
  );
}

export default OneMovie;
