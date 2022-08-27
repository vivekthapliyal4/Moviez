import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-row justify-between py-5 px-10 bg-opacity-80 rounded-b-2xl bg-black text-white shadow-lg">
      <div className="logo text-xl text-yellow-400 font-semibold">
        <Link to='/'>Moviez</Link>
      </div>
      <ul className="nav-items hidden gap-8 font-semibold md:flex">
        <li className="nav-item cursor-pointer hover:text-yellow-300">
          <Link to='/'>Movies</Link>
        </li>
        <li className="nav-item cursor-pointer hover:text-yellow-300">
          TV Shows
        </li>
        <li className="nav-item cursor-pointer hover:text-yellow-300">
          About us
        </li>
      </ul>
      <button className="py-1 px-4 transition duration-200 font-semibold bg-yellow-500 rounded-2xl hover:shadow-md hover:scale-95">
        SignIn
      </button>
    </nav>
  );
};

export default Navbar;
