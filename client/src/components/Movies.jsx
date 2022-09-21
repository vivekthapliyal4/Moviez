import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Movie from "./Movie";

import { getMovies } from "../services/movies/movieSlice";

const Movies = () => {
  const {movieItems, isLoading} = useSelector(state=> state.movie)
  console.log(movieItems)
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  useEffect(()=>{
    dispatch(getMovies())
  }, [dispatch])




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
              {movieItems
                ?.filter((data) => {
                  if (query.trim() === "") {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((data) => (
                  <Movie
                    key={data._id}
                    data={data}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
