import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../services/movies/movieSlice";

const Movie = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const showMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="flex flex-col items-center h-fit w-80 rounded-xl overflow-hidden bg-black shadow-lg">
        <div className="relative overflow-hidden h-52 flex justify-center items-center">
          <img
            className="object-cover"
            onClick={() => setIsOpen(false)}
            src={data.poster}
            alt={data.name}
          />
          <i
            onClick={showMenu}
            className="fa fa-ellipsis-v cursor-pointer text-white absolute top-4 right-6 text-2xl"
          ></i>
          <ul
            className={`${
              isOpen ? "absolute" : "hidden"
            } top-8 right-10 bg-black rounded-lg font-semibold py-2 text-gray-200 py-27`}
          >
            <li className="border-b pb-1 px-4 cursor-pointer hover:bg-zinc-700">
              Edit
            </li>
            <li
              onClick={() => {
                dispatch(deleteMovie(data._id))
              
              }}
              className="px-4 cursor-pointer hover:bg-zinc-700"
            >
              Delete
            </li>
          </ul>
        </div>
        <div className="p-4">
          <div className="text-center font-bold text-gray-200 py-1 capitalize text-xl mb-2">
            {data?.name}
          </div>
          <p className="text-gray-600 text-base">{data.excerpt}</p>
        </div>
        <div className="px-6 pt-4 pb-5">
          {data?.genres?.map((genre, index) => (
            <span key={index} className="inline-block bg-zinc-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
