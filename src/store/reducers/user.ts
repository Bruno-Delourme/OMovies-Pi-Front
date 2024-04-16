
import { createReducer } from "@reduxjs/toolkit";
import {  changeField, login, CheckToken, logout, register, updateUser, deleteUser } from '../../store/action/action';

interface UserState {
  logged: boolean;
  pseudo: string;
  id: number; 
  email: string;
  password: string;
  birthday: string;
  token: string | null;
  created_at: string; 
  group_id: number | null; 
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
  birthday: "",
  token: null,
  created_at: "",
  group_id: null,
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
      state.birthday = action.payload.birthday;
      state.token = action.payload.token;
  
      state.message = "Compte ajouté avec succès ! Veuillez vous connecter.";
      
      localStorage.setItem("token", state.token); // store pseudo and token on localStorage
      localStorage.setItem("pseudo", state.pseudo);
      localStorage.setItem("email", state.email);
      localStorage.setItem("password", state.password);
      localStorage.setItem("birthday", state.birthday);
    })
    .addCase(register.rejected, () => {
      console.log("Une erreur est survenue lors de l'inscription");
    })
    // login
    .addCase(login.fulfilled, (state, action) => {
      state.logged = true;
      state.id = action.payload.user.id; //update id state
      state.pseudo = action.payload.user.pseudo;  //update pseudo state
      state.token  = action.payload.token;  //update token state
      state.email = action.payload.user.email;  //update email state
      state.password = action.payload.user.password;  //update password state
      state.birthday = action.payload.user.birthday;  //update birthday state

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
    

    // Update user 
    .addCase(updateUser.fulfilled, (state, action) => {
      state.pseudo = action.payload.pseudo;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.birthday = action.payload.birthday;
      state.updated_at = action.payload.updated_at;
      state.token  = action.payload.token;  //update token state
      state.message = "Compte mis à jour avec succès !";
      // localStorage.setItem("token", state.token); //store token and token in localStorage
    })
   
    // Delete user
    .addCase(deleteUser.fulfilled, (state) => {
      state.logged = false;
      state.pseudo = "";
      state.id = 0;
      state.email = "";
      state.password = "";
      state.birthday = "";
      state.token = null;
      state.created_at = "";
      state.group_id = null;
      state.to_review = null;
      state.updated_at = "";
      state.message = "Compte supprimé avec succès !";
      localStorage.clear(); // Clear local storage
    })
    .addCase(deleteUser.rejected, (state) => {
      state.logged = true;
      state.message = "Le compte n'a pas pu être supprimé !";
    });

  });

export default userReducer;

