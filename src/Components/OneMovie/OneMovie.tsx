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
    <div className="w-1/5 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/10 p-2"> 
    {/* Responsive Container */}
      {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="one-movie"/>} {/* show img only if poster_path exists */}
      {/* <h2>{title}</h2>
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p> */}
    </div>
  );
}

export default OneMovie;