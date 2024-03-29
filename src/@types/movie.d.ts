export interface Movie {
    id: number;
    genre_ids: number;
    adult : boolean;
    title: string;
    original_title: string;
    overview: string;
    poster_path?: string;
    release_date: string;
    original_language : string;
}