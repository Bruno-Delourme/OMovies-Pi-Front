import { Movie } from "../../../@types/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
{
  /* <div>{movie.title}</div> : <div>isLoading</div>; */
}
export const MovieDetailSearch = () => {
  const [movie, setMovie] = useState<Movie>({});

  const { id } = useParams<{ id: string }>();
  const movieId = id ? parseInt(id, 10) : "nope";

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `http://localhost:3000/api/movie/${movieId}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.title);
      if (data) {
        setMovie(data);
      } else {
        console.debug("titi");
      }
    };

    // const timeoutId = setTimeout(() => {
    fetchMovie();
    // }, 500);
  }, [movieId]);

  //   useEffect(() => {
  //     // async () => {
  //     //   const url = `http://localhost:3000/api/movie/${movieId}`;
  //     //   const response = await fetch(url);
  //     //   const data = await response.json();
  //     //   console.log(data);
  //     //   setMovie(data.movie);
  //     // };
  //     async function fetchMovie() {
  //       const response = await fetch(
  //         `http://localhost:3000/api/movie/${movieId}`
  //       );
  //       const movieResponse = await response.json();
  //       console.log(movieResponse);
  //       setMovie(movieResponse);
  //     }

  //     fetchMovie();
  //   }, [movieId]);

  // ici il faut fetch (sans redux) by id comme ça quand tu arrives sur cette page tu peux fetch LE movie que tu veux afficher
  // le return de l'api admettons data.movie
  return movie ? (
    <div className="">
      {/* <Header />
      <KeywordBar /> */}
      <div className="max-h-full max-w-full flex flex-wrap justify-center pb-4">
        <div className="flex">
          {/* <Link to={`/`}> */}
          {/* {movie && <OneMovie poster_path={movie.poster_path} />} */}
        </div>
        <div className="text-white space-y-2 pt-4 max-w-screen-lg">
          <h1 className="font-bold text-4xl pl-20 pb-12">{movie.title}</h1>
          <p className="font-semibold underline pl-4 text-xl">Résumé :</p>
          <p className="pt-4 pl-10 text-lg">{movie.overview}</p>
          <p className="font-extralight pt-4 pl-4">
            Release Date: {movie.release_date}
          </p>
          <p className="pt-4 font-bold text-xl pl-4">
            Vote Average: {movie.vote_average}
          </p>
          {/* </Link> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  ) : (
    "loading movie"
  );
};
