
import { createReducer } from "@reduxjs/toolkit";
import {  changeField, login, CheckToken, logout, register, fetchUserById, updateUser } from '../../store/action/action';
//import movies ( from @types )
//import needed actions created

// id: string; // id stored on localStorage as string


interface UserState {
  logged: boolean;
  pseudo: string;
  id: number; 
  email: string;
  password: string;
  date_of_birth: string;
  token: string | null;
  created_at: string; 
  group_id: number | null; 
  list: number | null; 
  to_review: null; 
  updated_at: string; 
  message: string; 
}

export const initialState: UserState = {
  logged: false,
  pseudo: "",
  id: 0,
  email: "",
  password: "",
  date_of_birth: "",
  token: null,
  created_at: "",
  group_id: null,
  list: null,
  to_review: null,
  updated_at: "",
  message: "",
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
      //state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.date_of_birth = action.payload.date_of_birth;
      state.token = action.payload.token;
  
      state.message = "Compte ajouté avec succès ! Veuillez vous connecter.";
      
      localStorage.setItem("token", state.token); // store pseudo and token on localStorage
      localStorage.setItem("pseudo", state.pseudo);
      localStorage.setItem("email", state.email);
      localStorage.setItem("password", state.password);
      localStorage.setItem("date_of_birth", state.date_of_birth);
    })
    .addCase(register.rejected, () => {
      console.log("Une erreur est survenue lors de l'inscription");
    })
    // login
    .addCase(login.fulfilled, (state, action) => {
      state.logged = true;
      state.id = action.payload.utilisateur.id; //update id state
      state.pseudo = action.payload.utilisateur.pseudo;  //update pseudo state
      state.token  = action.payload.token;  //update token state

      localStorage.setItem("pseudo", state.pseudo); //store pseudo and token in localStorage
      localStorage.setItem("token", state.token); //store token and token in localStorage
      localStorage.setItem("id", String(state.id)); //store id and token in localStorage

      console.log("ID stocké dans localStorage :", localStorage.getItem("id")); // log user ID to console
     console.log(action);
    })
    // logout
      .addCase(logout,(state)=>{
        state.logged=false;
        state.token=null;
        state.id = 0; // Reset state of id to 0 when user sign out
        localStorage.clear()
      })
    
          // Find user by ID
    .addCase(fetchUserById.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.date_of_birth = action.payload.date_of_birth;
      state.list = action.payload.list;
    })
    // Update user 
    .addCase(updateUser.fulfilled, (state, action) => {
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.date_of_birth = action.payload.date_of_birth;
      state.updated_at = action.payload.updated_at;
    })
    

  });

export default userReducer;

