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
    trim: true,
    lowercase: true,
  },
  listingType:{ type : String,
    required: true,
    trim: true,
    lowercase: true,},
  imdbRating: {type : String,
    required: true,
    trim: true,
    lowercase: true,},
  Stills: [{type : String }],
  Language: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Location: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Plot: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
