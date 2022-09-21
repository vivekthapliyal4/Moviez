import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from './services/movies/movieSlice'

export const store = configureStore({
    reducer: {
        movie: movieReducer,
    }
})

