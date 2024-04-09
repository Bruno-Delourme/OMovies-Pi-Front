import { createReducer } from "@reduxjs/toolkit";
import {  changeField, login } from '../../store/action/action';
//import movies ( from @types )
//import needed actions created

interface UserState {
  logged: boolean;
  pseudo: string;
  password: string;
  email: string;
  datedenaissance: string;
  token: null | string;
  loggedMessage:null|string
}
export const initialState: UserState = {
  logged: false,
  pseudo: "toto",
  password: "toto",
  email: "toto@toto.fr",
  datedenaissance: "1990/2/25",
  token: null,
  loggedMessage:null
};

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeField,(state,action)=>{
      state[action.payload.name]=action.payload.value
    }).addCase(login.fulfilled,(state,action)=>{
      state.logged=true;
      state.pseudo=action.payload.pseudo;
      state.token=action.payload.token;
      state.loggedMessage=`Bienvenue ${action.payload.pseudo}`
    }).addCase(login.rejected,(state)=>{
      
    })
  });

export default userReducer;
