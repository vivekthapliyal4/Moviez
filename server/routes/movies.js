const express = require("express");
const {getMovies, createMovie, removeMovie, updateMovie, getMovie} = require('../controllers/movies')

const router = express.Router();

router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', createMovie)
router.delete('/:id', removeMovie)
router.put('/:id', updateMovie)

module.exports = router;