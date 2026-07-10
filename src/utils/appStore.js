import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import MoviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
  },
});

export default appStore;
