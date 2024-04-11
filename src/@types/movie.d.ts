export interface Movie {
    vote_average: number;
    id: number;
    genre_ids: number;
    adult: boolean;
    title: string;
    original_title: string;
    overview: string;
    poster_path?: string | undefined;
    release_date: string;
    original_language: string;
    key: number;
  }
  
  export interface MoviesResponse {
    page: number;
    movies: Movie[];
    total_pages: number;
    total_results: number;
  }

  export interface ActorResponse {
    title: string;
    poster_path?: string | undefined;
  }