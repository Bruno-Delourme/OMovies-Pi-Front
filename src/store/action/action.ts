import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../@types/movie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000/api",
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

const SET_ROMANCE_MOVIES = "SET_ROMANCE_MOVIES";
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

<<<<<<< HEAD
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

=======
>>>>>>> 866d5971d14dec3f919e34544a6066ca50f24575
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

<<<<<<< HEAD
// USER
// structure du champ du formulaire
=======
//Interface USER
>>>>>>> 866d5971d14dec3f919e34544a6066ca50f24575
interface FormField {
  value: string;
  name: "pseudo" | "password";
}
<<<<<<< HEAD
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
=======
interface FormData{
  pseudo: string;
  password:string
}

//Ajout pour le USER
const CHANGE_FIELD = "CHANGE_FIELD";
export const changeField = createAction<FormField>(CHANGE_FIELD);

// Login user 
const LOGIN = "LOGIN";
>>>>>>> 866d5971d14dec3f919e34544a6066ca50f24575
export const login = createAsyncThunk<
  { pseudo: string; logged: boolean; token: string },
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post("/login", formData);
  return response.data;
<<<<<<< HEAD
});//La fonction payload creator elle-même prend formData comme argument et exécute une requête POST asynchrone à /login en utilisant axiosInstance
=======
  console.log(response);
});

// Check token 
const CHECK_TOKEN = "CHECK_TOKEN";
export const CheckToken = createAction(CHECK_TOKEN);

// Logout 
const LOGOUT = "LOGOUT";
export const logout = createAction(LOGOUT);
>>>>>>> 866d5971d14dec3f919e34544a6066ca50f24575
