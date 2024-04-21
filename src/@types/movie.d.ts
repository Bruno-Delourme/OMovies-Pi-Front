export interface Movie {
  vote_average?: number;
  id?: number;
  adult?: boolean;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  original_language?: string;
  key?: number;

  //casting
  cast_id?: number;
  character?: string;
  name?: string;

  // genres?: string[];
  genre_ids?: number[];

  credits?: Credits;

  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

// actor info
export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
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
