import React, { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { addMovie } from "../services/movies/movieSlice";
const Form = () => {
  const [movieData, setMovieData] = useState({
    name: "",
    director: "",
    genres: "",
    release: "",
    poster: "",
    excerpt: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:8000/movies/", movieData)
    //   .then((res) => {
    //     res.status === 201 ? console.log("success") : console.log("error");
    //   })
    //   .catch((err) => console.log(err));
      
    // document.getElementById("form").reset();
    dispatch(addMovie(movieData))
    navigate('/')

  };
  return (
    <div className=" flex flex-col items-center">
      <form
        id="form"
        onSubmit={handleSubmit}
        className="text-white my-10  py-16 px-5 md:px-10 md:w-1/2 lg:w-1/3 bg-black rounded-2xl flex flex-col gap-7"
      >
        <h3 className="text-center text-xl font-bold mb-2">Add a new Movie</h3>
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            name="name"
            type="text"
            placeholder="Name"
            handleChange={handleChange}
          />
          <Input
            name="director"
            type="text"
            placeholder="Directed By"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            name="genres"
            type="text"
            placeholder="Genre"
            handleChange={(e) =>
              setMovieData({ ...movieData, genres: e.target.value.split(",") })
            }
          />
          <Input
            name="release"
            type="text"
            placeholder="Release Year"
            handleChange={handleChange}
          />
        </div>
        <div>
          <FileBase
            name="poster"
            multiple={false}
            type="file"
            onDone={({ base64 }) =>
              setMovieData({ ...movieData, poster: base64 })
            }
          />
        </div>
        <div>
          <textarea
            className="p-4 w-full outline-none rounded-md bg-zinc-800 focus:ring-2 focus:ring-slate-400"
            name="excerpt"
            id="excerpt"
            placeholder="Excerpt"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-yellow-400 w-full rounded-md md:w-1/3 py-2 md:rounded-full font-semibold transition duration-200 hover:scale-95"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
