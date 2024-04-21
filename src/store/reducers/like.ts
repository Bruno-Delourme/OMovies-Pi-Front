import { createReducer } from "@reduxjs/toolkit";
import { CheckToken, addComment, fetchComments, addLike, getLikeCount } from "../action/action";

interface CommentState {
  logged: boolean;
  pseudo: string;
  token: string | null;
  nbrlikes: number;
  like:number;
}

export const initialState: CommentState = {
  logged: false,
  pseudo: "",
  token: null,
  nbrlikes: 0,
  like:0,
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      logged: true,
      pseudo: localStorage.getItem("pseudo") || "",
      token,
    };
  }
  return {
    logged: false,
    pseudo: "",
    token: null,
  };
};

const likeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CheckToken, (state) => {
      const { logged, pseudo, token } = checkToken();
      state.logged = logged;
      state.pseudo = pseudo;
      state.token = token;
    })
    // Add like
    .addCase(addLike.fulfilled, (state, action) => {
      state.nbrlikes += 1;
    })
    // Get like count
    .addCase(getLikeCount.fulfilled, (state, action) => {
      state.nbrlikes = action.payload;
    });
});

export default likeReducer;