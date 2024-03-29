import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../../@types/movie";

//import movies ( from @types )
//import needed actions created 


interface MoviesState {
list: Movie[],
}
export const initialState: MoviesState = {
list: [],
};


const moviesReducer =  createReducer( initialState, (builder) => {
    builder
});

export default moviesReducer;