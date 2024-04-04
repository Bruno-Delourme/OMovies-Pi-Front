export interface Movie {
    id: number;
    genre_ids: number;
    adult : boolean;
    title: string;
    original_title: string;
    overview: string;
    poster_path?: string | undefined;
    release_date: string;
    original_language : string;
    key: number;
}
