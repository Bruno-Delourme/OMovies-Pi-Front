
import { createReducer } from "@reduxjs/toolkit";
import {  changeField, login, CheckToken, logout, register } from '../../store/action/action';
//import movies ( from @types )
//import needed actions created

interface UserState {
  logged: boolean;
  pseudo: string;
  password: string;
  email: string;
  datedenaissance: string;
  token: null | string;
}
export const initialState: UserState = {
  logged: false,
  pseudo: "",
  password: "",
  email: "",
  datedenaissance: "",
  token: null,
};

// Function to check if a token exists in local storage and return user information
const checkToken = () => {
  const token = localStorage.getItem("token"); // Get token from local storage
  if (token) {
    return {// Return user information if token exist
      logged: true,
      pseudo: localStorage.getItem("pseudo") || "",// Get pseudo from local storage or set to empty string if not found
      token,
    };
  }
  return {// If token does not exist
    logged: false,
    pseudo: "",
    token: null,
  };
};


const userReducer = createReducer(initialState, (builder) => {
    builder
    // changeField
    .addCase(changeField,(state,action)=>{
      state[action.payload.name]=action.payload.value
    })
    // CheckToken
    .addCase(CheckToken, (state) => { // When CheckToken action is dispatched
      const { logged, pseudo, token } = checkToken(); // Get user information from checkToken function
      state.logged = logged; // Set logged state to true or false
      state.pseudo = pseudo; // Set pseudo state to username or empty string
      state.token = token; // Set token state to token or null
    })
    // register
    .addCase(register.fulfilled, (state, action) => {
      state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.datedenaissance = action.payload.datedenaissance;
      state.token = action.payload.token;
  
      localStorage.setItem("token", action.payload.token); // store pseudo and token on localStorage
      localStorage.setItem("pseudo", action.payload.pseudo);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("datedenaissance", action.payload.datedenaissance);
    })
    .addCase(register.rejected, () => {
      console.log("Une erreur est survenue lors de l'inscription");
    })
    // login
    .addCase(login.fulfilled,(state,action)=>{
      const { logged, pseudo, token } = checkToken();
      state.logged=true;
      state.pseudo=action.payload.pseudo;
      state.pseudo= pseudo;
      state.token=action.payload.token;
      
      localStorage.setItem("token", action.payload.token); //store pseudo and token in localStorage
      localStorage.setItem("pseudo", action.payload.pseudo);
    })
    .addCase(login.rejected,()=>{
      console.log("une erreur est survenue lors de la connexion")
    })
    // logout
      .addCase(logout,(state)=>{
        state.logged=false;
        state.token=null
        localStorage.clear()
      })
  });

export default userReducer;

