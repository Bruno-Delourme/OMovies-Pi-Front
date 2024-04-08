

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import { Movie } from "../../@types/movie";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
  });


//Romance movies 
const FETCH_ROMANCE_MOVIES = "FETCH_ROMANCE_MOVIES";
export const fetchRomanceMovies = createAsyncThunk<Movie[]>(
  FETCH_ROMANCE_MOVIES ,
  async () => {
    const response = await axiosInstance.get("/movies/romance");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    //console.log(movies);
    return movies;
  }
);

//Comedie movies 
const FETCH_COMEDIE_MOVIES = "FETCH_COMEDIE_MOVIES";
export const fetchComedieMovies = createAsyncThunk<Movie[]>(
  FETCH_COMEDIE_MOVIES ,
  async () => {
    const response = await axiosInstance.get("/movies/comedie");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    //console.log(movies);
    return movies;
  }
);

// marvel movies
const FETCH_MARVEL_MOVIES = "FETCH_MARVEL_MOVIES";
export const fetchMarvelMovies = createAsyncThunk<Movie[]>(
  FETCH_MARVEL_MOVIES ,
  async () => {
    const response = await axiosInstance.get("/movies/marvel");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

//sciencefiction movies
const FETCH_SCIENCEFICTION_MOVIES = "FETCH_SCIENCEFICTION_MOVIES";
export const fetchScienceFictionMovies = createAsyncThunk<Movie[]>(
  FETCH_SCIENCEFICTION_MOVIES ,
  async () => {
    const response = await axiosInstance.get("/movies/sciencefiction");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);

// marvel movies
const FETCH_ANIME_MOVIES = "FETCH_ANIME_MOVIES";
export const fetchAnimeMovies = createAsyncThunk<Movie[]>(
  FETCH_ANIME_MOVIES ,
  async () => {
    const response = await axiosInstance.get("/movies/anime");
    const movies = response.data as Movie[]; // Cast response data to Movie[] for type safety
    console.log(movies);
    return movies;
  }
);


const SET_ROMANCE_MOVIES="SET_ROMANCE_MOVIES";
export const setRomanceMovies = createAction<Movie[]>(SET_ROMANCE_MOVIES);