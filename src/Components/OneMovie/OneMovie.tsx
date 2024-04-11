import { Movie } from "../../../src/@types/movie";
import React, { useState, useEffect } from 'react';


function OneMovie({ id, title, poster_path, overview, name,
  genre_ids, release_date, vote_average }: Partial<Movie>) { // utilisation de Partial parce qu'on utilise pas tout les type de l'interface Movie, par exemple le cast n'est pas encore ajouté

    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Fonction pour basculer la visibilité
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    
    <div className="movie-details" onClick={toggleDetails}> {/* Ajout du gestionnaire de clic */}
      {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="max-w-xs"/>}
      
      {isDetailsVisible && (
        <div>
          <h2>{title}</h2>
          <p>Release Date: {release_date}</p>
          <p>{genre_ids}</p>
          <p>Cast : {name}</p>
          <p>{overview}</p>
          <p>Vote Average: {vote_average}</p> 
        </div>
      )}
    </div>
  );
}
export default OneMovie;