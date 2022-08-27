import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { removeItem } from "../api";

const Movie = ({ data, removeMovie }) => {
    const [isOpen, setIsOpen] = useState(false)
    const showMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    const queryClient = useQueryClient()
    const { mutationAsync, isLoading} = useMutation(removeItem)

    
  return (
    <>
      <div className="flex flex-col items-center max-w-sm rounded-xl overflow-hidden bg-black shadow-lg">
        <div className="relative overflow-hidden h-80 flex justify-center items-center">
          <img onClick={()=> setIsOpen(false)} className="w-full" src={data.poster} alt={data.name} />
          <i onClick={showMenu} className="fa fa-ellipsis-v cursor-pointer text-white absolute top-4 right-6 text-2xl"></i>
          <ul className={`${isOpen ? "absolute" : "hidden" } top-8 right-10 bg-zinc-800 text-gray-200 py-27`}>
            <li className="border-b pb-1 px-4 cursor-pointer hover:bg-zinc-700">Edit</li>
            <li onClick={()=> removeMovie(data._id)} className="px-4 cursor-pointer hover:bg-zinc-700">Delete</li>
          </ul>
        </div>
        <div className="p-4">
          <div className="text-center font-bold text-gray-200 py-1 capitalize text-xl mb-2">{data?.name}</div>
          <p className="text-gray-600 text-base">{data.excerpt}</p>
        </div>
        <div className="px-6 pt-4 pb-5">
          {data?.genres?.map((genre) => (
            <span className="inline-block bg-zinc-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
