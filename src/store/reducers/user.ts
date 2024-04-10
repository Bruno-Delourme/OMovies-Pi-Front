import { createReducer } from "@reduxjs/toolkit";
import {  changeField, login, CheckToken, logout } from '../../store/action/action';
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

const userReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(changeField,(state,action)=>{
      state[action.payload.name]=action.payload.value
    })
    .addCase(login.fulfilled,(state,action)=>{
      state.logged=true;
      state.pseudo=action.payload.pseudo;
      state.token=action.payload.token;
      //store pseudo and token in localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("pseudo", action.payload.pseudo);
    })
    .addCase(login.rejected,()=>{
      console.log("une erreur est survenue lors de la connexion")
    })
    .addCase(CheckToken,(state)=>{
      state.token=localStorage.getItem("token");
      state.logged=true
      })
      .addCase(logout,(state)=>{
        state.logged=false;
        state.token=null
        localStorage.clear()
      })
  });

export default userReducer;
