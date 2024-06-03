import mongoose, { Schema, model } from "mongoose";

// Write the schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

// Create Model
const Movie = new model("Movie", movieSchema);

export default Movie;
