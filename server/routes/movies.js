const express = require("express");
const {getMovies, createMovie, removeMovie} = require('../controllers/movies')

const router = express.Router();

router.get('/', getMovies)
router.post('/', createMovie)
router.delete('/:id', removeMovie)

module.exports = router;