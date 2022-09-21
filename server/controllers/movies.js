const mongoose = require("mongoose");
const Movie = require("../models/postMessage");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
};

const createMovie = async (req, res) => {
  const movie = req.body;
  const newMovie = new Movie({ ...movie, createdAt: new Date() });
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
  }
};

const removeMovie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post matches this id");
  }

  await Movie.findByIdAndRemove(id);
  res.json({ message: "Movie Deleted Successfully" });
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post matches this id");
  }
  const updatedMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });

  res.json(updatedMovie);
};

module.exports = { getMovies, createMovie, removeMovie, updateMovie };
