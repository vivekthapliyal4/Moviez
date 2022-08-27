const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    excerpt: String,
    poster: String,
    released: String,
    genres: [String],
    director: String,
    createdAt: {
        type: Date,
        default: new Date(),
      },
   
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;