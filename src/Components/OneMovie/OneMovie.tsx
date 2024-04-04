interface MovieProps {
    title: string;
    poster_path?: string;
    overview: string;
    release_date: string;
}



function OneMovie({ title, poster_path, overview, release_date }: MovieProps) {
    return (
        <div className="movie-card">
          {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />} {/* show img only if poster_path existe */}
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>Release Date: {release_date}</p>
        </div>
      );
  }

  export default OneMovie;


