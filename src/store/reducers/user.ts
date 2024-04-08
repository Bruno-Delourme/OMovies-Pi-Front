import { createReducer } from "@reduxjs/toolkit";

//import movies ( from @types )
//import needed actions created 

interface UserState {
    logged : boolean,
    pseudo: string,
    password: string,
    email : string,
    datedenaissance: string,
    token: null | string,

}
export const initialState: UserState = {
    logged : false,
    pseudo: "toto",
    password: "toto",
    email : "toto@toto.fr",
    datedenaissance: "1990/2/25",
    token: null


};

const userReducer =  createReducer( initialState, (builder) => {
    builder
});

export default userReducer; 