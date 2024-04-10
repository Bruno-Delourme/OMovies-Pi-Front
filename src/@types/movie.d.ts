export interface Movie {
    vote_average: number;
    id: number;
    
    adult: boolean;
    title: string;
    original_title: string;
    overview: string;
    poster_path?: string | undefined;
    release_date: string;
    original_language: string;
    key: number;
    //casting
    cast_id:              number;
    character:            string;
    name:                 string;
    genre_ids: number;
  }
  
  export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

