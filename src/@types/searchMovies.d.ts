export interface SearchMoviesResponse {
    moviesByTitle: Movie[];
    moviesByGenre: Movie[];
    actors: string[];
    moviesByActor: Movie[][];
  }