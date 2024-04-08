interface MovieProps {
  id: number;
  title: string;
  poster_path?: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

function OneMovie({ id, title, poster_path, overview, release_date, vote_average }: MovieProps) {
  return (
    <div className="movie-card">
      {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />} {/* show img only if poster_path exists */}
      {/* <h2>{title}</h2>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p> */}
    </div>
  );
}

export default OneMovie;