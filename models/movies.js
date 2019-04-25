const db = require('./db');


// Here, we just need to define a movie schema
const movieSchema = db.mongoose.Schema({
    title: String,
    overview: String,
    poster_path: String,
    idMovieDB: Number
  });

// And then, we need to create a model which will create a new 'movies' collection in mlab base on the movie schema
const movieModel = db.mongoose.model('movies', movieSchema);

module.exports = movieModel;
