import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getMovies } from "../api";
import { removeItem } from "../api";
import Movie from "./Movie";

const Movies = () => {
  // const { isLoading, data, isError, error } = useQuery("movies", getMovies)

  console.log(data);

  const removeMovie = (id) => {
    data?.data?.filter((movie)=> movie._id !== id)
    console.log(data.data)
    

  }

  // const [movies, setMovies] = useState([]);

  // const getMovies = async () => {
  //   axios
  //     .get("http://localhost:8000/movies/")
  //     .then((res) => setMovies(res.data))
  //     .catch((err) => console.log(err));
  //   console.log(movies);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);
  return (
    <>
      <div className=" border-b border-gray-500">
        <button className="bg-yellow-600 pb-1.5 px-3 m-5 text-gray-300">
          <Link to="/addMovie">
            <span className="font-bold text-2xl">+</span> Add Movie
          </Link>
        </button>
      </div>
      {isLoading ? (
        <h2 className="text-2xl text-center mt-5 text-white">Loading....</h2>
      ) : (
        <div className="flex flex-col items-center mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data?.data.map((data, index) => (
              <Movie removeMovie={removeMovie} key={index} data={data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
