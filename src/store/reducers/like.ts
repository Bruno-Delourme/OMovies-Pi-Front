import { createReducer } from "@reduxjs/toolkit";
import { CheckToken, addComment, fetchComments, addLike, getLikeCount, disLike } from "../action/action";
import { Like } from "../../@types/like";

interface LikeState {
  logged: boolean;
  pseudo: string;
  token: string | null;
  nbrlikes: number;
  like: Like[];
  error: string | null;
  message: string | null; 
}

export const initialState: LikeState = {
  logged: false,
  pseudo: "",
  token: null,
  nbrlikes: 0,
  like: [],
  error: null,
  message: "",
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
      state.like = [...state.like, action.payload]; // add like on existing array
    })
    .addCase(addLike.rejected, (state, action) => {
      state.error = action.payload?.message || 'Une erreur s\'est produite lors de l\'ajout du like.';
    })

    // Dislike
    .addCase(disLike.fulfilled, (state, action) => {
      state.nbrlikes -= 1;
      state.like = state.like.filter((like) => like.id !== action.payload.id); // Remove like from array
    })
    .addCase(disLike.rejected, (state, action) => {
      state.error = action.payload?.message || 'Une erreur s\'est produite lors de la suppression du like.';
    })


    // Get like count
    .addCase(getLikeCount.fulfilled, (state, action) => {
      state.nbrlikes = action.payload; // mettre à jour le nombre total de likes
    })
    .addCase(getLikeCount.rejected, (state, action) => {
      state.error = action.payload?.message || 'Une erreur s\'est produite lors de la récupération du nombre total de likes.';
    });

});

export default likeReducer;