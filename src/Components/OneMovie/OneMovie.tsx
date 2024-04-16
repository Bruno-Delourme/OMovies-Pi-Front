import React, { useState } from 'react';
import { Movie } from "../../../src/@types/movie";
import '../../index.css'; 
import './OneMovie.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const LogoPlus = '../../../public/circle-plus.svg';
const LogoLike = '../../../public/thumbs-up.svg';
const LogoPlateform = '../../../public/presentation.svg';

function OneMovie({ id, title, poster_path, overview, name, genre_ids, release_date, vote_average }: Partial<Movie>) {
    const [animate, setAnimate] = useState(false);
    const [liked, setLiked] = useState(false);

    // Animation au survol
    const toggleAnimation = () => {
        setAnimate(true);
    };

    // Desactivation de l'animation au survol
    const handlePointerLeave = () => {
        if (!liked) {  // Conserve l'animation si liké
            setAnimate(false);
        }
    };

    // Statut toggle du like
    const toggleLike = () => {
        setLiked(!liked);
        setAnimate(true);  // Conserve le bouton vert si liké
    };

    const containerClass = animate || liked ? "onemoviecontainer animate" : "onemoviecontainer";  // Conserve le bouton vert si liké
    const likeButtonClass = liked ? "like-button liked" : "like-button";

    return (
        <div className={containerClass} onPointerEnter={toggleAnimation} onPointerLeave={handlePointerLeave}> 
        {poster_path && <Link to={`/movie/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="movie-poster max-w-xs rounded-md" />
          </Link>}
          {/*<h2 className="movie-title">{title}</h2>NE PASSE PAS*/}
          <div className="action-buttons">
            <Button className={likeButtonClass} onClick={toggleLike}>
              <img src={LogoLike} alt="Like" />
            </Button>
            <Button className="plus-button">
              <img src={LogoPlus} alt="Plus" />
            </Button>
            <Button className="platform-button">
              <img src={LogoPlateform} alt="Platform" />
            </Button>
          </div>
        </div>
    );
}

export default OneMovie;
