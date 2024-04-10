import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../@types/movie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

//Romance movies
const FETCH_ROMANCE_MOVIES = "FETCH_ROMANCE_MOVIES";
export const fetchRomanceMovies = createAsyncThunk<Movie[]>(
  FETCH_ROMANCE_MOVIES,
  async () => {
    const response = await axiosInstance.get("/movies/romance");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    //console.log(movies);
    return movies;
  }
);

//Familial movies
const FETCH_FAMILIAL_MOVIES = "FETCH_FAMILIAL_MOVIES";
export const fetchFamilialMovies = createAsyncThunk<Movie[]>(
  FETCH_FAMILIAL_MOVIES,
  async () => {
    const response = await axiosInstance.get("/movies/familial");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

// Action movies
const FETCH_ACTION_MOVIES = "FETCH_ACTION_MOVIES";
export const fetchActionMovies = createAsyncThunk<Movie[]>(
  FETCH_ACTION_MOVIES,
  async () => {
    const response = await axiosInstance.get("/movies/action");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

//science-fiction movies
const FETCH_SCIENCEFICTION_MOVIES = "FETCH_SCIENCEFICTION_MOVIES";
export const fetchScienceFictionMovies = createAsyncThunk<Movie[]>(
  FETCH_SCIENCEFICTION_MOVIES,
  async () => {
    const response = await axiosInstance.get("/movies/science-fiction");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

// Documentaire movies
const FETCH_DOCUMENTAIRE_MOVIES = "FETCH_DOCUMENTAIRE_MOVIES";
export const fetchDocumentaireMovies = createAsyncThunk<Movie[]>(
  FETCH_DOCUMENTAIRE_MOVIES,
  async () => {
    const response = await axiosInstance.get("/movies/documentaire");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

<<<<<<< HEAD
// New movies 
const FETCH_NEW_MOVIES = "FETCH_NEW_MOVIES";
export const fetchNewMovies = createAsyncThunk<Movie[]>(
  FETCH_NEW_MOVIES,
  async () => {
    const response = await axiosInstance.get("movie/now_playing");
    const movies = response.data as Movie[];
    return movies;
  }
);



=======
const SET_ROMANCE_MOVIES = "SET_ROMANCE_MOVIES";
<<<<<<< HEAD
>>>>>>> 134a4d59f616944e74eb1b64e1fd98dc7188eea6
=======
export const setRomanceMovies = createAction<Movie[]>(SET_ROMANCE_MOVIES);

// Home content
// New movies 
const FETCH_NEW_MOVIES = "FETCH_NEW_MOVIES";
export const fetchNewMovies = createAsyncThunk<Movie[]>(
  FETCH_NEW_MOVIES,
  async () => {
    const response = await axiosInstance.get("/newMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// suggestion movies ( popular )
const FETCH_SUGGESTION_MOVIES = "FETCH_SUGGESTION__MOVIES";
export const fetchSuggestionMovies = createAsyncThunk<Movie[]>(
  FETCH_SUGGESTION_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// Movies By genre 
const FETCH_BYGENRE_MOVIES = "FETCH_BYGENRE__MOVIES";
export const fetchByGenreMovies = createAsyncThunk<Movie[]>(
  FETCH_BYGENRE_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// Movies By actor 
const FETCH_BYACTOR_MOVIES = "FETCH_BYACTOR__MOVIES";
export const fetchByActorMovies = createAsyncThunk<Movie[]>(
  FETCH_BYACTOR_MOVIES,
  async () => {
    const response = await axiosInstance.get("/popularMovies");
    const movies = response.data as Movie[];
    return movies;
  }
);

// USER
// structure du champ du formulaire
interface FormField {
  value: string;
  name: "pseudo" | "password";
}
// données soumises lors de la connexion
interface FormData{
  pseudo:string,
  password:string
}
>>>>>>> e87574b20e6f2d810adf7aa22a84158ead43f281

//Ajout pour le USER
const CHANGE_FIELD = "CHANGE_FIELD";
//FormField comme payload, fonction de Redux Toolkit qui simplifie la création d'actions en générant automatiquement le type d'action et le payload
export const changeField = createAction<FormField>(CHANGE_FIELD);// pour créer des actions qui mettent à jour l'état du formulaire

// Login user 
const LOGIN = "LOGIN";
//reateAsyncThunk prend trois paramètres génériques : le type de retour de l'action asynchrone, le type du premier argument passé à la fonction payload creator, et en option, le type de thunkAPI 
export const login = createAsyncThunk<
  { pseudo: string; logged: boolean; token: string },
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post("/login", formData);
  return response.data;
});//La fonction payload creator elle-même prend formData comme argument et exécute une requête POST asynchrone à /login en utilisant axiosInstance