import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getMovies } from "../api";
import { removeItem } from "../api";
import Movie from "./Movie";

const Movies = () => {
  // const { isLoading, data, isError, error } = useQuery("movies", getMovies);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getMovies = async () => {
  //   axios
  //     .get("http://localhost:8000/movies/")
  //     .then((res) => setMovies(res.data))
  //     .catch((err) => console.log(err));
  //   console.log(movies);
  // };

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.data) // setting setMovies to res will set it to the array and res.data will set it to the array 
      // setting it to the object will make it hard to mutate the array
      setIsLoading(false)
    });
  }, []);

  const [query, setQuery] = useState("");

  console.log(movies);

  const removeMovie = (id) => {
    const newMovies = movies?.filter((movie)=> movie._id !== id)
    setMovies(newMovies)
    console.log(newMovies)
  }
  

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
        <>
          <div className="flex flex-col items-center mt-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-row mb-8 w-full justify-center items-center"
              action=""
            >
              <input
                className="py-1 px-4 w-1/3 text-white bg-zinc-800 rounded-l-lg outline-none focus:ring focus:ring-zinc-700"
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="py-1 px-2 text-white bg-yellow-500 rounded-r-lg">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'">
              {movies
                ?.filter((data) => {
                  if (query.trim() === "") {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((data, index) => (
                  <Movie key={data?._id} removeMovie={removeMovie} data={data} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
