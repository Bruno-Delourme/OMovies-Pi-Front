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
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

  export interface Cast {
    gender:               number;
    cast_id:              number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         string;
    cast_id:              number;
    character:            string;
    credit_id:            string;
    order:                number;
  }