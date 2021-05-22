const mongoose = require('mongoose');

const { Schema } = mongoose;
const movieSchema = new Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Poster:{
    type: String
  },
  SoundEffects: [{type: String}],
  imdbID:{
    type: String,
    required: true,
  },
  listingType:{ type : String,
    required: true,},
  imdbRating: {type : String,
    required: true,},
  Stills: [{type : String }],
  Language: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Plot: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
