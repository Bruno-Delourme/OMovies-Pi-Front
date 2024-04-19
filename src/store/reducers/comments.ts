import { createReducer } from "@reduxjs/toolkit";
import { CheckToken, addComment, fetchComments } from "../action/action";


interface commentState {
    logged: boolean;
    pseudo: string;
    token: string | null;
    comments: Comment[];
    error:string | null;
    loading: boolean;
 
  }
  
  export const initialState: commentState = {
    logged: false,
    pseudo: "",
    token: null,
    comments: [],
    error: null ,
    loading: false
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

  
  const commentReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(CheckToken, (state) => { // When CheckToken action is dispatched
        const { logged, pseudo, token } = checkToken(); // Get user information from checkToken function
        state.logged = logged; // Set logged state to true or false
        state.pseudo = pseudo; // Set pseudo state to username or empty string
        state.token = token; // Set token state to token or null
      })
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(addComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });



});

export default commentReducer;