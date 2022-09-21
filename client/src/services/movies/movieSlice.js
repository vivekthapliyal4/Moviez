import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8000/movies";

const initialState = {
  movieItems: [],
  isLoading: true,
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  return axios
    .get(`${baseUrl}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movieData) => {
    return axios.post(`${baseUrl}`, movieData);
  }
);

export const updateMovie = createAsyncThunk("movies/updateMovie", async (updatedData)=>{
  return axios.put(`${baseUrl}`, updatedData)
})

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.movieItems = action.payload);
    },
    [getMovies.rejected]: (state) => {
      state.isLoading = false;
    },
    [addMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [addMovie.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.payload)
      state.movieItems.push(action.payload)
    //   state.movieItems = [action.payload]
    },
    [addMovie.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteMovie.pending]:(state) => {
        state.isLoading = false
    },
    [deleteMovie.fulfilled]:(state, action) => {
      
        console.log(action.meta.arg)
        state.movieItems = state.movieItems.filter(item => item._id !== action.meta.arg)
        state.isLoading = false
    },
    [deleteMovie.rejected]:(state) => {
        state.isLoading = false
    },
  },
});

export default movieSlice.reducer;
