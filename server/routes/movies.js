const express = require("express");
const {getMovies, createMovie, removeMovie, updateMovie} = require('../controllers/movies')

const router = express.Router();

router.get('/', getMovies)
router.post('/', createMovie)
router.delete('/:id', removeMovie)
router.delete('/:id', updateMovie)

module.exports = router;